'use client';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/madisite.co.id',
    icon: '📸',
    color: 'from-purple-400 to-pink-600',
    description: 'Konten desain & tips digital'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@madi_site',
    icon: '🎵',
    color: 'from-gray-800 to-gray-600',
    description: 'Video tutorial & tips cepat'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@MADI_SITE',
    icon: '📺',
    color: 'from-red-500 to-red-700',
    description: 'Tutorial lengkap & dokumentasi'
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/madisite',
    icon: '🌳',
    color: 'from-green-400 to-green-600',
    description: 'Semua link & proyek kami'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/6281280007814',
    icon: '💬',
    color: 'from-green-500 to-green-600',
    description: 'Hubungi kami langsung'
  },
  {
    name: 'Email',
    url: 'mailto:info@madisite.co.id',
    icon: '✉️',
    color: 'from-blue-500 to-blue-700',
    description: 'Kirim pesan via email'
  },
];

export default function LinksGrid() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Terhubung Dengan Kami</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Ikuti kami di berbagai platform untuk update terbaru, tips, dan penawaran eksklusif.</p>
        </div>

        <div className="max-w-5xl mx-auto grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-lg p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {link.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Kunjungi → 
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-2xl mx-auto mt-12 p-8 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-lg text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Siap Berkomunikasi?</h3>
          <p className="mb-6 text-blue-100">Pilih platform favorit Anda atau hubungi kami langsung melalui WhatsApp untuk respons lebih cepat.</p>
          <a
            href="https://wa.me/6281280007814"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200"
          >
            Hubungi via WhatsApp 💬
          </a>
        </div>
      </div>
    </section>
  );
}
