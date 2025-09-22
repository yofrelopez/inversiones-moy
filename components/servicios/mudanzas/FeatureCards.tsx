// components/servicios/mudanzas/FeatureCards.tsx
"use client";

import Image from "next/image";
import React from "react";

type Card = {
  title: string;
  text: string;
  image: string; // /public/images/...
  href: string;  // destino
  iconSet: "trucking" | "transportation" | "stroke7";
  icon: string;  // "\ue9xx" | "f1xx" | "pe-7s-..."
};

const cards: Card[] = [
  {
    title: "Mudanzas Residenciales",
    text: "Cuidamos tu hogar como si fuera el nuestro.",
    image: "/images/services/mudanzas/card-residencial.png",
    href: "/servicios/mudanzas#residenciales",
    iconSet: "trucking",
    icon: "\ue90f",
  },
  {
    title: "Mudanzas Corporativas",
    text: "Traslados eficientes para oficinas y empresas.",
    image: "/images/services/mudanzas/card-corporativa.jpg",
    href: "/servicios/mudanzas#corporativas",
    iconSet: "trucking",
    icon: "\ue910",
  },
  {
    title: "Embalaje Profesional",
    text: "Protección garantizada con fundas y empaques de alta calidad.",
    image: "/images/services/mudanzas/card-embalaje.png",
    href: "/servicios/mudanzas#embalaje",
    iconSet: "stroke7",
    icon: "pe-7s-box2",
  },
  {
    title: "Cobertura Nacional",
    text: "Realizamos mudanzas en todo el país con rastreo GPS.",
    image: "/images/services/mudanzas/card-cobertura.jpg",
    href: "/servicios/mudanzas#cobertura",
    iconSet: "transportation",
    icon: "f105", // airplane-3
  },
];

export default function FeatureCards() {
  return (
    <section className="w-full py-14">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((c) => {
          const truckingChar = c.iconSet === "trucking" ? c.icon : undefined;
          const transChar =
            c.iconSet === "transportation"
              ? String.fromCharCode(parseInt(c.icon, 16))
              : undefined;

          return (
            <a
              key={c.title}
              href={c.href}
              aria-label={c.title}
              className="group relative isolate overflow-hidden rounded-md bg-gray-100 px-10 pt-16 pb-10
                         border-b border-gray-300/60 shadow-sm cursor-pointer focus:outline-none
                         focus-visible:ring-2 focus-visible:ring-yellow-400/90"
            >
            {/* Imagen + overlay (reemplaza lo anterior) */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
                src={c.image}
                alt=""
                fill
                sizes="(max-width:1024px) 100vw, 25vw"
                className="object-cover opacity-0 scale-105 transition duration-500 ease-out
                        group-hover:opacity-100 group-hover:scale-100"
                priority={false}
            />
            {/* Overlay oscuro para legibilidad */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 ease-out
                            group-hover:bg-black/15" />
            </div>

              {/* “Flash” blanco */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-white opacity-0
                           transition-opacity duration-150 ease-out group-hover:opacity-40
                           group-hover:duration-0 group-hover:delay-0"
              />
              {/* Capa oscura para legibilidad */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 bg-black/55 opacity-0
                           transition-opacity duration-500 ease-out group-hover:opacity-100 delay-100"
              />

              {/* Ícono (grande, sin círculo) */}
                <div className="mb-5 flex h-[120px] items-center justify-center">
                {c.iconSet === "trucking" && (
                    <i
                    className="block text-[80px] leading-none text-yellow-400 not-italic transition-colors group-hover:text-white"
                    data-ico-trucking={truckingChar}
                    aria-hidden
                    />
                )}

                {c.iconSet === "transportation" && (
                    <i
                    className="block text-[80px] leading-none text-yellow-400 not-italic transition-colors group-hover:text-white"
                    data-ico-transportation={transChar}
                    aria-hidden
                    />
                )}

                {c.iconSet === "stroke7" && (
                    <i
                    className={`${c.icon} block text-[80px] leading-none text-yellow-400 not-italic
                                translate-y-[4px] transition-colors group-hover:text-white`}
                    aria-hidden
                    />
                )}
                </div>


            
            

              {/* Texto */}
              <h3 className="text-[22px] font-medium text-gray-900 text-center
                             group-hover:text-white transition-colors">
                {c.title}
              </h3>
              <p className="mt-3 text-center text-[15px] leading-relaxed text-gray-600
                            group-hover:text-white/90 transition-colors">
                {c.text}
              </p>

              {/* Línea inferior fina */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-300/80
                              group-hover:bg-white/60 transition-colors" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
