import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CtaBand } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Audit operațional, organizare și stocuri, optimizare costuri, suport pentru controale și suport administrativ + digitalizare pentru IMM-uri.",
};

export default function ServiciiPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviciile mele"
        title="Cinci direcții pentru o firmă în control"
        intro="Fiecare serviciu adresează o zonă concretă din activitatea ta — de la audit și stocuri, la conformare și digitalizare."
      />

      <div className="divide-y divide-slate-100">
        {services.map((s, idx) => (
          <section key={s.slug} id={s.slug} className="scroll-mt-20">
            <div className="container-content grid items-center gap-12 py-16 lg:grid-cols-2">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-card bg-brand-green/10 text-brand-green-dark">
                    <Icon name={s.icon} />
                  </span>
                  {s.isNew && (
                    <span className="rounded-full bg-green-gradient px-3 py-1 text-xs font-bold text-white">
                      NOU
                    </span>
                  )}
                </div>
                <h2 className="mt-5 font-display text-3xl font-extrabold text-navy-800">{s.title}</h2>
                <p className="mt-4 text-lg text-slate-600">{s.intro}</p>
                <ul className="mt-6 space-y-4">
                  {s.points.map((p) => (
                    <li key={p.title} className="flex gap-3">
                      <span className="mt-1 text-brand-green-dark">
                        <Icon name="check" className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display font-bold text-navy-800">{p.title}</p>
                        <p className="text-sm text-slate-600">{p.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`overflow-hidden rounded-card shadow-lg ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={s.image}
                  alt={s.title}
                  width={1600}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand
        title="Nu ești sigur de unde să începi?"
        text="Hai să identificăm împreună zona cu cel mai mare impact pentru firma ta."
      />
    </>
  );
}
