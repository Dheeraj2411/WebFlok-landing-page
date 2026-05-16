import React from "react";
import dynamic from "next/dynamic";
import { 
  HeroSkeleton, 
  ServicesSkeleton, 
  SectionSkeleton, 
} from "@/components/Skeletons";

import { Navbar } from "@/components/Navbar";
import { FloatingButtons } from "@/components/FloatingButtons";

// On-demand loading for sections
const Hero = dynamic(() => import("@/components/Hero").then(m => m.Hero), { 
  loading: () => <HeroSkeleton /> 
});
const Services = dynamic(() => import("@/components/Services").then(m => m.Services), { 
  loading: () => <ServicesSkeleton /> 
});
const HowItWorks = dynamic(() => import("@/components/HowItWorks").then(m => m.HowItWorks), { 
  loading: () => <SectionSkeleton /> 
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs").then(m => m.WhyChooseUs), { 
  loading: () => <div className="py-16 h-[400px] animate-shimmer rounded-3xl" /> 
});
const PingOS = dynamic(() => import("@/components/PingOS").then(m => m.PingOS), { 
  loading: () => <div className="py-20 h-[600px] animate-shimmer rounded-[32px]" /> 
});
const SocialShowcase = dynamic(() => import("@/components/SocialShowcase").then(m => m.SocialShowcase), { 
  loading: () => <div className="py-20 h-[500px] animate-shimmer rounded-3xl" /> 
});
const Mission = dynamic(() => import("@/components/Mission").then(m => m.Mission), { 
  loading: () => <div className="py-20 h-[300px] animate-shimmer rounded-[24px]" /> 
});
const LatestWork = dynamic(() => import("@/components/LatestWork").then(m => m.LatestWork), { 
  loading: () => <SectionSkeleton /> 
});
const Testimonials = dynamic(() => import("@/components/Testimonials").then(m => m.Testimonials), { 
  loading: () => <div className="py-20 h-[400px] animate-shimmer" /> 
});
const ContactCTA = dynamic(() => import("@/components/ContactCTA").then(m => m.ContactCTA), { 
  loading: () => <div className="py-20 h-[500px] animate-shimmer rounded-[32px]" /> 
});
const Footer = dynamic(() => import("@/components/Footer").then(m => m.Footer));

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden selection:bg-secondary/30">
      <Navbar />

      <div className="max-w-[1280px] mx-auto px-6 pt-10 md:pt-12">
        <Hero />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <PingOS />
        <SocialShowcase />
        <Mission />
        <LatestWork />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </div>

      <FloatingButtons />
    </main>
  );
}
