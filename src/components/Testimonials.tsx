"use client";

import React from "react";
import { motion } from "framer-motion";

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-primary -mx-6 px-6 text-white overflow-hidden relative scroll-mt-24">
      <div className="absolute top-10 right-10 opacity-10">
        <span className="material-symbols-outlined text-[200px]">format_quote</span>
      </div>
      <div className="max-w-[1000px] mx-auto text-center relative z-10">
        <h2 className="font-headline text-3xl md:text-4xl font-black mb-16 uppercase tracking-[0.4em] opacity-60">What Clients Say</h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <p className="text-3xl md:text-5xl font-headline italic leading-[1.2] text-balance tracking-tight">
            "WebFlok transformed our small boutique's online presence. Their eye for detail and focus on conversion increased our sales by 40% in just two months!"
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-primary font-bold text-2xl shadow-2xl border-4 border-white/20">
              JS
            </div>
            <div>
              <p className="font-black text-xl tracking-tight">Jane Sharma</p>
              <p className="text-[#4ED9D9] font-black text-[10px] tracking-[0.3em] uppercase">Founder, Urban Threads</p>
            </div>
          </div>
        </motion.div>
        
        <div className="flex justify-center gap-4 mt-12">
          <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </section>
  );
};
