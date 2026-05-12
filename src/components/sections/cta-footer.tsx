"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaFooter() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden py-28 lg:py-40"
    >
      {/* Animated world grid */}
      <WorldGrid />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="label-eyebrow-signal mx-auto">
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
              <span className="relative size-1.5 rounded-full bg-signal-500" />
            </span>
            Your Safety, Your Control.
          </span>

          <h2 className="mt-7 font-display text-display-lg font-medium tracking-[-0.04em] text-white text-balance">
            The future of emergency response is{" "}
            <span className="gradient-text-signal">software-defined.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[16.5px] leading-[1.6] text-haze-300">
            Talk to our deployment team. We'll show you a live dispatch in your
            jurisdiction, walk through the integration plan, and quote your
            pilot in under 24 hours.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button size="xl" asChild>
              <a href="#">
                Request government demo
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#architecture">Explore infrastructure</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400">
            <span>SOC 2 Type II</span>
            <span className="size-1 rounded-full bg-haze-500/40" />
            <span>FedRAMP Moderate</span>
            <span className="size-1 rounded-full bg-haze-500/40" />
            <span>CJIS Aligned</span>
            <span className="size-1 rounded-full bg-haze-500/40" />
            <span>ISO 27001</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorldGrid() {
  // Simple stylized "world" grid: latitudes + longitudes + glowing nodes
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-grid-fine bg-grid-lg opacity-30 mask-radial" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[1100px] -translate-x-1/2 rounded-full bg-signal-700/15 blur-[140px]" />

      <svg
        viewBox="0 0 1200 600"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[120%] w-full opacity-35 mask-radial"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="wg-line" x1="0" y1="0" x2="1200" y2="600">
            <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>
        {/* Latitudes (curved) */}
        {[120, 200, 280, 360, 440, 520].map((y, i) => (
          <ellipse
            key={i}
            cx="600"
            cy="300"
            rx="600"
            ry={Math.abs(300 - y)}
            fill="none"
            stroke="url(#wg-line)"
            strokeWidth="0.6"
          />
        ))}
        {/* Longitudes */}
        {Array.from({ length: 18 }).map((_, i) => {
          const angle = (i / 18) * Math.PI;
          return (
            <ellipse
              key={i}
              cx="600"
              cy="300"
              rx={600 * Math.cos(angle - Math.PI / 2)}
              ry="280"
              fill="none"
              stroke="url(#wg-line)"
              strokeWidth="0.6"
            />
          );
        })}
        {/* Glowing nodes */}
        {[
          [200, 240], [340, 180], [480, 280], [620, 220], [760, 300],
          [880, 200], [980, 290], [310, 360], [560, 380], [820, 380],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="3" fill="#FF5560">
              <animate
                attributeName="opacity"
                values="0.4;1;0.4"
                dur={`${2 + (i % 3) * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={x} cy={y} r="9" fill="rgba(255,34,51,0.18)">
              <animate
                attributeName="r"
                values="6;14;6"
                dur={`${2 + (i % 3) * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>

      {/* Top scan */}
      <div className="absolute inset-x-0 top-0 h-[200%] mask-fade-b">
        <div className="absolute inset-x-0 h-[2px] scanline animate-scan" />
      </div>
    </div>
  );
}
