"use client";
import { motion } from "framer-motion";
import { Cpu, Zap, Smartphone, Globe, ShieldCheck, Activity } from "lucide-react";

export const ProjectGrid = () => {
  const projects = [
    {
      title: "AI & n8n Automation",
      desc: "Architecting autonomous AI agents and enterprise-grade n8n workflows for lead generation and business scaling.",
      tag: "Automation",
      color: "from-blue-600/20",
      icon: <Zap className="text-blue-500" size={20} />
    },
    {
      title: "YouTube Automation",
      desc: "Strategic faceless channel growth (HF Creepspace) using viral scriptwriting, SEO, and AI-driven content pipelines.",
      tag: "Performance Marketing",
      color: "from-red-600/20",
      icon: <Globe className="text-red-500" size={20} />
    },
    {
      title: "Smart Health Tracker",
      desc: "Full-stack web application with automated pill reminders and health metric tracking via React, Firebase, and SQL.",
      tag: "Software Engineering",
      color: "from-emerald-600/20",
      icon: <Activity className="text-emerald-500" size={20} />
    },
    {
      title: "Mobile Architecture",
      desc: "Engineering high-performance Android & iOS solutions using React Native with integrated Firebase backend systems.",
      tag: "App Development",
      color: "from-purple-600/20",
      icon: <Smartphone className="text-purple-500" size={20} />
    },
    {
      title: "AI-Based Safety System",
      desc: "University-led IoT project utilizing sensor integration for gas/fire detection and automated logic-based responses.",
      tag: "IoT & Engineering",
      color: "from-orange-600/20",
      icon: <ShieldCheck className="text-orange-500" size={20} />
    }
  ];

  return (
    // Added id="work" to fix your Hero button
    <section id="work" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Works</h2>
        <p className="text-slate-500 mt-4 font-mono uppercase tracking-[0.2em] text-sm">Case Studies // 2025-2026</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -12, borderColor: "rgba(255,255,255,0.2)" }}
            // Fixed the h-350px] syntax error and added glassmorphism
            className={`group rounded-4xl bg-linear-to-br ${project.color} to-transparent border border-white/5 p-10 flex flex-col justify-between <min-h-100></min-h-100> transition-all duration-500 relative overflow-hidden`}
          >
            {/* Hover Glow Effect */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-all" />
            
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 py-1 px-3 bg-white/5 rounded-full border border-white/5">{project.tag}</span>
                {project.icon}
              </div>
              <h3 className="text-3xl font-bold mt-2 leading-tight">{project.title}</h3>
              <p className="text-slate-400 mt-6 text-base leading-relaxed font-light">{project.desc}</p>
            </div>

            <div className="flex items-center gap-2 mt-8">
              <div className="h-px w-8 bg-blue-500" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};