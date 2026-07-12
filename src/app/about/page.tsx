"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      desc: "We strive for perfection in every pixel and every line of code.",
      icon: "verified",
    },
    {
      title: "Innovation",
      desc: "Staying ahead of digital trends to keep your business relevant.",
      icon: "lightbulb",
    },
    {
      title: "Integrity",
      desc: "Transparent processes and honest communication at every step.",
      icon: "handshake",
    },
  ];

  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden selection:bg-secondary/30">
      <Navbar />

      <div className="max-w-[1280px] mx-auto px-6 pt-24 md:pt-32 pb-12 md:pb-16">
        {/* About Hero */}
        <section className="py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-1/2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                <span className="material-symbols-outlined text-xs text-primary">
                  history_edu
                </span>
                <span className="text-xs font-black text-primary uppercase tracking-widest">
                  Our Story
                </span>
              </div>
              <h1 className="font-headline text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter flex flex-wrap items-center gap-4">
                We Build Digital
                <span className="flex items-center gap-3">
                  <span className="text-gradient italic font-serif">
                    Legacies
                  </span>
                  <span className="material-symbols-outlined text-primary text-4xl md:text-5xl lg:text-6xl">
                    auto_awesome
                  </span>
                </span>
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed opacity-90 text-balance">
                WebFlok was born out of a simple mission: to empower local
                businesses and startups with the same high-end digital tools
                used by global giants. We are a collective of
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/5 rounded-lg font-bold text-primary mx-1">
                  <span className="material-symbols-outlined text-sm">
                    brush
                  </span>{" "}
                  designers
                </span>
                ,
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/5 rounded-lg font-bold text-primary mx-1">
                  <span className="material-symbols-outlined text-sm">
                    code
                  </span>{" "}
                  developers
                </span>
                , and
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-primary/5 rounded-lg font-bold text-primary mx-1">
                  <span className="material-symbols-outlined text-sm">
                    query_stats
                  </span>{" "}
                  strategists
                </span>
                obsessed with
                <span className="inline-flex items-center gap-1.5 text-emerald-600 font-black ml-1">
                  growth{" "}
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                </span>
                .
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-1/2 relative"
            >
              <div className="aspect-video rounded-[32px] overflow-hidden shadow-2xl border border-outline-variant">
                <Image
                  src="/webflok_team_mission.png"
                  alt="WebFlok Team"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-12 md:py-16 bg-surface-container-low rounded-[32px] px-8 md:px-12 my-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
                  <span className="material-symbols-outlined">
                    {value.icon}
                  </span>
                </div>
                <h3 className="text-xl font-black text-primary uppercase tracking-wider">
                  {value.title}
                </h3>
                <p className="text-on-surface-variant opacity-80 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Text Section */}
        <section className="py-12 md:py-16 max-w-3xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">
                rocket_launch
              </span>
            </div>
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-primary">
            Why WebFlok?
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed opacity-90">
            In a world of template-based agencies, we stand out by offering
            custom solutions tailored to your unique business DNA. We don&apos;t just
            deliver a website; we deliver a
            <span className="font-bold text-primary inline-flex items-center gap-1 mx-1 italic">
              <span className="material-symbols-outlined text-sm">
                settings_input_component
              </span>{" "}
              conversion engine
            </span>
            . From SEO optimization to seamless UI/UX, every detail is
            engineered to help you win.
          </p>
        </section>
      </div>

      <Footer />
      <FloatingButtons />
    </main>
  );
}
