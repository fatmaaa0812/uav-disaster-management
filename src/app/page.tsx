import { HeroSection } from "@/components/site/HeroSection";
import { MotivationSection } from "@/components/site/MotivationSection";
import { OverviewSection } from "@/components/site/OverviewSection";
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
      <OverviewSection />
      <ImageSeparator />
      <WorkPackagesPreview />
      <ResearchOutputsSection />
      <TeamPreview />
      <PartnersSection />
    </main>
  );
}