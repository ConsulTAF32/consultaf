"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { nav, site } from "@/lib/content";
import { Icon } from "./Icons";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src="/logo/logo-full-light.svg"
            alt={site.name}
            width={209}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-sm font-semibold text-navy-800 transition hover:text-brand-green"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={site.phoneHref} className="btn-primary hidden sm:inline-flex !px-4 !py-2 text-sm">
            <Icon name="phone" className="h-4 w-4" />
            {site.phone}
          </a>
          <button
            className="md:hidden text-navy-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Meniu"
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white md:hidden">
          <div className="container-content flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 font-display font-semibold text-navy-800"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="btn-primary mt-3 sm:hidden">
              <Icon name="phone" className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
