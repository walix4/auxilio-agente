import { AgentHero } from "@/components/agent/hero";
import { DispatchAcceptance } from "@/components/agent/dispatch-acceptance";
import { TurnByTurn } from "@/components/agent/turn-by-turn";
import { FieldNetwork } from "@/components/agent/field-network";
import { IncidentCapture } from "@/components/agent/incident-capture";
import { OfficerControl } from "@/components/agent/officer-control";
import { AgentCta } from "@/components/agent/cta";
import { SectionDivider } from "@/components/ui/section-divider";

export default function HomePage() {
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
