"use client";

import React from "react";

type ServiceLink = { name: string; href: string };

const serviciosMoy: ServiceLink[] = [
  { name: "Mudanzas", href: "/servicios/mudanzas" },
  { name: "Gestión Logística", href: "/servicios/gestion-logistica" },
  { name: "Almacenaje", href: "/servicios/almacenaje" },
  { name: "Renting", href: "/servicios/renting" },
  { name: "Cadena de Frío", href: "/servicios/cadena-de-frio" },
  { name: "Materiales Peligrosos", href: "/servicios/materiales-peligrosos" },
];

export default function AlwaysOnTime() {
  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Columna principal */}
        <div className="lg:col-span-8">
          {/* Título + lead */}
          <div className="max-w-3xl">
            <h2 className="heading-2 text-gray-900">Siempre a Tiempo</h2>
            <div className="h-[2px] w-16 bg-yellow-400/90 mt-2 mb-6" />
            <p className="subtitle text-gray-700">
              Nuestras mudanzas están diseñadas para adaptarse a tu agenda. Nos
              encargamos del traslado de tus pertenencias en el tiempo acordado,
              asegurando puntualidad y el mayor cuidado en cada etapa del proceso.
            </p>
          </div>

          {/* Video */}
          <div className="mt-8">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden ring-1 ring-gray-200 shadow-sm">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video de Mudanzas"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* Texto extendido */}
          <div className="mt-8 max-w-3xl space-y-6 text-gray-600 text-sm leading-relaxed">
            <div>
              <h3 className="text-[15px] tracking-wide uppercase text-gray-500">
                Mudanzas Residenciales
              </h3>
              <p className="mt-2">
                Sabemos que una mudanza de hogar puede ser complicada. Con nosotros,
                ahorras tiempo y evitas riesgos gracias a nuestro embalaje
                especializado, fundas acolchonadas para muebles, carretas
                inteligentes, rastreo GPS y camiones de hasta 10 toneladas. Tu
                patrimonio, en manos seguras.
              </p>
            </div>
            <div>
              <h3 className="text-[15px] tracking-wide uppercase text-gray-500">
                Mudanzas Corporativas
              </h3>
              <p className="mt-2">
                Trasladamos oficinas y empresas con máxima eficiencia. Creamos un
                plan logístico a medida, cuidando plazos y minimizando
                interrupciones. Nuestro servicio está disponible las 24 horas,
                garantizando seguridad y discreción en todo momento.
              </p>
            </div>
          </div>


          {/* Ventajas competitivas (4 ítems) - versión refinada */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-12">
            {/* Rapidez y Puntualidad */}
            <div className="flex items-start gap-5">
                <span className="inline-grid size-16 aspect-square place-items-center rounded-full ring-[2px] ring-yellow-400/90 p-0 shrink-0 flex-none">
                <i
                    className="text-[30px] text-gray-800 not-italic"
                    data-ico-transportation={String.fromCharCode(parseInt("f105", 16))} // airplane-3
                    aria-hidden
                />
                </span>
                <div className="pt-1">
                <h4 className="text-[22px] md:text-[24px] font-light text-gray-800 leading-tight">
                    Rapidez y Puntualidad
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    Traslados en tiempos acordados gracias a nuestra experiencia logística.
                </p>
                </div>
            </div>

            {/* Máxima Seguridad */}
            <div className="flex items-start gap-5">
                <span className="inline-grid size-16 aspect-square place-items-center rounded-full ring-[2px] ring-yellow-400/90 p-0 shrink-0 flex-none">
                <i className="pe-7s-shield text-[30px] text-gray-800 not-italic" aria-hidden />
                </span>
                <div className="pt-1">
                <h4 className="text-[22px] md:text-[24px] font-light text-gray-800 leading-tight">
                    Máxima Seguridad
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    Uso de embalajes especiales, fundas acolchonadas y GPS para proteger tus bienes.
                </p>
                </div>
            </div>

            {/* Camiones de Alta Capacidad */}
            <div className="flex items-start gap-5">
                <span className="inline-grid size-16 aspect-square place-items-center rounded-full ring-[2px] ring-yellow-400/90 p-0 shrink-0 flex-none">
                <i
                    className="text-[30px] text-gray-800 not-italic"
                    data-ico-transportation={String.fromCharCode(parseInt("f153", 16))} // truck
                    aria-hidden
                />
                </span>
                <div className="pt-1">
                <h4 className="text-[22px] md:text-[24px] font-light text-gray-800 leading-tight">
                    Camiones de Alta Capacidad
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    Flota de vehículos de hasta 10 toneladas para todo tipo de mudanza.
                </p>
                </div>
            </div>

            {/* Personal Especializado */}
            <div className="flex items-start gap-5">
                <span className="inline-grid size-16 aspect-square place-items-center rounded-full ring-[2px] ring-yellow-400/90 p-0 shrink-0 flex-none">
                <i className="pe-7s-id text-[30px] text-gray-800 not-italic" aria-hidden />
                </span>
                <div className="pt-1">
                <h4 className="text-[22px] md:text-[24px] font-light text-gray-800 leading-tight">
                    Personal Especializado
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">
                    Equipo capacitado en maniobras y embalaje profesional.
                </p>
                </div>
            </div>
            </div>








        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-20 space-y-10">
            {/* Otros servicios */}
            <div>
              <p className="text-[12px] tracking-[0.18em] uppercase text-gray-500">
                CONOCE NUESTROS
              </p>
              <h3 className="text-3xl font-light text-gray-900">Otros Servicios</h3>

              <ul className="mt-6 space-y-4">
                {serviciosMoy.map((s, i) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      className="block text-gray-800 hover:text-gray-900"
                    >
                      {s.name}
                    </a>
                    {i < serviciosMoy.length - 1 && (
                      <div className="mt-3 h-px bg-gray-200" />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Brochures */}
            <div>
              <p className="text-[12px] tracking-[0.18em] uppercase text-gray-500">
                SECCIÓN DESCARGABLE
              </p>
              <h3 className="text-3xl font-light text-gray-900">Brochures</h3>

              <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                  <i className="pe-7s-news-paper text-[22px] text-gray-800 not-italic" />
                  <a href="/docs/brochure-servicios.pdf" className="text-gray-800 hover:text-gray-900">
                    Service Brochure
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <i className="pe-7s-calculator text-[22px] text-gray-800 not-italic" />
                  <a href="/docs/tarifas-paises.pdf" className="text-gray-800 hover:text-gray-900">
                    Country Rates
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
