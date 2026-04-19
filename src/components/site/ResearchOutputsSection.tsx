import Link from "next/link";
import { FileText, Award, Presentation } from "lucide-react";

export function ResearchOutputsSection() {
  const items = [
    {
      title: "Publications",
      description: "Journal and conference papers produced by the project.",
      href: "/publications",
      icon: FileText,
    },
    {
      title: "Patents",
      description: "Intellectual property outputs related to the project.",
      href: "/patents",
      icon: Award,
    },
    {
      title: "Events & Talks",
      description: "Presentations and dissemination activities.",
      href: "/events-talks",
      icon: Presentation,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
          Research Outputs
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
          Explore project outputs
        </h2>

        <p className="mt-4 text-base leading-8 text-slate-600">
          Access the project’s publications, patents, and scientific talks.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 ring-1 ring-orange-200">
                    <Icon className="h-4 w-4 text-orange-500" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                </h3>
                </div>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-orange-500">
                View →
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}