"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

type ClientLogo = {
  name: string;
  src: string;
  href?: string;
};

interface ClientsProps {
  title?: string;
  subtitle?: string;
  logos?: ClientLogo[];
  className?: string;
  hoverColor?: boolean;
}

const defaultLogos: ClientLogo[] = [
  { name: "Anglo American", src: "/images/empresas/anglo-american.png" },
  { name: "Anixer", src: "/images/empresas/anixer.png" },
  { name: "Ceva", src: "/images/empresas/ceva.png" },
  { name: "Crossand", src: "/images/empresas/crossand.png" },
  { name: "DHL", src: "/images/empresas/dhl.png" },
  { name: "Indumotora", src: "/images/empresas/indumotora.png" },
  { name: "Linio", src: "/images/empresas/linio.png" },
  { name: "Makita", src: "/images/empresas/makita.png" },
  { name: "PUCP", src: "/images/empresas/pucp.png" },
  { name: "Ransa", src: "/images/empresas/ransa.png" },
  { name: "Repsol", src: "/images/empresas/repsol.png" },
  { name: "Ripley", src: "/images/empresas/riplay.png" },
  { name: "Rosen", src: "/images/empresas/rosen.png" },
  { name: "Osinergmin", src: "/images/empresas/x-osinerming.png" },
  { name: "Sony", src: "/images/empresas/x-sony.png" },
  { name: "Terminal", src: "/images/empresas/x-terminal.png" },
];

function LogoItem({ logo, hoverColor }: { logo: ClientLogo; hoverColor: boolean }) {
  const [fallback, setFallback] = useState(false);

  const content = fallback ? (
    <div className="h-16 w-40 flex items-center justify-center rounded bg-gray-200/70 text-gray-400 text-[10px] tracking-wider uppercase font-semibold text-center px-2">
      {logo.name || "Logo"}
    </div>
  ) : (
    <Image
      src={logo.src}
      alt={logo.name}
      width={200}
      height={100}
      onError={() => setFallback(true)}
      className={`max-h-[80px] md:max-h-[100px] w-auto object-contain transition duration-300
                  ${hoverColor ? "grayscale hover:grayscale-0 opacity-80 hover:opacity-100" : "grayscale"}
                 `}
      loading="lazy"
    />
  );

  return (
    <div className="flex-shrink-0 flex items-center justify-center px-8 md:px-12 w-[220px] md:w-[280px]">
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
  // Duplicamos el array para que el efecto visual infinito no tenga saltos
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className={`w-full bg-gray-50 py-16 md:py-24 overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-6 mb-12">
        <div className="text-center">
          <h2 className="heading-2 mx-auto text-center">{title}</h2>
          <div className="mx-auto h-[2px] w-16 bg-yellow-400/90 mt-2 mb-6" />
          <p className="subtitle text-center">{subtitle}</p>
        </div>
      </div>

      <div className="relative w-full flex items-center py-4">
        {/* Gradientes laterales para difuminar la entrada/salida de logos */}
        <div className="absolute left-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-12 md:w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

        {/* Carrusel animado */}
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45, // Ajusta la velocidad aquí
          }}
        >
          {marqueeLogos.map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} logo={logo} hoverColor={hoverColor} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
