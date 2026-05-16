"use client";

import React from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export const FloatingButtons = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hi%20WebFlok!%20I'm%20interested%20in%20building%20a%20website%20for%20my%20business.%20Can%20we%20discuss%3F`;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-3">
      <motion.a 
        href={`tel:${siteConfig.contact.phone}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-white text-primary rounded-full shadow-2xl flex items-center justify-center border-2 border-primary group"
      >
        <span className="material-symbols-outlined text-2xl">call</span>
        <span className="absolute right-full mr-4 bg-primary text-white px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">CALL US</span>
      </motion.a>
      <motion.a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center animate-float group"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
        <span className="absolute right-full mr-4 bg-[#25D366] text-white px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">WHATSAPP</span>
      </motion.a>
    </div>
  );
};
