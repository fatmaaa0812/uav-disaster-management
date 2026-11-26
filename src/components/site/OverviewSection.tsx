import { SectionHeader } from "@/components/site/SectionHeader";
import { overviewHighlights, siteConfig } from "@/data/site";

export function OverviewSection() {
  return (
    <section id="overview" className="bg-slate-50/80 pt-10 pb-14">
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

        <div className="mx-auto mt-14 max-w-4xl">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Project Video
          </p>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
            <video
              controls
              preload="metadata"
              className="aspect-video w-full object-cover"
            >
              <source src="/videos/project-motivation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}