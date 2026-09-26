'use client';

import Link from 'next/link';
import { SITE_NAME } from '@/constants';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a2340] text-slate-200 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Áreas */}
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
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Síguenos</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/p4sc4l_pi/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-[#f4c542] hover:text-[#0a2340] hover:border-[#f4c542] transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://www.tiktok.com/@pi_pascal.oficial"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="TikTok"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-[#f4c542] hover:text-[#0a2340] hover:border-[#f4c542] transition-colors"
              >
                <FaTiktok size={16} />
              </a>
              <a
                href="https://wa.me/593999043294"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="flex items-center justify-center h-9 w-9 rounded-full bg-white/5 border border-white/10 text-slate-200 hover:bg-[#f4c542] hover:text-[#0a2340] hover:border-[#f4c542] transition-colors"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
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