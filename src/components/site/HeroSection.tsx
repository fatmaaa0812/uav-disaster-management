import Link from "next/link";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-disaster.jpg')" }}
      />
      <div className="absolute inset-0 bg-slate-900/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/55 via-slate-900/35 to-slate-900/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium text-orange-300 backdrop-blur">
              Qatar University Research Project
            </p>
            <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
              ARG01-0527-230356
            </p>
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            {siteConfig.title}
          </h1>

          <p className="mt-5 text-xl font-medium text-slate-100 md:text-2xl">
            {siteConfig.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-100 md:text-lg">
            AI-powered aerial agents for human detection, autonomous navigation,
            and secure communication in disaster environments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#overview"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Explore Research
            </Link>
            <Link
              href="#motivation"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Watch Video
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}