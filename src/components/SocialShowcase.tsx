"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const SocialShowcase = () => {
  const handles = [
    {
      name: "@WebFlok.Agency",
      desc: "Our primary creative showcase",
      followers: "12K+",
    },
    {
      name: "@WebFlok_Media",
      desc: "Daily marketing tips & tricks",
      followers: "8K+",
    },
  ];

  const posts = [
    "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=300&h=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=300&h=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=300&h=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=300&h=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&h=300&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=300&h=300&auto=format&fit=crop",
  ];

  return (
    <section className="py-12 md:py-20 bg-slate-50/50 rounded-[48px] px-8 md:px-16 my-8 overflow-hidden scroll-mt-24 border border-outline-variant/30 shadow-sm">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E1306C]/10 rounded-full border border-[#E1306C]/20">
              <span className="text-[#E1306C] font-black text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                📸 Content Creation Experts
              </span>
            </div>
            <h2 className="font-headline text-4xl md:text-6xl lg:text-7xl font-black text-primary leading-none text-balance tracking-tighter">
              End-to-End <br />
              Social Media <span className="text-[#E1306C]">Handling</span>
            </h2>
            <p className="text-base md:text-xl text-on-surface-variant leading-relaxed font-medium opacity-90 text-balance tracking-tight">
              We don&apos;t just post; we create experiences. From professional
              photography and reel production to daily management and audience
              engagement, we handle everything.
            </p>

            <div className="space-y-4 perspective-distant">
              {handles.map((handle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6, type: "spring", bounce: 0.3 }}
                  viewport={{ once: false, amount: 0.1, margin: "50px" }}
                  whileHover={{ x: 10 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm border border-outline-variant cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#FFD600] via-[#E1306C] to-[#5851DB] flex items-center justify-center text-white">
                      <span className="material-symbols-outlined">camera</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{handle.name}</h4>
                      <p className="text-xs text-on-surface-variant">
                        {handle.desc}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-primary">
                      {handle.followers}
                    </p>
                    <p className="text-[10px] font-bold text-[#E1306C] uppercase tracking-widest">
                      Followers
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-3">
            {posts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: false, amount: 0.1 }}
                className="aspect-square rounded-xl overflow-hidden shadow-md relative group cursor-pointer"
              >
                <Image
                  alt={`WebFlok Social Media Portfolio Post ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={post}
                  width={300}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-4 text-xs font-bold">
                  <span className="flex items-center gap-1">❤️ 2.4K</span>
                  <span className="flex items-center gap-1">💬 128</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
