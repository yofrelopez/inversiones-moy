import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cotización Gratuita - Servicios Logísticos Personalizados',
  description: 'Solicita tu cotización gratuita para servicios logísticos. Mudanzas, almacenaje, renting vehicular y transporte especializado. Presupuesto sin compromiso en 24 horas.',
  keywords: [
    'cotizacion servicios logisticos',
    'presupuesto mudanzas',
    'cotizar almacenaje',
    'precio renting vehicular',
    'cotizacion gratuita',
    'presupuesto sin compromiso',
    'servicios logisticos peru',
    'solicitar cotizacion'
  ],
  openGraph: {
    title: 'Cotización Gratuita - Inversiones Moy Servicios Logísticos',
    description: 'Solicita tu cotización gratuita para servicios logísticos. Presupuesto personalizado sin compromiso en 24 horas.',
    url: 'https://inversiones-moy-web.vercel.app/cotiza',
    images: ['/images/contacto-og.jpg'],
  },
}

export default function Page() { return <h1>Cotiza</h1>; }
