import { SectionHeader } from "@/components/site/SectionHeader";

export function MotivationSection() {
  return (
    <section id="motivation" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Project Motivation"
            title="Why intelligent drones matter in disaster response"
            description="Post-disaster environments are time-critical, hazardous, and difficult to access. PervasiveAeroAgents explores how coordinated UAV systems can support search and rescue through faster coverage, smarter navigation, and resilient operation in uncertain conditions."
          />

          <p className="mt-6 text-base leading-8 text-slate-600">
            This project combines AI, multimodal sensing, secure communication,
            and prototype deployment to build a mission-driven platform for
            post-disaster management.
          </p>

          <a
            href="/videos/project-motivation.mp4"
            className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Watch Full Video
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
          <video
            controls
            className="h-full w-full rounded-3xl object-cover"
            preload="metadata"
          >
            <source src="/videos/project-motivation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}