"use client";

import React from "react";
import { motion } from "framer-motion";

export const HowItWorks = () => {
  const steps = [
    { num: "01", title: "Share Your Requirements", desc: "Tell us about your business goals and target audience to begin our journey.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&h=400&auto=format&fit=crop" },
    { num: "02", title: "We Design & Develop", desc: "Our creative team builds a custom, high-performance site matching your brand.", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=400&auto=format&fit=crop" },
    { num: "03", title: "Launch Your Website", desc: "After thorough testing and your approval, we go live and monitor performance.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&h=400&auto=format&fit=crop" },
    { num: "04", title: "Contact Us", desc: "Reach out for ongoing support and scale your business with expert guidance.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&h=400&auto=format&fit=crop" },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl md:text-6xl font-black text-primary mb-6 text-balance tracking-tighter leading-none">How It Works</h2>
        <p className="text-on-surface-variant text-base md:text-xl font-medium opacity-80 max-w-2xl mx-auto text-balance">Our proven 4-step process to bring your digital vision to life</p>
      </div>
      <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-8 pb-8 no-scrollbar snap-x px-4 -mx-4 md:px-0 md:mx-0">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="min-w-[300px] lg:min-w-0 bg-white rounded-[32px] border border-outline-variant shadow-sm flex flex-col items-center p-10 text-center snap-start transition-all hover:shadow-xl hover:border-primary/20 group"
          >
            <div className="w-full aspect-square mb-8 rounded-2xl overflow-hidden flex items-center justify-center bg-surface-container-low relative">
              <img alt={step.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={step.img} />
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center font-black text-primary text-xl">
                {step.num}
              </div>
            </div>
            <h3 className="font-headline text-xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">{step.title}</h3>
            <p className="text-base text-on-surface-variant leading-relaxed opacity-90">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
