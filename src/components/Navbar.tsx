"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { BookACallModal } from "./BookACallModal";

export const Navbar = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 150) {
      setIsHidden(true);
      setIsMenuOpen(false); // Close menu when hiding nav
    } else {
      setIsHidden(false);
    }
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Leadership", href: "/#leadership" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/#contact-us" },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" }
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-3 md:top-4 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1200px] bg-white/80 backdrop-blur-2xl rounded-full border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-5 md:px-8 py-2 md:py-3"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative w-7 h-7 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300 cursor-pointer">
              <Image
                src="/logo.png"
                alt="WebFlok Logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-none">
              <span className="font-headline font-black text-xl md:text-2xl tracking-tighter text-primary block uppercase">
                WebFlok
              </span>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] text-secondary uppercase leading-tight">
                Digital Agency
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-black tracking-[0.15em] text-on-surface-variant">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-primary transition-all cursor-pointer relative group py-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 rounded-md px-2"
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
              className="bg-primary text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full text-[10px] md:text-[11px] font-black hover:bg-secondary hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20 shrink-0 uppercase tracking-widest inline-flex items-center"
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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
              className="lg:hidden absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-xl p-8 border border-outline-variant"
            >
              <div className="flex flex-col gap-6 items-center text-center">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-black tracking-widest text-on-surface-variant hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 rounded-md px-2"
                  >
                    {item.name.toUpperCase()}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <BookACallModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </>
  );
};
