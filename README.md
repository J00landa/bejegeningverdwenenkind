# 🏥 Bejegening & Communicatie - HTV

> **Een interactieve leeromgeving voor het vak Bejegening & Communicatie aan de Hogeschool voor Toegepaste Vaardigheden (HTV)**

Een moderne, AI-ondersteunde leerplatform dat studenten helpt bij het ontwikkelen van effectieve communicatievaardigheden en professionele bejegening in de zorg.

## ✨ Functionaliteiten

### 🎯 **Leerdoelen**
- **Communicatieve Vaardigheden**: Effectief communiceren, actief luisteren, empathische reacties
- **Gesprekstechnieken**: Open vragen, non-verbale communicatie, moeilijke gesprekken
- **Professionele Houding**: Conflicthantering, culturele diversiteit, ethische besluitvorming
- **Reflectie**: Zelfreflectie op communicatiestijl en professionele ontwikkeling

### 🤖 **AI Communicatie Assistent**
- 📝 **Gespreksanalyse**: Upload gesprekstranscripties voor feedback
- 🎭 **Rollenspel Oefening**: Oefen met AI als virtuele patiënt of collega
- 💡 **Advies & Tips**: Concrete tips voor communicatie-uitdagingen
- 📚 **Theorie Uitleg**: Communicatiemodellen met praktijkvoorbeelden
- 🎵 **Audio Transcriptie**: Analyseer opgenomen gesprekken
- 📄 **Document Analyse**: Upload casussen en reflectieverslagen

### 🔊 **Geavanceerde TTS Features**
- 🎙️ **Dual TTS Engines**: Microsoft TTS + Gemini AI TTS
- 🎭 **30 Gemini Voices**: Verschillende stemmen voor rollenspel
- 😊 **Emotie Controle**: 7 verschillende emoties voor realistische gesprekken
- ⚡ **Snelheidsregeling**: Aanpasbare spraaksnelheid voor leren

### 📁 **Multi-Modal Leren**
- 🖼️ **Afbeeldingen**: Analyseer non-verbale communicatie in foto's
- 📄 **Documenten**: Upload casussen, reflectieverslagen, theorie
- 🎵 **Audio**: Transcribeer en analyseer gesprekken
- 📊 **Data**: Verwerk enquêtes en onderzoeksdata

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

## 📚 Praktijkvoorbeelden

### 🎭 **Rollenspel Scenario's**
```
"Ik wil oefenen met een gesprek met een angstige patiënt voor een operatie. 
Kun je de rol van de patiënt spelen?"

"Simuleer een gesprek met een boze familielid van een patiënt. 
Ik wil leren hoe ik dit professioneel kan de-escaleren."
```

### 📝 **Gespreksanalyse**
```
Upload een audio-opname van een gesprek en vraag:
"Analyseer dit gesprek en geef feedback op mijn luistervaardigheden 
en empathische reacties."
```

### 💡 **Theorie & Praktijk**
```
"Leg het SOLER model uit en geef een praktijkvoorbeeld 
uit de verpleegkunde."

"Hoe pas ik de communicatiecirkel van Schulz von Thun toe 
in een gesprek met een patiënt?"
```

## 🎓 Voor Docenten

### 📊 **Leeractiviteiten**
- **Casusanalyse**: Studenten uploaden casussen voor AI-feedback
- **Gesprekstraining**: Rollenspel met AI voor veilige oefenomgeving
- **Reflectieverslagen**: AI helpt bij structureren van reflecties
- **Peer Review**: Studenten analyseren elkaars gesprekken

### 🔧 **Aanpassingen**
Het platform kan eenvoudig aangepast worden voor:
- Specifieke HTV-casussen en scenario's
- Lokale richtlijnen en protocollen
- Verschillende zorgsettings (ziekenhuis, thuiszorg, GGZ)
- Multidisciplinaire samenwerking

## 🛠️ Technical Features

### 🔌 **API Endpoints**
- `/api/chat` - Gemini AI conversaties
- `/api/chat-stream` - Real-time streaming responses
- `/api/generate-tts` - Gemini TTS audio generatie
- `/api/transcribe-audio` - Audio naar tekst transcriptie
- `/api/upload-docx` - Document verwerking

### 📱 **Responsive Design**
- Mobile-first ontwerp voor gebruik op alle apparaten
- Touch-friendly interface voor tablets
- Camera functionaliteit voor foto-analyse
- Drag & drop voor eenvoudige file uploads

### 🔒 **Privacy & Veiligheid**
- Server-side API keys (nooit client-side)
- Tijdelijke bestandsverwerking (geen permanente opslag)
- GDPR-compliant design
- Secure HTTPS communicatie

## 🎯 Leeruitkomsten

Na gebruik van dit platform kunnen studenten:

### 💬 **Communicatie**
- ✅ Effectief communiceren met patiënten en collega's
- ✅ Actief luisteren en empathische reacties geven
- ✅ Non-verbale signalen herkennen en interpreteren
- ✅ Moeilijke gesprekken voeren met tact en respect

### 🤝 **Professionele Vaardigheden**
- ✅ Conflicten de-escaleren en constructief oplossen
- ✅ Culturele diversiteit respecteren en benutten
- ✅ Ethische dilemma's herkennen en bespreken
- ✅ Reflecteren op eigen communicatiestijl

### 🎭 **Praktische Toepassing**
- ✅ Gesprekstechnieken toepassen in verschillende zorgsettings
- ✅ Professionele grenzen bewaken in patiëntcontact
- ✅ Samenwerken in multidisciplinaire teams
- ✅ Feedback geven en ontvangen op communicatie

## 🔗 Resources

### 📖 **Communicatietheorie**
- SOLER model (Egan)
- Communicatiecirkel (Schulz von Thun)
- Empathische communicatie (Rogers)
- Motiverende gespreksvoering (Miller & Rollnick)

### 🎥 **Praktijkmateriaal**
- Rollenspel scenario's uit de zorgpraktijk
- Video-analyses van gesprekstechnieken
- Casussen uit verschillende zorgsettings
- Reflectie-instrumenten en feedback formulieren

### 🌐 **Externe Links**
- [HTV Website](https://htv.nl) - Officiële hogeschool website
- [Beroepscode Verpleegkundigen](https://www.venvn.nl) - Professionele standaarden
- [Kwaliteitskader Zorgcommunicatie](https://www.zorginzicht.nl) - Kwaliteitsrichtlijnen

---

## 🎉 **Klaar om te Leren?**

Dit platform biedt een veilige, interactieve omgeving om communicatievaardigheden te ontwikkelen die essentieel zijn voor professionele zorgverlening. Van basis gesprekstechnieken tot complexe ethische dilemma's - de AI-assistent helpt je bij elke stap van je leerproces.

**💙 Ontwikkeld voor HTV studenten**  
**🚀 Start nu met leren en oefen je communicatievaardigheden!**

---

*Bejegening & Communicatie Platform v1.0*  
*HTV - Hogeschool voor Toegepaste Vaardigheden*  
*Last updated: December 2024*