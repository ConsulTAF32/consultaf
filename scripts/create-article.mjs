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

// Datele articolului pe care îl creezi acum (schimbă-le pentru următorul articol).
const TITLE = "RO e-Factura pe înțelesul antreprenorului: ce e și cum eviți amenzile";
const SLUG = "ro-e-factura-pe-intelesul-antreprenorului";
const EXCERPT =
  "Din 2024–2025, facturarea electronică prin ANAF a devenit obligatorie pentru tot mai multe firme. Pe scurt: ce înseamnă, ce ai de făcut și greșelile care atrag amenzi.";
const COVER_IMAGE = "public/img/administrativ.webp";
const COVER_ALT = "Antreprenor care emite o factură electronică pe laptop";

const body = [
  p("Dacă ai o firmă, ai auzit deja de „e-Factura” — de obicei în aceeași propoziție cu „obligatoriu” și „amendă”. Vestea bună e că, odată înțeles, sistemul e mai simplu decât pare. Iată tot ce contează, fără jargon."),

  h2("Ce este, de fapt, RO e-Factura"),
  p("RO e-Factura este sistemul național prin care facturile nu se mai trimit doar pe e-mail sau pe hârtie, ci se transmit electronic, într-un format standard, prin platforma ANAF. Practic, ANAF „vede” factura în același timp cu clientul tău. Scopul declarat: mai puțină evaziune și mai puțină birocrație pe termen lung."),

  h2("Cine e obligat și de când"),
  p("Pe scurt: pentru relațiile **între firme (B2B)**, sistemul a devenit obligatoriu de la **1 ianuarie 2024**. Pentru vânzările **către populație (B2C)**, obligația a intrat în vigoare de la **1 ianuarie 2025**. Există praguri și excepții care se schimbă des, așa că pentru situația exactă a firmei tale verifică pe ANAF și cu contabilul."),

  h2("Ce trebuie să faci, pas cu pas"),
  p("**1. Acces la SPV.** Ai nevoie de acces în Spațiul Privat Virtual — „cutia poștală” online a firmei în relația cu ANAF."),
  p("**2. O modalitate de a emite.** Fie un program de facturare care trimite direct în e-Factura, fie aplicația pusă la dispoziție de ANAF. Multe programe de gestiune fac deja asta automat."),
  p("**3. Transmiterea la timp.** Factura se transmite în sistem în termenul legal de la emitere — nu o lăsa „pe mâine”."),
  p("**4. Arhivarea.** Factura electronică se păstrează mai mulți ani; asigură-te că ai unde și cum, organizat, ca s-o găsești în 2 minute la nevoie."),

  h2("Greșelile care atrag amenzi"),
  p("Cele mai frecvente nu țin de rea-voință, ci de dezordine: facturi netrimise în termen, transmise greșit sau deloc, ori pierdute prin e-mailuri. Sancțiunile pot ajunge până la **15% din valoarea facturii** în anumite situații, plus amenzi fixe pentru întârzieri. Cu alte cuvinte, o problemă de organizare devine repede o problemă de bani."),

  h2("Cum te pregătești fără stres"),
  p("Nu îți trebuie soluții scumpe — îți trebuie un proces clar: cine emite, prin ce program, până când se transmite și unde se arhivează. Odată ce ai acest flux pus la punct, e-Factura devine o rutină, nu o sursă de panică lunară."),
  p("Dacă vrei să pui la punct acest flux în firma ta — de la accesul în SPV la organizarea documentelor — pot să te ajut. Vezi [serviciile](/servicii) sau citește mai mult în [Ghidul firmei în control](/resurse)."),

  h2("De reținut"),
  p("RO e-Factura nu e un moft birocratic care trece — e noua normalitate. Firmele care își fac ordine acum tratează verificările ca pe rutină. Restul plătesc, la propriu, dezordinea."),
  p("_Acest articol este orientativ și nu reprezintă consultanță fiscală. Pentru obligațiile exacte ale firmei tale, verifică pe ANAF și consultă-te cu contabilul._"),
];

async function main() {
  // Evită duplicatele dacă rulezi scriptul de două ori.
  const existing = await client.fetch('*[_type=="article" && slug.current==$slug][0]._id', { slug: SLUG });
  if (existing) {
    console.log(`\n⚠️  Există deja un articol cu slug-ul „${SLUG}” (${existing}). Nu creez un duplicat.\n`);
    return;
  }

  console.log("→ Încarc imaginea de copertă...");
  const imageBuffer = readFileSync(join(root, COVER_IMAGE));
  const asset = await client.assets.upload("image", imageBuffer, { filename: `${SLUG}.webp` });

  const doc = {
    _type: "article",
    title: TITLE,
    slug: { _type: "slug", current: SLUG },
    excerpt: EXCERPT,
    coverImage: {
      _type: "image",
      asset: { _type: "reference", _ref: asset._id },
      alt: COVER_ALT,
    },
    publishedAt: new Date().toISOString(),
    body,
  };

  console.log("→ Creez articolul...");
  const created = await client.create(doc);
  console.log(`\n✅ Gata! Articol creat: ${created._id}`);
  console.log(`   Vezi-l la: http://localhost:3000/articole/${SLUG}\n`);
}

main().catch((err) => {
  console.error("\n❌ Eroare:", err.message || err);
  process.exit(1);
});
