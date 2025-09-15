"use client";

import Image from "next/image";
import React, { useState } from "react";

type ClientLogo = {
  name: string;
  src: string;          // Ruta en /public (p.ej. "/images/clients/kleeven.svg")
  href?: string;
};

interface ClientsProps {
  title?: string;
  subtitle?: string;
  logos?: ClientLogo[];
  className?: string;
  hoverColor?: boolean; // true: hover muestra color; false: siempre en gris
}

const defaultLogos: ClientLogo[] = [
  { name: "Kleeven", src: "/images/clients/kleeven.svg" },
  { name: "Accuras", src: "/images/clients/accuras.svg" },
  { name: "Halldis", src: "/images/clients/halldis.svg" },
  { name: "Avenue", src: "/images/clients/avenue.svg" },
  { name: "Brand S", src: "/images/clients/brands.svg" },
  { name: "PreSonus", src: "/images/clients/presonus.svg" },
  { name: "Shure", src: "/images/clients/shure.svg" },
  { name: "Logotype", src: "/images/clients/logotype.svg" },
];

function LogoItem({ logo, hoverColor }: { logo: ClientLogo; hoverColor: boolean }) {
  const [fallback, setFallback] = useState(false);

  const content = fallback ? (
    // Fallback con tamaño por defecto si falta la imagen
    <div className="h-12 md:h-14 lg:h-16 w-40 md:w-44 lg:w-48 rounded bg-gray-200/70 text-gray-400
                    flex items-center justify-center text-[10px] tracking-wider uppercase">
      {logo.name || "Logo"}
    </div>
  ) : (
    <Image
      src={logo.src}
      alt={logo.name}
      width={200}
      height={80}
      onError={() => setFallback(true)}
      className={`h-12 md:h-14 lg:h-16 w-auto object-contain transition
                  ${hoverColor ? "grayscale hover:grayscale-0 opacity-80 hover:opacity-100" : "grayscale"}
                 `}
      loading="lazy"
    />
  );

  return logo.href ? (
    <a
      href={logo.href}
      aria-label={logo.name}
      className="flex items-center justify-center p-8 md:p-10 lg:p-12"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center justify-center p-8 md:p-10 lg:p-12">
      {content}
    </div>
  );
}

const Clients: React.FC<ClientsProps> = ({
  title = "Empresas que confían en nosotros",
  subtitle = "Nuestras alianzas estratégicas",
  logos = defaultLogos,
  className = "",
  hoverColor = true,
}) => {
  return (
    <section className={`w-full bg-gray-50 py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        {/* Encabezado centrado */}
        <div className="text-center">
          <h2 className="heading-2 mx-auto text-center">{title}</h2>
          {/* Subrayado naranja sutil y cercano al título */}
          <div className="mx-auto h-[2px] w-16 bg-yellow-400/90 mt-2 mb-6" />
          <p className="subtitle text-center">{subtitle}</p>
        </div>

        {/* Grid de logos: 4 por fila en desktop, con padding amplio */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        gap-x-8 gap-y-2">
          {logos.slice(0, Math.max(6, logos.length)).map((logo) => (
            <LogoItem key={logo.name + logo.src} logo={logo} hoverColor={hoverColor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
