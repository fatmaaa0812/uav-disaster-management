import { SectionHeader } from "@/components/site/SectionHeader";
import { patents } from "@/data/patents";

export default function PatentsPage() {
  return (
    <main className="bg-white">
      
      {/* header */}
      <section className="border-b border-slate-200 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Patents"
            title="Intellectual Property"
            description="Patents related to the project research."
          />
        </div>
      </section>

      {/* list */}
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="max-w-5xl">

        {patents.map((item) => (
        <div
            key={item.title}
            className="border-b border-slate-200 py-8 first:pt-0 last:border-b-0"
        >

            <div className="flex items-start gap-3">

            {/* orange diamond */}
            <div className="mt-2 h-2.5 w-2.5 rotate-45 bg-orange-500" />

            <div>
                <h2 className="text-xl font-semibold text-slate-900">
                {item.title}
                </h2>

                <p className="mt-2 text-sm text-slate-600 max-w-3xl">
                {item.description}
                </p>
            </div>

            </div>

        </div>
        ))}

        </div>
      </section>

    </main>
  );
}