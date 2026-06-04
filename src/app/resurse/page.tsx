import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, SectionHeading, CtaBand } from "@/components/Sections";
import { Icon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resurse — Ghidul firmei în control",
  description:
    "Ghid practic pentru IMM-uri din România: cele 5 zone de control, calendarul conformării digitale (e-Factura, SAF-T, e-Transport), checklist pentru controale, glosar și mituri.",
};

const zones = [
  { n: "1", zone: "Banii", q: "Câți bani intră, câți ies, când?", bad: "Profit pe hârtie, dar fără bani de plăți; costuri ascunse" },
  { n: "2", zone: "Stocurile", q: "Cât am, cât valorează, ce se mișcă?", bad: "Bani blocați pe raft sau vânzări pierdute din lipsă pe stoc" },
  { n: "3", zone: "Documentele", q: "Pot găsi orice act în 2 minute?", bad: "Risc la controale, facturi pierdute, timp irosit" },
  { n: "4", zone: "Procesele & oamenii", q: "Cine, ce, până când?", bad: "Lucruri uitate, suprapuneri, dependență de o singură persoană" },
  { n: "5", zone: "Conformarea", q: "Sunt la zi cu ANAF / SPV / ONRC?", bad: "Amenzi, termene ratate, stres la fiecare verificare" },
];

const calendar = [
  { name: "RO e-Factura", what: "Facturare electronică prin sistemul ANAF", when: "B2B: 1 ian. 2024 · B2C: 1 ian. 2025", note: "Factura se transmite în 5 zile de la emitere; se arhivează 10 ani" },
  { name: "SAF-T (D406)", what: "Raportare contabilă detaliată către ANAF", when: "Mari: 2022 · Medii: 2023 · Mici: ian. 2025", note: "Fișier standardizat, lunar sau trimestrial" },
  { name: "RO e-Transport", what: "Monitorizarea transporturilor de bunuri", when: "Sancțiuni de la 1 ian. 2025", note: "Cod UIT pentru transporturile vizate" },
];

const checklist = [
  "Toate facturile (emise și primite) sunt complete și ușor de găsit.",
  "Ești la zi cu RO e-Factura (transmise în termen, arhivate).",
  "Stocul scriptic corespunde cu cel faptic (ai făcut inventar recent).",
  "Contractele și autorizațiile sunt valabile și la îndemână.",
  "Datele firmei la ONRC sunt actualizate (sediu, puncte de lucru, asociați).",
  "Ai acces la SPV și verifici periodic mesajele de la ANAF.",
  "Există o persoană sau un sistem care știe unde e fiecare document.",
];

const glossary = [
  { term: "ANAF", def: "Agenția Națională de Administrare Fiscală — autoritatea care colectează taxele și face controale." },
  { term: "SPV", def: "Spațiul Privat Virtual — „cutia poștală” online a firmei în relația cu ANAF: notificări și declarații." },
  { term: "ONRC", def: "Oficiul Național al Registrului Comerțului — înființarea firmei și înregistrarea modificărilor." },
  { term: "RO e-Factura", def: "Sistemul național prin care facturile se transmit electronic, prin ANAF." },
  { term: "SAF-T (D406)", def: "Un fișier standard care trimite către ANAF datele contabile detaliate ale firmei." },
  { term: "RO e-Transport", def: "Sistemul de monitorizare a transporturilor de mărfuri; generează un cod UIT." },
  { term: "SEAP / SICAP", def: "Platforma achizițiilor publice (e-licitație) — relevantă pentru lucrul cu instituțiile statului." },
  { term: "ERP / CRM", def: "Programe care țin laolaltă evidențele firmei (stocuri, facturi) și relația cu clienții." },
  { term: "Cash-flow", def: "Fluxul de bani: cât intră, cât iese și când. Diferit de profit." },
  { term: "Inventar", def: "Verificarea faptică a stocului, comparată cu evidența scriptică." },
];

const myths = [
  { mit: "„Firma merge, deci e sănătoasă.”", real: "Activitatea nu e sănătate. Poți fi profitabil și fără bani de plăți." },
  { mit: "„Organizarea e pentru firmele mari.”", real: "Firmele mici au cel mai mult de câștigat — pleacă de la zero structură." },
  { mit: "„Digitalizarea e scumpă și complicată.”", real: "De multe ori înseamnă instrumente simple și obiceiuri noi, nu software costisitor." },
  { mit: "„Mă ocup eu de tot, e mai sigur.”", real: "„Totul în capul patronului” e cea mai mare vulnerabilitate a unei firme mici." },
  { mit: "„Controalele sunt doar ghinion.”", real: "Majoritatea problemelor la control se văd și se previn din timp." },
];

const toc = [
  { href: "#zone", label: "Cele 5 zone de control" },
  { href: "#calendar", label: "Calendarul conformării digitale" },
  { href: "#control", label: "Ești pregătit pentru un control?" },
  { href: "#glosar", label: "Glosar" },
  { href: "#mituri", label: "Mituri vs. realitate" },
  { href: "#surse", label: "Surse" },
];

export default function ResursePage() {
  return (
    <>
      <PageHero
        eyebrow="Ghid pentru IMM-uri"
        title="Ghidul firmei în control"
        intro="Tot ce ține de ordine, control și conformare într-o firmă mică din România — explicat simplu, cu pași concreți."
      />

      {/* TOC */}
      <div className="border-b border-slate-100 bg-mist">
        <div className="container-content flex flex-wrap gap-x-6 gap-y-2 py-4 text-sm">
          {toc.map((t) => (
            <a key={t.href} href={t.href} className="font-display font-semibold text-brand-green-dark hover:underline">
              {t.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container-content space-y-20 py-16">
        {/* ZONE */}
        <section id="zone" className="scroll-mt-24">
          <SectionHeading eyebrow="Cadru de lucru" title="Cele 5 zone de control ale unei firme" intro="Orice firmă mică se ține pe cinci zone. Dacă una „scârțâie”, se simte în toate celelalte." />
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-navy-800 font-display text-navy-800">
                  <th className="py-3 pr-4">#</th>
                  <th className="py-3 pr-4">Zona</th>
                  <th className="py-3 pr-4">Întrebarea-cheie</th>
                  <th className="py-3">Ce merge prost fără ea</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {zones.map((z) => (
                  <tr key={z.n} className="border-b border-slate-100 align-top">
                    <td className="py-4 pr-4 font-display text-lg font-extrabold text-brand-green-dark">{z.n}</td>
                    <td className="py-4 pr-4 font-display font-bold text-navy-800">{z.zone}</td>
                    <td className="py-4 pr-4">{z.q}</td>
                    <td className="py-4">{z.bad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CALENDAR */}
        <section id="calendar" className="scroll-mt-24">
          <SectionHeading eyebrow="Conformare" title="Calendarul conformării digitale (2024–2025)" />
          <div className="mt-4 flex items-start gap-2 rounded-btn bg-amber-50 p-4 text-sm text-amber-800">
            <Icon name="shield" className="h-5 w-5 shrink-0" />
            <p>Reglementările se schimbă des și au excepții/praguri. Informațiile sunt orientative — verifică întotdeauna pe ANAF și cu contabilul tău.</p>
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {calendar.map((c) => (
              <div key={c.name} className="card">
                <h3 className="font-display text-lg font-bold text-navy-800">{c.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.what}</p>
                <p className="mt-4 font-display text-sm font-bold text-brand-green-dark">{c.when}</p>
                <p className="mt-2 text-xs text-slate-500">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            <strong>Sancțiuni:</strong> neemiterea facturii prin RO e-Factura poate însemna o amendă
            de <strong>15% din valoarea facturii</strong>; întârzierile, amenzi de la 1.000 la 2.500 lei.
          </p>
        </section>

        {/* CONTROL CHECKLIST */}
        <section id="control" className="scroll-mt-24 rounded-card bg-mist p-8 sm:p-10">
          <SectionHeading eyebrow="Auto-verificare" title="Ești pregătit pentru un control?" intro="Bifează mental. Fiecare „nu” este o zonă de risc." />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {checklist.map((c, i) => (
              <li key={i} className="flex items-start gap-3 rounded-btn bg-white p-4 text-slate-700 shadow-sm">
                <span className="mt-0.5 text-brand-green-dark"><Icon name="check" className="h-5 w-5" /></span>
                <span className="text-sm">{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
            <p className="rounded-btn border border-slate-200 bg-white p-3"><strong>0–2 bife:</strong> risc mare — merită un audit urgent.</p>
            <p className="rounded-btn border border-slate-200 bg-white p-3"><strong>3–5 bife:</strong> o bază bună, dar cu zone vulnerabile.</p>
            <p className="rounded-btn border border-slate-200 bg-white p-3"><strong>6–7 bife:</strong> ești în control — ține ritmul.</p>
          </div>
        </section>

        {/* GLOSAR */}
        <section id="glosar" className="scroll-mt-24">
          <SectionHeading eyebrow="Pe înțelesul tuturor" title="Glosar — termenii esențiali" />
          <dl className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {glossary.map((g) => (
              <div key={g.term} className="border-l-2 border-brand-green pl-4">
                <dt className="font-display font-bold text-navy-800">{g.term}</dt>
                <dd className="mt-1 text-sm text-slate-600">{g.def}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* MITURI */}
        <section id="mituri" className="scroll-mt-24">
          <SectionHeading eyebrow="Clarificări" title="Mituri vs. realitate" />
          <div className="mt-8 space-y-3">
            {myths.map((m, i) => (
              <div key={i} className="grid gap-4 rounded-card border border-slate-100 p-5 md:grid-cols-2">
                <p className="text-slate-500">{m.mit}</p>
                <p className="flex items-start gap-2 font-medium text-navy-800">
                  <span className="mt-1 text-brand-green-dark"><Icon name="check" className="h-4 w-4" /></span>
                  {m.real}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SURSE */}
        <section id="surse" className="scroll-mt-24">
          <SectionHeading eyebrow="Transparență" title="Surse" />
          <p className="mt-4 max-w-3xl text-slate-600">
            Datele provin din surse publice (cercetare 2026): Statista și Parlamentul European
            (date despre IMM-uri), Banca Europeană de Investiții și Comisia Europeană (digitalizare),
            VATupdate / Sovos (termene fiscale), SCORE (cauze ale eșecului firmelor) și ToolsGroup
            (costurile gestiunii stocurilor).
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Conținut orientativ, nu consultanță fiscală. Pentru obligațiile exacte ale firmei tale,
            verifică pe ANAF și consultă-te cu contabilul. Vezi și{" "}
            <Link href="/despre" className="underline">despre mine</Link>.
          </p>
        </section>
      </div>

      <CtaBand
        title="Vrei să vezi exact unde stă firma ta?"
        text="Hai să facem împreună un audit rapid de organizare."
      />
    </>
  );
}
