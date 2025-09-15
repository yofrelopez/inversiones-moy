"use client";

import Image from "next/image";
import {
  ClipboardList, // 01
  FileCog,       // 02
  Truck,         // 03
  Eye,           // 04
  Send,          // 05
  ShieldCheck,   // 06
} from "lucide-react";

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Planificación Estratégica",
    description:
      "Diseñamos rutas y planes de distribución personalizados para reducir costos y asegurar puntualidad en cada envío.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Gestión y Control",
    description:
      "Supervisamos todo el flujo logístico: desde la solicitud de pedidos hasta la liquidación, garantizando transparencia y eficiencia.",
    icon: FileCog,
  },
  {
    number: "03",
    title: "Transporte Especializado",
    description:
      "Flota propia para traslados locales y nacionales, desde almacenes generales hasta tiendas, sucursales o clientes finales.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Visibilidad y Seguimiento",
    description:
      "Monitoreo en tiempo real mediante GPS con reportes actualizados para un control total de sus mercancías.",
    icon: Eye,
  },
  {
    number: "05",
    title: "Entregas Eficientes",
    description:
      "Procesos optimizados que garantizan entregas puntuales y seguras en todo el territorio nacional.",
    icon: Send,
  },
  {
    number: "06",
    title: "Compromiso con la Calidad",
    description:
      "Respaldo total: seguro de mercancías, protocolos de seguridad y un servicio enfocado en la satisfacción del cliente final.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section aria-labelledby="proceso-title" className="py-16">
      <h2 id="proceso-title" className="sr-only">
        Nuestro Proceso
      </h2>

      {/* 3 columnas: 2 para los pasos, 1 para la ilustración */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start px-6">
        {/* Columna izquierda + centro: pasos en 2 columnas */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {steps.map(({ number, title, description, icon: Icon }) => (
              <div key={number} className="flex items-start gap-4">
                {/* Ícono */}
                <div className="mt-1 shrink-0">
                  <Icon className="w-10 h-12 text-gray-600" strokeWidth={1.5} aria-hidden />
                </div>

                {/* Texto */}
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-medium text-gray-50600">
                      {number} /
                    </span>
                    <h3 className="text-[17px] md:text-2xl font-light text-gray-900">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna derecha: ilustración */}
        <div className="lg:pl-2">
          {/* Ajusta la ruta según tu carpeta real:
             - si usas /public/images/... => "/images/services/gestion-logistica/services-proces.jpg"
             - si usas /public/services/... => "/services/gestion-logistica/services-proces.jpg"
          */}
          <Image
            src="/images/services/gestion-logistica/services-proces.jpg"
            alt="Ilustración del proceso logístico"
            width={560}
            height={560}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
