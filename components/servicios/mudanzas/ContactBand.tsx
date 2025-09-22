"use client";

type Props = {
  title?: string;
  href?: string; // destino del botón
};

export default function ContactBand({
  title = "Contáctanos ahora para recibir una propuesta",
  href = "/contacto",
}: Props) {
  return (
    <section className="w-full bg-[#1a1a1a] py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 border border-white/15 bg-neutral-900 px-8 py-8">
          <h3 className="text-2xl md:text-3xl font-light text-white">
            {title}
          </h3>

          <a
            href={href}
            className="inline-flex items-center justify-center rounded-full
                       bg-yellow-500 px-7 md:px-8 py-3 md:py-4 text-xs md:text-sm
                       font-semibold uppercase tracking-wide text-white
                       hover:bg-yellow-400 transition focus:outline-none
                       focus-visible:ring-2 focus-visible:ring-yellow-300"
            aria-label="Solicita tu Cotización Gratis"
          >
            Solicita tu Cotización Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
