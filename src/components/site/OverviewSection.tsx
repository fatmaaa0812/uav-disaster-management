import { SectionHeader } from "@/components/site/SectionHeader";
import { overviewHighlights, siteConfig } from "@/data/site";

export function OverviewSection() {
  return (
    <section id="overview" className="bg-slate-50/80 pt-10 pb-14">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Project Overview"
            title="An integrated UAV platform for resilient post-disaster operations"
            description={siteConfig.overview}
          />

          <ul className="mt-8 space-y-5">
            {overviewHighlights.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-50">
                  <span className="h-2.5 w-2.5 rotate-45 bg-orange-500" />
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

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
    </section>
  );
}
