"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { BookACallModal } from "./BookACallModal";
import { Hero3DCarousel } from "./Hero3DCarousel";
import { HeroBackground } from "./HeroBackground";
import Link from "next/link";
import { Button } from "./ui/Button";

const words = [
  { text: "Growth", icon: "rocket_launch", color: "text-emerald-500" },
  { text: "Revenue", icon: "payments", color: "text-amber-500" },
  { text: "Success", icon: "military_tech", color: "text-yellow-500" },
  { text: "Scale", icon: "trending_up", color: "text-sky-500" },
  { text: "Impact", icon: "bolt", color: "text-rose-500" },
];

export const Hero = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [index, setIndex] = useState(0);
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]); // Keeping it visible
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  
  const carouselY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const carouselRotateX = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const carouselScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section 
        ref={containerRef}
        className="relative pt-24 pb-12 md:pt-32 md:pb-16 min-h-svh flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center overflow-hidden perspective-distant"
      >
        <HeroBackground />
        <motion.div
          style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
          initial={{ opacity: 0, x: -30, rotateY: -10 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="lg:w-[55%] space-y-6 md:space-y-8 preserve-3d"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/5 backdrop-blur-md rounded-full border border-secondary/20 shadow-inner">
            <span className="text-sm animate-pulse">✨</span>
            <span className="text-[10px] font-black text-secondary uppercase tracking-[0.3em]">
              Trusted Startup Partner
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-headline font-black text-primary leading-[0.95] mb-6 tracking-tighter text-balance">
            Websites that Drive <br className="hidden md:block" />
            <div className="relative inline-flex items-center ml-2 align-middle min-w-[280px] md:min-w-[400px] justify-start -mt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
                  className="flex items-center gap-4"
                >
                  <span
                    className={`${words[index].color} italic block whitespace-nowrap font-headline text-5xl md:text-7xl lg:text-[84px] drop-shadow-lg transition-colors duration-500`}
                  >
                    {words[index].text}
                  </span>
                  <span className="material-symbols-outlined text-primary text-5xl md:text-7xl lg:text-[84px] font-light hidden md:block">
                    {words[index].icon}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl leading-relaxed font-medium tracking-tight opacity-90 text-balance">
            Helping startups go online with modern, fast & affordable websites
            tailored for growth and conversion.
          </p>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => setIsBookModalOpen(true)}
                variant="default"
                className="group relative overflow-hidden flex items-center gap-2 text-base md:text-lg px-8 py-5 md:py-6 rounded-[24px] bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-[0_10px_40px_rgba(30,58,95,0.2)] hover:shadow-[0_15px_50px_rgba(30,58,95,0.3)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                Book a Strategy Call{" "}
                <span className="material-symbols-outlined text-xl transition-transform group-hover:rotate-12 group-hover:scale-110">call</span>
              </Button>
              <Button
                asChild
                variant="outline"
                className="group flex items-center gap-2 text-base md:text-lg px-8 py-5 md:py-6 rounded-[24px] bg-white/50 backdrop-blur-md border border-outline-variant/30 hover:bg-white hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 text-primary"
              >
                <Link href="/quote">
                  Get a Quote 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-black uppercase tracking-widest">
              <div className="flex items-center -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center z-[${5-i}]`}>
                    <span className="material-symbols-outlined text-xl text-primary opacity-50">person</span>
                  </div>
                ))}
              </div>
              <span>Trusted by 100+ startups</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: carouselY, scale: carouselScale, rotateX: carouselRotateX }}
          className="lg:w-[45%] relative h-[400px] lg:h-[500px] hidden lg:flex items-center justify-center preserve-3d"
        >
          <Hero3DCarousel />
          
          {/* Decorative shapes */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </motion.div>
      </section>

      <BookACallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
};
