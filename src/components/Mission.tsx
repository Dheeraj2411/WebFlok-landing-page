"use client";

import React from "react";
import { motion } from "framer-motion";

import { SectionHeader } from "./ui/SectionHeader";

export const Mission = () => {
  return (
    <section id="leadership" className="py-20 md:py-32 px-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center text-center space-y-8"
        >
          <SectionHeader
            align="center"
            eyebrow="Our Mission"
            title={
              <>
                Helping <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Entrepreneurs</span> Succeed.
              </>
            }
            subtitle="We believe every small business deserves a professional online presence. Our goal is to help you and your local business thrive in the digital world."
          />

          {/* Optional: Add a subtle animated icon or graphic here if desired */}
          <div className="pt-8">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-outline-variant/50 shadow-lg flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="material-symbols-outlined text-3xl text-secondary">
                rocket_launch
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
