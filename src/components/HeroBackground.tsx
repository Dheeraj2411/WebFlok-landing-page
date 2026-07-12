"use client";

import React from "react";
import { motion } from "framer-motion";

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 bg-background" style={{ perspective: '1200px' }}>
      {/* 3D Perspective Grid */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "0px 80px"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute bottom-[-20%] left-[-20%] right-[-20%] h-[60%] opacity-40"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(30,58,95,0.08) 1px, transparent 1px), linear-gradient(to top, rgba(30,58,95,0.08) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
          transform: 'rotateX(75deg) translateZ(-100px)',
          transformOrigin: 'top center',
          transformStyle: "preserve-3d"
        }}
      >
        {/* Fade out grid at the top edge */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background"></div>
      </motion.div>
      
      {/* 3D Floating Geometry 1: Large Cube/Panel */}
      <motion.div
        animate={{ 
          rotateX: [0, 360], 
          rotateY: [0, 360],
          y: [0, -40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] right-[5%] w-72 h-72 rounded-[40px] border border-secondary/20 shadow-[0_0_60px_rgba(37,99,235,0.15)] backdrop-blur-md bg-linear-to-tr from-secondary/10 to-transparent"
        style={{ transformStyle: "preserve-3d" }}
      />
      
      {/* 3D Floating Geometry 2: Golden Sphere/Orb */}
      <motion.div
        animate={{ 
          rotateX: [360, 0], 
          rotateZ: [0, 360],
          y: [0, 60, 0]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[2%] w-56 h-56 rounded-full border border-tertiary-fixed-dim/30 shadow-[0_0_80px_rgba(161,98,7,0.15)] backdrop-blur-3xl bg-linear-to-bl from-tertiary-fixed-dim/20 to-transparent"
        style={{ transformStyle: "preserve-3d" }}
      />
      
      {/* 3D Floating Geometry 3: Small Primary Block */}
      <motion.div
        animate={{ 
          rotateY: [0, -360],
          rotateZ: [0, 180, 0],
          x: [0, 40, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[25%] left-[35%] w-24 h-24 rounded-2xl border border-primary/20 shadow-[0_0_40px_rgba(30,58,95,0.2)] bg-linear-to-br from-primary/10 to-transparent"
        style={{ transformStyle: "preserve-3d" }}
      />
      
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
    </div>
  );
};
