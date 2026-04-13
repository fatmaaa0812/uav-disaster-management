type Props = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
};

export function PublicationCard({
  title,
  authors,
  venue,
  year,
  link,
}: Props) {
  return (
    <div className="border-b border-slate-200 py-8 last:border-b-0">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-4xl">
          <h3 className="text-xl font-semibold leading-snug text-slate-900">
            {title}
          </h3>

          <p className="mt-3 text-base leading-7 text-slate-700">
            {authors}
          </p>

          <p className="mt-2 text-sm text-slate-500">
  <span className="italic">{venue}</span>, {year}
</p>
        </div>

        <div className="shrink-0">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
          >
            View paper
          </a>
        </div>
      </div>
    </div>
  );
}