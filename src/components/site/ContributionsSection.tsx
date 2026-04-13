import { SectionHeader } from "@/components/site/SectionHeader";
import { contributions } from "@/data/site";

export function ContributionsSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Key Contributions"
          title="Core technical directions of the project"
          description="PervasiveAeroAgents brings together system-level coordination, AI-based autonomy, sensing, communication, and deployment into one coherent post-disaster research platform."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {contributions.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}