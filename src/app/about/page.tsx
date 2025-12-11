'use client';

export default function AboutPage(){
  const values = [
    { icon: '💡', title: 'Inovasi', desc: 'Kami selalu mencari solusi terbaru dan terbaik' },
    { icon: '🎯', title: 'Fokus Hasil', desc: 'Target bisnis Anda adalah prioritas kami' },
    { icon: '🤝', title: 'Kolaborasi', desc: 'Bekerja sama sebagai satu tim yang solid' },
    { icon: '⚡', title: 'Cepat & Efisien', desc: 'Deliver berkualitas tinggi dengan timeline tepat' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        {/* Hero Section */}
        <div className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black border-b border-gray-200 dark:border-gray-800">
          <div className="container-max px-4 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Tentang Madisite</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Transformasi digital dimulai dari memahami kebutuhan unik bisnis Anda</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-12 md:py-16">
          <div className="container-max px-4 max-w-3xl mx-auto">
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Siapa Kami?</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Madisite adalah perusahaan teknologi yang berdedikasi membantu bisnis melakukan transformasi digital melalui pengembangan produk inovatif, integrasi sistem yang seamless, dan strategi teknologi yang terukur.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                Tim kami terdiri dari desainer berbakat, pengembang berpengalaman, dan konsultan strategis yang fokus memberikan solusi praktis dan dapat langsung diimplementasikan untuk mengakselerasi pertumbuhan bisnis Anda.
              </p>
            </div>

            {/* Values Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Nilai-Nilai Kami</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {values.map((v, idx) => (
                  <div key={idx} className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all">
                    <div className="text-3xl mb-3">{v.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Pengalaman Kami</h2>
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                  <p className="text-gray-600 dark:text-gray-400">Proyek Selesai</p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</div>
                  <p className="text-gray-600 dark:text-gray-400">Tahun Pengalaman</p>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                  <p className="text-gray-600 dark:text-gray-400">Klien Puas</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Dengan pengalaman bertahun-tahun di industri teknologi, kami memahami tantangan yang dihadapi oleh bisnis modern dan memiliki expertise untuk mengatasinya dengan solusi yang proven dan scalable.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Teknologi yang Kami Kuasai</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'PostgreSQL', 'MongoDB', 'Firebase', 'AWS'].map(tech => (
                      <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Siap Berkolaborasi?</h3>
              <p className="mb-6 text-blue-100">Mari kita diskusikan bagaimana Madisite bisa membantu transformasi digital bisnis Anda.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6281280007814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all"
                >
                  Hubungi Kami via WhatsApp
                </a>
                <a
                  href="/contact"
                  className="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all"
                >
                  Kirim Pesan
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
