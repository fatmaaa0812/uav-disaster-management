import Image from "next/image";
import Link from "next/link";

type WorkItem = {
  title: string;
  description: string;
  imageSrc?: string;
  videoSrc?: string;
  isEmbeddedVideo?: boolean;
};

type WorkPackageDetailProps = {
  title: string;
  shortTitle: string;
  summary: string;
  overview: string;
  focusAreas: string[];
  image: string;
  methodologyTitle?: string;
  workItems?: WorkItem[];
  futureWorkTitle?: string;
  futureWorkText?: string;
};

export function WorkPackageDetail({
  title,
  shortTitle,
  summary,
  overview,
  focusAreas,
  image,
  methodologyTitle = "Methodology",
  workItems = [],
  futureWorkTitle = "Future Work",
  futureWorkText,
}: WorkPackageDetailProps) {
  return (
    <main className="bg-gradient-to-b from-slate-50 via-white to-orange-50/20">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_30%),radial-gradient(circle_at_top_left,rgba(15,23,42,0.05),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
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

      {/* About + Focus */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
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

      {/* Methodology */}
      <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="rounded-[2rem] border border-orange-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">
            {methodologyTitle}
          </h2>

          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="relative h-[260px] w-full bg-slate-50 md:h-[360px]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Done */}
            {workItems.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Work Done</h2>

            <div className="mt-8">
              {workItems.map((item, index) => (
                <div key={item.title}>
                  <div>
                    <div className="flex items-start gap-3">
                      <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />

                      <h3 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
                      {item.description}
                    </p>

                    {item.imageSrc ? (
                      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                        <div className="relative h-[260px] w-full bg-slate-50 md:h-[360px]">
                          <Image
                            src={item.imageSrc}
                            alt={item.title}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      </div>
                    ) : null}

                    {item.videoSrc ? (
  <div className="mt-6 mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">

    {item.isEmbeddedVideo ? (

      <div className="relative w-full pb-[56.25%]">

        <iframe
          src={`${item.videoSrc}?vq=hd1080`}
          title={item.title}
          className="absolute inset-0 h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>

    ) : (

      <video
        controls
        preload="metadata"
        className="h-[260px] w-full object-contain md:h-[360px]"
      >
        <source src={item.videoSrc} type="video/mp4" />
      </video>

    )}

  </div>
) : null}
                  </div>

                  {index < workItems.length - 1 ? (
                    <div className="flex justify-center py-8">
  <div className="h-px w-280 bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
</div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Future Work */}
      {futureWorkText ? (
        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="rounded-[2rem] border border-orange-100 bg-orange-50/50 p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">
              {futureWorkTitle}
            </h2>

            <p className="mt-4 max-w-4xl text-base leading-8 text-slate-600">
              {futureWorkText}
            </p>
          </div>
        </section>
      ) : null}

      {/* Back button */}
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