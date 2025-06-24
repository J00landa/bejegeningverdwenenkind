import TestChatBot from '@/components/TestChatBot'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Bejegening & Communicatie
          </h1>
          
          <p className="text-xl text-blue-700 font-medium mb-2">
            HTV - Handhaver, Toezicht en Veiligheid
          </p>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Leer professionele communicatie en effectieve bejegening in handhaving, toezicht en veiligheidssituaties. 
            Oefen de-escalatietechnieken, assertieve communicatie en conflicthantering.
          </p>
        </div>

        {/* Course Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">De-escalatie</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Leer gespannen situaties te kalmeren, agressie te voorkomen en 
              conflicten op te lossen zonder geweld of dwang.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Assertieve Communicatie</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Ontwikkel zelfverzekerde, duidelijke communicatie. Leer grenzen stellen 
              en autoriteit uitoefenen met respect en professionaliteit.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Veiligheid & Controle</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Leer situaties inschatten, risico's herkennen en veilig optreden 
              in complexe handhavings- en toezichtsituaties.
            </p>
          </div>
        </div>

        {/* Learning Objectives */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              🎯
            </span>
            Leerdoelen Bejegening HTV
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Communicatieve Vaardigheden</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Effectief communiceren met burgers en overtreders
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Actief luisteren en empathische reacties geven
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Duidelijke instructies geven en grenzen stellen
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Gespannen situaties de-escaleren
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Professionele Houding</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Autoriteit uitoefenen met respect en integriteit
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Omgaan met agressie en weerstand
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Culturele diversiteit respecteren in handhaving
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  Ethisch handelen in dilemmasituaties
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sector Specific Areas */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
              🏛️
            </span>
            Werkgebieden HTV
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-semibold text-blue-800">Gemeentelijke Handhaving</h4>
              <p className="text-xs text-gray-600 mt-1">APV, parkeren, milieu</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-green-800">Veiligheid & Beveiliging</h4>
              <p className="text-xs text-gray-600 mt-1">Objectbeveiliging, evenementen</p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-purple-800">Toezicht & Inspectie</h4>
              <p className="text-xs text-gray-600 mt-1">Bouw, milieu, arbeidsomstandigheden</p>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h4 className="font-semibold text-red-800">Openbare Orde</h4>
              <p className="text-xs text-gray-600 mt-1">Evenementen, overlast, veiligheid</p>
            </div>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
              🤖
            </span>
            AI Communicatie Assistent voor Handhaving
          </h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Hoe kan de AI je helpen?</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h4 className="font-medium text-blue-700 mb-2">🎭 Rollenspel Scenario's</h4>
                <p>Oefen moeilijke handhavingssituaties met de AI als boze burger, overtreder of collega</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">⚡ De-escalatie Training</h4>
                <p>Leer gespannen situaties te kalmeren en agressie om te buigen naar samenwerking</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">📋 Situatie Analyse</h4>
                <p>Upload verslagen of beschrijf situaties voor feedback op je aanpak en communicatie</p>
              </div>
              <div>
                <h4 className="font-medium text-blue-700 mb-2">📚 Juridische Communicatie</h4>
                <p>Leer complexe regels en procedures helder uitleggen aan burgers</p>
              </div>
            </div>
          </div>

          {/* Example Prompts */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💬 Voorbeeldvragen voor HTV situaties:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                  <p className="text-sm text-gray-700">"Simuleer een gesprek met een agressieve overtreder die een boete weigert te accepteren"</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400">
                  <p className="text-sm text-gray-700">"Hoe leg ik een complexe regelgeving uit aan een boze ondernemer?"</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                  <p className="text-sm text-gray-700">"Oefen een gesprek met iemand die beweert discriminatie bij controle"</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                  <p className="text-sm text-gray-700">"Geef feedback op mijn aanpak: [upload situatieverslag]"</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-red-400">
                  <p className="text-sm text-gray-700">"Hoe ga ik om met een groep jongeren die overlast veroorzaakt?"</p>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-indigo-400">
                  <p className="text-sm text-gray-700">"Leg de escalatieladder uit met praktijkvoorbeelden"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Communication Models */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-4">📖 Communicatiemodellen voor Handhaving:</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-blue-700 mb-2">LEAP Model</h4>
                <p className="text-gray-600">Listen, Empathize, Apologize, Partner - voor conflicthantering</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-blue-700 mb-2">Escalatieladder</h4>
                <p className="text-gray-600">Stapsgewijze opbouw van zachte naar harde handhaving</p>
              </div>
              <div className="bg-white p-3 rounded">
                <h4 className="font-semibold text-blue-700 mb-2">DISC Communicatie</h4>
                <p className="text-gray-600">Aanpassen van communicatiestijl aan persoonlijkheidstype</p>
              </div>
            </div>
          </div>

          {/* Chat Interface */}
          <TestChatBot />
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-blue-600">
            <span>🛡️</span>
            <span>Professionele handhaving begint met goede communicatie</span>
            <span>🛡️</span>
          </div>
          <p className="text-gray-500 text-sm mt-2">
            HTV Bejegening & Communicatie • Handhaver, Toezicht en Veiligheid • Powered by AI
          </p>
        </div>
      </div>
    </div>
  )
}