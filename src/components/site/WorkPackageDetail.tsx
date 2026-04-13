import Image from "next/image";
import Link from "next/link";

type WorkPackageDetailProps = {
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  focusAreas: string[];
  image: string;
  methodologyTitle?: string;
  videoTitle?: string;
  videoDescription?: string;
  videoSrc?: string;
};

export function WorkPackageDetail({
  title,
  shortTitle,
  summary,
  overview,
  focusAreas,
  image,
  methodologyTitle = "Methodology",
  videoTitle,
  videoDescription,
  videoSrc,
}: WorkPackageDetailProps) {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-orange-50/30">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.10),transparent_30%),radial-gradient(circle_at_top_left,rgba(15,23,42,0.06),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Work Package
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            {summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            {methodologyTitle}
          </h2>

          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-[260px] w-full bg-slate-100 md:h-[360px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              About {shortTitle}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">{overview}</p>
          </div>

          <div className="rounded-[2rem] border border-orange-100 bg-orange-50/70 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              Technical Focus
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {videoSrc ? (
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Featured Outcome
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                {videoTitle}
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                {videoDescription}
              </p>
            </div>

            <div className="mt-8 mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm">
              <video
                controls
                className="h-[260px] w-full rounded-3xl object-contain md:h-[360px]"
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex justify-center">
          <Link
            href="/#work-packages"
            className="inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Back to Work Packages
          </Link>
        </div>
      </section>
    </main>
  );
}