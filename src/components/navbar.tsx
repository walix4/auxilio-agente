"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Platform", href: "/#how-it-works" },
  { label: "Architecture", href: "/#architecture" },
  { label: "Intelligence", href: "/#criteria-database" },
  { label: "Security", href: "/#security" },
  { label: "Use cases", href: "/#use-cases" },
  { label: "Agent App", href: "/agent", highlight: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isLight = pathname?.startsWith("/agent") ?? false;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[padding,background] duration-500",
          scrolled ? "py-2" : "py-4"
        )}
      >
        <div className="container-wide">
          <nav
            className={cn(
              "relative flex items-center justify-between rounded-full border px-3 transition-all duration-500",
              scrolled
                ? isLight
                  ? "border-slate-200 bg-white/85 px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(11,23,53,0.18)]"
                  : "border-white/10 bg-ink-900/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]"
                : isLight
                ? "border-transparent bg-white/60 backdrop-blur-md px-2 py-2"
                : "border-transparent bg-transparent px-2 py-2"
            )}
          >
            <a href="/" aria-label="Auxilio home" className="pl-2">
              <Logo theme={isLight ? "light" : "dark"} />
            </a>

            <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className={cn(
                      "relative inline-flex items-center gap-1.5 rounded-md px-3.5 py-1.5 text-[13.5px] transition-colors",
                      l.highlight
                        ? isLight
                          ? "border border-signal-500/30 bg-signal-50 text-signal-700 hover:bg-signal-100"
                          : "border border-signal-500/30 bg-signal-500/[0.08] text-signal-200 hover:bg-signal-500/[0.14] hover:text-white"
                        : isLight
                        ? "text-[#0B1735]/75 hover:text-[#0B1735]"
                        : "text-haze-200 hover:text-white"
                    )}
                  >
                    {l.highlight && (
                      <span className="relative flex size-1.5">
                        <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
                        <span className="relative size-1.5 rounded-full bg-signal-500" />
                      </span>
                    )}
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "hidden md:inline-flex rounded-md",
                  isLight
                    ? "text-[#0B1735]/75 hover:text-[#0B1735] hover:bg-slate-100"
                    : "text-haze-200 hover:text-white"
                )}
                asChild
              >
                <a href="/#enterprise">Sign in</a>
              </Button>
              <Button size="sm" asChild className="hidden sm:inline-flex rounded-md">
                <a href="/#cta">
                  Request demo
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className={cn(
                  "lg:hidden inline-flex size-10 items-center justify-center rounded-md border",
                  isLight
                    ? "border-slate-200 bg-white text-[#0B1735] hover:bg-slate-50"
                    : "border-white/10 bg-white/[0.03] text-haze-100 hover:bg-white/[0.06]"
                )}
              >
                <Menu className="size-4" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink-950/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-full flex-col"
            >
              <div className="flex items-center justify-between p-6">
                <Logo theme="dark" />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"
                >
                  <X className="size-4" />
                </button>
              </div>

              <ul className="flex-1 px-6 pt-8 space-y-1">
                {NAV_LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between border-b border-white/5 py-5 text-2xl font-display font-medium text-white"
                    >
                      <span>{l.label}</span>
                      <ChevronRight className="size-5 text-haze-300 transition-transform group-hover:translate-x-1" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="p-6 space-y-3">
                <Button size="lg" className="w-full" asChild>
                  <a href="#cta" onClick={() => setOpen(false)}>
                    Request government demo
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="#architecture" onClick={() => setOpen(false)}>
                    Explore architecture
                  </a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
