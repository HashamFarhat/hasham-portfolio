"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Ready to <span className="text-blue-500">automate</span> your growth?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-md leading-relaxed">
              Whether it's custom n8n workflows, YouTube strategy, or full-stack engineering—let's build the future together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Contact Cards */}
            <ContactCard 
              href="mailto:hasham@example.com" 
              label="Email" 
              value="Get in touch" 
              icon={<Mail className="text-blue-500" />} 
            />
            <ContactCard 
              href="https://linkedin.com/in/your-profile" 
              label="LinkedIn" 
              value="Connect with me" 
              icon={<Linkedin className="text-blue-500" />} 
            />
            <ContactCard 
              href="https://github.com/your-username" 
              label="GitHub" 
              value="View my repos" 
              icon={<Github className="text-blue-500" />} 
            />
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-500">Location</p>
              <p className="text-lg font-medium mt-2">Bahawalnagar, PK</p>
            </div>
          </div>
        </div>

        <footer className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-mono uppercase tracking-widest">
          <p>© 2026 HF Creatives</p>
          <p>Built with Next.js 15 & Framer Motion</p>
        </footer>
      </div>
    </section>
  );
};

// Helper Component for the "Premium" link cards
const ContactCard = ({ href, label, value, icon }: { href: string; label: string; value: string; icon: React.ReactNode }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
    className="p-8 rounded-3xl bg-white/5 border border-white/10 group transition-all"
  >
    <div className="flex justify-between items-start mb-8">
      {icon}
      <ArrowUpRight className="text-slate-600 group-hover:text-white transition-colors" size={20} />
    </div>
    <p className="text-xs font-mono uppercase tracking-widest text-slate-500">{label}</p>
    <p className="text-lg font-medium mt-1">{value}</p>
  </motion.a>
);