'use client';

import Image from 'next/image';
import Link from 'next/link';
import { SITE_NAME } from '@/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2340] text-slate-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo de π Pascal"
                  width={170}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Refuerzo académico para ciencias exactas, sociales, naturales, lengua y literatura y más.
            </p>
          </div>

          {/* Cursos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Áreas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cursos" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Todas las áreas
                </Link>
              </li>
              <li>
                <Link href="/cursos?category=Ciencias+exactas" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Ciencias exactas
                </Link>
              </li>
              <li>
                <Link href="/cursos?category=Ciencias+naturales" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Ciencias naturales
                </Link>
              </li>
              <li>
                <Link href="/cursos?category=Lengua+y+literatura" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Lengua y literatura
                </Link>
              </li>
            </ul>
          </div>

          {/* Compañía */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Compañía</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Términos de servicio
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@pipascal.com" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  info@pipascal.com
                </a>
              </li>
              <li>
                <a href="tel:+593999043294" className="text-slate-300 hover:text-[#f4c542] transition-colors">
                  +593 999043294
                </a>
              </li>
              <li>
                <div className="flex space-x-4 mt-4">
                  <a
                    href="https://www.instagram.com/p4sc4l_pi/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-[#f4c542] transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.75 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@pi_pascal.oficial"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 hover:text-[#f4c542] transition-colors"
                  >
                    <span className="sr-only">TikTok</span>
                    <span className="text-sm font-black" aria-hidden="true">TikTok</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm text-slate-400 mb-0">
              © {currentYear} {SITE_NAME}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-slate-300">
              <Link href="/terminos" className="hover:text-[#f4c542] transition-colors">
                Términos
              </Link>
              <Link href="/privacidad" className="hover:text-[#f4c542] transition-colors">
                Privacidad
              </Link>
              <Link href="/cookies" className="hover:text-[#f4c542] transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
