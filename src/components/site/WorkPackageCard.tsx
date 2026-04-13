import Link from "next/link";

type WorkPackageCardProps = {
  title: string;
  description: string;
  href: string;
};

export function WorkPackageCard({
  title,
  description,
  href,
}: WorkPackageCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-sm font-bold text-white transition group-hover:bg-orange-500">
        WP
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <span className="mt-6 inline-block text-sm font-semibold text-orange-500">
        Learn more →
      </span>
    </Link>
  );
}