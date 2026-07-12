"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

interface BookACallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookACallModal = ({ isOpen, onClose }: BookACallModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-100"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-101 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white w-full max-w-md rounded-[40px] shadow-2xl border border-outline-variant pointer-events-auto overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>

              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="font-headline text-2xl md:text-3xl font-black text-primary uppercase tracking-tight leading-none text-balance">
                      Book a <br />
                      Strategy Call
                    </h2>
                    <p className="text-on-surface-variant text-sm mt-2 font-medium opacity-80">
                      Let&apos;s discuss how we can scale your brand.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors shrink-0"
                  >
                    <span className="material-symbols-outlined text-primary text-2xl">
                      close
                    </span>
                  </button>
                </div>

                <form
                  className="space-y-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-surface-container rounded-2xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-bold text-sm shadow-inner hover:border-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 bg-surface-container rounded-2xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-bold text-sm shadow-inner hover:border-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder={siteConfig.contact.phone}
                      className="w-full px-5 py-4 bg-surface-container rounded-2xl border border-outline-variant focus:border-primary focus:ring-4 focus:ring-primary/10 focus:outline-none transition-all duration-300 font-bold text-sm shadow-inner hover:border-primary/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">
                      Preferred Time
                    </label>
                    <select className="w-full px-5 py-4 bg-surface-container rounded-2xl border border-outline-variant focus:border-primary focus:outline-none transition-all font-bold text-sm appearance-none shadow-inner cursor-pointer">
                      <option>Morning (10 AM - 12 PM)</option>
                      <option>Afternoon (2 PM - 5 PM)</option>
                      <option>Evening (6 PM - 8 PM)</option>
                    </select>
                  </div>

                  <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-secondary transition-all shadow-xl shadow-primary/20 mt-6 active:scale-95">
                    Confirm Booking
                  </button>
                </form>

                <div className="mt-10 pt-8 border-t border-outline-variant text-center">
                  <p className="text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em] mb-5 opacity-60">
                    Or Instant Connect
                  </p>
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 w-full py-4 bg-[#25D366]/10 text-[#075E54] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20 active:scale-95"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      alt="WhatsApp"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
