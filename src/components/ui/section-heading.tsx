"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  variant = "default",
  theme = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  variant?: "default" | "signal";
  theme?: "dark" | "light";
}) {
  const isLight = theme === "light";
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "",
        "max-w-3xl",
        className
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          variant === "signal"
            ? "inline-flex items-center gap-2 rounded-md border border-signal-500/30 bg-signal-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-600"
            : isLight
            ? "inline-flex items-center gap-2 rounded-md border border-[#0B1735]/10 bg-[#0B1735]/[0.04] px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#0B1735]/70"
            : "label-eyebrow"
        )}
      >
        {variant === "signal" && (
          <span className="relative flex size-1.5">
            <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
            <span className="relative size-1.5 rounded-full bg-signal-500" />
          </span>
        )}
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className={cn(
          "mt-5 font-display text-display-md font-medium tracking-[-0.035em] text-balance",
          isLight ? "text-[#0B1735]" : "text-white"
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className={cn(
            "mt-5 max-w-2xl text-[16.5px] leading-[1.6] text-pretty",
            isLight ? "text-slate-600" : "text-haze-300",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
