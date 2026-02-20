"use client";
import { motion } from "framer-motion";
import { Zap, Globe, Activity, Smartphone, ShieldCheck, ArrowUpRight } from "lucide-react";

// FIX: Exported outside so dynamic pages work
export const projects = [
  { 
    id: "automation",
    title: "AI & n8n Automation", 
    tag: "Automation", 
    icon: <Zap size={24} />, 
    desc: "Architecting autonomous AI agents and enterprise-grade n8n workflows.",
    link: "/project/automation",
    accent: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800",
    glow: "group-hover:shadow-blue-500/20"
  },
  { 
    id: "marketing",
    title: "YouTube Automation", 
    tag: "Marketing", 
    icon: <Globe size={24} />, 
    desc: "Strategic channel growth (HF Creepspace) via AI-driven pipelines.",
    link: "/project/marketing",
    accent: "text-red-600 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
    glow: "group-hover:shadow-red-500/20"
  },
  { 
    id: "software",
    title: "Smart Health Tracker", 
    tag: "Software Engineering", 
    icon: <Activity size={24} />, 
    desc: "Full-stack web app with automated pill reminders and health metric tracking.",
    link: "/project/software",
    accent: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800",
    glow: "group-hover:shadow-emerald-500/20"
  },
  { 
    id: "mobile",
    title: "Mobile Architecture", 
    tag: "App Dev", 
    icon: <Smartphone size={24} />, 
    desc: "Engineering high-performance Android & iOS solutions using React Native.",
    link: "/project/mobile",
    accent: "text-purple-600 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
    glow: "group-hover:shadow-purple-500/20"
  },
  { 
    id: "iot",
    title: "AI Safety System", 
    tag: "IoT & AI", 
    icon: <ShieldCheck size={24} />, 
    desc: "University project utilizing sensor integration for gas/fire detection.",
    link: "/project/iot",
    accent: "text-orange-600 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
    glow: "group-hover:shadow-orange-500/20"
  }
];

export const ProjectGrid = () => {
  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24 bg-background transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link} 
            whileHover={{ y: -12 }}
            // Added shadow-xl for light mode depth
            className={`group relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[420px] shadow-xl dark:shadow-none hover:shadow-2xl ${project.glow}`}
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full border ${project.accent}`}>
                  {project.tag}
                </span>
                <div className={`${project.accent.split(' ')[0]} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {project.icon}
                </div>
              </div>
              
              {/* FIX: Forced text-slate-900 for Light Mode visibility */}
              <h3 className="text-3xl font-black tracking-tight mb-4 text-slate-900 dark:text-white leading-tight">
                {project.title}
              </h3>
              
              {/* FIX: Using text-slate-800 and font-bold for clear paragraphs */}
              <p className="text-slate-800 dark:text-slate-300 leading-relaxed font-bold text-lg opacity-100">
                {project.desc}
              </p>
            </div>
            
            <div className="mt-12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-1.5 w-10 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-500" />
                <span className="text-xs font-black uppercase tracking-tighter text-slate-900 dark:text-white">
                  View Case Study
                </span>
              </div>
              <ArrowUpRight size={22} className="text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};