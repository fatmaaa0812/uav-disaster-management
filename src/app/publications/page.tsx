import { SectionHeader } from "@/components/site/SectionHeader";
import { PublicationCard } from "@/components/site/PublicationCard";
import {
  journalPublications,
  conferencePublications,
} from "@/data/publications";

export default function PublicationsPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Publications"
            title="Scientific publications"
            description="Research outputs of the project covering UAV deployment, learning-based navigation, communication optimization, and sensing technologies for disaster response."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-orange-500" />
            <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-slate-700">
              Journal Papers
            </h2>
          </div>

          <div className="mt-6">
            {journalPublications.map((paper) => (
              <PublicationCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3">
            <div className="h-1 w-10 rounded-full bg-orange-500" />
            <h2 className="text-lg font-semibold uppercase tracking-[0.12em] text-slate-700">
              Conference Papers
            </h2>
          </div>

          <div className="mt-6">
            {conferencePublications.map((paper) => (
              <PublicationCard key={paper.title} {...paper} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}