import type { Metadata } from "next";
import { PageHero } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { site, audience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactează-l pe ${site.person}: ${site.phone} · ${site.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Hai să discutăm"
        title="Contact"
        intro="Spune-mi pe scurt cum stă firma ta și unde simți că pierzi control. Primul pas e mereu o discuție, fără obligații."
      />

      <section className="container-content py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy-800">
              Trimite-mi un mesaj
            </h2>
            <p className="mt-2 mb-6 text-slate-600">
              Completează formularul și revin cât pot de repede.
            </p>
            <ContactForm />
          </div>

          <div className="space-y-4">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:border-brand-green"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-card bg-green-gradient text-white">
                <Icon name="whatsapp" className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">WhatsApp — cel mai rapid răspuns</span>
                <span className="font-display text-xl font-bold text-navy-800">Scrie-mi pe WhatsApp</span>
              </span>
            </a>

            <a
              href={site.phoneHref}
              className="card flex items-center gap-4 hover:border-brand-green"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-card bg-brand-green/10 text-brand-green-dark">
                <Icon name="phone" className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Telefon</span>
                <span className="font-display text-xl font-bold text-navy-800">{site.phone}</span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="card flex items-center gap-4 hover:border-brand-green"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-card bg-brand-green/10 text-brand-green-dark">
                <Icon name="mail" className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Email</span>
                <span className="font-display text-xl font-bold text-navy-800">{site.email}</span>
              </span>
            </a>

            <div className="card flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-card bg-brand-green/10 text-brand-green-dark">
                <Icon name="user" className="h-7 w-7" />
              </span>
              <span>
                <span className="block text-sm text-slate-500">Consultant</span>
                <span className="font-display text-xl font-bold text-navy-800">{site.person}</span>
                <span className="block text-sm text-slate-500">{site.role}</span>
              </span>
            </div>

            <div className="rounded-card bg-navy-900 p-8 text-white">
              <h2 className="font-display text-2xl font-extrabold">Cu cine lucrez</h2>
              <ul className="mt-6 space-y-3">
                {audience.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-0.5 text-brand-lime"><Icon name="check" className="h-5 w-5" /></span>
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-8 rounded-btn bg-white/5 p-4 text-sm text-slate-300">
                {site.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
