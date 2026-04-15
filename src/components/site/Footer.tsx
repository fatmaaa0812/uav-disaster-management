import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-2 bg-slate-950 text-white py-8">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        
        <div>
          <h3 className="text-lg font-semibold text-white">
            {siteConfig.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
            Smart multi-drone systems for post-disaster response, integrating AI,
            multimodal sensing, secure communication, and prototype validation.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Quick Links
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-3 text-xs text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          
          <p>
            © {new Date().getFullYear()} PervasiveAeroAgents
          </p>

          <p>
            Qatar University · Research Project
          </p>

        </div>
      </div>
    </footer>
  );
}