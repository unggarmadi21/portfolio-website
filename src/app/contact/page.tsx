"use client";

import { useState } from 'react';

export default function ContactPage(){
  const [state, setState] = useState({ name: '', email: '', message: '', subject: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });

      if (res.ok) {
        setStatus('success');
        setState({ name: '', email: '', message: '', subject: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        {/* Header */}
        <div className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black border-b border-gray-200 dark:border-gray-800">
          <div className="container-max px-4 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Kami biasanya merespons dalam beberapa jam kerja. Pilih cara komunikasi yang paling mudah untuk Anda.</p>
          </div>
        </div>

        {/* Content */}
        <div className="py-12 md:py-16">
          <div className="container-max px-4 max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Quick Contact Methods */}
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold mb-6">Hubungi Kami Langsung</h2>
                
                <a
                  href="https://wa.me/6281280007814"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 mb-4 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-2">💬</div>
                  <h3 className="font-semibold mb-1 text-green-700 dark:text-green-400">WhatsApp</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Respons paling cepat</p>
                </a>

                <a
                  href="mailto:info@madisite.co.id"
                  className="block p-6 mb-4 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-2">✉️</div>
                  <h3 className="font-semibold mb-1 text-blue-700 dark:text-blue-400">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Untuk hal formal</p>
                </a>

                <a
                  href="https://linktr.ee/madisite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg hover:shadow-lg transition-all"
                >
                  <div className="text-3xl mb-2">🌳</div>
                  <h3 className="font-semibold mb-1 text-purple-700 dark:text-purple-400">Linktree</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Semua link kami</p>
                </a>
              </div>

              {/* Contact Form */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Atau Kirim Pesan Anda</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        value={state.name}
                        onChange={(e) => setState(s => ({...s, name: e.target.value}))}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
                      <input
                        type="email"
                        value={state.email}
                        onChange={(e) => setState(s => ({...s, email: e.target.value}))}
                        placeholder="email@example.com"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subjek</label>
                    <input
                      type="text"
                      value={state.subject}
                      onChange={(e) => setState(s => ({...s, subject: e.target.value}))}
                      placeholder="Subjek pesan Anda"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Pesan</label>
                    <textarea
                      value={state.message}
                      onChange={(e) => setState(s => ({...s, message: e.target.value}))}
                      placeholder="Tuliskan pesan Anda di sini..."
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      rows={6}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {status === 'loading' ? '⏳ Mengirim...' : '📤 Kirim Pesan'}
                  </button>

                  {status === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-green-700 dark:text-green-400 font-medium">✓ Pesan terkirim! Kami akan segera menghubungi Anda.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-700 dark:text-red-400 font-medium">✗ Terjadi kesalahan. Silakan coba lagi atau hubungi kami via WhatsApp.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="grid gap-6 md:grid-cols-3">
              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">⏰</div>
                <h3 className="font-semibold mb-1">Jam Operasional</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Senin - Jumat, 09:00 - 18:00 WIB</p>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-semibold mb-1">Lokasi</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Indonesia (Remote Available)</p>
              </div>
              <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2">✅</div>
                <h3 className="font-semibold mb-1">Respons</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dalam 2 jam kerja</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
