import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-content grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-4">
          <Image src="/logo/logo-full-dark.svg" alt={site.name} width={209} height={40} className="h-10 w-auto" />
          <p className="max-w-xs text-sm text-slate-300">{site.tagline}.</p>
        </div>

        <div>
          <h3 className="font-display font-bold text-brand-lime">Navigare</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-bold text-brand-lime">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="font-display font-semibold text-white">{site.person}</li>
            <li>{site.role}</li>
            <li>
              <a href={site.phoneHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-brand-green" /> {site.phone}
              </a>
            </li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                <Icon name="whatsapp" className="h-4 w-4 text-brand-green" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 transition hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-brand-green" /> {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col gap-3 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">{site.disclaimer}</p>
          <p>© {new Date().getFullYear()} {site.name}. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
