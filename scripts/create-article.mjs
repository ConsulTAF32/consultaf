// Script unic pentru a crea primul articol în Sanity, cu imagine de copertă,
// titluri, text îngroșat și linkuri interne — formatat corect (Portable Text).
//
// Necesită un token de scriere în `.env.local`:
//   SANITY_API_WRITE_TOKEN="..."   (creat în sanity.io/manage → API → Tokens, rol Editor)
//
// Rulează:  node scripts/create-article.mjs

import { createClient } from "@sanity/client";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

// --- încarcă variabilele din .env.local (fără dependențe externe) ---
const env = {};
try {
  for (const line of readFileSync(join(root, ".env.local"), "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
    if (m) env[m[1]] = m[2];
  }
} catch {}

const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error(
    "\n  Lipsește SANITY_API_WRITE_TOKEN.\n" +
      "  Creează un token (rol Editor) în sanity.io/manage → API → Tokens,\n" +
      '  apoi adaugă în .env.local:  SANITY_API_WRITE_TOKEN="token-ul-tau"\n'
  );
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion: "2024-10-01", token, useCdn: false });

// --- helper: transformă text cu **îngroșat** și [link](/url) în spans Portable Text ---
let k = 0;
const key = () => `k${k++}`;

function inline(str, markDefs) {
  const spans = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0, m;
  const plain = (t) => t && spans.push({ _type: "span", _key: key(), text: t, marks: [] });
  while ((m = re.exec(str))) {
    plain(str.slice(last, m.index));
    if (m[1] !== undefined) {
      const def = key();
      markDefs.push({ _type: "link", _key: def, href: m[2] });
      spans.push({ _type: "span", _key: key(), text: m[1], marks: [def] });
    } else {
      spans.push({ _type: "span", _key: key(), text: m[3], marks: ["strong"] });
    }
    last = re.lastIndex;
  }
  plain(str.slice(last));
  return spans;
}

const p = (str) => { const md = []; return { _type: "block", _key: key(), style: "normal", markDefs: md, children: inline(str, md) }; };
const h2 = (str) => { const md = []; return { _type: "block", _key: key(), style: "h2", markDefs: md, children: inline(str, md) }; };

const body = [
  p("Multe firme mici merg ani la rând „pe intuiție”. Funcționează — până într-o zi când apare un control, pleacă omul-cheie sau, deși ai vândut bine, nu mai ai bani de salarii. De obicei nu e ghinion: sunt semne care se vedeau de mult. Iată cinci dintre cele mai frecvente — și ce poți face pentru fiecare."),

  h2("1. Nu poți spune în 2 minute cât ai pe stoc și cât valorează"),
  p("Dacă răspunsul la „cât marfă am și cât face?” este „trebuie să mă uit” sau „întreb pe cineva”, banii tăi stau pe un raft fără să știi exact câți. Un stoc prost ținut înseamnă fie capital blocat degeaba, fie vânzări pierdute fiindcă tocmai ce-ți trebuia lipsea."),
  p("**Ce poți face:** un inventar faptic, comparat cu evidența scriptică, și o regulă simplă de actualizare. Nu ai nevoie de un program scump ca să începi — un fișier bine ținut e deja un pas uriaș."),

  h2("2. Un control ANAF te sperie"),
  p("Frica de control nu vine din control în sine, ci din nesiguranță: nu știi sigur dacă toate actele sunt la locul lor. O firmă organizată tratează un control ca pe o verificare de rutină, nu ca pe o criză."),
  p("**Ce poți face:** ține facturile (emise și primite) complete și ușor de găsit, fii la zi cu RO e-Factura și verifică periodic mesajele din SPV. Pașii concreți sunt în [Ghidul firmei în control](/resurse)."),

  h2("3. Iei decizii „din burtă”, nu din date"),
  p("Când informațiile sunt împrăștiate în capete, caiete și mesaje pe telefon, deciziile devin pariuri. Nu îți trebuie rapoarte complicate — îți trebuie câteva cifre corecte, la îndemână."),
  p("**Ce poți face:** alege 3–4 indicatori pe care îi urmărești lunar (încasări, cheltuieli, stoc, restanțe de la clienți) și un singur loc unde stau."),

  h2("4. Totul depinde de o singură persoană"),
  p("Dacă firma se oprește când lipsești tu, nu ai o firmă — ai un job foarte solicitant. „Totul în capul patronului” este cea mai mare vulnerabilitate a unei afaceri mici."),
  p("**Ce poți face:** scrie procesele repetitive ca pași simpli și clarifică cine ce face și până când. Câteva proceduri scurte fac firma mai rezistentă și mult mai ușor de delegat."),

  h2("5. Ai profit pe hârtie, dar nu ai bani de plăți"),
  p("Profitul și banii din cont nu sunt același lucru. Poți fi „pe plus” în contabilitate și totuși să nu ai cu ce plăti furnizorii, pentru că banii sunt blocați în stoc sau în facturi neîncasate. Nu întâmplător, majoritatea firmelor care eșuează au de fapt o problemă de cash-flow."),
  p("**Ce poți face:** urmărește fluxul de bani separat de profit — cât intră, cât iese și când. O imagine clară a încasărilor și plăților viitoare previne majoritatea surprizelor neplăcute."),

  h2("De unde începi"),
  p("Nu trebuie să le rezolvi pe toate deodată. Alege semnul care te apasă cel mai tare și fă primul pas acolo. Ordinea aduce ordine: o zonă pusă la punct le face vizibile și pe celelalte."),
  p("Dacă vrei o privire din afară asupra firmei tale, putem face împreună un audit rapid de organizare — vezi [serviciile](/servicii) sau scrie-mi direct."),
];

async function main() {
  console.log("→ Încarc imaginea de copertă...");
  const imageBuffer = readFileSync(join(root, "public/img/controale.webp"));
  const asset = await client.assets.upload("image", imageBuffer, { filename: "control-firma.webp" });

  const doc = {
    _type: "article",
    title: "5 semne că firma ta a scăpat de sub control (și ce poți face)",
    slug: { _type: "slug", current: "5-semne-ca-firma-ta-a-scapat-de-sub-control" },
    excerpt:
      "Multe firme mici merg „pe intuiție” până când un control, un om-cheie care pleacă sau un gol de bani le dă peste cap. Iată semnele de luat în serios — și primii pași spre ordine.",
    coverImage: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: "Antreprenor care pune ordine în documentele și procesele firmei",
    },
    publishedAt: new Date().toISOString(),
    body,
  };

  console.log("→ Creez articolul...");
  const created = await client.create(doc);
  console.log(`\n✅ Gata! Articol creat: ${created._id}`);
  console.log("   Vezi-l la: http://localhost:3000/articole/5-semne-ca-firma-ta-a-scapat-de-sub-control\n");
}

main().catch((err) => {
  console.error("\n❌ Eroare:", err.message || err);
  process.exit(1);
});
