"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building, FileText, Landmark, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function Enterprise() {
  return (
    <section id="enterprise" className="relative scroll-mt-32 py-28 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-fine bg-grid-md opacity-25 mask-radial" />
        <div className="absolute -top-32 left-1/3 h-[420px] w-[820px] rounded-full bg-signal-700/10 blur-[140px]" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Government · Enterprise"
              title={
                <>
                  Built for the buyers<br />
                  <span className="gradient-text-signal">who can't afford to be wrong.</span>
                </>
              }
              description="Auxilio is procured by police chiefs, mayors, university presidents, and infrastructure operators. Our deployment program is engineered for scrutiny — and for speed."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <PerkCard
                icon={Landmark}
                title="Procurement-ready"
                detail="Cooperative purchasing, GSA schedules, RFP-aligned pricing."
              />
              <PerkCard
                icon={FileText}
                title="Legal & policy support"
                detail="Model MOUs, mutual-aid templates, and policy-as-code review."
              />
              <PerkCard
                icon={Building}
                title="On-site deployment"
                detail="Our field engineers train your dispatchers, supervisors, and patrols."
              />
              <PerkCard
                icon={Phone}
                title="24/7 mission ops"
                detail="Tier-1 incident response from a US-based operations center."
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-signal-500/30 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-950 p-8 sm:p-10"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-signal-500/15 blur-[120px]"
              />

              <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-signal-300">
                Pilot program
              </div>
              <h3 className="mt-4 font-display text-3xl font-medium tracking-[-0.02em] text-white">
                90-day operational pilot.
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.6] text-haze-300">
                We deploy Auxilio in 14 days, run a parallel pilot beat for 60
                days, and ship a measurement report on day 90. No rip-and-replace,
                no procurement risk.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Deployed in 14 days",
                  "Parallel-run alongside CAD",
                  "Day-30, 60, 90 SLA reports",
                  "Buyout option at any milestone",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-3 text-[13.5px] text-haze-100"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full border border-signal-500/40 bg-signal-500/15 font-mono text-[10px] text-signal-200">
                      ✓
                    </span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#cta">
                    Request government demo
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#api">View deployment guide</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerkCard({
  icon: Icon,
  title,
  detail,
}: {
  icon: typeof Building;
  title: string;
  detail: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4">
      <div className="flex size-9 items-center justify-center rounded-lg border border-signal-500/25 bg-signal-500/10 text-signal-300">
        <Icon className="size-4" />
      </div>
      <div className="mt-3 font-display text-[14px] font-semibold text-white">
        {title}
      </div>
      <div className="mt-1 text-[12.5px] text-haze-300">{detail}</div>
    </div>
  );
}
