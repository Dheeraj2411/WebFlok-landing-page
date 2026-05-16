"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/config";
import { BookACallModal } from "./BookACallModal";

export const ContactCTA = () => {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  return (
    <>
      <section id="contact-us" className="py-20 md:py-32 scroll-mt-24">
        <div className="bg-surface-container-high rounded-[48px] p-10 md:p-20 lg:p-24 flex flex-col lg:flex-row gap-20 items-center border border-outline-variant shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden relative">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="lg:w-[55%] space-y-10 relative z-10">
            <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Direct Consultation</span>
            </div>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1] text-balance tracking-tighter">
              Ready to scale <br /> your business?
            </h2>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-lg leading-relaxed font-medium opacity-90 text-balance tracking-tight">
              Stop waiting and start growing. Get a professional website that works as hard as you do.
            </p>
            <div className="flex flex-wrap gap-5 pt-6">
              <button 
                onClick={() => setIsBookModalOpen(true)}
                className="bg-primary text-white px-10 py-5 rounded-2xl font-black hover:bg-secondary transition-all shadow-2xl shadow-primary/20 flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] active:scale-95"
              >
                BOOK A CALL <span className="material-symbols-outlined">call</span>
              </button>
              <a 
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-primary text-primary px-10 py-5 rounded-2xl font-black hover:bg-primary/5 transition-all uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 active:scale-95"
              >
                WHATSAPP US <span className="material-symbols-outlined text-sm">chat</span>
              </a>
            </div>
          </div>
          <div className="lg:w-[45%] bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-outline-variant w-full relative z-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="font-headline text-3xl font-black text-primary mb-6 tracking-tight">Get a Free Quote</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input className="w-full px-5 py-4 bg-surface rounded-2xl border border-outline-variant focus:border-primary outline-none text-sm transition-all font-bold shadow-inner" placeholder="Your Name" type="text" required />
                <input className="w-full px-5 py-4 bg-surface rounded-2xl border border-outline-variant focus:border-primary outline-none text-sm transition-all font-bold shadow-inner" placeholder="Company Name" type="text" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all" placeholder="Email Address" type="email" required />
                <input className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all" placeholder="Phone Number" type="tel" required />
              </div>

              <input className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all" placeholder="Current Website URL (if any)" type="url" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all font-bold text-on-surface-variant">
                  <option>Select Service</option>
                  <option>Web Design & Development</option>
                  <option>SEO Optimization</option>
                  <option>Google/Meta Ads</option>
                  <option>Full Digital Branding</option>
                </select>
                <select className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all font-bold text-on-surface-variant">
                  <option>Found us via?</option>
                  <option>Instagram</option>
                  <option>LinkedIn</option>
                  <option>Google Search</option>
                  <option>Referral</option>
                </select>
              </div>

              <select className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all font-bold text-on-surface-variant">
                <option>Monthly Budget</option>
                <option>₹10,000 - ₹30,000</option>
                <option>₹30,000 - ₹70,000</option>
                <option>₹70,000 - ₹1.5 Lakh</option>
                <option>₹1.5 Lakh+</option>
              </select>

              <textarea 
                className="w-full px-4 py-3 bg-surface rounded-xl border border-outline-variant focus:border-primary outline-none text-sm transition-all min-h-[100px]" 
                placeholder="Tell us about your business, features you need, design ideas, or reference websites..."
              ></textarea>

              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-secondary hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-primary/10 flex items-center justify-center gap-2">
                GET MY QUOTE <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
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
