import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-12">
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
        {/* Columna 1: Logo y redes sociales */}
        <div className="text-center lg:text-left">
          <Image
            src="/logo-moy-footer.png"
            alt="Logo Inversiones Moy"
            width={160}
            height={80}
            className="mx-auto lg:mx-0"
          />
          <h3 className="mt-6 text-lg font-semibold">Redes Sociales</h3>
          <div className="h-[2px] w-10 bg-yellow-400 my-2 mx-auto lg:mx-0" />
          <div className="flex justify-center lg:justify-start gap-4 mt-4 text-2xl">
            <Link href="https://facebook.com" target="_blank">
              <div className="p-2 border border-white rounded-full hover:text-yellow-400 hover:border-yellow-400 transition">
                <FaFacebookF />
              </div>
            </Link>
            <Link href="https://wa.me/51999999999" target="_blank">
              <div className="p-2 border border-white rounded-full hover:text-yellow-400 hover:border-yellow-400 transition">
                <FaWhatsapp />
              </div>
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <div className="p-2 border border-white rounded-full hover:text-yellow-400 hover:border-yellow-400 transition">
                <FaYoutube />
              </div>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <div className="p-2 border border-white rounded-full hover:text-yellow-400 hover:border-yellow-400 transition">
                <FaInstagram />
              </div>
            </Link>
          </div>
        </div> 

        {/* Columna 2: Imagen de los camiones */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/camiones-footer.png"
            alt="Camiones"
            width={250}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Columna 3: Servicios */}
        <div className="text-center lg:text-left px-6">
          <h3 className="text-lg font-semibold">Principales Servicios</h3>
          <div className="h-[2px] w-10 bg-yellow-400 my-2 mx-auto lg:mx-0" />
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li className="border-b border-gray-600 pb-1">Mudanza Local</li>
            <li className="border-b border-gray-600 pb-1">Gestión de logística</li>
            <li className="border-b border-gray-600 pb-1">Almacenaje</li>
            <li className="border-b border-gray-600 pb-1">Renting</li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div className="flex flex-col items-center text-center lg:text-left">
          <h3 className="text-lg font-semibold">Central telefónica</h3>
          <div className="h-[2px] w-10 bg-yellow-400 my-2 mx-auto lg:mx-0" />
          <p className="mt-2 text-2xl font-bold text-white">01-287-2434</p>
          <p className="text-sm mt-1 text-gray-300">o escríbenos vía whatsapp</p>

          <h4 className="mt-6 text-lg font-semibold">Cotice su traslado</h4>
          <div className="h-[2px] w-10 bg-yellow-400 my-2 mx-auto lg:mx-0" />
          <Link href="/cotiza">
            <button className="cursor-pointer mt-2 px-6 py-2 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              Solicita cotización
            </button>
          </Link>
        </div>
      </div>

      {/* Línea inferior y copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        Inversiones Moy 2020 © Todos los Derechos Reservados
      </div>
    </footer>
  );
}
