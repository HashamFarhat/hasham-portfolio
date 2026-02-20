import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { TechMarquee } from "@/components/TechMarquee";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle"; 

export default function Home() {
  return (
    <main className="bg-background min-h-screen transition-colors duration-300">
      <ThemeToggle />
      <Hero />
      <About />
      <TechMarquee />
      <ProjectGrid />
      <Contact />
    </main>
  );
}