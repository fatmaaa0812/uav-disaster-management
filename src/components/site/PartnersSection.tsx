import Image from "next/image";
import { SectionHeader } from "@/components/site/SectionHeader";
import { partners } from "@/data/site";

export function PartnersSection() {
  return (
    <section id="funding-partners" className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
      <SectionHeader
        eyebrow="Funding & Partners"
        title="Support and collaboration"
        description="The project is supported by key academic and national stakeholders contributing to research, development, and real-world impact."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {partners.map((partner) => (
          <a
            key={partner.name}
            href={partner.href}
            target="_blank"
            rel="noreferrer"
            className="group rounded-3xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative flex h-32 items-center justify-center rounded-2xl bg-slate-50">
              <Image
                src={partner.image}
                alt={partner.name}
                width={220}
                height={110}
                className="h-auto max-h-24 w-auto object-contain"
              />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-900">
              {partner.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {partner.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}