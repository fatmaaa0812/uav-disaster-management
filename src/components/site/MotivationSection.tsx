import { SectionHeader } from "@/components/site/SectionHeader";


export function MotivationSection() {
  return (
    <section id="motivation" className="mx-auto max-w-7xl px-6 pt-14 pb-16 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Project Motivation"
            title="Finding life beyond the visible"
            description="When an earthquake strikes or a building collapses, the first 72 hours decide who survives. Yet many survivors lie trapped beneath the rubble, invisible to cameras and out of reach of rescue teams, while every search puts responders at risk inside unstable structures."
          />

          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            Too often, rescuers are left searching blindly, relying on slow
            manual inspection and single sensors that miss what they cannot
            see. Life Radar starts from a simple question: what if a swarm of
            drones could sense the faintest signs of life, a heartbeat or a
            breath hidden under the debris, and guide rescuers straight to
            them?
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {[
              "Under-rubble detection",
              "Vital-sign monitoring",
              "Drone swarm coverage",
              "Real-time 3D localization",
            ].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </li>
            ))}
          </ul>

          <a
            href="https://www.qu.edu.qa/research/life-radar"
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            Read more on QU Research
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </a>

          <div>
            <a
              href="https://www.youtube.com/shorts/-ZbGCOVwfCE"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
            >
              Watch Full Video
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
            <div className="relative aspect-[9/16] w-full">
              <iframe
                src="https://www.youtube.com/embed/-ZbGCOVwfCE?rel=0"
                title="Life Radar project motivation"
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}