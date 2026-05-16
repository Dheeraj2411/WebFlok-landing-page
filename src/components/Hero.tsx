"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BookACallModal } from "./BookACallModal";
import Link from "next/link";

export const Hero = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const words = [
    { text: "Needs", icon: "lightbulb", color: "text-amber-500" },
    { text: "Growth", icon: "rocket_launch", color: "text-emerald-500" },
    { text: "Success", icon: "star", color: "text-yellow-500" },
    { text: "Future", icon: "auto_awesome", color: "text-sky-500" },
    { text: "Identity", icon: "person", color: "text-rose-500" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="pt-8 pb-20 md:pt-16 md:pb-32 flex flex-col md:flex-row gap-16 items-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-[55%] space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/30 rounded-full border border-secondary-container">
            <span className="text-sm">✨</span>
            <span className="text-xs font-black text-secondary uppercase tracking-[0.2em]">Trusted Startup Partner</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-black text-primary leading-[0.95] mb-8 tracking-tighter text-balance">
            Building Websites <br className="hidden md:block" />
            for Your 
            <div className="relative inline-flex items-center mx-3 align-middle min-w-[220px] md:min-w-[340px] justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center gap-4"
                >
                  <span className={`${words[index].color} italic block whitespace-nowrap font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-sm transition-colors duration-500`}>
                    {words[index].text}
                  </span>
                  <span className="material-symbols-outlined text-primary text-5xl md:text-7xl lg:text-8xl font-light">
                    {words[index].icon}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
            Business
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-medium tracking-tight opacity-90 text-balance">
            Helping startups go online with modern, fast & affordable websites tailored for growth and conversion.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setIsBookModalOpen(true)}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/20 uppercase tracking-wider text-xs"
            >
              Book a Call <span className="material-symbols-outlined text-sm">call</span>
            </button>
            <Link 
              href="/quote"
              className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary hover:text-white hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/5 uppercase tracking-wider text-xs inline-flex items-center"
            >
              Get a Quote →
            </Link>
          </div>
        </motion.div>
        
        <div className="md:w-[45%] relative h-[600px] hidden lg:flex items-center justify-center">
          <div className="grid grid-cols-2 gap-6 relative p-4">
            {[
              { id: '1460925895917-afdab827c52f', rotate: -6, delay: 0 },
              { id: '1497366216548-37526070297c', rotate: 4, delay: 0.1 },
              { id: '1542744173-8e7e53415bb0', rotate: 8, delay: 0.2 },
              { id: '1551434678-e076c223a692', rotate: -4, delay: 0.3 }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: item.rotate }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0, 
                  zIndex: 20,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.8, ease: "easeOut" }}
                className={`relative w-52 h-64 p-2 bg-white shadow-2xl rounded-[32px] border border-outline-variant cursor-pointer overflow-hidden ${
                  i === 1 ? 'mt-12' : i === 2 ? '-mt-12' : ''
                }`}
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden relative">
                  <Image 
                    alt={`WebFlok Portfolio Detail ${i + 1}`}
                    src={`https://images.unsplash.com/photo-${item.id}?q=80&w=400&h=500&auto=format&fit=crop`}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
            
            {/* Decorative shapes */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      <BookACallModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </>
  );
};

