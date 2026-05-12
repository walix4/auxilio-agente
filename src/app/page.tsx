import { Hero } from "@/components/sections/hero";
import { LiveDispatch } from "@/components/sections/live-dispatch";
import { HowItWorks } from "@/components/sections/how-it-works";
import { SystemArchitecture } from "@/components/sections/system-architecture";
import { DispatchEngine } from "@/components/sections/dispatch-engine";
import { OfficerPlatform } from "@/components/sections/officer-platform";
import { CriteriaDatabase } from "@/components/sections/criteria-database";
import { Communication } from "@/components/sections/communication";
import { HardwareReplacement } from "@/components/sections/hardware-replacement";
import { MultiTransport } from "@/components/sections/multi-transport";
import { UseCases } from "@/components/sections/use-cases";
import { Security } from "@/components/sections/security";
import { TechnicalArchitecture } from "@/components/sections/technical-architecture";
import { ApiInfrastructure } from "@/components/sections/api-infrastructure";
import { Enterprise } from "@/components/sections/enterprise";
import { Metrics } from "@/components/sections/metrics";
import { Testimonials } from "@/components/sections/testimonials";
import { Insights } from "@/components/sections/insights";
import { Briefings } from "@/components/sections/briefings";
import { FutureVision } from "@/components/sections/future-vision";
import { CtaFooter } from "@/components/sections/cta-footer";
import { SectionDivider } from "@/components/ui/section-divider";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider label="// dispatch.live" />
      <LiveDispatch />
      <HowItWorks />
      <SectionDivider label="// architecture.layers" />
      <SystemArchitecture />
      <DispatchEngine />
      <OfficerPlatform />
      <CriteriaDatabase />
      <Communication />
      <SectionDivider label="// hardware.replacement" />
      <HardwareReplacement />
      <MultiTransport />
      <UseCases />
      <SectionDivider label="// security.substrate" />
      <Security />
      <TechnicalArchitecture />
      <ApiInfrastructure />
      <Enterprise />
      <SectionDivider label="// operational.metrics" />
      <Metrics />
      <SectionDivider label="// field.voices" />
      <Testimonials />
      <Insights />
      <Briefings />
      <FutureVision />
      <CtaFooter />
    </>
  );
}
