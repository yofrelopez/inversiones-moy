import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';


export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/fondo-hero.png')" }}>
      {/* Capa azul oscura encima del fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-moyblue via-moyblue-40 to-moyblue-40 z-0" />

      {/* Contenido centrado */}
      <div className="relative z-10 text-center px-6 text-white max-w-2xl">
        <p className="text-sm text-yellow-400 font-semibold mb-4 tracking-wider">
          TRASLADA TUS ENSERES CON
        </p>
        <h1 className="text-4xl font-bold mb-6">
          Verdaderos Profesionales
        </h1>
        <p className="mb-6 text-lg">
          Contamos con más de 25 años en el mercado logístico, siendo una empresa confiable, responsable, segura y tecnológica.
        </p>
        <div className='pt-4'>
          <Link href="/cotiza">
            <button className="bg-yellow-400 text-[#01219C]
            font-normal px-10 py-3 rounded cursor-pointer
            shadow hover:bg-yellow-300 transition"
            >
              Cotiza tu traslado ahora
            </button>
          </Link>
        </div>

        {/* Redes sociales */}
        <div className="mt-8 flex justify-center gap-12 text-white text-2xl">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF className="hover:text-yellow-400 transition-colors duration-300" />
          </Link>
          <Link href="https://wa.me/51999999999" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="hover:text-yellow-400 transition-colors duration-300" />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="hover:text-yellow-400 transition-colors duration-300" />
          </Link>
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <FaYoutube className="hover:text-yellow-400 transition-colors duration-300" />
          </Link>
        </div>
        
      </div>

      {/* Curva inferior decorativa */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 150"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        >
        <path
            fill="#ffffff" // cambia según tu fondo
            d="M0,86 C480,160 960,160 1440,86 L1440,160 L0,160 Z"
        />
        </svg>

    </section>
  );
}
