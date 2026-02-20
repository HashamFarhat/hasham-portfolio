import { projects } from "@/components/ProjectGrid";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { id: string } }) {
  // Find the specific project based on the URL
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-background p-10">
      {/* Banner Section with Dynamic Glow */}
      <div className={`relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 border border-slate-200 dark:border-white/10 shadow-2xl`}>
         {/* Theme Overlay based on project color */}
         <div className="absolute inset-0 bg-slate-900/60 z-10 flex flex-col items-center justify-center text-center p-6">
            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${project.accent}`}>
              {project.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4">{project.title}</h1>
            <p className="text-white/60 text-lg max-w-xl">Technical Case Study & Architecture</p>
         </div>
         {/* Placeholder for actual theme picture */}
         <div className="bg-slate-800 w-full h-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Overview</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          {project.desc}
        </p>
        
        {/* Detail section for HF Creatives */}
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
          <h3 className="text-xl font-bold mb-4">Tech Stack</h3>
          <div className="flex gap-4">
            <span className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-md text-sm font-mono">Next.js 15</span>
            <span className="px-3 py-1 bg-blue-600/10 text-blue-600 rounded-md text-sm font-mono">Tailwind v4</span>
          </div>
        </div>
      </div>
    </main>
  );
}