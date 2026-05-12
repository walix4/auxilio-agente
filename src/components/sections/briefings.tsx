"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Briefings() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 700);
  };

  return (
    <section
      id="briefings"
      className="relative isolate scroll-mt-32 py-24 lg:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-20 mask-radial" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-500/10 blur-[160px]" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] p-10 backdrop-blur-sm md:p-14 lg:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-signal-500/[0.06] via-transparent to-steel-700/[0.08]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-[320px] w-[320px] rounded-full bg-signal-500/15 blur-[100px]"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-xl">
              <span className="label-eyebrow-signal">
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 rounded-full bg-signal-500 animate-ping opacity-70" />
                  <span className="relative size-1.5 rounded-full bg-signal-500" />
                </span>
                Infrastructure Briefings
              </span>

              <h2 className="mt-5 font-display text-display-md font-medium tracking-[-0.03em] text-white text-balance">
                Get the field reports{" "}
                <span className="gradient-text-signal">from the response edge.</span>
              </h2>

              <p className="mt-5 text-[15.5px] leading-[1.6] text-haze-300 text-pretty">
                Architecture deep-dives, deployment notes, and original research on AI-native
                public-safety infrastructure. Sent only when something matters — no marketing noise.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-haze-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="size-3 text-signal-400" />
                  No tracking pixels
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-3 text-signal-400" />
                  Unsubscribe in one click
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="size-3 text-signal-400" />
                  ~1 briefing / month
                </span>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="flex w-full max-w-md flex-col gap-3"
            >
              <div className="flex h-14 items-center rounded-full border border-white/10 bg-ink-950/60 px-2 backdrop-blur-md transition-colors focus-within:border-signal-500/50">
                <div className="flex size-10 items-center justify-center text-haze-400">
                  <Mail className="size-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status !== "idle") setStatus("idle");
                  }}
                  placeholder="you@agency.gov"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-2 text-[14.5px] text-white placeholder:text-haze-500 outline-none"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={status === "submitting"}
                  className="h-10"
                >
                  {status === "submitting" ? "Sending" : "Subscribe"}
                  <ArrowRight className="size-4" />
                </Button>
              </div>

              <div className="min-h-[20px] px-3 font-mono text-[11px] uppercase tracking-[0.18em]">
                {status === "success" && (
                  <span className="text-signal-300">
                    ✓ Confirmed. First briefing arrives shortly.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-signal-400">
                    Enter a valid email to continue.
                  </span>
                )}
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
