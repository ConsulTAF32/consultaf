import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading, CtaBand } from "@/components/Sections";
import { Icon } from "@/components/Icons";
import { values, processSteps, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Despre",
  description:
    "Tiberiu Ciprian Franciuc — consultant operațional cu 8 ani experiență în audit financiar și risc operațional (EY, ING).",
};

export default function DesprePage() {
  return (
    <>
      <PageHero
        eyebrow="Despre mine"
        title="Tiberiu Ciprian Franciuc"
        intro="Consultant operațional. Ajut firmele mici și medii să câștige ordine, control și claritate — practic, nu teoretic."
      />

      <section className="container-content py-16">
        <div className="grid items-start gap-12 lg:grid-cols-[2fr,3fr]">
          <div className="overflow-hidden rounded-card shadow-lg">
            <Image
              src="/img/tiberiu.webp"
              alt={site.person}
              width={600}
              height={750}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-5 text-slate-600">
            <SectionHeading eyebrow="Experiență" title="8 ani în audit financiar și risc operațional" />
            <p>
              Am petrecut <strong className="text-navy-800">8 ani în audit financiar și risc
              operațional</strong>, la companii precum <strong>EY</strong> și <strong>ING</strong>.
              Acolo am învățat să citesc o firmă dincolo de aparențe: unde se pierd banii, unde apar
              riscurile și ce face diferența între o firmă care „merge” și una cu adevărat sănătoasă.
            </p>
            <p>
              Astăzi aplic aceeași disciplină, dar la scara firmelor mici și medii — fără limbaj
              complicat și fără rapoarte care rămân în sertar. Lucrez concret: pun ordine în procese,
              documente și stocuri, și las în urmă un sistem pe care îl poți folosi singur.
            </p>
            <p>
              Cred că ordinea nu e birocrație, ci libertate: când firma e sub control, antreprenorul
              poate, în sfârșit, să se gândească la creștere.
            </p>
          </div>
        </div>
      </section>

      {/* ABORDARE */}
      <section className="bg-mist">
        <div className="container-content py-16">
          <SectionHeading eyebrow="Cum lucrez" title="De la haos la control, în 5 pași" center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <div key={s.step} className="rounded-card bg-white p-6 text-center shadow-sm">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-green-gradient font-display font-bold text-white">
                  {i + 1}
                </span>
                <p className="mt-4 font-display font-bold text-navy-800">{s.step}</p>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALORI */}
      <section className="container-content py-16">
        <SectionHeading eyebrow="Principii" title="Ce poți aștepta de la mine" center />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v} className="card flex items-center gap-3">
              <Icon name="check" className="h-6 w-6 shrink-0 text-brand-green-dark" />
              <span className="font-display font-semibold text-navy-800">{v}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-card border border-slate-200 bg-mist p-6 text-center text-sm text-slate-600">
          {site.disclaimer}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
