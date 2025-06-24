import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bejegening & Communicatie - HTV',
  description: 'Leer professionele communicatie en effectieve bejegening in handhaving, toezicht en veiligheidssituaties. HTV - Handhaver, Toezicht en Veiligheid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}