'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container-max px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 relative">
            <Image src="/madisite-logo.webp" alt="Madisite" fill className="object-contain rounded" />
          </div>
          <span className="font-bold text-lg hidden sm:inline">Madisite</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 text-sm">
          <Link href="/services" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Services</Link>
          <Link href="/portfolio" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Portfolio</Link>
          <Link href="/about" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
          <Link href="/contact" className="px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
          <a
            href="https://wa.me/6281280007814"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all duration-200"
          >
            💬 WhatsApp
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <div className="container-max px-4 py-3 space-y-2">
            <Link href="/services" className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Services</Link>
            <Link href="/portfolio" className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Portfolio</Link>
            <Link href="/about" className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">About</Link>
            <Link href="/contact" className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">Contact</Link>
            <a
              href="https://wa.me/6281280007814"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
