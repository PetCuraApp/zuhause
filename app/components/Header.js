'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-primary text-background p-4 shadow-md fixed w-full z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logozuhause.png"
            alt="Zuhause Logo"
            width={50}
            height={50}
            className="object-contain"
          />
          <span className="text-3xl font-[800] tracking-wider font-montserrat" style={{ letterSpacing: '0.05em' }}>
            ZU HAUSE
          </span>
        </Link>
        
        {/* Botón de menú hamburguesa */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-background focus:outline-none"
            aria-label="Menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Menú de navegación */}
        <div className={`
          fixed inset-0 bg-primary z-40
          flex flex-col items-center justify-center
          transition-opacity duration-300 ease-in-out
          md:relative md:inset-auto md:bg-transparent md:flex-row md:translate-x-0
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto'}
        `}>
          {/* Botón de cerrar */}
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-4 right-4 text-background focus:outline-none md:hidden"
            aria-label="Cerrar menú"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {/* Enlaces de navegación */}
          <ul className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            <li>
              <Link 
                href="#home" 
                className="text-2xl md:text-base hover:text-secondary transition-colors font-montserrat tracking-wide" 
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#cabanas" 
                className="text-2xl md:text-base hover:text-secondary transition-colors font-montserrat tracking-wide" 
                onClick={() => setIsOpen(false)}
              >
                Cabañas
              </Link>
            </li>
            <li>
              <Link 
                href="#contacto" 
                className="text-2xl md:text-base hover:text-secondary transition-colors font-montserrat tracking-wide" 
                onClick={() => setIsOpen(false)}
              >
                Contacto / Reserva
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}