// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer'




export const metadata: Metadata = {
  title: 'Inversiones Moy',
  description: 'Soluciones logísticas profesionales',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
