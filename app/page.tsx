import Hero from "@/components/Hero";
import { About } from "@/components/About";
import { TechMarquee } from "@/components/TechMarquee";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen selection:bg-blue-500/30">
      <Hero />
      <About />
      <TechMarquee />
      <ProjectGrid />
      <Contact />
    </main>
  );
}