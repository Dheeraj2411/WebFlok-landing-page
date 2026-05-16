"use client";

import React from "react";
import { motion } from "framer-motion";

export const Mission = () => {
  return (
    <section id="leadership" className="py-20 md:py-32 -mx-6 px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#0D5C5C] p-12 md:p-24 text-center rounded-[48px] shadow-[0_0_50px_rgba(78,217,217,0.15)] flex flex-col items-center justify-center space-y-10"
        >
          <h2 className="text-white font-headline text-3xl md:text-5xl font-black uppercase tracking-widest opacity-80">Our Mission</h2>
          <div className="space-y-6 max-w-4xl">
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed opacity-90 text-balance">
              We believe every small business deserves a professional online presence. Our goal is to
            </p>
            <p className="text-[#4ED9D9] text-3xl md:text-6xl font-black drop-shadow-[0_0_20px_rgba(78,217,217,0.8)] uppercase tracking-tighter leading-none text-balance">
              HELP ENTREPRENEURS SUCCEED
            </p>
            <p className="text-white text-xl md:text-2xl font-medium leading-relaxed opacity-90 text-balance">
              helping entrepreneurs and local businesses thrive in the digital world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
