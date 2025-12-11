'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-blue-50 dark:from-black dark:to-gray-900 overflow-hidden">
      <div className="container-max text-center px-6">
        <div className="max-w-3xl mx-auto">
          {/* Animated Logo */}
          <div className="mx-auto w-40 h-40 relative mb-8 scale-100 opacity-100 transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-20 animate-pulse" />
            <Image 
              src="/madisite-logo.webp" 
              alt="Madisite Logo" 
              fill 
              className="object-contain rounded-full drop-shadow-lg hover:scale-110 transition-transform duration-300" 
            />
          </div>

          {/* Main Heading */}
          <div className="transition-all duration-1000 delay-100 translate-y-0 opacity-100">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight">
              Madisite — Transformasi Digital
            </h1>
          </div>

          {/* Subtitle */}
          <div className="transition-all duration-1000 delay-200 translate-y-0 opacity-100">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Kami membantu bisnis tumbuh lewat solusi web, mobile, dan strategi teknologi yang praktis & terukur.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 translate-y-0 opacity-100">
            <a
              href="https://wa.me/6281280007814"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Hubungi Kami Via WhatsApp
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-lg transition-all duration-200"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 transition-all duration-1000 delay-500 translate-y-0 opacity-100">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Proyek Sukses</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">8+</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Tahun Pengalaman</p>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Dukungan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
