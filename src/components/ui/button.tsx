"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-signal-600 text-white shadow-[0_0_0_1px_rgba(255,34,51,0.5),0_10px_40px_-10px_rgba(255,34,51,0.6)] hover:bg-signal-500 hover:shadow-[0_0_0_1px_rgba(255,34,51,0.7),0_15px_50px_-8px_rgba(255,34,51,0.85)]",
        secondary:
          "bg-white/[0.04] text-white border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20",
        ghost:
          "text-haze-100 hover:bg-white/[0.04]",
        outline:
          "border border-white/15 text-white hover:border-white/30 hover:bg-white/[0.03]",
        steel:
          "bg-steel-700 text-white hover:bg-steel-600 shadow-[0_0_0_1px_rgba(56,102,230,0.4),0_10px_40px_-10px_rgba(56,102,230,0.55)]",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-full",
        md: "h-11 px-5 text-sm rounded-full",
        lg: "h-[52px] px-7 py-3.5 text-[15px] rounded-full",
        xl: "h-14 px-8 text-base rounded-full",
        icon: "size-10 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
