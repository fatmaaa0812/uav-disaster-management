import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm">
            PA
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              {siteConfig.title}
            </p>
            <p className="text-xs text-slate-500">Qatar University</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-500"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}