'use client';

export default function CTASection() {
  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900">
      <div className="container-max px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">Siap Mengembangkan Bisnis Digital Anda?</h2>
          <p className="text-base md:text-lg text-white/90 mb-6">Hubungi tim ahli kami untuk konsultasi gratis dan temukan solusi teknologi yang tepat untuk kebutuhan bisnis Anda.</p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
            <a
              href="https://wa.me/6281280007814"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-6 py-2 md:py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-sm"
            >
              WhatsApp Kami
            </a>
            <a
              href="mailto:info@madisite.co.id"
              className="px-5 md:px-6 py-2 md:py-3 bg-white/20 border border-white text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              Email Kami
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-white">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-1">📞</div>
              <p className="text-sm opacity-90">Hubungi Kami</p>
              <p className="font-semibold">Siap Membantu 24/7</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-1">⏱️</div>
              <p className="text-sm opacity-90">Respons Cepat</p>
              <p className="font-semibold">Dalam 2 Jam Kerja</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-3xl mb-1">✅</div>
              <p className="text-sm opacity-90">Konsultasi Gratis</p>
              <p className="font-semibold">Tanpa Biaya Apapun</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
