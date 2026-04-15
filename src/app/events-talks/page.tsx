import { SectionHeader } from "@/components/site/SectionHeader";
import { SlidesViewer } from "@/components/site/SlidesViewer";
import { eventsAndTalks } from "@/data/events";

export default function EventsTalksPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Events & Talks"
            title="Project presentations and dissemination activities"
            description="Talks, conference presentations, and project dissemination materials."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-6xl">
          {eventsAndTalks.map((item) => (
            <div
              key={item.title}
              className="border-b border-slate-200 py-10 first:pt-0 last:border-b-0"
            >
              <div className="flex items-start gap-3">

                <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />

                <h2 className="text-2xl font-semibold text-slate-900">
                  {item.title}
                </h2>

              </div>

              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-600">
               <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-600">

                  <p>
                    <span className="font-medium text-slate-900">Event:</span>{" "}
                    {item.event}
                  </p>

                  <p>
                    <span className="font-medium text-slate-900">Date:</span>{" "}
                    {item.date}
                  </p>

                  <p>
                    <span className="font-medium text-slate-900">Presenter:</span>{" "}
                    {item.presenter}
                  </p>

                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={item.slidesPdf}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                >
                  Open slides PDF
                </a>

                <a
                  href={item.slidesPdf}
                  download
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Download slides
                </a>
              </div>

              <SlidesViewer title={item.title} slides={item.slideImages} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}