'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/95 shadow-sm sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/images/logo.png"
              alt="Logo de π Pascal"
              width={170}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#082b4f] hover:text-[#b08a15] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#082b4f] hover:text-[#b08a15] transition-colors font-medium"
            >
              Iniciar sesión
            </Link>
            <Link
              href="/registro"
              className="bg-[#f2c230] hover:bg-[#d9a912] text-[#082b4f] px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Registrarse
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            <nav className="flex flex-col space-y-2 pt-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2" />
              <Link
                href="/login"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-2 block"
                onClick={() => setIsOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/registro"
                  className="bg-[#123f68] hover:bg-[#0d3456] text-white px-4 py-2 rounded-lg font-medium transition-colors block text-center"
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
