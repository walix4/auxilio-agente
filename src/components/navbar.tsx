"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Accept emergency", href: "#features" },
  { label: "Field network", href: "#features" },
  { label: "Incident capture", href: "#features" },
  { label: "Download", href: "#download" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
                ? "border-white/10 bg-ink-900/70 px-4 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.7)]"
                : "border-transparent bg-transparent px-2 py-2"
            )}
          >
            <Link href="/" aria-label="Auxilio Agente home" className="pl-2">
              <Logo />
            </Link>

            <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="relative inline-flex items-center rounded-md px-3.5 py-1.5 text-[13.5px] text-haze-200 transition-colors hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <Button size="sm" asChild className="hidden sm:inline-flex rounded-md">
                <a href="#download">
                  Download Agente
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="lg:hidden inline-flex size-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] text-haze-100 hover:bg-white/[0.06]"
              >
                <Menu className="size-4" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

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
                <Logo />
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
                    key={l.label}
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
                <Button size="lg" className="w-full rounded-lg" asChild>
                  <a href="#download" onClick={() => setOpen(false)}>
                    Download Agente
                    <ArrowRight className="size-4" />
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
