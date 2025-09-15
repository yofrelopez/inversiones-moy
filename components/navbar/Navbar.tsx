'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';
import { Inter } from 'next/font/google';

import DropdownMenu from './DropdownMenu';
import { navItems } from './navItems';

const inter = Inter({ subsets: ['latin'], weight: ['500', '600', '700'] });

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => setMenuOpen(!menuOpen);


  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null); // cierra dropdown móvil
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  return (
    <nav
      className={`${inter.className} bg-moyblue text-white shadow-lg relative z-50`}
      role="navigation"
      aria-label="Menú principal"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Inicio">
          <div className="relative h-[100px] w-[120px] md:h-[140px] lg:h-[140px] lg:w-[192px]">
            <Image
              src="/logo-moy.png"
              alt="Logo Inversiones Moy"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
            />
          </div>
        </Link>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navegación desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`pb-8 transition-colors ${
                  pathname === item.href
                    ? 'border-b-2 border-yellow-400 text-yellow-400 font-semibold'
                    : 'hover:text-yellow-300'
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <DropdownMenu items={item.children} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Menú móvil */}

      {/* Menú móvil con transición del contenedor */}
          <div
            className={`
              md:hidden overflow-hidden bg-[#01219C] text-white
              transition-[max-height,opacity] ease-in-out duration-[1200ms]
              ${menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}
            `}
          >
            <div className="px-6 pb-6 space-y-2">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href} className="border-t border-white/10">
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex justify-between items-center py-3 font-medium"
                      aria-expanded={openDropdown === item.label}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-180" : "rotate-0"
                        }`}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Submenú (tu animación ya funciona bien) */}
                    <div
                      className={`
                        overflow-hidden transition-[max-height,opacity] ease-in-out duration-500
                        ${openDropdown === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                      `}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 pl-6 text-sm hover:text-yellow-400 transition-colors"
                          onClick={closeMenu}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-3 font-medium ${pathname === item.href ? "text-yellow-400" : "hover:text-yellow-300"}`}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>





      
    </nav>
  );
}
