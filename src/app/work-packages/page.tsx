import { SectionHeader } from "@/components/site/SectionHeader";
import { WorkPackageOverviewCard } from "@/components/site/WorkPackageOverviewCard";
import { workPackageDetails } from "@/data/site";

export default function WorkPackagesPage() {
  return (
    <main>
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Work Packages"
            title="Four connected research streams powering the project"
            description="PervasiveAeroAgents is structured around four work packages covering system architecture, AI-based sensing and navigation, secure communication, and prototype-driven validation. Together, they form an end-to-end platform for intelligent post-disaster drone operations."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-2">
          {workPackageDetails.map((wp) => (
            <WorkPackageOverviewCard
              key={wp.id}
              title={wp.title}
              summary={wp.summary}
              image={wp.image}
              focusAreas={wp.focusAreas}
              href={wp.href}
            />
          ))}
        </div>
      </section>
    </main>
  );
}