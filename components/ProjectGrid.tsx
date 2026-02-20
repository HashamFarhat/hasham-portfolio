"use client";
import { motion } from "framer-motion";
import { Zap, Globe, Activity, Smartphone, ShieldCheck } from "lucide-react";

export const ProjectGrid = () => {
  const projects = [
    { title: "AI & n8n Automation", tag: "Automation", color: "from-blue-600/10", icon: <Zap size={20} className="text-blue-500" />, desc: "Architecting autonomous AI agents and enterprise-grade n8n workflows." },
    { title: "YouTube Automation", tag: "Marketing", color: "from-red-600/10", icon: <Globe size={20} className="text-red-500" />, desc: "Strategic channel growth (HF Creepspace) via AI-driven pipelines." },
    { title: "Smart Health Tracker", tag: "Software", color: "from-emerald-600/10", icon: <Activity size={20} className="text-emerald-500" />, desc: "Full-stack web app with automated pill reminders and metric tracking." }
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24 bg-background transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`group rounded-[2rem] bg-gradient-to-br ${project.color} to-transparent border border-slate-200 dark:border-white/5 p-10 flex flex-col justify-between min-h-[400px] bg-slate-50 dark:bg-transparent shadow-sm dark:shadow-none`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 py-1 px-3 bg-slate-200 dark:bg-white/5 rounded-full">{project.tag}</span>
                {project.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground leading-tight">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-6 text-sm leading-relaxed">{project.desc}</p>
            </div>
            <div className="h-px w-8 bg-blue-500 group-hover:w-16 transition-all" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};