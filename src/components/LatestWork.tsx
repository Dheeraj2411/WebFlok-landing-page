"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";

export const LatestWork = () => {
  const projects = [
    {
      title: "Luxe Decor",
      cat: "E-Commerce",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&h=400&auto=format&fit=crop",
    },
    {
      title: "Social Wave",
      cat: "Marketing",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=400&h=400&auto=format&fit=crop",
    },
    {
      title: "FitLife Studio",
      cat: "Landing Page",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&h=400&auto=format&fit=crop",
    },
    {
      title: "Gourmet Garden",
      cat: "Business Site",
      img: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=400&h=400&auto=format&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
          <SectionHeader
            eyebrow="Curated Portfolio"
            title={
              <>
                Our Latest <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Creations</span>
              </>
            }
          />
          <div className="flex flex-col items-start lg:items-end gap-6">
            <p className="text-on-surface-variant max-w-sm text-left lg:text-right text-lg leading-relaxed text-balance">
              A showcase of our best work across web design, content creation, and
              digital marketing strategies.
            </p>
            <button className="text-primary font-black text-xs tracking-[0.2em] hover:text-secondary transition-colors flex items-center gap-2 group uppercase">
              VIEW ALL PROJECTS{" "}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                east
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="group relative cursor-pointer aspect-4/5 rounded-[32px] overflow-hidden bg-surface-container"
            >
              {/* Background Image */}
              <Image
                alt={`${project.title} - ${project.cat} project by WebFlok agency`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                src={project.img}
                width={400}
                height={500}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Glass Details Container */}
              <div className="absolute inset-x-4 bottom-4 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start">
                <span className="px-3 py-1 bg-secondary text-white text-[10px] font-black tracking-widest uppercase rounded-full mb-3">
                  {project.cat}
                </span>
                <h4 className="text-2xl font-black text-white">
                  {project.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
