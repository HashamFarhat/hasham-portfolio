"use client";
import { motion } from "framer-motion";
import { Zap, Globe, Activity, Smartphone, ShieldCheck, ArrowUpRight } from "lucide-react";

// Exported outside to resolve the VS Code error
export const projects = [
  { 
    id: "automation",
    title: "AI & n8n Automation", 
    tag: "Automation", 
    icon: <Zap size={24} />, 
    desc: "Architecting autonomous AI agents and enterprise-grade n8n workflows.",
    link: "/project/automation",
    accent: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-600 dark:border-blue-800",
    glow: "group-hover:shadow-blue-500/40"
  },
  { 
    id: "marketing",
    title: "YouTube Automation", 
    tag: "Marketing", 
    icon: <Globe size={24} />, 
    desc: "Strategic channel growth (HF Creepspace) via AI-driven pipelines.",
    link: "/project/marketing",
    accent: "text-red-600 bg-red-50 dark:bg-red-900/20 border-red-600 dark:border-red-800",
    glow: "group-hover:shadow-red-500/40"
  },
  { 
    id: "software",
    title: "Smart Health Tracker", 
    tag: "Software Engineering", 
    icon: <Activity size={24} />, 
    desc: "Full-stack web app with automated pill reminders and health metric tracking.",
    link: "/project/software",
    accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-600 dark:border-emerald-800",
    glow: "group-hover:shadow-emerald-500/40"
  },
  { 
    id: "mobile",
    title: "Mobile Architecture", 
    tag: "App Dev", 
    icon: <Smartphone size={24} />, 
    desc: "Engineering high-performance Android & iOS solutions using React Native.",
    link: "/project/mobile",
    accent: "text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-600 dark:border-purple-800",
    glow: "group-hover:shadow-purple-500/40"
  },
  { 
    id: "iot",
    title: "AI Safety System", 
    tag: "IoT & AI", 
    icon: <ShieldCheck size={24} />, 
    desc: "University project utilizing sensor integration for gas/fire detection.",
    link: "/project/iot",
    accent: "text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-600 dark:border-orange-800",
    glow: "group-hover:shadow-orange-500/40"
  }
];

export const ProjectGrid = () => {
  return (
    // Changed bg-background to a forced off-white for better card contrast
    <section id="work" className="max-w-7xl mx-auto px-6 py-24 bg-[#f8f9fa] dark:bg-[#050505] transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link} 
            whileHover={{ y: -15 }}
            // Added high-contrast borders and heavy shadows for light mode
            className={`group relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border-2 border-slate-200 dark:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-112.5 shadow-2xl dark:shadow-none ${project.glow}`}
          >
            <div>
              <div className="flex justify-between items-center mb-10">
                <span className={`text-[11px] font-black uppercase tracking-widest px-5 py-2 rounded-full border-2 ${project.accent}`}>
                  {project.tag}
                </span>
                <div className={`${project.accent.split(' ')[0]} scale-125 opacity-100`}>
                  {project.icon}
                </div>
              </div>
              
              {/* FORCED: text-black and font-black for maximum headline visibility */}
              <h3 className="text-4xl font-black tracking-tight mb-6 text-black! dark:text-white! leading-tight">
                {project.title}
              </h3>
              
              {/* FORCED: High contrast text-slate-900 and font-bold for the body */}
              <p className="text-slate-900! dark:text-slate-200! leading-relaxed font-bold text-lg italic">
                {project.desc}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-2 w-12 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-500" />
                <span className="text-sm font-black uppercase tracking-tighter text-black dark:text-white">
                  Case Study
                </span>
              </div>
              <ArrowUpRight size={28} className="text-black dark:text-white group-hover:text-blue-600 transition-transform group-hover:scale-125" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};