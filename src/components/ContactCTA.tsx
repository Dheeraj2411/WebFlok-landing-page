"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { BookACallModal } from "./BookACallModal";
import { Button } from "./ui/Button";

export const ContactCTA = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <>
      <section id="contact-us" className="py-16 md:py-24 bg-slate-50/80 rounded-[40px] border border-outline-variant/30 px-6 md:px-12 scroll-mt-24 mb-12 shadow-sm">
        <div className="bg-surface-container-high rounded-[48px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center border border-outline-variant shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: false, amount: 0.1, margin: "50px" }}
            style={{ transformStyle: "preserve-3d" }}
            className="lg:w-[55%] space-y-10 relative z-10"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">
                Direct Consultation
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-none text-balance tracking-tighter">
              Ready to scale <br /> your business?
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-lg leading-relaxed font-medium opacity-90 text-balance tracking-tight">
              Stop waiting and start growing. Get a professional website that
              works as hard as you do.
            </p>
            <div className="flex flex-wrap gap-5 pt-6">
              <Button
                onClick={() => setIsBookModalOpen(true)}
                variant="default"
                size="lg"
                className="flex items-center gap-3"
              >
                BOOK A CALL{" "}
                <span className="material-symbols-outlined">call</span>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex items-center gap-3"
              >
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WHATSAPP US{" "}
                  <span className="material-symbols-outlined text-sm">
                    chat
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 15, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: false, amount: 0.1, margin: "50px" }}
            style={{ transformStyle: "preserve-3d" }}
            className="lg:w-[45%] bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-outline-variant w-full relative z-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-headline text-3xl font-black text-primary mb-6 tracking-tight">
                Get a Free Quote
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold"
                  placeholder="Your Name"
                  type="text"
                  required
                />
                <input
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold"
                  placeholder="Company Name"
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold"
                  placeholder="Email Address"
                  type="email"
                  required
                />
                <input
                  className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold"
                  placeholder="Phone Number"
                  type="tel"
                  required
                />
              </div>

              <input
                className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold"
                placeholder="Current Website URL (if any)"
                type="url"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold text-on-surface-variant">
                  <option>Select Service</option>
                  <option>Web Design & Development</option>
                  <option>SEO Optimization</option>
                  <option>Google/Meta Ads</option>
                  <option>Full Digital Branding</option>
                </select>
                <select className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold text-on-surface-variant">
                  <option>Found us via?</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Google Search</option>
                  <option>Referral</option>
                </select>
              </div>

              <select className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold text-on-surface-variant">
                <option>Monthly Budget</option>
                <option>₹10,000 - ₹30,000</option>
                <option>₹30,000 - ₹70,000</option>
                <option>₹70,000 - ₹1.5 Lakh</option>
                <option>₹1.5 Lakh+</option>
              </select>

              <textarea
                className="w-full px-5 py-4 bg-white/50 backdrop-blur-md rounded-2xl border border-outline-variant/60 focus:border-primary focus:bg-white focus:shadow-[0_8px_30px_rgba(30,58,95,0.1)] outline-none text-sm transition-all duration-300 font-bold min-h-[120px]"
                placeholder="Tell us about your business, features you need, design ideas, or reference websites..."
              ></textarea>

              <Button
                variant="default"
                className="w-full py-4 flex items-center justify-center gap-2"
              >
                GET MY QUOTE{" "}
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <BookACallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
};
