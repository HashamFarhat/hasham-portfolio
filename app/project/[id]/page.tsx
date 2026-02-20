import { projects } from "@/components/ProjectGrid";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Target, Rocket } from "lucide-react";
import Link from "next/link";

export default function ProjectPage({ params }: { params: { id: string } }) {
  // URL ID ke mutabiq sahi project dhoondna
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#050505] transition-colors duration-500 pb-20">
      {/* Header Section */}
      <div className="relative h-[50vh] w-full overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 bg-slate-900/40 z-10 flex flex-col items-center justify-center text-center p-6 backdrop-blur-[2px]">
          <Link href="/#work" className="absolute top-10 left-10 flex items-center gap-2 text-white/70 hover:text-white transition-colors font-mono text-sm uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6 border-2 ${project.accent}`}>
            {project.tag}
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-4 italic">
            {project.title}
          </h1>
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-50 dark:to-[#050505] z-20" />
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Areas */}
          <div className="lg:col-span-2 space-y-12">
            {/* The Problem */}
            <section className="p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8 text-blue-600">
                <Target size={32} />
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic">The Problem</h2>
              </div>
              <p className="text-xl text-slate-800 dark:text-slate-300 font-bold leading-relaxed italic">
                {project.details.problem}
              </p>
            </section>

            {/* The Solution */}
            <section className="p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-8 text-emerald-600">
                <CheckCircle2 size={32} />
                <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase italic">The Solution</h2>
              </div>
              <p className="text-xl text-slate-800 dark:text-slate-300 font-bold leading-relaxed italic">
                {project.details.solution}
              </p>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-4xl bg-blue-600 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Rocket size={24} />
                <h3 className="font-black uppercase tracking-widest text-sm">Business Impact</h3>
              </div>
              <p className="text-2xl font-black italic mb-2">{project.details.impact}</p>
              <p className="text-white/70 text-sm font-bold uppercase tracking-tighter">Verified Result</p>
            </div>

            <div className="p-8 rounded-4xl bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 shadow-xl">
              <h3 className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-sm mb-6">Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {project.details.stack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-white/10 rounded-xl font-mono text-xs font-black uppercase text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}