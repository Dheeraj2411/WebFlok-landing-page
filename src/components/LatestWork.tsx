"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const LatestWork = () => {
  const projects = [
    { title: "Luxe Decor", cat: "E-Commerce", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&h=400&auto=format&fit=crop" },
    { title: "Social Wave", cat: "Marketing", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&h=400&auto=format&fit=crop" },
    { title: "FitLife Studio", cat: "Landing Page", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&h=400&auto=format&fit=crop" },
    { title: "Gourmet Garden", cat: "Business Site", img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&h=400&auto=format&fit=crop" },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 scroll-mt-24">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
        <div className="space-y-6 max-w-2xl">
          <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Curated Portfolio</span>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl font-black text-primary text-balance leading-[1] tracking-tighter">
            Our Latest <span className="text-gradient italic font-serif">Creations</span>
          </h2>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-6">
          <p className="text-on-surface-variant max-w-sm text-left lg:text-right text-base md:text-lg leading-relaxed font-medium opacity-80 text-balance">
            A showcase of our best work across web design, content creation, and digital marketing strategies.
          </p>
          <button className="text-secondary font-black text-xs tracking-[0.2em] hover:text-primary transition-colors flex items-center gap-2 group uppercase">
            VIEW ALL PROJECTS <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 shadow-lg bg-surface-container">
              <Image 
                alt={`${project.title} - ${project.cat} project by WebFlok agency`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                src={project.img} 
                width={400}
                height={500}
              />
            </div>
            <h3 className="text-lg font-bold text-primary">{project.title}</h3>
            <p className="text-sm text-secondary uppercase tracking-widest font-bold">{project.cat}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
