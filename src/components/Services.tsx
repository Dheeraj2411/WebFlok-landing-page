"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Services = () => {
  const services = [
    {
      title: "Business Website",
      icon: "desktop_windows",
      desc: "High-performance, custom-built websites designed to convert visitors into loyal customers.",
      features: ["Next.js & React", "SEO Optimized", "Ultra-Fast Loading"]
    },
    {
      title: "Social Media Handling",
      icon: "diversity_3",
      desc: "Complete management of your social profiles to build a consistent and engaging brand voice.",
      features: ["Account Audit", "Daily Management", "Audience Growth"]
    },
    {
      title: "Content Creation",
      icon: "auto_videocam",
      desc: "Professional reel production, static graphics, and storytelling that stops the scroll.",
      features: ["Reel Production", "Graphic Design", "Brand Stories"]
    },
    {
      title: "End-to-End Marketing",
      icon: "hub",
      desc: "Comprehensive marketing funnels designed to capture leads and maximize ROI.",
      features: ["Lead Generation", "Sales Funnels", "Growth Strategy"]
    },
    {
      title: "E-Commerce Store",
      icon: "storefront",
      desc: "Scalable online stores with seamless checkout experiences and robust inventory management.",
      features: ["Shopify & Custom", "Secure Payments", "UX Optimization"]
    },
    {
      title: "Google Ranking",
      icon: "search_insights",
      desc: "Advanced SEO strategies to push your business to the first page of search results.",
      features: ["Keyword Research", "On-Page SEO", "Authority Building"]
    },
    {
      title: "Meta & IG Ads",
      icon: "ads_click",
      desc: "Targeted advertising campaigns that reach your ideal customers where they spend their time.",
      features: ["Ad Management", "A/B Testing", "Detailed Analytics"]
    },
    {
      title: "Site Optimization",
      icon: "rocket_launch",
      desc: "Technical enhancements to improve your site's speed, security, and conversion rate.",
      features: ["Core Web Vitals", "Security Audits", "CRO Analysis"]
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-surface scroll-mt-24">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Scalable Solutions</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-primary text-balance leading-[1] tracking-tighter">
            Comprehensive Services <br />
            for Modern <span className="text-gradient italic font-serif">Success</span>
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-sm text-base md:text-lg leading-relaxed font-medium opacity-80 text-balance tracking-tight">
          We provide end-to-end digital excellence that helps startups and local businesses dominate their market.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group bg-white p-8 rounded-[24px] border border-outline-variant shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
          >
            <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-3xl font-light">{service.icon}</span>
            </div>

            <h3 className="text-xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">
              {service.title}
            </h3>

            <p className="text-base text-on-surface-variant leading-relaxed mb-8 flex-grow opacity-90">
              {service.desc}
            </p>

            <ul className="space-y-4 pt-6 border-t border-outline-variant">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[12px] font-black text-secondary uppercase tracking-[0.1em]">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-[14px] font-black text-primary">done</span>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
