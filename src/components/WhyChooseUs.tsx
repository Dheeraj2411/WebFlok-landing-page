"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./ui/SectionHeader";

export const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Modern & Professional Design",
      desc: "We prioritize high-end aesthetics that build instant credibility for your startup.",
      icon: "check_circle",
    },
    {
      title: "Lightning Fast Performance",
      desc: "Optimized for speed to ensure your visitors stay engaged and search engines love you.",
      icon: "speed",
    },
    {
      title: "Fully Responsive",
      desc: "Your website will look and function perfectly on every screen, from mobile to desktop.",
      icon: "devices",
    },
    {
      title: "Dedicated Support",
      desc: "We're with you for the long haul, offering maintenance and strategy after launch.",
      icon: "support_agent",
    },
  ];

  return (
    <section
      id="why-us"
      className="py-24 md:py-32 px-6 relative"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
          <SectionHeader
            eyebrow="The Advantage"
            title="Why Choose Us"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="group bg-white p-8 md:p-10 rounded-[32px] flex flex-col md:flex-row gap-6 border border-outline-variant/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-primary/5 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 relative z-10"
              >
                <span className="material-symbols-outlined text-3xl font-light">{reason.icon}</span>
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-3 text-primary">
                  {reason.title}
                </h4>
                <p className="text-on-surface-variant text-lg leading-relaxed opacity-90">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
