import { SectionHeader } from "@/components/site/SectionHeader";
import { workPackages } from "@/data/site";
import { WorkPackageCard } from "@/components/site/WorkPackageCard";

export function WorkPackagesPreview() {
  return (
    <section id="work-packages" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <SectionHeader
        eyebrow="Work Packages"
        title="Research pillars driving the project"
        description="The project is structured around four connected work packages spanning system architecture, AI-based sensing and navigation, secure communication, and deployment-focused validation."
      />

      <div className="mt-8 grid gap-8 md:grid-cols-2">

        {workPackages.map((wp) => (
          <WorkPackageCard
            key={wp.title}
            title={wp.title}
            description={wp.description}
            href={wp.href}
            icon={wp.icon}
          />
        ))}

      </div>
    </section>
  );
}