"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";

export const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      icon: "desktop_windows",
      desc: "High-performance, ultra-fast Next.js websites tailored for conversion and scale.",
      features: ["Next.js & React", "SEO Optimized", "Ultra-Fast Loading"],
      className: "md:col-span-2 lg:col-span-2 lg:row-span-2 bg-primary text-white overflow-hidden relative",
      iconClass: "bg-white/10 text-white",
      textClass: "text-white/90",
      titleClass: "text-white",
      featureClass: "text-secondary border-white/20",
      featureDot: "bg-secondary/20 text-secondary",
      watermark: true
    },
    {
      title: "Social Media & Growth",
      icon: "diversity_3",
      desc: "Complete management of your social profiles to build an engaging brand voice.",
      features: ["Account Audit", "Daily Management", "Audience Growth"],
      className: "lg:col-span-1 bg-white",
      iconClass: "bg-primary/5 text-primary",
      textClass: "text-on-surface-variant",
      titleClass: "text-primary",
      featureClass: "text-primary border-outline-variant",
      featureDot: "bg-primary/10 text-primary",
      watermark: false
    },
    {
      title: "Content Creation",
      icon: "auto_videocam",
      desc: "Professional reel production and storytelling.",
      features: ["Reels", "Graphics"],
      className: "lg:col-span-1 bg-surface-container-low",
      iconClass: "bg-primary/5 text-primary",
      textClass: "text-on-surface-variant",
      titleClass: "text-primary",
      featureClass: "text-primary border-outline-variant",
      featureDot: "bg-primary/10 text-primary",
      watermark: false
    },
    {
      title: "Google SEO",
      icon: "search_insights",
      desc: "Advanced SEO to push you to the first page.",
      features: ["Keywords", "On-Page"],
      className: "lg:col-span-1 bg-surface-container-low",
      iconClass: "bg-primary/5 text-primary",
      textClass: "text-on-surface-variant",
      titleClass: "text-primary",
      featureClass: "text-primary border-outline-variant",
      featureDot: "bg-primary/10 text-primary",
      watermark: false
    },
    {
      title: "Performance Ads",
      icon: "ads_click",
      desc: "Comprehensive marketing funnels and targeted Meta/IG ads that maximize ROI.",
      features: ["Meta Ads", "A/B Testing", "Sales Funnels"],
      className: "md:col-span-2 lg:col-span-2 bg-secondary text-primary relative overflow-hidden",
      iconClass: "bg-primary/10 text-primary",
      textClass: "text-primary/80",
      titleClass: "text-primary",
      featureClass: "text-primary border-primary/20",
      featureDot: "bg-primary/20 text-primary",
      watermark: true
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12">
          <SectionHeader 
            eyebrow="Scalable Solutions"
            title={
              <>
                Comprehensive Services for <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Growth</span>
              </>
            }
          />
          <p className="text-on-surface-variant max-w-sm text-lg md:text-xl leading-relaxed text-balance pt-4 lg:pt-12">
            We provide end-to-end digital excellence that helps startups and local
            businesses dominate their market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className={`group ${service.className} p-8 md:p-10 rounded-[32px] border border-outline-variant/30 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full`}
            >
              {/* Massive Watermark Icon for large cards */}
              {service.watermark && (
                <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] md:text-[300px] opacity-5 -rotate-12 pointer-events-none group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700">
                  {service.icon}
                </span>
              )}

              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${service.iconClass}`}>
                  <span className="material-symbols-outlined text-3xl font-light">
                    {service.icon}
                  </span>
                </div>

                <h3 className={`text-2xl font-black mb-4 ${service.titleClass}`}>
                  {service.title}
                </h3>

                <p className={`text-base md:text-lg leading-relaxed mb-10 ${service.textClass} relative z-10`}>
                  {service.desc}
                </p>
              </div>

              <ul className={`space-y-4 pt-6 mt-8 border-t relative z-10 ${service.featureClass}`}>
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-xs font-black uppercase tracking-widest"
                  >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${service.featureDot}`}>
                      <span className="material-symbols-outlined text-[14px] font-black">
                        done
                      </span>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
