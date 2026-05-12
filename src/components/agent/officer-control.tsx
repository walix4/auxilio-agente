"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, User, MessageCircle, History, Users2, Contact, Settings, LifeBuoy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "./phone-frame";

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: User, label: "Profile" },
  { icon: MessageCircle, label: "Chat" },
  { icon: History, label: "History" },
  { icon: Users2, label: "Network" },
  { icon: Contact, label: "Contact" },
  { icon: Settings, label: "Setting" },
  { icon: LifeBuoy, label: "Help & Support" },
];

export function OfficerControl() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-12 -z-10 rounded-full bg-[#0B1735]/5 blur-3xl" />
              <PhoneFrame
                src="/agent-screens/drawer.png"
                alt="Auxilio Agente — Officer profile drawer"
                height={680}
              />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <SectionHeading
              theme="light"
              eyebrow="05 · Officer control"
              title={
                <>
                  One drawer.{" "}
                  <span className="text-[#0B1735]/80">
                    Every shift function.
                  </span>
                </>
              }
              description="Dashboard, chat, history, contacts, networks, support — Auxilio Agente collapses every admin surface a working officer needs into a single drawer. No tabbing across apps. No re-authenticating mid-shift."
            />

            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="group flex flex-col items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-signal-300"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#0B1735] text-white transition-colors group-hover:bg-signal-600">
                    <item.icon className="size-4" />
                  </span>
                  <div className="font-display text-[14px] font-medium text-[#0B1735]">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-steel-500 to-[#0B1735] ring-2 ring-white"
                  >
                    <svg viewBox="0 0 24 24" className="size-4 text-white" fill="currentColor">
                      <circle cx="12" cy="9" r="4" />
                      <path d="M2 21 Q 12 13, 22 21 Z" />
                    </svg>
                  </span>
                ))}
              </div>
              <div className="text-[13.5px] text-slate-700">
                <span className="font-semibold text-[#0B1735]">12,400+ officers</span>{" "}
                already running Auxilio Agente in the field.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
