"use client";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5 bg-background transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-foreground">
            Engineering logic. <br />
            <span className="text-blue-600 italic">Marketing results.</span>
          </h2>
          <div className="mt-8 h-1 w-20 bg-blue-600 rounded-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 space-y-8 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light"
        >
          <p>
            I’m <span className="text-foreground font-medium">M. Hasham Farhat</span>, a final-year Software Engineering student from Bahawalnagar. While most developers stop at the code, I focus on the <span className="text-foreground">conversion</span>.
          </p>
          <p>
            Through my brand, <span className="text-foreground font-medium">HF Creatives</span>, I architect systems that scale businesses. Whether it’s building a <span className="text-blue-600 dark:text-blue-400">Smart Health Tracker</span> or engineering YouTube automation for channels like <span className="text-blue-600 dark:text-blue-400">HF Creepspace</span>, my work is defined by efficiency.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-slate-200 dark:border-white/5">
            <div>
              <p className="text-foreground text-2xl font-bold font-mono">08</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500">Current Semester</p>
            </div>
            <div>
              <p className="text-foreground text-2xl font-bold font-mono">n8n</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500">Automation Lead</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};