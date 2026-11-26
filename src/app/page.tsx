import { HeroSection } from "@/components/site/HeroSection";
import { MotivationSection } from "@/components/site/MotivationSection";
import { OverviewSection } from "@/components/site/OverviewSection";
import { SectionDivider } from "@/components/site/SectionDivider";
import { ImageSeparator } from "@/components/site/ImageSeparator";
import { WorkPackagesPreview } from "@/components/site/WorkPackagesPreview";
import { TeamPreview } from "@/components/site/TeamPreview";
import { PartnersSection } from "@/components/site/PartnersSection";
import { ResearchOutputsSection } from "@/components/site/ResearchOutputsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MotivationSection />
      <SectionDivider />
      <OverviewSection />
      <ImageSeparator />
      <WorkPackagesPreview />
      <ResearchOutputsSection />
      <TeamPreview />
      <PartnersSection />
    </main>
  );
}