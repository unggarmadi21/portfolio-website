import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import LinksGrid from '@/components/LinksGrid';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <LinksGrid />
        <CTASection />
      </main>
    </div>
  );
}
