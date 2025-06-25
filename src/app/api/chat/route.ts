import { GoogleGenerativeAI, Tool } from '@google/generative-ai'
import { NextRequest, NextResponse } from 'next/server'

// Initialiseer de Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')

// Helper functie om base64 naar buffer te converteren
function base64ToBuffer(base64: string): Buffer {
  const base64Data = base64.replace(/^data:image\/\w+;base64,/, '')
  return Buffer.from(base64Data, 'base64')
}

// Helper function to implement retry logic with exponential backoff
async function retryWithBackoff<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  baseDelay: number = 1000
): Promise<T> {
  let lastError: Error
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation()
    } catch (error: any) {
      lastError = error
      
      // Check if it's a 503 overloaded error
      const is503Error = error.message?.includes('[503]') || 
                         error.message?.includes('overloaded') ||
                         error.status === 503
      
      // If it's the last attempt or not a retryable error, throw
      if (attempt === maxRetries || !is503Error) {
        throw error
      }
      
      // Calculate delay with exponential backoff and jitter
      const delay = baseDelay * Math.pow(2, attempt) + Math.random() * 1000
      console.log(`Attempt ${attempt + 1} failed with 503 error, retrying in ${Math.round(delay)}ms...`)
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
  
  throw lastError!
}

// Google Search tool configuratie
const googleSearchTool = {
  googleSearch: {}
}

export async function POST(request: NextRequest) {
  try {
    // Betere error handling voor Netlify
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not found in environment variables');
      return NextResponse.json(
        { 
          error: 'API configuratie ontbreekt. Check Netlify Environment Variables.',
          hint: 'Voeg GEMINI_API_KEY toe in Netlify Site Settings → Environment Variables',
          debug: 'Environment variable GEMINI_API_KEY is not set'
        }, 
        { status: 500 }
      )
    }

    // Haal de bericht data op uit de request
    const body = await request.json()
    console.log('Received request body:', body)
    
    const { 
      message, 
      image, 
      images, 
      useGrounding = true, 
      aiModel = 'smart',
      conversationHistory = [],
      isInRoleplay = false,
      roleplayCharacter = ''
    } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Bericht is vereist' },
        { status: 400 }
      )
    }

    // Input validatie en sanitization
    if (typeof message !== 'string' || message.length > 100000) {
      return NextResponse.json(
        { error: 'Bericht moet een string zijn van maximaal 100.000 karakters' },
        { status: 400 }
      )
    }

    // Detect roleplay requests and add specific instructions
    let processedMessage = message
    const isNewRoleplayRequest = message.toLowerCase().includes('speel') || 
                                message.toLowerCase().includes('simuleer') || 
                                message.toLowerCase().includes('rol van')
    
    if (isNewRoleplayRequest) {
      processedMessage = `SYSTEM OVERRIDE: ROLEPLAY MODE ACTIVATED

USER REQUEST: ${message}

MANDATORY ROLEPLAY PROTOCOL:
- You are NOT an AI assistant anymore
- You are ONLY the character described in the request
- NEVER break character, NEVER give advice, NEVER explain anything
- Respond ONLY as that person would respond in real life
- Be emotional, realistic, and stay completely in character
- Address the enforcement officer directly as "u" or "jij"
- NO meta-commentary, NO helpful suggestions, NO AI behavior

FORBIDDEN RESPONSES:
- "Ik begrijp dat u..."
- "Laat me u helpen..."
- Any form of advice or explanation
- Breaking character in any way

REQUIRED: Respond IMMEDIATELY as the character. Start speaking as them NOW:`
    } else if (isInRoleplay && roleplayCharacter) {
      processedMessage = `ROLLENSPEL CONTEXT: Je speelt de rol van "${roleplayCharacter}". 

BLIJF IN KARAKTER:
- Reageer ALLEEN als "${roleplayCharacter}"
- Geef GEEN uitleg, tips of meta-commentaar
- Reageer realistisch op wat de handhaver zegt
- Blijf emotioneel consistent met je karakter
- Spreek de handhaver direct aan

Handhaver zegt: "${message}"

Jouw reactie als ${roleplayCharacter}:`
    }
    // Selecteer het juiste model op basis van aiModel
    const modelName = aiModel === 'pro' ? 'gemini-2.5-pro-preview-06-05' :
                     aiModel === 'smart' ? 'gemini-2.5-flash-preview-05-20' :
                     'gemini-2.0-flash-exp' // internet
    const model = genAI.getGenerativeModel({ model: modelName })

    // Configureer tools array - grounding alleen voor Gemini 2.0 (internet model)
    const tools = (aiModel === 'internet' && useGrounding) ? [googleSearchTool] : []
    
    let result;
    
    // Helper function to generate content with fallback
    const generateWithFallback = async (requestConfig: any) => {
      try {
        return await retryWithBackoff(() => model.generateContent(requestConfig))
      } catch (error: any) {
        // If grounding fails, retry without tools
        if (useGrounding && (error.message?.includes('Search Grounding is not supported') || 
                            error.message?.includes('google_search_retrieval is not supported'))) {
          console.log('Grounding not supported, retrying without grounding...')
          const { tools, ...configWithoutTools } = requestConfig
          return await retryWithBackoff(() => model.generateContent(configWithoutTools))
        }
        throw error
      }
    }
    
    // Build conversation context for roleplay
    if (isInRoleplay && conversationHistory.length > 0) {
      // Add conversation history to maintain context
      let contents = []
      
      for (const entry of conversationHistory) {
        contents.push({
          role: entry.role === 'user' ? 'user' : 'model',
          parts: [{ text: entry.content }]
        })
      }
      
      // Add current message
      if (images && images.length > 0) {
        const imageParts = images.map((imageData: string) => {
          const imageBuffer = base64ToBuffer(imageData)
          return {
            inlineData: {
              data: imageBuffer.toString('base64'),
              mimeType: 'image/jpeg'
            }
          }
        })
        contents.push({ role: 'user', parts: [{ text: processedMessage }, ...imageParts] })
      } else if (image) {
        const imageBuffer = base64ToBuffer(image)
        const imagePart = {
          inlineData: {
            data: imageBuffer.toString('base64'),
            mimeType: 'image/jpeg'
          }
        }
        contents.push({ role: 'user', parts: [{ text: processedMessage }, imagePart] })
      } else {
        contents.push({ role: 'user', parts: [{ text: processedMessage }] })
      }
      
      result = await generateWithFallback({
        contents: contents,
        tools: tools
      })
    } else {
      // Regular single-turn conversation
    if (images && images.length > 0) {
      // Meerdere afbeeldingen - gebruik nieuwe images array
      const imageParts = images.map((imageData: string) => {
        const imageBuffer = base64ToBuffer(imageData)
        return {
          inlineData: {
            data: imageBuffer.toString('base64'),
            mimeType: 'image/jpeg'
          }
        }
      })
      
      result = await generateWithFallback({
        contents: [{ role: 'user', parts: [{ text: processedMessage }, ...imageParts] }],
        tools: tools
      })
    } else if (image) {
      // Backward compatibility - één afbeelding (legacy)
      const imageBuffer = base64ToBuffer(image)
      
      const imagePart = {
        inlineData: {
          data: imageBuffer.toString('base64'),
          mimeType: 'image/jpeg'
        }
      }
      
      result = await generateWithFallback({
        contents: [{ role: 'user', parts: [{ text: processedMessage }, imagePart] }],
        tools: tools
      })
    } else {
      // Alleen tekst
      result = await generateWithFallback({
        contents: [{ role: 'user', parts: [{ text: processedMessage }] }],
        tools: tools
      })
    }
    }

    const response = await result.response
    const text = response.text()

    // Extract grounding metadata if available
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata || null
    const searchQueries = groundingMetadata?.webSearchQueries || []
    const groundingChuncks = groundingMetadata?.groundingChuncks || []

    return NextResponse.json({ 
      response: text,
      success: true,
      grounding: {
        isGrounded: !!groundingMetadata,
        searchQueries: searchQueries,
        sources: groundingChuncks.map((chunk: any) => ({
          title: chunk.web?.title || 'Unknown',
          uri: chunk.web?.uri || '',
          snippet: chunk.web?.snippet || ''
        }))
      }
    })

  } catch (error) {
    console.error('Fout bij het aanroepen van Gemini API:', error)
    
    let errorMessage = error instanceof Error ? error.message : 'Unknown error'
    
    // Provide user-friendly message for 503 errors
    if (errorMessage.includes('[503]') || errorMessage.includes('overloaded')) {
      errorMessage = 'De AI service is momenteel overbelast. We hebben het automatisch opnieuw geprobeerd, maar het lukt nog niet. Probeer het over een paar minuten opnieuw.'
    }
    
    return NextResponse.json(
      { 
        error: errorMessage.includes('overbelast') ? errorMessage : 'Er is een fout opgetreden bij het verwerken van je bericht',
        details: errorMessage,
        timestamp: new Date().toISOString(),
        hint: 'Check Netlify Function logs voor meer details'
      },
      { status: 500 }
    )
  }
} 