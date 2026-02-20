"use client";
import { motion } from "framer-motion";
import { Zap, Globe, Activity, Smartphone, ShieldCheck } from "lucide-react";

export const ProjectGrid = () => {
  const projects = [
    { title: "AI & n8n Automation", tag: "Automation", color: "blue", icon: <Zap />, desc: "Architecting autonomous AI agents and enterprise-grade n8n workflows." },
    { title: "YouTube Automation", tag: "Marketing", color: "red", icon: <Globe />, desc: "Strategic channel growth (HF Creepspace) via AI-driven pipelines." },
    { title: "Smart Health Tracker", tag: "Software", color: "emerald", icon: <Activity />, desc: "Full-stack web app with automated pill reminders and metric tracking." },
    { title: "Mobile Architecture", tag: "App Dev", color: "purple", icon: <Smartphone />, desc: "Engineering high-performance Android & iOS solutions using React Native." },
    { title: "AI-Based Safety System", tag: "IoT", color: "orange", icon: <ShieldCheck />, desc: "University project utilizing sensor integration for gas/fire detection." }
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            className="group relative p-10 rounded-[2.5rem] bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all duration-500 flex flex-col justify-between min-h-100"
          >
            <div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-slate-100 dark:bg-white/5 rounded-full text-slate-500 dark:text-slate-400">
                  {project.tag}
                </span>
                <div className="text-blue-500 dark:text-blue-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {project.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                {project.desc}
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-3">
              <div className="h-0.5 w-8 bg-blue-600 rounded-full group-hover:w-16 transition-all duration-500" />
              <span className="text-[10px] font-bold uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all">View Details</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};