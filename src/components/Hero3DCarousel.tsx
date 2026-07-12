"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "1460925895917-afdab827c52f",
  "1497366216548-37526070297c",
  "1542744173-8e7e53415bb0",
  "1551434678-e076c223a692",
];

export const Hero3DCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[480px] h-[400px] lg:h-[480px] flex items-center justify-center perspective-distant">
      <div className="relative w-full h-full preserve-3d flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {images.map((img, index) => {
            // Calculate relative position (0 is active, 1 is next, -1 is prev, etc.)
            let offset = index - currentIndex;
            if (offset < -1) offset += images.length;
            if (offset > 1) offset -= images.length;
            
            // Only render items close to the current index for performance and clean 3D
            if (Math.abs(offset) > 2) return null;

            const isFront = offset === 0;
            const zIndex = 10 - Math.abs(offset);
            
            // 3D Transforms
            const scale = isFront ? 1 : 0.85;
            const x = offset * 80;
            const y = Math.abs(offset) * -20;
            const rotateY = offset * -15;
            const rotateZ = offset * 2;
            const opacity = isFront ? 1 : 0.4;

            return (
              <motion.div
                key={img}
                initial={false}
                animate={{
                  scale,
                  x,
                  y,
                  rotateY,
                  rotateZ,
                  zIndex,
                  opacity,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
                }}
                className="absolute w-[80%] aspect-4/5 rounded-[32px] overflow-visible shadow-2xl border-4 border-white cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-surface">
                  <Image
                    alt={`Portfolio item ${index + 1}`}
                    src={`https://images.unsplash.com/photo-${img}?q=80&w=800&h=1000&auto=format&fit=crop`}
                    fill
                    sizes="(max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  {!isFront && (
                    <div className="absolute inset-0 bg-black/10 transition-opacity" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Floating Trust Element overlay on front image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute -bottom-2 -left-4 lg:-left-8 bg-white/95 backdrop-blur-md p-3 lg:p-4 rounded-2xl shadow-xl flex items-center gap-3 lg:gap-4 border border-outline-variant z-20 pointer-events-none"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
            <span className="material-symbols-outlined text-emerald-600 text-2xl">trending_up</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Conversion Rate</p>
            <p className="text-2xl font-black text-primary">+240%</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
