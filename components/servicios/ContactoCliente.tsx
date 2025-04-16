import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export default function ContactoCliente() {
  return (
    <section className="bg-[#f8f8f8] py-18 px-6 lg:px-[150px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Número de teléfono */}
        <div className="flex flex-col items-center md:items-start">
          <span className="uppercase text-lg lg:text-2xl font-light text-gray-600 tracking-wider mb-2">
            Centro de atención al cliente
          </span>
          <Link
            href="tel:012872434"
            className="flex items-center gap-4 text-2xl lg:text-5xl text-gray-500 hover:text-[#01219C] transition"
          >
            <FaPhoneAlt className="text-yellow-400" />
            01-287-2434
          </Link>
        </div>

        {/* Íconos de redes sociales */}
        <div className="flex gap-6">
          <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
            <div className="w-12 h-12 lg:w-20 lg:h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors">
              <FaYoutube size={30} />
            </div>
          </Link>
          <Link href="https://wa.me/51999999999" target="_blank" aria-label="WhatsApp">
            <div className="w-12 h-12 lg:w-20 lg:h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors">
              <FaWhatsapp size={30} />
            </div>
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <div className="w-12 h-12 lg:w-20 lg:h-20 border-2 border-yellow-400 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-white transition-colors">
              <FaFacebookF size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
