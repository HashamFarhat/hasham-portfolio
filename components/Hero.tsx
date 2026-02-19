"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics: Damping and Stiffness adjusted for a "luxury" weighted feel
  const springConfig = { damping: 30, stiffness: 100 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // Dynamic Parallax: Subtle movement of the text based on mouse position
  const textX = useTransform(dx, [0, 1200], [-10, 10]);
  const textY = useTransform(dy, [0, 800], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#030303] overflow-hidden">
      
      {/* Background Interactive Layer */}
      <motion.div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          background: `radial-gradient(1000px circle at ${dx}px ${dy}px, rgba(29, 78, 216, 0.12), transparent 80%)`,
        }}
      />

      <div className="z-10 text-center px-4 select-none">
        <motion.div
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Main Headline: High-end Typography and Gradient */}
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tightest leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20 pb-2">
            M. Hasham Farhat
          </h1>

          {/* Sub-headline: Animated reveal for your niches */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className="h-px w-6 md:w-12 bg-blue-600/50" />
            <p className="text-blue-500 font-mono tracking-[0.5em] uppercase text-[10px] md:text-xs">
              Software Engineer // Performance Specialist
            </p>
            <span className="h-px w-6 md:w-12 bg-blue-600/50" />
          </motion.div>
        </motion.div>

        {/* Premium CTA: Magnetic Feel Tap Effect */}
        <motion.button
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-16 px-10 py-5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-500"
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Case Studies
        </motion.button>
      </div>

      {/* Aesthetic Border Glows */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}