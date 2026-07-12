"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-outline-variant relative overflow-hidden">
      {/* Decorative Glowing Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="space-y-6 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.png"
                alt="WebFlok Logo"
                fill
                sizes="40px"
                className="object-contain"
              />
            </div>
            <span className="font-headline font-black text-2xl tracking-tighter text-primary uppercase">
              WebFlok
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs font-medium">
            Premium web design agency based in India, helping local startups
            achieve global standards through modern digital excellence.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px]">
            Quick Links
          </h4>
          <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
            <li>
              <Link className="hover:text-primary transition-colors flex w-fit items-center gap-1 group" href="/">
                <span className="w-0 h-[2px] bg-secondary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors flex w-fit items-center gap-1 group"
                href="/about"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors flex w-fit items-center gap-1 group"
                href="#services"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                Our Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors flex w-fit items-center gap-1 group"
                href="/quote"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                Get a Quote
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-primary transition-colors flex w-fit items-center gap-1 group"
                href="#portfolio"
              >
                <span className="w-0 h-[2px] bg-secondary group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-1"></span>
                Portfolio
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px]">
            Connect
          </h4>
          <div className="flex flex-col gap-3 items-center md:items-start">
            <a
              href={siteConfig.social.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/50 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-sm">
                  photo_camera
                </span>
              </div>
              {siteConfig.social.instagramId}
            </a>
            <a
              href={siteConfig.social.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/50 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
              </div>
              LinkedIn
            </a>
            <a
              href={siteConfig.social.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/50 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-sm">
                  facebook
                </span>
              </div>
              Facebook
            </a>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white border border-outline-variant/50 shadow-sm flex items-center justify-center group-hover:bg-[#25D366] group-hover:border-[#25D366] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                <span className="material-symbols-outlined text-sm">chat</span>
              </div>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="font-black text-primary uppercase tracking-[0.2em] text-[10px]">
            Our Products
          </h4>
          <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
            <li>
              <a
                className="hover:text-primary transition-colors flex items-center gap-2"
                href="https://pingos.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                PingOS{" "}
                <span className="material-symbols-outlined text-[10px]">
                  launch
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black text-on-surface-variant uppercase tracking-[0.3em]">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p>© 2024 WEBFLOK AGENCY. ALL RIGHTS RESERVED.</p>
          <p className="text-on-surface-variant/70">
            WEBFLOK IS A PRODUCT OF PINGOS TECHNOLOGIES.
          </p>
        </div>
        <div className="flex gap-8">
          <Link className="hover:text-primary" href="/privacy">
            Privacy Policy
          </Link>
          <Link className="hover:text-primary" href="#">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};
