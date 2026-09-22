import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components/layout';
import { SITE_NAME, SITE_DESCRIPTION } from '@/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${SITE_NAME} - Refuerzo académico`,
  description: SITE_DESCRIPTION,
  keywords: ['refuerzo académico', 'matemáticas', 'ciencias', 'sociales', 'educación', 'online'],
  authors: [{ name: 'π Pascal' }],
  creator: 'π Pascal',
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://pi-pascal.com',
    title: `${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
