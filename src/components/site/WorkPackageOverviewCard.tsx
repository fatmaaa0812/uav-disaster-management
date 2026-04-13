import Image from "next/image";
import Link from "next/link";

type WorkPackageOverviewCardProps = {
  title: string;
  summary: string;
  image: string;
  focusAreas: string[];
  href: string;
};

export function WorkPackageOverviewCard({
  title,
  summary,
  image,
  focusAreas,
  href,
}: WorkPackageOverviewCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-56 w-full bg-slate-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-7">
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-600">{summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {focusAreas.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>

        <Link
          href={href}
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Explore Work Package
        </Link>
      </div>
    </div>
  );
}