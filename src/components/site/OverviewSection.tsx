import { SectionHeader } from "@/components/site/SectionHeader";
import { overviewHighlights, siteConfig } from "@/data/site";

export function OverviewSection() {
  return (
    <section id="overview" className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <SectionHeader
            eyebrow="Project Overview"
            title="An integrated UAV platform for resilient post-disaster operations"
            description={siteConfig.overview}
          />

          <div className="aspect-video w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
            <video
              controls
              preload="metadata"
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/videos/project-motivation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {overviewHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-t-2 border-slate-200 border-t-orange-500 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
