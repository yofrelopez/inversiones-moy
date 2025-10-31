// components/servicios/almacenaje/GalleryHighlights.tsx
"use client";

import Image from "next/image";

type Tile = {
  title: string;
  image: string;
  set: "trucking" | "transportation";
  iconCode?: string;   // para "trucking" (ej: "\ue90f")
  codeHex?: string;    // para "transportation" (ej: "f142")
  accent?: "moyblue" | "yellow";
};

const tiles: Tile[] = [
  { title: "Respuesta Rápida",  image: "/images/services/almacenaje/highlights/fast.jpg",     set: "transportation", codeHex: "f142", accent: "moyblue" },
  { title: "Máxima Seguridad",  image: "/images/services/almacenaje/highlights/packages.jpg", set: "trucking",       iconCode: "\ue908", accent: "yellow" },
  { title: "Cobertura Total",   image: "/images/services/almacenaje/highlights/tech.jpg",     set: "trucking",       iconCode: "\ue90c", accent: "moyblue" },
  { title: "Atención Direct",   image: "/images/services/almacenaje/highlights/postal.jpg",   set: "transportation", codeHex: "f105", accent: "yellow" },
];

export default function GalleryHighlights() {
  return (
    // Full width en lg, sin márgenes ni espacios entre imágenes
    <section className="w-full">
      <div className="w-full px-0 lg:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 sm:gap-0">
          {tiles.map((t) => {
            const transChar =
              t.set === "transportation" && t.codeHex
                ? String.fromCharCode(parseInt(t.codeHex, 16))
                : undefined;

            return (
              <div
                key={t.title}
                className="group relative w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] overflow-hidden"
              >
                {/* Imagen */}
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  priority={false}
                  className="block object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  sizes="100vw"
                />

                {/* Overlay base sutil */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

                {/* Overlay color + icono + texto */}
                <div
                  className={[
                    "absolute inset-0 flex items-center justify-center text-white",
                    // Mobile: siempre visible con menor opacidad | Desktop: hover
                    "opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300",
                    t.accent === "yellow"
                      ? "bg-yellow-400/60 sm:bg-yellow-400/85"
                      : "bg-[var(--color-moyblue)]/60 sm:bg-[var(--color-moyblue)]/85",
                  ].join(" ")}
                >
                  <div className="flex flex-col items-center gap-2 sm:gap-3 px-3 text-center">
                    {t.set === "transportation" ? (
                      <i
                        className="not-italic text-[32px] sm:text-[48px] md:text-[56px] leading-none cursor-pointer"
                        data-ico-transportation={transChar}
                        aria-hidden
                      />
                    ) : (
                      <i
                        className="not-italic text-[32px] sm:text-[48px] md:text-[56px] leading-none cursor-pointer"
                        data-ico-trucking={t.iconCode}
                        aria-hidden
                      />
                    )}
                    <span className="text-xs sm:text-sm md:text-base font-medium tracking-wide">
                      {t.title}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
