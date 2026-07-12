import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "space-y-6",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      <div
        className={cn(
          "inline-flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        {align === "center" && <span className="w-8 h-[1px] bg-secondary" />}
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-secondary">
          {eyebrow}
        </h2>
        <span className="w-8 h-[1px] bg-secondary" />
      </div>

      <h3
        className={cn(
          "font-headline font-black text-primary text-balance tracking-tighter leading-[1.1]",
          "text-5xl md:text-6xl", // Default sizes
          align === "left" && "lg:text-7xl" // Only go to 7xl if left-aligned (like Services/Portfolio)
        )}
      >
        {title}
      </h3>

      {subtitle && (
        <p
          className={cn(
            "text-on-surface-variant text-lg md:text-xl leading-relaxed text-balance",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
