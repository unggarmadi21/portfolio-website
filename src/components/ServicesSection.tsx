'use client';

import { useState } from 'react';

export default function ServicesSection(){
  const services = [
    {
      title: 'Web Development',
      desc: 'Website custom, e-commerce, dan web aplikasi menggunakan Next.js, React, Node.',
      icon: '🌐',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      title: 'Mobile Apps',
      desc: 'Aplikasi iOS & Android native atau cross-platform dengan fokus UX dan performa.',
      icon: '📱',
      features: ['Native & Cross-platform', 'Push Notifications', 'Offline Support']
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Arsitektur cloud, CI/CD, dan otomatisasi untuk keandalan dan skala.',
      icon: '☁️',
      features: ['AWS, Azure, GCP', 'CI/CD Pipeline', 'Auto Scaling']
    },
    {
      title: 'UI/UX Design',
      desc: 'Desain produk digital yang mudah digunakan dan meningkatkan konversi.',
      icon: '🎨',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      title: 'Consulting & Strategy',
      desc: 'Evaluasi teknologi dan roadmap transformasi digital.',
      icon: '📊',
      features: ['Tech Audit', 'Roadmap Planning', 'Team Training']
    },
    {
      title: 'Maintenance & Support',
      desc: 'Dukungan teknis 24/7 dan pemeliharaan berkelanjutan untuk produk Anda.',
      icon: '🔧',
      features: ['24/7 Support', 'Bug Fixes', 'Updates & Upgrades']
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Layanan Kami</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Solusi teknologi lengkap untuk kebutuhan digital perusahaan Anda</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600 overflow-hidden cursor-pointer"
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 p-6">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{s.desc}</p>

                {/* Features - Show on expanded or hover on desktop */}
                <div className={`overflow-hidden transition-all duration-300 ${expandedIndex === idx ? 'max-h-32' : 'max-h-0 md:max-h-32'}`}>
                  <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Fitur Utama:</p>
                    <ul className="space-y-1">
                      {s.features.map((f, i) => (
                        <li key={i} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <span className="text-blue-600 dark:text-blue-400">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">Tertarik dengan layanan kami?</p>
          <a
            href="https://wa.me/6281280007814?text=Saya%20ingin%20konsultasi%20tentang%20layanan%20digital"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}
