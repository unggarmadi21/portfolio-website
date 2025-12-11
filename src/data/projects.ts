export type Project = {
  title: string;
  slug: string;
  short: string;
  description?: string;
  demo?: string;
  image?: string;
  category?: string;
  tech?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  { 
    title: 'KuSehat (DoraHacks Buidl)', 
    slug: 'kusehat', 
    short: 'Aplikasi kesehatan hasil DoraHacks.', 
    description: 'Aplikasi kesehatan inovatif yang dikembangkan untuk kompetisi DoraHacks, menyediakan fitur pemantauan kesehatan dan konsultasi medis online.',
    demo: 'https://dorahacks.io/buidl/27346', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/52a0a4fc-4f36-4ee6-a1c0-cf6eff987d0e_Potret_Tanpa_Judul.jpg',
    category: 'Healthcare',
    tech: ['React', 'Node', 'Mongodb'],
    featured: true
  },
  { 
    title: 'Collosal (Company Profile)', 
    slug: 'collosal', 
    short: 'Company profile & landing page.', 
    description: 'Website perusahaan profesional dengan desain modern dan performa optimal untuk meningkatkan kredibilitas bisnis Anda.',
    demo: 'https://company-profile-github-io.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/c62d9635-b6a8-4d31-a1f6-6d6b0d2f1b5a_Potret_Tanpa_Judul.jpg',
    category: 'Web',
    tech: ['Next.js', 'Tailwind CSS'],
    featured: true
  },
  { 
    title: 'Pod - Live Podcast', 
    slug: 'pod-live', 
    short: 'Landing page untuk aplikasi podcast live.', 
    description: 'Platform streaming podcast dengan fitur live broadcasting dan interaksi real-time dengan pendengar.',
    demo: 'https://landing-page-pod-audio-streaming.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/f4e8d2c1-5a9b-4e7d-8c1f-2d3e4f5a6b7c_podcast.jpg',
    category: 'Media',
    tech: ['React', 'Firebase'],
    featured: true
  },
  { 
    title: 'ERP CRM (Open Source)', 
    slug: 'erp-crm', 
    short: 'Sistem ERP/CRM yang di-deploy di Azure.', 
    description: 'Sistem manajemen enterprise yang komprehensif untuk mengelola hubungan pelanggan dan operasional bisnis dengan efisien.',
    demo: 'https://erp-crm-azure.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/e5f9d3c2-6b0c-5f8e-9d2g-3e4f5g6h7i8d_erp.jpg',
    category: 'Enterprise',
    tech: ['Node', 'Postgres', 'Azure'],
    featured: true
  },
  { 
    title: 'Text To Speech (difable)', 
    slug: 'text-to-speech', 
    short: 'Aplikasi TTS untuk difabel.', 
    description: 'Aplikasi aksesibilitas yang mengkonversi teks ke suara dengan dukungan berbagai bahasa untuk membantu difabel.',
    demo: 'https://text-to-speach-app-for-difable.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/f6gae4d3-7c1d-6g9f-0e3h-4f5g6h7i8j9e_tts.jpg',
    category: 'Accessibility',
    tech: ['React', 'Web Audio API'],
    featured: true
  },
  { 
    title: 'Krypt Landing Page', 
    slug: 'krypt', 
    short: 'Template landing page untuk produk Krypt.', 
    description: 'Landing page profesional dengan desain responsif yang dioptimalkan untuk konversi dan user experience.',
    demo: 'https://client-fawn-six.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/g7hbf5e4-8d2e-7h0g-1f4i-5g6h7i8j9k0f_krypt.jpg',
    category: 'Web',
    tech: ['HTML', 'CSS', 'JavaScript']
  },
  { 
    title: 'SpeechToText for Difabel', 
    slug: 'speech-to-text', 
    short: 'Konverter suara ke teks untuk aksesibilitas.', 
    description: 'Aplikasi aksesibilitas yang mengkonversi perintah suara menjadi teks untuk memudahkan pengguna difabel.',
    demo: 'https://speach-to-text-converter.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/h8ice6f5-9e3f-8i1h-2g5j-6h7i8j9k0l1g_speech.jpg',
    category: 'Accessibility',
    tech: ['React', 'Web Speech API']
  },
  { 
    title: 'Framer Template', 
    slug: 'framer-template', 
    short: 'Template Framer untuk prototyping.', 
    description: 'Template prototyping interaktif yang dirancang untuk mempercepat proses desain dan pengembangan produk.',
    demo: 'https://fast-context-068051.framer.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/i9jdg7g6-0f4g-9j2i-3h6k-7i8j9k0l1m2h_framer.jpg',
    category: 'Design',
    tech: ['Framer']
  },
  { 
    title: 'Landing Page Dicoding', 
    slug: 'landing-dicoding', 
    short: 'Landing page untuk program Dicoding.', 
    description: 'Landing page edukatif untuk platform pembelajaran yang menarik dan responsif di semua perangkat.',
    demo: 'https://landing-page-dicoding.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/j0keh8h7-1g5h-0k3j-4i7l-8j9k0l1m2n3i_dicoding.jpg',
    category: 'Education',
    tech: ['HTML', 'CSS']
  },
  { 
    title: 'Madi Store - Template', 
    slug: 'madi-store', 
    short: 'Template marketplace demo.', 
    description: 'Template e-commerce lengkap dengan fitur shopping cart, payment gateway, dan inventory management.',
    demo: 'https://madistore-unggarmadi21.vercel.app/', 
    image: 'https://linktr.ee/cdn-cgi/image/fit=cover,w=500,h=300/https://ugc.production.linktr.ee/k1lfi9i8-2h6i-1l4k-5j8m-9k0l1m2n3o4j_store.jpg',
    category: 'E-Commerce',
    tech: ['Next.js', 'Tailwind CSS', 'Stripe'],
    featured: true
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) || null;
}
