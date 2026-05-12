"use client";

import { motion } from "framer-motion";
import { Camera, FileCheck, ScanLine } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PhoneFrame } from "./phone-frame";

export function IncidentCapture() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="04 · Incident capture"
              title={
                <>
                  The report writes itself —{" "}
                  <span className="gradient-text-signal">on scene.</span>
                </>
              }
              description="Plate, make, model, year, color. Three angles of the vehicle. Suspect tags applied at dispatch. Auxilio Agente captures it all in the field and pre-fills the incident report before the officer leaves the scene."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Camera,
                  title: "3-angle vehicle capture",
                  body: "Front, side, back — auto-aligned and stamped with GPS + time.",
                },
                {
                  icon: ScanLine,
                  title: "Plate OCR",
                  body: "Reads plates from camera, validates against AB-7368 format.",
                },
                {
                  icon: FileCheck,
                  title: "Auto-report",
                  body: "Tags + vehicle + route + audio log compile into one submission.",
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="panel rounded-2xl p-4"
                >
                  <f.icon className="size-4 text-signal-300" />
                  <div className="mt-3 font-display text-[15px] font-semibold text-white">
                    {f.title}
                  </div>
                  <div className="mt-1 text-[13px] leading-[1.5] text-haze-300">
                    {f.body}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-12 -z-10 bg-radial-fade blur-3xl" />
              <PhoneFrame
                src="/agent-screens/vehicle-details.jpg"
                alt="Auxilio Agente — Vehicle details capture screen"
                height={680}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
