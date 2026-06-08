"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/logo.png" 
                alt="WebFlok Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="font-headline font-black text-2xl tracking-tighter text-primary uppercase">WebFlok</span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
            Premium web design agency based in India, helping local startups achieve global standards through modern digital excellence.
          </p>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px]">Quick Links</h4>
          <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
            <li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#services">Our Services</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="/quote">Get a Quote</Link></li>
            <li><Link className="hover:text-primary transition-colors" href="#portfolio">Portfolio</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px]">Connect</h4>
          <div className="flex flex-col gap-3">
            <a 
              href={siteConfig.social.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </div>
              {siteConfig.social.instagramId}
            </a>
            <a 
              href={siteConfig.social.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </div>
              LinkedIn
            </a>
            <a 
              href={siteConfig.social.facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-sm">facebook</span>
              </div>
              Facebook
            </a>
            <a 
              href={siteConfig.social.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                <span className="material-symbols-outlined text-sm">chat</span>
              </div>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px]">Our Products</h4>
          <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
            <li>
              <a className="hover:text-primary transition-colors flex items-center gap-2" href="https://pingos.me" target="_blank" rel="noopener noreferrer">
                PingOS <span className="material-symbols-outlined text-[10px]">launch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>© 2024 WEBFLOK AGENCY. ALL RIGHTS RESERVED.</p>
          <p className="text-on-surface-variant/70">WEBFLOK IS A PRODUCT OF PINGOS TECHNOLOGIES.</p>
        </div>
        <div className="flex gap-8">
          <Link className="hover:text-primary" href="/privacy">Privacy Policy</Link>
          <Link className="hover:text-primary" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};
