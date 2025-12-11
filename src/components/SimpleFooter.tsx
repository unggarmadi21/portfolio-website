'use client';

import Link from 'next/link';

export default function SimpleFooter(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container-max px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-3">Madisite</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Transformasi digital dimulai dari sini. Mari kita wujudkan visi digital bisnis Anda bersama.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Ikuti Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://instagram.com/madisite.co.id" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Instagram 📸</a></li>
              <li><a href="https://tiktok.com/@madi_site" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">TikTok 🎵</a></li>
              <li><a href="https://www.youtube.com/@MADI_SITE" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">YouTube 📺</a></li>
              <li><a href="https://linktr.ee/madisite" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Linktree 🌳</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/6281280007814" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">WhatsApp 💬</a></li>
              <li><a href="mailto:info@madisite.co.id" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email ✉️</a></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Chat Form 💭</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Madisite. Semua hak dilindungi.</p>
          <p className="mt-2 text-xs">Dikembangkan dengan ❤️ untuk transformasi digital bisnis Anda</p>
        </div>
      </div>
    </footer>
  );
}
