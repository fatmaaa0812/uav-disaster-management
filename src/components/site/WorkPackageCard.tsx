import Link from "next/link";

type WorkPackageCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function WorkPackageCard({
  title,
  description,
  href,
  icon,
}: WorkPackageCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg"
    >

      {/* icon + title */}
      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 ring-1 ring-orange-200">
          <img
            src={icon}
            alt={title}
            className="h-5 w-5 object-contain"
          />
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {title}
        </h3>

      </div>

      {/* description */}
      <p className="mt-4 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <span className="mt-6 inline-block text-sm font-semibold text-orange-500">
        Learn more →
      </span>

    </Link>
  );
}