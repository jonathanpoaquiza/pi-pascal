'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants';
import { useState } from 'react';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Degradado suave: oscuro arriba -> transparente abajo, sin banda visible */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(4,16,31,0.92)_0%,rgba(4,16,31,0.78)_30%,rgba(4,16,31,0.5)_55%,rgba(4,16,31,0.22)_75%,rgba(4,16,31,0)_100%)]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fila superior: logo + redes + utilidades */}
        <div className="flex justify-between items-center h-16 pt-2">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo de π Pascal"
              width={170}
              height={48}
              className="h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Redes + utilidades (solo desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-white/90">
              <a
                href="https://www.instagram.com/p4sc4l_pi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[#f2c230] transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.tiktok.com/@pi_pascal.oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-[#f2c230] transition-colors"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="https://wa.me/593999043294"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-[#f2c230] transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>

            <span className="h-4 w-px bg-white/20" />

            <Link
              href="/login"
              className="text-white/90 hover:text-[#f2c230] transition-colors text-sm font-medium"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registro"
              className="bg-[#f2c230] hover:bg-[#d9a912] text-[#082b4f] px-4 py-1.5 rounded-md text-sm font-semibold transition-colors"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
            aria-label="Abrir menú"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Fila inferior: navegación, alineada a la derecha como en la referencia */}
        <nav className="hidden md:flex items-center justify-end gap-8 h-14">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/90 hover:text-[#f2c230] transition-colors font-medium text-sm whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-[#04101f]/95 backdrop-blur-sm rounded-b-lg">
            <nav className="flex flex-col space-y-1 pt-2">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-[#f2c230] transition-colors font-medium px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-white/10" />
              <div className="flex items-center gap-4 px-2 py-2 text-white/90">
                <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram size={20} />
                </a>
                <a href="https://tiktok.com/@tuusuario" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                  <FaTiktok size={20} />
                </a>
                <a href="https://wa.me/00000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp size={20} />
                </a>
              </div>
              <Link
                href="/login"
                className="text-white/90 hover:text-[#f2c230] transition-colors font-medium px-2 py-2 block"
                onClick={() => setIsOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/registro"
                className="bg-[#f2c230] hover:bg-[#d9a912] text-[#082b4f] px-4 py-2 rounded-md font-semibold transition-colors block text-center mx-2"
                onClick={() => setIsOpen(false)}
              >
                Registrarse
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}