"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const PingOS = () => {
  const features = [
    { title: "Broadcast Messages", desc: "Send bulk WhatsApp messages to your customers without getting banned.", icon: "campaign" },
    { title: "Smart Chatbots", desc: "Automate your sales and support with AI-driven WhatsApp bots.", icon: "robot_2" },
    { title: "Team Inbox", desc: "A shared inbox for your whole team to manage WhatsApp conversations.", icon: "inbox" },
    { title: "API Integration", desc: "Connect WhatsApp with your CRM or website easily.", icon: "integration_instructions" },
  ];

  return (
    <section id="pingos" className="py-20 md:py-32 relative overflow-hidden scroll-mt-24">
      {/* Decorative background element */}
      <div className="absolute -right-20 top-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em]">Our Flagship SaaS Platform</span>
          </div>
          
          <h2 className="font-headline text-4xl md:text-7xl font-black text-primary leading-[1.1] text-balance tracking-tighter">
            Automate WhatsApp <br />
            with <span className="text-gradient italic font-serif">PingOS</span>
          </h2>
          
          <p className="text-base md:text-xl text-on-surface-variant leading-relaxed font-medium tracking-tight opacity-90 text-balance">
            Scale your business communication with the ultimate WhatsApp automation tool. PingOS helps you reach thousands of customers instantly and handle queries with AI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary flex-shrink-0 border border-outline-variant">
                  <span className="material-symbols-outlined text-xl">{feature.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-on-surface-variant leading-snug">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <a 
              href="https://pingos.me" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#1da851] transition-all shadow-lg hover:shadow-[#25D366]/20 items-center gap-3"
            >
              EXPLORE PINGOS <span className="material-symbols-outlined">launch</span>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="bg-white p-4 rounded-[32px] shadow-2xl border border-outline-variant relative z-10 overflow-hidden">
            <div className="bg-surface-container-low rounded-[24px] overflow-hidden aspect-video relative group">
              <Image 
                alt="PingOS Dashboard - Comprehensive WhatsApp automation platform visualization" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&h=800&auto=format&fit=crop" 
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg cursor-pointer">
                    <span className="material-symbols-outlined fill-1">play_arrow</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">See PingOS in Action</p>
                    <p className="text-xs opacity-80 uppercase tracking-widest font-bold">2 Min Product Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating metrics card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 md:-bottom-10 left-4 md:-left-10 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">trending_up</span>
              </div>
              <div>
                <p className="text-2xl font-black text-primary">10x</p>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Growth Speed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
