import { Metadata } from 'next'
import GestionLogistica from "../../../../components/servicios/gestion-logistica/GestionLogistica";

export const metadata: Metadata = {
  title: 'Gestión Logística Integral - Optimización de Cadena de Suministro',
  description: 'Servicios de gestión logística integral para optimizar tu cadena de suministro. Consultoría logística, planificación de rutas, gestión de inventarios y mejora de procesos. Aumenta la eficiencia operativa.',
  keywords: [
    'gestion logistica',
    'cadena suministro',
    'consultoria logistica',
    'optimizacion logistica',
    'gestion inventarios',
    'planificacion rutas',
    'supply chain management',
    'procesos logisticos'
  ],
  openGraph: {
    title: 'Gestión Logística Integral - Optimización Empresarial',
    description: 'Servicios especializados de gestión logística para optimizar procesos y reducir costos en tu cadena de suministro.',
    url: 'https://inversiones-moy-web.vercel.app/servicios/gestion-logistica',
    images: ['/images/gestion-logistica-og.jpg'],
  },
}

export default function Page() {
  return <GestionLogistica />;
}
