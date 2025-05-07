'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Cotiza', href: '/cotiza' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-[#01219C] text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">


         {/* Logo */}
         <div className="relative h-[100px] w-[120px] md:h-[140px] lg:h-[140px] lg:w-[192px]">
          <Image
            src="/logo-moy.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
          />
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navegación en escritorio */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:cursor ${
                pathname === item.href ? 'border-b-2 border-yellow-400 pb-4' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#01219C]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-1 ${
                pathname === item.href ? 'text-yellow-400 font-semibold' : ''
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
