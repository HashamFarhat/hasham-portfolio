"use client"; // <--- Add this at the very top!
import { motion } from "framer-motion";

const skills = ["n8n Automation", "React Native", "YouTube SEO", "Firebase", "SQL", "Next.js", "Python"];

export const TechMarquee = () => {
  return (
    <div className="relative flex overflow-x-hidden border-y border-white/5 bg-white/5 py-4">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 px-6"
      >
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-gray-500 font-mono text-sm uppercase tracking-widest">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
};