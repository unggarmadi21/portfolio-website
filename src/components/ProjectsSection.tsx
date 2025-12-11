'use client';

import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { useState } from 'react';

export default function ProjectsSection(){
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(p => p.category).filter(Boolean))) as string[];
  
  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects.slice(0, 12);

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container-max px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Portofolio</h2>
          <p className="text-gray-600 dark:text-gray-300">Kumpulan proyek yang pernah kami kerjakan. Klik kartu untuk melihat detail lebih lanjut.</p>
        </div>

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="max-w-5xl mx-auto mb-8 flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Semua
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Tidak ada proyek di kategori ini.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Cari lebih banyak proyek dan link penting lainnya?</p>
          <a 
            href="https://linktr.ee/madisite" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Kunjungi Linktree Kami →
          </a>
        </div>
      </div>
    </section>
  );
}
