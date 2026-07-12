"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { cn } from "@/lib/utils";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jane Sharma",
      role: "Founder, Urban Threads",
      text: "WebFlok transformed our boutique's online presence. Their eye for detail and focus on conversion increased our sales by 40% in just two months!",
      initials: "JS",
    },
    {
      name: "Rahul Verma",
      role: "CEO, TechFlow",
      text: "Absolutely stunning work. The new landing page is lightning fast and our bounce rate dropped significantly. Highly recommend their services.",
      initials: "RV",
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      text: "The best agency we've worked with. They don't just build websites; they build scalable growth engines. Truly a game changer.",
      initials: "PP",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-surface relative scroll-mt-24 border-y border-outline-variant/30 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <SectionHeader
          align="center"
          eyebrow="What Clients Say"
          title="Loved by Founders"
          subtitle="Don't just take our word for it. Here's what our partners have to say about working with us."
          className="mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6, type: "spring", bounce: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="group p-8 rounded-[32px] bg-white/50 backdrop-blur-md border border-outline-variant/50 hover:bg-white hover:shadow-2xl transition-all duration-500 relative"
            >
              <span className="material-symbols-outlined text-4xl text-primary/10 absolute top-8 right-8 group-hover:scale-110 transition-transform duration-500">
                format_quote
              </span>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-surface-container-high text-primary rounded-full flex items-center justify-center font-black text-lg group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-black text-sm text-primary tracking-tight">{testimonial.name}</p>
                  <p className="text-on-surface-variant font-bold text-[10px] tracking-widest uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <p className="text-base font-medium leading-relaxed text-on-surface-variant">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
