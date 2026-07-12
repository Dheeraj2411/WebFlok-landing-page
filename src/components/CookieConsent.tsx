"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("webflok_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("webflok_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("webflok_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 md:px-6 pb-4 md:pb-6 pointer-events-none"
        >
          <div className="max-w-[1200px] mx-auto bg-white/80 backdrop-blur-2xl border border-white/50 shadow-[0_-10px_60px_rgba(30,58,95,0.1)] p-5 md:p-6 rounded-[24px] pointer-events-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 relative overflow-hidden">
            {/* Subtle Glow */}
            <div className="absolute top-1/2 -translate-y-1/2 left-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full" />
            
            <div className="flex items-center gap-5 relative z-10 w-full lg:w-auto">
              <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center shrink-0 border border-outline-variant text-primary shadow-inner hidden md:flex">
                <span className="material-symbols-outlined text-xl">security</span>
              </div>
              <div>
                <h3 className="font-black text-primary text-sm md:text-base uppercase tracking-widest mb-1">
                  Your Privacy
                </h3>
                <p className="text-xs md:text-sm text-on-surface-variant font-medium leading-relaxed max-w-xl">
                  We use cookies to personalize content and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                  Read our <Link href="/privacy" className="text-primary underline underline-offset-2 hover:text-secondary">Privacy Policy</Link>.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto relative z-10 shrink-0">
              <button
                onClick={handleDecline}
                className="flex-1 lg:flex-none px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest text-on-surface-variant bg-surface hover:bg-surface-container transition-colors border border-outline-variant"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 lg:flex-none px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest text-white bg-primary hover:bg-secondary hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                Accept All
              </button>
            </div>
            
            <button 
              onClick={handleDecline}
              className="absolute top-4 right-4 md:hidden w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 text-on-surface-variant"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
