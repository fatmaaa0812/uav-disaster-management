import { SectionHeader } from "@/components/site/SectionHeader";
import { overviewHighlights, siteConfig } from "@/data/site";

export function OverviewSection() {
  return (
    <section id="overview" className="bg-slate-50/80 py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Project Overview"
          title="An integrated UAV platform for resilient post-disaster operations"
          description={siteConfig.overview}
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {overviewHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}