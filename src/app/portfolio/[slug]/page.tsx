'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, projects } from '@/data/projects';
import { useState, use } from 'react';
import CTASection from '@/components/CTASection';

type Props = { params: Promise<{ slug: string }> };

export default function ProjectDetail({ params }: Props) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">Proyek tidak ditemukan</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Maaf, proyek yang Anda cari tidak ada atau belum didaftarkan.</p>
          <Link href="/portfolio" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all">
            Kembali ke Portofolio
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = projects
    .filter(p => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        {/* Hero Section */}
        <div className="py-8 md:py-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black border-b border-gray-200 dark:border-gray-800">
          <div className="container-max px-4 max-w-4xl mx-auto">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 font-medium">
              ← Kembali ke Portofolio
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">{project.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{project.short}</p>
            
            {/* Category Badge */}
            {project.category && (
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                {project.category}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="py-12">
          <div className="container-max px-4 max-w-4xl mx-auto">
            {/* Project Image */}
            {!imageError && project.image && (
              <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  onLoadingComplete={() => setIsLoading(false)}
                  onError={() => setImageError(true)}
                  priority
                />
              </div>
            )}

            {/* Description */}
            {project.description && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-3">Tentang Proyek</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{project.description}</p>
              </div>
            )}

            {/* Technology Stack */}
            {project.tech && project.tech.length > 0 && (
              <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Teknologi yang Digunakan</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-center"
                >
                  Lihat Demo →
                </a>
              )}
              <a
                href="https://wa.me/6281280007814?text=Saya%20tertarik%20dengan%20proyek%20ini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 border-2 border-green-600 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 font-semibold rounded-lg transition-all duration-200 text-center"
              >
                Hubungi via WhatsApp
              </a>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Proyek Terkait</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {relatedProjects.map(p => (
                    <Link
                      key={p.slug}
                      href={`/portfolio/${p.slug}`}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all"
                    >
                      <h4 className="font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">{p.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{p.short}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <CTASection />
    </div>
  );
}
