"use client";

import { Logo } from "@/components/ui/logo";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const COLS = [
  {
    title: "Platform",
    links: [
      { label: "AI Dispatch Engine", href: "#dispatch-engine" },
      { label: "Officer Agent", href: "#officer-platform" },
      { label: "Criteria Intelligence", href: "#criteria-database" },
      { label: "Communication", href: "#communication" },
      { label: "Architecture", href: "#architecture" },
    ],
  },
  {
    title: "Infrastructure",
    links: [
      { label: "API & Webhooks", href: "#api" },
      { label: "Encryption", href: "#security" },
      { label: "Deployment", href: "#enterprise" },
      { label: "Status", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Customers",
    links: [
      { label: "Police Departments", href: "#use-cases" },
      { label: "Smart Cities", href: "#use-cases" },
      { label: "Universities", href: "#use-cases" },
      { label: "Airports", href: "#use-cases" },
      { label: "Private Security", href: "#use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Contact", href: "#cta" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname();
  const isLight = pathname?.startsWith("/agent") ?? false;
  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t",
        isLight ? "border-slate-200 bg-slate-50 text-[#0B1735]" : "border-white/[0.06] bg-ink-950"
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className={cn(
            "absolute inset-0 bg-grid-fine bg-grid-md mask-fade-b",
            isLight ? "opacity-30" : "opacity-50"
          )}
          style={
            isLight
              ? {
                  backgroundImage:
                    "linear-gradient(rgba(11,23,53,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,23,53,0.06) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }
              : undefined
          }
        />
        <div
          className={cn(
            "absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-[140px]",
            isLight ? "bg-signal-200/40" : "bg-signal-500/10"
          )}
        />
      </div>

      <div className="container-wide relative z-10 pt-24 pb-10">
        <div className="mb-16">
          <p
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.3em] mb-4",
              isLight ? "text-slate-500" : "text-haze-400"
            )}
          >
            // Software-defined public safety infrastructure
          </p>
          <h3
            aria-hidden
            className={cn(
              "font-display text-[clamp(3.5rem,12vw,11rem)] font-black leading-none tracking-[-0.05em] select-none",
              isLight
                ? "text-transparent"
                : "text-stroke"
            )}
            style={
              isLight
                ? { WebkitTextStroke: "1px rgba(11,23,53,0.18)" }
                : undefined
            }
          >
            AUXILIO
          </h3>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo theme={isLight ? "light" : "dark"} />
            <p
              className={cn(
                "mt-5 max-w-sm text-[14px] leading-relaxed",
                isLight ? "text-slate-600" : "text-haze-300"
              )}
            >
              Auxilio is the AI coordination layer for emergency response.
              Built for police departments, smart cities, and infrastructure
              operators that need real-time, software-defined dispatch.
            </p>
            <div
              className={cn(
                "mt-6 inline-flex items-center gap-2 rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em]",
                isLight
                  ? "border-slate-200 bg-white text-[#0B1735]/70"
                  : "border-white/10 bg-white/[0.03] text-haze-200"
              )}
            >
              <span className="size-1.5 rounded-full bg-signal-500 animate-pulse" />
              All systems operational
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLS.map((col) => (
              <div key={col.title}>
                <h4
                  className={cn(
                    "mb-4 font-mono text-[11px] uppercase tracking-[0.2em]",
                    isLight ? "text-slate-500" : "text-haze-400"
                  )}
                >
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className={cn(
                          "group inline-flex items-center gap-1 text-[13.5px] transition-colors",
                          isLight
                            ? "text-slate-700 hover:text-[#0B1735]"
                            : "text-haze-200 hover:text-white"
                        )}
                      >
                        {l.label}
                        <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-16 mb-6 h-px",
            isLight ? "bg-slate-200" : "hairline-x"
          )}
        />

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div
            className={cn(
              "flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px]",
              isLight ? "text-slate-500" : "text-haze-400"
            )}
          >
            <span>© 2026 Auxilio Systems, Inc.</span>
            <a href="#" className={isLight ? "hover:text-[#0B1735]" : "hover:text-white"}>
              Terms
            </a>
            <a href="#" className={isLight ? "hover:text-[#0B1735]" : "hover:text-white"}>
              Privacy
            </a>
            <a href="#" className={isLight ? "hover:text-[#0B1735]" : "hover:text-white"}>
              Trust Center
            </a>
            <a href="#" className={isLight ? "hover:text-[#0B1735]" : "hover:text-white"}>
              SOC 2
            </a>
          </div>
          <div
            className={cn(
              "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]",
              isLight ? "text-slate-500" : "text-haze-400"
            )}
          >
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            >
              ▮
            </motion.span>
            v25.04 · build 4F2A1
          </div>
        </div>
      </div>
    </footer>
  );
}
