import Link from "next/link";
import { site } from "@/lib/content";
import { Icon } from "./Icons";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg ${light ? "text-slate-300" : "text-slate-600"}`}>{intro}</p>
      )}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-navy-900 text-white">
      <div className="container-content py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">{intro}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Pregătit să pui ordine în afacerea ta?",
  text = "Hai să discutăm despre firma ta și unde poți câștiga control și claritate.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-green-gradient">
      <div className="container-content flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl text-white">
          <h2 className="font-display text-3xl font-extrabold">{title}</h2>
          <p className="mt-2 text-white/90">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-btn bg-white px-6 py-3 font-display font-semibold text-navy-800 transition hover:bg-slate-100"
          >
            <Icon name="whatsapp" className="h-5 w-5 text-brand-green" /> WhatsApp
          </a>
          <a href={site.phoneHref} className="btn-ghost">
            <Icon name="phone" className="h-5 w-5" /> {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
