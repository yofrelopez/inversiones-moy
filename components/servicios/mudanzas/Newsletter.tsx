"use client";

import React, { useState } from "react";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  return (
    <section className="w-full bg-neutral-900 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* Título + subtítulo */}
        <h2 className="text-3xl md:text-4xl font-light text-white">
          ¿Necesitas una mudanza?
        </h2>
            <p className="mt-3 font-light text-base md:text-lg text-white/80 leading-relaxed md:leading-loose tracking-wide md:tracking-wider">
            Déjanos tu correo y te responderemos con una propuesta a tu medida
            </p>


        {/* Formulario */}
        <form
          className="mx-auto mt-8 max-w-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true); // aquí conectarías tu API/Email provider
          }}
        >
          <label htmlFor="email" className="sr-only">
            Tu email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Tu email"
            className="w-full rounded-full bg-white px-6 py-4 text-gray-900 placeholder-gray-400
                       shadow-sm ring-1 ring-black/10 outline-none"
          />

          <button
            type="submit"
            className="mx-auto mt-5 inline-flex items-center justify-center rounded-full
                       px-10 py-3 text-sm font-semibold uppercase tracking-wide
                       bg-yellow-500 hover:bg-yellow-400 text-white transition"
          >
            Enviar
          </button>

          {/* Mensaje de confirmación */}
          <p
            aria-live="polite"
            className={`mt-4 text-sm text-green-300 ${sent ? "opacity-100" : "opacity-0"}`}
          >
            ¡Gracias! Te contactaremos pronto.
          </p>
        </form>
      </div>
    </section>
  );
}
