import React from "react";
import { cn } from "@/lib/utils";

const Shimmer = ({ className }: { className?: string }) => (
  <div className={cn("animate-shimmer rounded-lg", className)} />
);

export const HeroSkeleton = () => (
  <div className="py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center">
    <div className="md:w-[55%] space-y-8">
      <Shimmer className="w-48 h-8 rounded-full" />
      <div className="space-y-4">
        <Shimmer className="w-full h-16 md:h-20" />
        <Shimmer className="w-3/4 h-16 md:h-20" />
      </div>
      <Shimmer className="w-full h-24" />
      <div className="flex gap-4">
        <Shimmer className="w-40 h-14" />
        <Shimmer className="w-40 h-14" />
      </div>
    </div>
    <div className="md:w-[45%] grid grid-cols-2 gap-4 h-[500px]">
      <Shimmer className="w-full h-full" />
      <Shimmer className="w-full h-full" />
    </div>
  </div>
);

export const ServicesSkeleton = () => (
  <div className="py-16">
    <Shimmer className="w-48 h-10 mb-10" />
    <div className="flex gap-4 overflow-hidden">
      {[1, 2, 3, 4, 5].map((i) => (
        <Shimmer key={i} className="min-w-[160px] h-[320px] rounded-xl" />
      ))}
    </div>
  </div>
);

export const SectionSkeleton = () => (
  <div className="py-16 space-y-8">
    <Shimmer className="w-64 h-12 mx-auto md:mx-0" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-4">
          <Shimmer className="aspect-square rounded-2xl w-full" />
          <Shimmer className="w-3/4 h-6" />
          <Shimmer className="w-1/2 h-4" />
        </div>
      ))}
    </div>
  </div>
);
