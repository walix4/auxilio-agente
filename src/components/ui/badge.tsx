import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-white/5 text-haze-200 border border-white/10 px-2.5 py-1 rounded-full",
        signal: "bg-signal-500/10 text-signal-300 border border-signal-500/30 px-2.5 py-1 rounded-full",
        steel: "bg-steel-500/10 text-steel-300 border border-steel-500/30 px-2.5 py-1 rounded-full",
        live: "bg-signal-500/12 text-signal-200 border border-signal-500/40 px-2.5 py-1 rounded-full",
        outline: "border border-white/15 text-haze-100 px-2.5 py-1 rounded-full",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props}>
      {variant === "live" || variant === "signal" ? (
        <span className="relative flex size-1.5">
          <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
          <span className="relative size-1.5 rounded-full bg-signal-500" />
        </span>
      ) : null}
      {children}
    </span>
  );
}
