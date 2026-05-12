import type { Metadata } from "next";
import { AgentHero } from "@/components/agent/hero";
import { DispatchAcceptance } from "@/components/agent/dispatch-acceptance";
import { TurnByTurn } from "@/components/agent/turn-by-turn";
import { FieldNetwork } from "@/components/agent/field-network";
import { IncidentCapture } from "@/components/agent/incident-capture";
import { OfficerControl } from "@/components/agent/officer-control";
import { AgentCta } from "@/components/agent/cta";
import { SectionDivider } from "@/components/ui/section-divider";

export const metadata: Metadata = {
  title: "Auxilio Agente — The officer's field app",
  description:
    "Auxilio Agente turns every officer into a node in the dispatch network. Accept emergencies in one tap, navigate live to the incident, and capture everything that matters — all from the badge in your pocket.",
};

export default function AgentPage() {
  return (
    <>
      <AgentHero />
      <SectionDivider label="// agente.dispatch" />
      <DispatchAcceptance />
      <TurnByTurn />
      <SectionDivider label="// agente.network" />
      <FieldNetwork />
      <IncidentCapture />
      <SectionDivider label="// agente.control" />
      <OfficerControl />
      <AgentCta />
    </>
  );
}
