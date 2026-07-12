"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const PingOS = () => {
  const features = [
    {
      title: "Broadcast Messages",
      desc: "Send bulk WhatsApp messages to your customers safely.",
      icon: "campaign",
    },
    {
      title: "Smart Chatbots",
      desc: "Automate your sales and support with AI bots.",
      icon: "robot_2",
    },
    {
      title: "Team Inbox",
      desc: "A shared inbox for your whole team.",
      icon: "inbox",
    },
    {
      title: "API Integration",
      desc: "Connect WhatsApp with your CRM effortlessly.",
      icon: "integration_instructions",
    },
  ];

  return (
    <section id="pingos" className="py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#25D366]/5 rounded-full blur-[100px] -z-10 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 space-y-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#25D366]/10 backdrop-blur-md rounded-full border border-[#25D366]/20 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
              </span>
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">
                Flagship Internal Product
              </span>
            </div>

            <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-primary leading-[1.1] text-balance tracking-tighter">
              Automate WhatsApp with <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">PingOS</span>
            </h2>

            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-medium text-balance">
              Scale your business communication with the ultimate WhatsApp automation platform. Reach thousands instantly and handle queries with AI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-[16px] bg-white border border-outline-variant/30 flex items-center justify-center text-primary shrink-0 shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 group-hover:border-primary/20 transition-all duration-300">
                    <span className="material-symbols-outlined text-2xl font-light">
                      {feature.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-base mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed opacity-90">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <a
                href="https://pingos.me"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-5 bg-[#25D366] text-white rounded-[24px] font-bold text-lg hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_10px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_40px_rgba(37,211,102,0.4)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out" />
                Explore PingOS
                <span className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  arrow_outward
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 relative perspective-[2000px]"
          >
            {/* Massive SaaS Glass Display */}
            <div className="bg-white/40 backdrop-blur-2xl p-4 rounded-[40px] shadow-[0_40px_100px_rgba(30,58,95,0.15)] border border-white/60 relative z-10 overflow-hidden transform-gpu rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700">
              <div className="bg-surface-container rounded-[28px] overflow-hidden aspect-[16/10] relative group shadow-inner border border-outline-variant/20">
                <Image
                  alt="PingOS Dashboard - Comprehensive WhatsApp automation platform visualization"
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&auto=format&fit=crop"
                  width={1200}
                  height={800}
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                  <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_40px_rgba(37,211,102,0.6)] cursor-pointer hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-4xl text-white fill-1 ml-1">
                      play_arrow
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Metric Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 md:-bottom-12 -left-4 md:-left-12 bg-white/90 backdrop-blur-xl p-6 rounded-[24px] shadow-2xl border border-white/50 z-20 hidden md:block"
            >
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-[16px] bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20 shadow-inner">
                  <span className="material-symbols-outlined text-3xl">
                    trending_up
                  </span>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary tracking-tighter">10x</p>
                  <p className="text-[10px] font-black text-secondary uppercase tracking-widest mt-1">
                    Growth Speed
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
