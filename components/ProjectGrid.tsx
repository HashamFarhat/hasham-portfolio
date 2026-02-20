"use client";
import { motion } from "framer-motion";
import { Zap, Globe, Activity, Smartphone, ShieldCheck, ArrowUpRight } from "lucide-react";

export const ProjectGrid = () => {
  const projects = [
    { 
      title: "AI & n8n Automation", 
      tag: "Automation", 
      icon: <Zap size={24} />, 
      desc: "Architecting autonomous AI agents and enterprise-grade n8n workflows.",
      link: "https://github.com/HashamFarhat" // Replace with actual repo link
    },
    { 
      title: "YouTube Automation", 
      tag: "Marketing", 
      icon: <Globe size={24} />, 
      desc: "Strategic channel growth (HF Creepspace) via AI-driven pipelines.",
      link: "https://github.com/HashamFarhat" 
    },
    { 
      title: "Smart Health Tracker", 
      tag: "Software", 
      icon: <Activity size={24} />, 
      desc: "Full-stack web app with automated pill reminders and metric tracking.",
      link: "https://github.com/HashamFarhat" 
    },
    { 
      title: "Mobile Architecture", 
      tag: "App Dev", 
      icon: <Smartphone size={24} />, 
      desc: "Engineering high-performance Android & iOS solutions using React Native.",
      link: "https://github.com/HashamFarhat" 
    },
    { 
      title: "AI-Based Safety System", 
      tag: "IoT", 
      icon: <ShieldCheck size={24} />, 
      desc: "University project utilizing sensor integration for gas/fire detection.",
      link: "https://github.com/HashamFarhat" 
    }
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -12 }}
            // FIX: Added shadows and higher contrast borders for light mode
            className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-[420px] shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-white/10 rounded-full text-slate-600 dark:text-slate-400">
                  {project.tag}
                </span>
                <div className="text-blue-600 dark:text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.icon}
                </div>
              </div>
              
              {/* FIX: Darker text for better readability (No more blurry look) */}
              <h3 className="text-3xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-400 leading-relaxed font-normal">
                {project.desc}
              </p>
            </div>
            
            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-12 transition-all duration-500" />
                <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-900 dark:text-white opacity-0 group-hover:opacity-100 transition-all">
                  View Repository
                </span>
              </div>
              <ArrowUpRight size={18} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};