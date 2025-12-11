'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-2 group">
      <Link href={`/portfolio/${project.slug}`} className="block">
        <div className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-blue-400 dark:hover:border-blue-600 flex flex-col">
          {/* Image Section */}
          <div className="relative w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
            {!imageError && project.image ? (
              <>
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onLoadingComplete={() => setIsLoading(false)}
                  onError={() => setImageError(true)}
                />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600">
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{project.category || 'Project'}</p>
                </div>
              </div>
            )}
            {project.featured && (
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                Featured
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-base mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex-grow">{project.short}</p>

            {/* Technology Tags */}
            {project.tech && project.tech.length > 0 && (
              <div className="flex gap-1 flex-wrap mb-3">
                {project.tech.slice(0, 2).map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                    +{project.tech.length - 2}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </Link>

      {/* Demo Button - Outside Link */}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium px-4"
        >
          Demo →
        </a>
      )}
    </div>
  );
}
