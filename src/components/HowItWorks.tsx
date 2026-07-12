"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";

export const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery & Strategy",
      desc: "Tell us about your business goals and target audience to begin our journey.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&h=400&auto=format&fit=crop",
    },
    {
      num: "02",
      title: "Design & Prototype",
      desc: "Our creative team builds a custom, high-performance site matching your brand.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&h=400&auto=format&fit=crop",
    },
    {
      num: "03",
      title: "Development & Testing",
      desc: "After thorough testing and your approval, we go live and monitor performance.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=400&auto=format&fit=crop",
    },
    {
      num: "04",
      title: "Launch & Scale",
      desc: "Reach out for ongoing support and scale your business with expert guidance.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&h=400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <SectionHeader
          align="center"
          eyebrow="Our Process"
          title="How It Works"
          subtitle="Our proven 4-step framework to transform your digital presence"
          className="mb-20"
        />

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[120px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-outline-variant to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="relative group flex flex-col items-center text-center"
              >
                {/* Image Container with Floating Number */}
                <div className="w-[240px] h-[240px] lg:w-full lg:aspect-square mb-8 rounded-[40px] overflow-hidden relative shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-surface-container">
                  <Image
                    alt={step.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    src={step.img}
                    width={400}
                    height={400}
                  />
                  
                  {/* Glassmorphic Number Overlay */}
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/50 rounded-full">
                    <span className="font-black text-white tracking-widest text-sm">
                      STEP {step.num}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 max-w-xs">
                  <h4 className="font-headline text-2xl font-black text-primary">
                    {step.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
