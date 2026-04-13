import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-white">{siteConfig.title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
            Smart multi-drone systems for post-disaster response, integrating AI,
            multimodal sensing, secure communication, and proof-of-concept deployment.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-orange-400"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} PervasiveAeroAgents. All rights reserved.</p>
          <p>Qatar University · Research Project Website</p>
        </div>
      </div>
    </footer>
  );
}