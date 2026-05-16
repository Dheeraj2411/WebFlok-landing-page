"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const WhyChooseUs = () => {
  const reasons = [
    { title: "Modern & Professional Design", desc: "We prioritize high-end aesthetics that build instant credibility for your startup.", icon: "check_circle" },
    { title: "Lightning Fast Performance", desc: "Optimized for speed to ensure your visitors stay engaged and search engines love you.", icon: "speed" },
    { title: "Fully Responsive", desc: "Your website will look and function perfectly on every screen, from mobile to desktop.", icon: "devices" },
    { title: "Dedicated Support", desc: "We're with you for the long haul, offering maintenance and strategy after launch.", icon: "support_agent" },
  ];

  return (
    <section id="why-us" className="py-20 md:py-32 bg-surface-container-low -mx-6 px-6 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-black text-primary mb-16 text-balance text-center md:text-left tracking-tight leading-tight">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className={cn(
                "bg-white p-8 rounded-xl flex gap-6 shadow-sm border-l-8",
                i === 0 ? "border-primary" : "border-transparent"
              )}
            >
              <div className={cn(
                "w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0",
                i === 0 ? "bg-primary-container text-white" : "border-2 border-primary-container text-primary-container"
              )}>
                <span className="material-symbols-outlined">{reason.icon}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">{reason.title}</h3>
                <p className="text-on-surface-variant">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
