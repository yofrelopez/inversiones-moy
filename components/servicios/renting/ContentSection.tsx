// components/servicios/renting/ContentSection.tsx
"use client";

import Link from "next/link";

type Feature = {
  set: "transportation" | "trucking" | "stroke7";
  icon: string; // "\ue9xx" | "f1xx" | "pe-7s-..."  
  text: string;
};

type ServiceLink = { 
  name: string; 
  href: string; 
};

const serviciosMoy: ServiceLink[] = [
  { name: "Mudanzas", href: "/servicios/mudanzas" },
  { name: "Gestión Logística", href: "/servicios/gestion-logistica" },
  { name: "Almacenaje", href: "/servicios/almacenaje" },
  { name: "Cadena de Frío", href: "/servicios/transporte-frio" },
  { name: "Materiales Peligrosos", href: "/servicios/productos-peligrosos" },
];

const rentingFeatures: Feature[] = [
  {
    set: "trucking",
    icon: "\ue90f", // truck icon
    text: "Flotas modernas y seguras siempre disponibles",
  },
  {
    set: "transportation", 
    icon: "f142", // business/corporate icon
    text: "Adaptado a cualquier escala empresarial",
  },
  {
    set: "stroke7",
    icon: "pe-7s-cash", // money/finance icon
    text: "Sin registro de activos ni línea de crédito",
  },
  {
    set: "transportation",
    icon: "f153", // chart/control icon  
    text: "Mayor control de gastos y flujo estable",
  },
];

const includedServices: Feature[] = [
  {
    set: "trucking",
    icon: "\ue908", // maintenance icon
    text: "Mantenimiento preventivo y correctivo",
  },
  {
    set: "stroke7", 
    icon: "pe-7s-shield", // insurance icon
    text: "Seguro vehicular integral y SOAT",
  },
  {
    set: "transportation",
    icon: "f105", // 24/7 support icon
    text: "Asistencia vial 24/7 y reemplazo",
  },
  {
    set: "trucking",
    icon: "\ue90c", // telemetry/tracking icon
    text: "Telemetría y reportes ejecutivos",
  },
];

// Removido - usamos serviciosMoy directamente

export default function ContentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Contenido principal - 3 columnas */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              
              {/* Título principal */}
              <div className="mb-8">
                <h2 className="heading-2 mb-4">Movilidad Corporativa sin Fronteras</h2>
                <div className="heading-underline"></div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Renting vehicular flexible y eficiente para empresas de todo tamaño: desde pymes en expansión hasta corporaciones multinacionales.
                </p>
              </div>

              {/* Contenido descriptivo */}
              <div className="prose prose-gray max-w-none">
                <div className="bg-gradient-to-r from-moyblue/5 to-yellow-400/5 p-6 rounded-xl border-l-4 border-moyblue mb-8">
                  <p className="text-lg leading-relaxed text-gray-700 mb-0">
                    El renting se ha convertido en la <strong className="text-moyblue">mejor alternativa para la movilidad empresarial moderna</strong>. Con nosotros, su compañía accede a flotas modernas sin adquirir activos ni asumir endeudamiento, liberando liquidez y optimizando recursos.
                  </p>
                </div>

                {/* ¿Por qué elegirnos? */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-moyblue mb-6 flex items-center gap-3">
                    <i className="pe-7s-like text-moyblue text-[32px] not-italic" />
                    ¿Por qué elegirnos?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {rentingFeatures.map((feature, index) => {
                      const char = feature.set === "transportation" && feature.icon
                        ? String.fromCharCode(parseInt(feature.icon, 16))
                        : feature.icon;

                      return (
                        <div key={index} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                          <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {feature.set === "transportation" ? (
                              <i
                                className="text-yellow-500 text-[36px] leading-none not-italic group-hover:text-yellow-600"
                                data-ico-transportation={char}
                                aria-hidden
                              />
                            ) : feature.set === "trucking" ? (
                              <i
                                className="text-yellow-500 text-[36px] leading-none not-italic group-hover:text-yellow-600"
                                data-ico-trucking={char}
                                aria-hidden
                              />
                            ) : (
                              <i
                                className={`${feature.icon} text-yellow-500 text-[36px] leading-none not-italic group-hover:text-yellow-600`}
                                aria-hidden
                              />
                            )}
                          </div>
                          <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 mt-2">
                            {feature.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Incluimos */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-8 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-moyblue mb-6 flex items-center gap-3">
                    <i className="pe-7s-check text-moyblue text-[32px] not-italic" />
                    Incluimos:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {includedServices.map((service, index) => {
                      const char = service.set === "transportation" && service.icon
                        ? String.fromCharCode(parseInt(service.icon, 16))
                        : service.icon;

                      return (
                        <div key={index} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300">
                          <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                            {service.set === "transportation" ? (
                              <i
                                className="text-moyblue text-[36px] leading-none not-italic group-hover:text-moyblue-80"
                                data-ico-transportation={char}
                                aria-hidden
                              />
                            ) : service.set === "trucking" ? (
                              <i
                                className="text-moyblue text-[36px] leading-none not-italic group-hover:text-moyblue-80"
                                data-ico-trucking={char}
                                aria-hidden
                              />
                            ) : (
                              <i
                                className={`${service.icon} text-moyblue text-[36px] leading-none not-italic group-hover:text-moyblue-80`}
                                aria-hidden
                              />
                            )}
                          </div>
                          <p className="text-base text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 mt-2">
                            {service.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Párrafo de cierre */}
                <div className="relative overflow-hidden bg-gradient-to-r from-moyblue to-moyblue-80 p-8 rounded-xl text-white shadow-lg">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-yellow-400/20 rounded-full translate-y-10 -translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <i className="pe-7s-target text-yellow-300 text-[40px] not-italic" />
                      </div>
                      <p className="text-lg leading-relaxed">
                        Así, su empresa se enfoca en lo más importante: <strong className="text-yellow-300">su negocio y sus clientes</strong>, mientras nosotros gestionamos su movilidad con eficiencia y respaldo total.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - 1 columna */}
          <aside className="lg:col-span-1">
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
                      <Link
                        href={s.href}
                        className="block text-gray-800 hover:text-gray-900"
                      >
                        {s.name}
                      </Link>
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
                    <Link href="/docs/brochure-renting.pdf" className="text-gray-800 hover:text-gray-900">
                      Service Brochure
                    </Link>
                  </li>
                  <li className="flex items-center gap-3">
                    <i className="pe-7s-calculator text-[22px] text-gray-800 not-italic" />
                    <Link href="/docs/tarifas-renting.pdf" className="text-gray-800 hover:text-gray-900">
                      Renting Rates
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}