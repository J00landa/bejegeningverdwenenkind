import TestChatBot from '@/components/TestChatBot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bejegening & Communicatie
          </h1>
          
          <p className="text-xl text-blue-700 font-medium mb-2">
            HTV - Hogeschool voor Toegepaste Vaardigheden
          </p>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leer effectieve communicatie en professionele bejegening in de zorg. 
            Oefen gesprekstechnieken, empathische communicatie en conflicthantering met AI-ondersteuning.
          </p>
        </div>

        {/* Course Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Gesprekstechnieken</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Leer actief luisteren, open vragen stellen en empathische reacties geven. 
              Oefen met verschillende gespreksscenario's uit de zorgpraktijk.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Empathische Zorg</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Ontwikkel empathie en begrip voor patiënten en hun families. 
              Leer omgaan met emoties en moeilijke situaties in de zorg.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Professionele Houding</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Ontwikkel een professionele houding, respectvolle communicatie en 
              ethische besluitvorming in complexe zorgsituaties.
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              🎯
            </span>
            Leerdoelen Bejegening
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Communicatieve Vaardigheden</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Effectief communiceren met patiënten en collega's
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Actief luisteren en empathische reacties geven
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Non-verbale communicatie herkennen en toepassen
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Moeilijke gesprekken voeren met tact en respect
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Professionele Ontwikkeling</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Conflicten de-escaleren en oplossen
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Culturele diversiteit respecteren en benutten
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Ethische dilemma's herkennen en bespreken
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Reflecteren op eigen communicatiestijl
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              🤖
            </span>
            AI Communicatie Assistent
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Hoe kan de AI je helpen?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">📝 Gespreksanalyse</h4>
                <p>Upload gesprekstranscripties of beschrijf situaties voor feedback op je communicatiestijl</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">🎭 Rollenspel Oefening</h4>
                <p>Oefen moeilijke gesprekken met de AI als virtuele patiënt of collega</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">💡 Advies & Tips</h4>
                <p>Krijg concrete tips voor specifieke communicatie-uitdagingen in de zorg</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">📚 Theorie Uitleg</h4>
                <p>Laat communicatietheorieën en modellen uitleggen met praktische voorbeelden</p>
              </div>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💬 Voorbeeldvragen om te stellen:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm text-gray-700">"Hoe kan ik een gesprek voeren met een angstige patiënt voor een operatie?"</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-sm text-gray-700">"Geef me feedback op dit gesprek: [upload audio/tekst]"</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-sm text-gray-700">"Hoe ga ik om met een boze familie van een patiënt?"</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                  <p className="text-sm text-gray-700">"Leg het SOLER model uit met een praktijkvoorbeeld"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <TestChatBot />
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-blue-600">
            <span>💙</span>
            <span>Veel succes met je studie Bejegening!</span>
            <span>💙</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            HTV Bejegening & Communicatie • Powered by AI • Ontwikkeld voor betere zorgcommunicatie
          </p>
        </div>
      </div>
    </div>
  )
}