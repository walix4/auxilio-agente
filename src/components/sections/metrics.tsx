"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const METRICS = [
  { value: 5, suffix: "s", label: "End-to-end dispatch", sub: "T+0 → 50 dispatched" },
  { value: 50, suffix: "", label: "Officers in parallel", sub: "Promise.all fanout" },
  { value: 30000, suffix: "+", label: "Responders supported", sub: "Per agency tier" },
  { value: 100, suffix: "M+", label: "Hardware replaced", sub: "USD per pilot city" },
  { value: 99.99, suffix: "%", decimals: 2, label: "Architecture uptime", sub: "Multi-region active/active" },
  { value: 6, suffix: "ms", label: "Geo query latency", sub: "p99 under load" },
];

export function Metrics() {
  return (
    <section className="relative isolate scroll-mt-32 py-28 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-bold bg-grid-lg opacity-20 mask-radial" />
        <div className="absolute -top-24 left-1/2 h-[480px] w-[920px] -translate-x-1/2 rounded-full bg-signal-700/15 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <SectionHeading
          eyebrow="Metrics · Operational Reality"
          title={
            <>
              The numbers that<br />
              <span className="gradient-text-signal">decide outcomes.</span>
            </>
          }
          description="These are not marketing figures. They are the operational targets Auxilio holds itself to — measured in production, every minute of every day."
          align="left"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m, i) => (
            <MetricCell key={m.label} metric={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCell({
  metric,
  index,
}: {
  metric: (typeof METRICS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    const from = 0;
    const to = metric.value;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setDisplay(from + (to - from) * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, metric.value]);

  const decimals = metric.decimals ?? 0;
  const formatted = metric.value >= 1000
    ? Math.round(display).toLocaleString()
    : display.toFixed(decimals);

  const col = index % 3;
  const row = Math.floor(index / 3);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.06 }}
      className={cn(
        "group relative overflow-hidden p-8 lg:p-10 transition-colors hover:bg-white/[0.015]",
        // grid lines (skip outer edges)
        col !== 0 && "lg:border-l border-white/[0.06]",
        col === 1 && "sm:border-l border-white/[0.06]",
        row !== 0 && "border-t border-white/[0.06]"
      )}
    >
      <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-haze-400">
        // {metric.label}
      </div>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tabular-nums tracking-[-0.04em] text-white">
          {formatted}
        </span>
        <span className="font-display text-2xl font-semibold tracking-[-0.02em] gradient-text-signal">
          {metric.suffix}
        </span>
      </div>
      <div className="mt-2 text-[13px] text-haze-300">{metric.sub}</div>

      {/* Hover line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-8 bottom-6 h-px scale-x-0 origin-left bg-gradient-to-r from-signal-500/60 via-signal-500/40 to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
    </motion.div>
  );
}
