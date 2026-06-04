import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icons";
import { SectionHeading, CtaBand } from "@/components/Sections";
import {
  badges,
  services,
  audience,
  facts,
  quotes,
  processSteps,
  values,
  signs,
  site,
} from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="container-content grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Consultanță operațională pentru IMM-uri</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
              Partenerul tău pentru o afacere{" "}
              <span className="heading-accent">în control, eficientă și profitabilă</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Ai impresia că firma „merge”, dar nu ai control real asupra ei? Stocuri neclare,
              costuri care scapă de sub control, documente dezorganizate sau riscuri la controale?
            </p>
            <p className="mt-4 max-w-xl text-slate-300">
              Ofer servicii de consultanță operațională cu focus pe organizare, control și
              claritate în activitate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="btn-primary">
                <Icon name="phone" className="h-5 w-5" /> Hai să discutăm
              </a>
              <Link href="/servicii" className="btn-ghost">
                Vezi serviciile <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-card border border-white/10 shadow-2xl">
              <Image
                src="/img/hero.webp"
                alt="Tablou de bord cu indicatori de business"
                width={1600}
                height={1000}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* badges */}
        <div className="border-t border-white/10">
          <div className="container-content grid gap-6 py-8 sm:grid-cols-3">
            {badges.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-lime">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-bold">{b.title}</p>
                  <p className="text-sm text-slate-400">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO BAND */}
      <section className="bg-mist">
        <div className="container-content py-12 text-center">
          <p className="mx-auto max-w-3xl text-lg text-slate-700">
            De la strategie și control financiar, până la documente, instituții și digitalizare,
            mă ocup de ceea ce contează, ca tu să te concentrezi pe{" "}
            <span className="font-semibold text-brand-green-dark">creșterea afacerii tale</span>.
          </p>
        </div>
      </section>

      {/* CE ÎNSEAMNĂ O FIRMĂ ÎN CONTROL */}
      <section className="container-content py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Pe înțelesul tuturor"
              title={<>Ce înseamnă, de fapt, o firmă „în control”?</>}
            />
            <div className="mt-6 space-y-4 text-slate-600">
              <p>
                Imaginează-ți că firma ta e o mașină. Poate merge bine — dar dacă bordul e stins,
                nu știi cât combustibil mai ai, dacă motorul se supraîncălzește sau cât de repede mergi.
              </p>
              <p>
                O firmă „în control" are bordul aprins: știi unde intră și unde ies banii, ce ai pe
                stoc, ce documente îți lipsesc și unde apar blocaje — <strong>înainte</strong> să
                devină probleme.
              </p>
              <p>
                Asta fac eu: nu schimb mașina și nu conduc în locul tău.{" "}
                <strong className="text-brand-green-dark">Îți aprind bordul</strong> și te ajut să
                pui ordine, ca să iei decizii cu ochii deschiși, nu pe ghicite.
              </p>
            </div>
          </div>
          <div className="rounded-card bg-navy-900 p-8 text-white">
            <p className="eyebrow">Cum lucrez</p>
            <ol className="mt-6 space-y-5">
              {processSteps.map((s, i) => (
                <li key={s.step} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-gradient font-display text-sm font-bold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold text-brand-lime">{s.step}</p>
                    <p className="text-sm text-slate-300">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SERVICII OVERVIEW */}
      <section className="bg-mist">
        <div className="container-content py-20">
          <SectionHeading
            eyebrow="Serviciile mele"
            title="Cinci direcții, un singur scop: ordine și control"
            intro="Fiecare serviciu adresează o zonă concretă din firma ta. Apasă pentru detalii."
            center
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/servicii#${s.slug}`} className="card group relative flex flex-col">
                {s.isNew && (
                  <span className="absolute right-5 top-5 rounded-full bg-green-gradient px-3 py-1 text-xs font-bold text-white">
                    NOU
                  </span>
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-card bg-brand-green/10 text-brand-green-dark">
                  <Icon name={s.icon} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-800">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold text-brand-green-dark">
                  Detalii <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MERGE ≠ SĂNĂTOASĂ */}
      <section className="bg-navy-900 text-white">
        <div className="container-content grid items-center gap-10 py-20 lg:grid-cols-2">
          <SectionHeading
            light
            eyebrow="De ce contează"
            title={<>„Merge firma” nu e totuna cu „firma e sănătoasă”</>}
          />
          <div className="space-y-4 text-slate-300">
            <p>
              Multe firme par că „merg": au comenzi, au activitate, au mișcare. Dar activitatea nu
              e același lucru cu sănătatea. O firmă poate fi profitabilă pe hârtie și, în același
              timp, la un pas de blocaj.
            </p>
            <p>
              De aceea problemele de lichiditate apar în{" "}
              <span className="font-display text-2xl font-extrabold text-brand-lime">82%</span> dintre
              firmele care eșuează — nu pentru că nu aveau clienți, ci pentru că au pierdut controlul
              intern.
            </p>
            <p className="font-semibold text-white">
              Vestea bună: aproape tot ce duce acolo se poate vedea din timp. Și ce se vede, se poate corecta.
            </p>
          </div>
        </div>
      </section>

      {/* ȘTIAȚI CĂ */}
      <section className="container-content py-20">
        <SectionHeading eyebrow="Știați că…?" title="Câteva cifre care pun lucrurile în perspectivă" center />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.stat} className="rounded-card border border-slate-100 bg-mist p-6 text-center">
              <p className="font-display text-3xl font-extrabold text-brand-green-dark">{f.stat}</p>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          Surse și detalii pe pagina <Link href="/resurse" className="underline">Resurse</Link>.
        </p>
      </section>

      {/* QUOTE */}
      <section className="bg-mist">
        <div className="container-content py-16 text-center">
          <blockquote className="mx-auto max-w-3xl font-display text-2xl font-bold leading-snug text-navy-800 sm:text-3xl">
            „{quotes[0].text}”
          </blockquote>
          <p className="mt-4 text-brand-green-dark">— {quotes[0].author}</p>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="container-content py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-card shadow-lg">
            <Image
              src="/img/audience.webp"
              alt="Antreprenori într-o ședință de lucru"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Pentru cine este potrivit" title="Lucrez cel mai bine cu:" />
            <ul className="mt-6 space-y-3">
              {audience.map((a) => (
                <li key={a} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 text-brand-green-dark">
                    <Icon name="check" className="h-5 w-5" />
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="bg-navy-900 text-white">
        <div className="container-content py-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-gradient font-display text-xl font-extrabold">
              8 ani
            </span>
            <p className="max-w-3xl text-lg text-slate-200">
              <span className="font-bold text-white">8 ani experiență</span> în audit financiar și
              risc operațional (EY, ING), aplicată practic în organizarea și controlul companiilor.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v} className="flex items-center gap-3 rounded-card border border-white/10 bg-white/5 px-5 py-4">
                <Icon name="check" className="h-5 w-5 shrink-0 text-brand-lime" />
                <span className="font-display text-sm font-semibold">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 SEMNE */}
      <section className="container-content py-20">
        <SectionHeading
          eyebrow="Auto-verificare rapidă"
          title="3 semne că firma ta are nevoie de ordine"
          center
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {signs.map((s, i) => (
            <div key={i} className="card">
              <span className="font-display text-4xl font-extrabold text-brand-green/30">0{i + 1}</span>
              <p className="mt-3 text-slate-700">{s}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-slate-600">
          Te-ai regăsit măcar într-un punct? Nu e nimic în neregulă cu tine — e doar semn că firma a
          crescut mai repede decât structura ei. Exact aici intervin eu.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
