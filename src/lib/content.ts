// Toate textele site-ului ConsulTAF, într-un singur loc.
// Sursă: docs/brand-research.md, docs/content-educational.md, docs/content-resource-page.md

export const site = {
  name: "ConsulTAF",
  person: "Tiberiu Ciprian Franciuc",
  role: "Consultant operațional",
  phone: "0744 210 374",
  phoneHref: "tel:+40744210374",
  whatsapp:
    "https://wa.me/40744210374?text=" +
    encodeURIComponent("Bună ziua! Aș dori mai multe detalii despre serviciile ConsulTAF."),
  email: "tiberiu@consultaf.org",
  tagline: "Partenerul tău pentru o afacere în control, eficientă și profitabilă",
  disclaimer:
    "Nu ofer consultanță fiscală autorizată sau contabilitate. Serviciile sunt orientate pe organizare, control și suport operațional.",
};

export const nav = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/resurse", label: "Resurse" },
  { href: "/despre", label: "Despre" },
  { href: "/contact", label: "Contact" },
];

export const badges = [
  { title: "Firmă în regulă", desc: "Conformare și riscuri reduse" },
  { title: "Documente organizate", desc: "Ordine și trasabilitate" },
  { title: "Procese clare", desc: "Decizii și rezultate mai bune" },
];

export const values = [
  "Rezultate concrete",
  "Parteneriat pe termen lung",
  "Confidențialitate și seriozitate",
  "Performanță sustenabilă",
];

export const processSteps = [
  { step: "Planificare", desc: "Înțelegem împreună unde ești și unde vrei să ajungi." },
  { step: "Organizare", desc: "Punem ordine în procese, documente și responsabilități." },
  { step: "Control", desc: "Îți dăm vizibilitate: știi mereu ce se întâmplă în firmă." },
  { step: "Optimizare", desc: "Tăiem risipa și costurile inutile." },
  { step: "Creștere", desc: "Cu o bază solidă, firma poate crește fără să se rupă." },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  isNew?: boolean;
  points: { title: string; desc: string }[];
};

export const services: Service[] = [
  {
    slug: "audit",
    icon: "chart",
    title: "Audit financiar și operațional",
    short: "Identific riscurile și ineficiențele pentru decizii mai bune.",
    image: "/img/audit.webp",
    intro:
      "Analizăm în profunzime procesele și identificăm pierderile, blocajele și riscurile din business.",
    points: [
      { title: "Procese clare", desc: "Evaluăm procesele operaționale și identificăm punctele slabe." },
      { title: "Costuri sub control", desc: "Descoperim costurile ascunse și ineficiențele." },
      { title: "Risc mai mic", desc: "Reducem riscurile operaționale și creștem controlul." },
    ],
  },
  {
    slug: "organizare",
    icon: "flow",
    title: "Organizare internă, stocuri și digitalizare",
    short: "Pun ordine în procese, stocuri și informații.",
    image: "/img/stocuri.webp",
    intro:
      "Punem ordine în procese, stocuri și informații și folosim soluții simple de digitalizare pentru mai mult control și eficiență.",
    points: [
      { title: "Procese eficiente", desc: "Organizăm fluxurile de lucru și clarificăm responsabilitățile." },
      { title: "Stocuri sub control", desc: "Îmbunătățim gestiunea stocurilor și asigurăm evidențe clare." },
      { title: "Digitalizare simplă", desc: "Implementăm instrumente și soluții digitale care aduc eficiență și control." },
      { title: "Date corecte, decizii bune", desc: "Informații clare pentru decizii rapide și asumate." },
    ],
  },
  {
    slug: "costuri",
    icon: "coins",
    title: "Optimizare costuri și profitabilitate",
    short: "Reduc costurile și cresc profitabilitatea companiei.",
    image: "/img/costuri.webp",
    intro:
      "Identificăm risipa și ineficiențele, optimizăm costurile și îmbunătățim profitabilitatea companiei.",
    points: [
      { title: "Costuri reduse", desc: "Identificăm și eliminăm costurile inutile și ineficiente." },
      { title: "Profit mai mare", desc: "Optimizăm procesele pentru a crește marja și profitabilitatea." },
      { title: "Decizii mai bune", desc: "Oferim analize clare și date relevante pentru decizii corecte." },
      { title: "Control și performanță", desc: "Implementăm măsuri de control pentru rezultate sustenabile." },
    ],
  },
  {
    slug: "controale",
    icon: "shield",
    title: "Suport pentru controale și conformare",
    short: "Te pregătesc pentru controale și verificări.",
    image: "/img/controale.webp",
    intro:
      "Reducem riscurile și te ajutăm să fii pregătit pentru controale și verificări. Mai multă ordine, trasabilitate și siguranță în activitatea companiei.",
    points: [
      { title: "Identificăm riscurile", desc: "Analizăm zonele cu risc și posibile probleme înainte de un control." },
      { title: "Organizăm documentele", desc: "Structurăm documentele și evidențele pentru acces rapid și trasabilitate." },
      { title: "Clarificăm procesele", desc: "Revizuim fluxurile operaționale și asigurăm coerență și conformare." },
      { title: "Evităm problemele", desc: "Depistăm și corectăm problemele înainte ca acestea să devină riscuri." },
      { title: "Siguranță și încredere", desc: "Ești pregătit pentru orice verificare, cu procese clare și informații corecte." },
    ],
  },
  {
    slug: "administrativ",
    icon: "building",
    title: "Suport administrativ și digitalizare",
    short: "De la înființare firmă la instituții, documente și platforme publice.",
    image: "/img/administrativ.webp",
    isNew: true,
    intro:
      "Ofer suport pentru înființarea și organizarea firmelor, punerea în ordine a documentelor și proceselor interne, precum și digitalizarea activității prin instrumente simple și eficiente.",
    points: [
      { title: "Înființare firmă și suport ONRC", desc: "Sprijin în înființarea firmei, modificări administrative, puncte de lucru și actualizări de date la ONRC." },
      { title: "ANAF, SPV și autorizări", desc: "Asistență în relația cu ANAF și raportarea în SPV, plus suport pentru obținerea autorizărilor necesare." },
      { title: "Suport în relația cu contabilul", desc: "Organizăm și structurăm documentele necesare pentru o colaborare eficientă și clară." },
      { title: "Organizare documente și digitalizare", desc: "Google Workspace, arhivare digitală, formulare și fișiere de control pentru acces rapid și siguranță." },
      { title: "Stocuri, inventare și rapoarte", desc: "Gestiunea stocurilor, inventare și rapoarte, plus suport SEAP / SICAP (e-licitație)." },
    ],
  },
];

export const audience = [
  "firme mici și medii",
  "business-uri în creștere fără structură clară",
  "firme cu probleme de organizare sau control",
  "antreprenori care vor să înțeleagă mai bine ce se întâmplă în firmă",
];

export const facts = [
  { stat: "9 din 10", text: "firme din România sunt firme micro (sub 10 angajați)." },
  { stat: "doar 17%", text: "dintre IMM-urile românești folosesc un program de gestiune (ERP/CRM)." },
  { stat: "25–32%", text: "pe an din valoarea stocului — atât poate costa doar păstrarea lui." },
  { stat: "82%", text: "dintre firmele care eșuează au probleme de cash-flow." },
];

export const quotes = [
  {
    text: "Eficiența înseamnă să faci lucrurile cum trebuie; eficacitatea înseamnă să faci lucrurile care trebuie.",
    author: "Peter Drucker",
  },
  {
    text: "Fără date, ești doar încă o persoană cu o părere.",
    author: "atribuit lui W. Edwards Deming",
  },
];

export const signs = [
  "Nu poți răspunde în 2 minute la întrebarea „cât am pe stoc și cât valorează?”.",
  "Te stresează un control ANAF, pentru că nu știi sigur dacă actele sunt în regulă.",
  "Iei decizii „din burtă”, pentru că informațiile sunt împrăștiate în capete, caiete și mesaje.",
];
