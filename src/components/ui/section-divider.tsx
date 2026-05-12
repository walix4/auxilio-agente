"use client";

import { motion } from "framer-motion";

export function SectionDivider({ label }: { label?: string }) {
  return (
    <div aria-hidden className="container-wide relative py-2">
      <div className="flex items-center gap-4">
        <span className="hidden md:inline-block size-1.5 rounded-full bg-signal-500/60" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-30% 0px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hairline-x flex-1 origin-left"
        />
        {label && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-haze-500">
            {label}
          </span>
        )}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-30% 0px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="hairline-x flex-1 origin-right"
        />
        <span className="hidden md:inline-block size-1.5 rounded-full bg-signal-500/60" />
      </div>
    </div>
  );
}
