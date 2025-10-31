// app/layout.tsx
import './globals.css'
import type { Metadata, Viewport } from 'next'

import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/Footer'




export const metadata: Metadata = {
  metadataBase: new URL('https://inversiones-moy-web.vercel.app'), // Cambiar por tu dominio real
  title: {
    default: 'Inversiones Moy - Soluciones Logísticas Profesionales en Perú',
    template: '%s | Inversiones Moy'
  },
  description: 'Empresa líder en servicios logísticos en Perú con más de 25 años de experiencia. Mudanzas, almacenaje, renting vehicular, transporte en cadena de frío y materiales peligrosos.',
  keywords: [
    'mudanzas peru',
    'servicios logisticos',
    'almacenaje peru',
    'renting vehicular',
    'transporte frio',
    'materiales peligrosos',
    'logistica empresarial',
    'mudanzas corporativas',
    'transporte carga',
    'inversiones moy'
  ],
  authors: [{ name: 'Inversiones Moy' }],
  creator: 'Inversiones Moy',
  publisher: 'Inversiones Moy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://inversiones-moy-web.vercel.app',
    siteName: 'Inversiones Moy',
    title: 'Inversiones Moy - Servicios Logísticos Integrales en Perú',
    description: 'Empresa líder en servicios logísticos en Perú con más de 25 años de experiencia. Mudanzas, almacenaje, renting vehicular, transporte en cadena de frío y materiales peligrosos.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inversiones Moy - Servicios Logísticos Integrales',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@InversionesMoy',
    creator: '@InversionesMoy',
    title: 'Inversiones Moy - Servicios Logísticos Integrales',
    description: 'Empresa líder en servicios logísticos en Perú con más de 25 años de experiencia. Mudanzas, almacenaje, renting y transporte especializado.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '', // Agregar Google Search Console verification
    // yandex: '', // Si necesitas otros buscadores
    // yahoo: '',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#01219C' },
    { media: '(prefers-color-scheme: dark)', color: '#01219C' }
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
        <head>
        <link rel="stylesheet" href="/assets/trucking/css/trucking-icons.css" />
        <link rel="stylesheet" href="/assets/stroke7/css/pe-icon-7-stroke.css" />
        <link rel="stylesheet" href="/assets/transportation/css/transportation-icons.css" />
        
      </head>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
