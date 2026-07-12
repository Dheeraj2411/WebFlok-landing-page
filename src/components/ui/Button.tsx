import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-bold transition-all uppercase tracking-wider text-xs shadow-lg active:scale-95 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-secondary hover:scale-105 hover:shadow-primary/20",
        outline:
          "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 hover:shadow-primary/5",
        ghost: "bg-transparent text-primary hover:bg-primary/10 shadow-none",
        link: "bg-transparent text-primary underline-offset-4 hover:underline shadow-none uppercase-none tracking-normal text-sm",
      },
      size: {
        default: "px-8 py-4",
        sm: "px-4 py-2 text-[10px]",
        lg: "px-10 py-5 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
