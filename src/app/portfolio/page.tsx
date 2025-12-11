import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';

export default function PortfolioPage(){
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        <div className="py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black border-b border-gray-200 dark:border-gray-800">
          <div className="container-max px-4 max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Portofolio</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">Koleksi proyek-proyek yang telah kami kerjakan dengan sukses untuk berbagai klien</p>
          </div>
        </div>
        <ProjectsSection />
        <CTASection />
      </main>
    </div>
  );
}
