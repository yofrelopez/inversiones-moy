// components/servicios/almacenaje/CityBest.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function CityBestAlmacenaje() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-white/95 shadow-xl ring-1 ring-black/10">
          <div className="grid grid-cols-1 md:[grid-template-columns:360px_1fr] lg:[grid-template-columns:400px_1fr] xl:[grid-template-columns:420px_1fr]">
            {/* Imagen (izquierda en md+, arriba en móvil) */}
            <div className="relative h-[260px] sm:h-[320px] md:h-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
              <Image
                src="/images/services/almacenaje/citybest.jpg" // ⬅️ pon tu imagen aquí
                alt="Almacenaje seguro"
                fill
                className="object-cover"
                priority={false}
              />
              {/* Faja fina de acento (opcional) */}
              <div className="absolute left-0 top-0 h-1 w-24 bg-moyblue" />
            </div>

            {/* Texto (derecha) */}
            <div className="p-6 sm:p-8 lg:p-10 md:pr-12 lg:pr-30 xl:pr-80">
              <h2 className="text-3xl font-bold text-gray-900">
                Almacenaje a tu medida
              </h2>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Nuestro servicio está pensado para personas que necesitan liberar
                espacio en su hogar, oficina o negocio sin perder el control de sus cosas.
              </p>



            {/* Lista de servicios (con circulito y subtítulos sin bold) */}
                <ul className="mt-6 space-y-4 list-[circle] pl-5 marker:text-moyblue">
                <li>
                    <p className="text-moyblue font-normal">Recepción con cuidado</p>
                    <p className="text-sm text-gray-600 mt-1">
                    Revisamos y registramos cada artículo cuando lo recibimos.
                    </p>
                </li>
                <li>
                    <p className="text-moyblue font-normal">Espacio organizado</p>
                    <p className="text-sm text-gray-600 mt-1">
                    Tus cosas se almacenan de manera segura y fácil de acceder.
                    </p>
                </li>
                <li>
                    <p className="text-moyblue font-normal">Conservación garantizada</p>
                    <p className="text-sm text-gray-600 mt-1">
                    Todo se mantiene en buen estado, siguiendo normas de seguridad y mantenimiento.
                    </p>
                </li>
                <li>
                    <p className="text-moyblue font-normal">Inventario claro</p>
                    <p className="text-sm text-gray-600 mt-1">
                    Te informamos lo que tienes guardado, sin confusiones.
                    </p>
                </li>
                <li>
                    <p className="text-moyblue font-normal">Entrega cuando la necesites</p>
                    <p className="text-sm text-gray-600 mt-1">
                    Te devolvemos tus cosas, embaladas y listas, donde lo indiques.
                    </p>
                </li>
                </ul>







              <Link
                href="/contacto"
                className="mt-8 inline-flex items-center justify-center rounded-full
                           bg-moyblue px-7 py-3 font-semibold tracking-wide text-white
                           hover:bg-moyblue-90 transition"
              >
                Cotiza ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
