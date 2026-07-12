"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          <h1 className="font-headline text-4xl md:text-5xl font-black text-primary">
            Get a Quote
          </h1>
          <p className="text-on-surface-variant text-lg">
            Answer a few quick questions and get your website quote instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-secondary pt-2">
            <span className="flex items-center gap-1">✓ Free consultation</span>
            <span className="flex items-center gap-1">✓ No hidden charges</span>
            <span className="flex items-center gap-1">✓ Quick response</span>
          </div>
        </motion.div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-[65%] bg-white rounded-[32px] shadow-xl border border-outline-variant p-8 md:p-12"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              {/* Section 1: Basic Information */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary border-b border-outline-variant pb-4">
                  <span className="material-symbols-outlined text-2xl">
                    person
                  </span>
                  <h2 className="text-xl font-bold font-headline uppercase tracking-wider">
                    Basic Information
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1">
                      Full Name
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all"
                      placeholder="Enter your full name"
                      type="text"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Email Address
                      </label>
                      <input
                        className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all"
                        placeholder="your.email@example.com"
                        type="email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary ml-1">
                        Phone Number (optional)
                      </label>
                      <input
                        className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all"
                        placeholder="+91 98765 43210"
                        type="tel"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Project Type */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary border-b border-outline-variant pb-4">
                  <span className="material-symbols-outlined text-2xl">
                    business_center
                  </span>
                  <h2 className="text-xl font-bold font-headline uppercase tracking-wider">
                    Project Type
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 text-center block opacity-70">
                      What kind of website do you need?
                    </label>
                    <select className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all font-medium appearance-none">
                      <option>Select project type or describe below</option>
                      <option>Business Landing Page</option>
                      <option>E-commerce Store</option>
                      <option>SaaS/Platform</option>
                      <option>Personal Portfolio</option>
                      <option>Corporate Website</option>
                    </select>
                  </div>
                  <input
                    className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all"
                    placeholder="Or write your project type here (e.g., Real Estate Portal, Educational Platform)..."
                    type="text"
                  />
                </div>
              </div>

              {/* Section 3: Timeline */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary border-b border-outline-variant pb-4">
                  <span className="material-symbols-outlined text-2xl">
                    hourglass_top
                  </span>
                  <h2 className="text-xl font-bold font-headline uppercase tracking-wider">
                    Timeline & Source
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 block opacity-70">
                      Project Timeline
                    </label>
                    <select className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all font-medium appearance-none">
                      <option>Select timeline</option>
                      <option>Urgent (Less than 2 weeks)</option>
                      <option>Within 1 Month</option>
                      <option>1-3 Months</option>
                      <option>Flexible Timeline</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary ml-1 block opacity-70">
                      How did you find us?
                    </label>
                    <select className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all font-medium appearance-none">
                      <option>Select source</option>
                      <option>Instagram</option>
                      <option>LinkedIn</option>
                      <option>Google Search</option>
                      <option>Friend / Referral</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 4: Project Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-primary border-b border-outline-variant pb-4">
                  <span className="material-symbols-outlined text-2xl">
                    edit_note
                  </span>
                  <h2 className="text-xl font-bold font-headline uppercase tracking-wider">
                    Project Details
                  </h2>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary ml-1 block opacity-70">
                    Describe your idea
                  </label>
                  <textarea
                    className="w-full px-5 py-4 bg-surface rounded-xl border border-outline-variant focus:border-secondary outline-none transition-all min-h-[150px] text-sm"
                    placeholder="Tell us about your business, features you need, design ideas, or reference websites..."
                  ></textarea>
                </div>
              </div>

              <button className="w-full bg-primary text-white py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-secondary transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                Get My Quote
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </motion.div>

          {/* Sidebar / Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full lg:w-[35%] space-y-6"
          >
            <div className="bg-primary text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

              <h3 className="text-2xl font-bold font-headline mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">
                  rocket_launch
                </span>
                Why Request a Quote?
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      payments
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Custom Pricing</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Get a price based exactly on your requirements, not a
                      generic package.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      support_agent
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Expert Consultation</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Free advice on the best tech stack and design for your
                      specific goals.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      event_available
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Clear Roadmap</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      Know exactly when your project will start and finish.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-secondary">
                      verified
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Transparency</h4>
                    <p className="text-sm text-white/70 leading-relaxed">
                      No hidden costs or surprise fees. Everything is clearly
                      documented.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="bg-secondary/5 p-8 rounded-[32px] border border-secondary/10">
              <div className="flex gap-1 text-secondary mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm">
                    star
                  </span>
                ))}
              </div>
              <p className="italic text-on-surface-variant text-sm mb-4">
                &quot;WebFlok provided a quote within 2 hours. Their process was
                extremely smooth and professional.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  WF
                </div>
                <div>
                  <p className="text-xs font-bold text-primary">WebFlok</p>
                  <p className="text-[10px] text-on-surface-variant">
                    CEO, WebFlok
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
