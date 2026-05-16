"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookACallModal } from "./BookACallModal";

export const Navbar = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Leadership", href: "/#leadership" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  return (
    <>
      <nav className="fixed top-3 md:top-3 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[1280px] bg-white rounded-[24px] md:rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-5 md:px-8 py-2 transition-all">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Image 
                src="/logo.png" 
                alt="WebFlok Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-none">
              <span className="font-headline font-black text-xl md:text-2xl tracking-tighter text-primary block uppercase">WebFlok</span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-secondary uppercase leading-tight">Digital Agency</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-black tracking-[0.15em] text-on-surface-variant">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="hover:text-primary transition-all cursor-pointer relative group py-1" 
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link 
              href="/quote"
              className="bg-primary text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full text-[10px] md:text-[11px] font-black hover:bg-secondary hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 flex-shrink-0 uppercase tracking-widest inline-flex items-center"
            >
              Get a Quote
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-primary"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-xl p-8 border border-outline-variant animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-6 items-center text-center">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-black tracking-widest text-on-surface-variant hover:text-primary transition-colors" 
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <BookACallModal 
        isOpen={isBookModalOpen} 
        onClose={() => setIsBookModalOpen(false)} 
      />
    </>
  );
};
