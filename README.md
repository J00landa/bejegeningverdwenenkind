# 🛡️ Bejegening & Communicatie - HTV

> **Een interactieve leeromgeving voor het vak Bejegening & Communicatie voor studenten Handhaver, Toezicht en Veiligheid (HTV)**

Een moderne, AI-ondersteunde leerplatform dat studenten helpt bij het ontwikkelen van effectieve communicatievaardigheden en professionele bejegening in handhavings-, toezicht- en veiligheidssituaties.

## ✨ Functionaliteiten

### 🎯 **Leerdoelen**
- **De-escalatie Technieken**: Gespannen situaties kalmeren en conflicten oplossen
- **Assertieve Communicatie**: Zelfverzekerd en duidelijk communiceren met autoriteit
- **Professionele Houding**: Integriteit, respect en ethisch handelen in complexe situaties
- **Situatie Management**: Risico's inschatten en veilig optreden

### 🤖 **AI Communicatie Assistent**
- 🎭 **Rollenspel Training**: Oefen met AI als boze burger, overtreder of collega
- ⚡ **De-escalatie Oefening**: Leer gespannen situaties te kalmeren
- 📋 **Situatie Analyse**: Upload verslagen voor feedback op je aanpak
- 📚 **Juridische Communicatie**: Leer regels helder uitleggen aan burgers
- 🎵 **Audio Analyse**: Analyseer opgenomen gesprekken uit de praktijk
- 📄 **Verslag Feedback**: Upload situatieverslagen voor verbeterpunten

### 🔊 **Geavanceerde TTS Features**
- 🎙️ **Dual TTS Engines**: Microsoft TTS + Gemini AI TTS
- 🎭 **30 Gemini Voices**: Verschillende stemmen voor realistische rollenspellen
- 😊 **Emotie Controle**: 7 verschillende emoties (boos, kalm, agressief, etc.)
- ⚡ **Snelheidsregeling**: Aanpasbare spraaksnelheid voor training

### 📁 **Multi-Modal Leren**
- 🖼️ **Situatie Foto's**: Analyseer lichaamstaal en non-verbale signalen
- 📄 **Documenten**: Upload wet- en regelgeving, procedures, verslagen
- 🎵 **Audio**: Transcribeer en analyseer gesprekken uit de praktijk
- 📊 **Data**: Verwerk incidentrapporten en statistieken

## 🚀 Quick Start

### Stap 1: Environment Setup
Maak een `.env.local` bestand aan:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### Stap 2: API Key Verkrijgen
Ga naar [Google AI Studio](https://makersuite.google.com/app/apikey) voor je gratis Gemini API key.

### Stap 3: Installatie & Start
```bash
npm install
npm run dev
```

### Stap 4: Deployment
Deploy naar Netlify via de "Deploy to Netlify" button in Bolt.new

## 🛡️ HTV Werkgebieden

### 🏛️ **Gemeentelijke Handhaving**
- APV handhaving en toezicht
- Parkeercontrole en verkeer
- Milieu en afval handhaving
- Horeca en evenementen toezicht

### 🔒 **Veiligheid & Beveiliging**
- Objectbeveiliging en toegangscontrole
- Evenementbeveiliging en crowd control
- Surveillance en preventie
- Noodprocedures en evacuatie

### 👁️ **Toezicht & Inspectie**
- Bouwtoezicht en vergunningen
- Arbeidsomstandigheden inspectie
- Milieu en veiligheid controles
- Kwaliteitstoezicht en compliance

### ⚠️ **Openbare Orde**
- Evenementen en manifestaties
- Overlast en verstoring aanpak
- Jeugd en groepsaanpak
- Crisis en incident management

## 📚 Praktijkvoorbeelden

### 🎭 **Rollenspel Scenario's**
```
"Simuleer een gesprek met een agressieve overtreder die een boete 
weigert te accepteren. Ik wil oefenen met de-escalatie."

"Speel de rol van een boze ondernemer die zijn vergunning 
ingetrokken krijgt. Hoe blijf ik professioneel?"
```

### ⚡ **De-escalatie Training**
```
"Hoe ga ik om met een groep jongeren die overlast veroorzaakt 
en agressief reageert op mijn aanspreken?"

"Geef me tips voor het kalmeren van een emotionele situatie 
bij een huisuitzetting."
```

### 📋 **Situatie Analyse**
```
Upload een audio-opname of verslag en vraag:
"Analyseer mijn aanpak in deze situatie. Wat kon beter? 
Welke de-escalatie technieken had ik kunnen gebruiken?"
```

### 📚 **Juridische Communicatie**
```
"Hoe leg ik de nieuwe APV regels uit aan een ondernemer 
die het niet begrijpt en boos wordt?"

"Help me een complexe procedure helder uitleggen 
aan een burger die weerstand biedt."
```

## 🎓 Voor Docenten

### 📊 **Leeractiviteiten**
- **Casusanalyse**: Studenten uploaden echte situaties voor AI-feedback
- **Rollenspel Training**: Veilige oefenomgeving met AI-simulaties
- **De-escalatie Oefening**: Gestructureerde training in conflicthantering
- **Reflectieverslagen**: AI helpt bij analyse van eigen handelen

### 🔧 **Aanpassingen**
Het platform kan eenvoudig aangepast worden voor:
- Specifieke gemeentelijke procedures en protocollen
- Lokale wet- en regelgeving
- Verschillende handhavingsdomeinen
- Multidisciplinaire samenwerking (politie, brandweer, etc.)

## 🛠️ Technical Features

### 🔌 **API Endpoints**
- `/api/chat` - Gemini AI conversaties
- `/api/chat-stream` - Real-time streaming responses
- `/api/generate-tts` - Gemini TTS audio generatie
- `/api/transcribe-audio` - Audio naar tekst transcriptie
- `/api/upload-docx` - Document verwerking

### 📱 **Responsive Design**
- Mobile-first ontwerp voor gebruik in het veld
- Touch-friendly interface voor tablets
- Camera functionaliteit voor situatie-documentatie
- Drag & drop voor eenvoudige file uploads

### 🔒 **Privacy & Veiligheid**
- Server-side API keys (nooit client-side)
- Tijdelijke bestandsverwerking (geen permanente opslag)
- GDPR-compliant design
- Secure HTTPS communicatie

## 🎯 Leeruitkomsten

Na gebruik van dit platform kunnen studenten:

### 💬 **Communicatie**
- ✅ Effectief communiceren met burgers en overtreders
- ✅ Actief luisteren en empathische reacties geven
- ✅ Duidelijke instructies geven en grenzen stellen
- ✅ Gespannen situaties de-escaleren

### 🛡️ **Professionele Vaardigheden**
- ✅ Autoriteit uitoefenen met respect en integriteit
- ✅ Omgaan met agressie en weerstand
- ✅ Culturele diversiteit respecteren in handhaving
- ✅ Ethisch handelen in dilemmasituaties

### ⚡ **Praktische Toepassing**
- ✅ De-escalatietechnieken toepassen in verschillende situaties
- ✅ Risico's inschatten en veilig optreden
- ✅ Samenwerken met collega's en andere diensten
- ✅ Reflecteren op eigen handelen en communicatiestijl

## 📖 Communicatiemodellen

### 🔄 **LEAP Model**
- **Listen**: Actief luisteren naar de burger
- **Empathize**: Begrip tonen voor de situatie
- **Apologize**: Excuses voor ongemak (niet voor beleid)
- **Partner**: Samenwerken naar een oplossing

### 📈 **Escalatieladder**
- **Informeren**: Uitleg geven over regels en gevolgen
- **Waarschuwen**: Duidelijke waarschuwing geven
- **Sanctioneren**: Boete of maatregel opleggen
- **Dwangmiddelen**: Laatste redmiddel bij non-compliance

### 🎭 **DISC Communicatie**
- **Dominant**: Direct en resultaatgericht benaderen
- **Invloedrijk**: Enthousiast en overtuigend communiceren
- **Stabiel**: Geduldig en ondersteunend optreden
- **Consciëntieus**: Feitelijk en gedetailleerd uitleggen

## 🔗 Resources

### 📖 **Handhavingstheorie**
- Responsive regulation (Ayres & Braithwaite)
- Procedural justice (Tyler)
- Legitimacy theory (Bottoms & Tankebe)
- Community policing principles

### 🎥 **Praktijkmateriaal**
- Rollenspel scenario's uit de handhavingspraktijk
- Video-analyses van de-escalatietechnieken
- Casussen uit verschillende handhavingsdomeinen
- Reflectie-instrumenten en feedback formulieren

### 🌐 **Externe Links**
- [Vereniging Nederlandse Gemeenten](https://vng.nl) - Handhavingsrichtlijnen
- [Platform31](https://platform31.nl) - Kennis en innovatie
- [Politieacademie](https://politieacademie.nl) - Onderzoek en onderwijs

---

## 🎉 **Klaar om te Leren?**

Dit platform biedt een veilige, interactieve omgeving om communicatievaardigheden te ontwikkelen die essentieel zijn voor professionele handhaving, toezicht en veiligheid. Van basis gesprekstechnieken tot complexe de-escalatie - de AI-assistent helpt je bij elke stap van je leerproces.

**🛡️ Ontwikkeld voor HTV studenten**  
**🚀 Start nu met leren en oefen je handhavingsvaardigheden!**

---

*Bejegening & Communicatie Platform v1.0*  
*HTV - Handhaver, Toezicht en Veiligheid*  
*Last updated: December 2024*