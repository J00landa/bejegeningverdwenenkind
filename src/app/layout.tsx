import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bejegening & Communicatie - HTV',
  description: 'Leer effectieve communicatie en professionele bejegening in de zorg. HTV - Hogeschool voor Toegepaste Vaardigheden',
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