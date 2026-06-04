# ConsulTAF — Brand & Site Research Brief

> Research deliverable for the ConsulTAF website. No implementation yet — this captures
> brand, content, design tokens, and the image plan so the build can start cleanly.
> Stack target (from repo `.gitignore`): **Next.js + TypeScript, deploy on Vercel**.

---

## 1. Brand snapshot

| | |
|---|---|
| **Brand** | ConsulTAF (stylized: "Consul" + "TAF"; *TAF is a brand coinage, not initials*) |
| **Person** | Tiberiu Ciprian Franciuc — *Consultant operațional* |
| **Phone** | 0744 210 374 |
| **Email** | tiberiu@consultaf.org |
| **Positioning** | "Partenerul tău pentru o afacere în control, eficientă și profitabilă" |
| **Audience** | IMM-uri (firme mici și medii) din România |
| **Language** | Romanian only |
| **Credibility** | 8 ani experiență în audit financiar și risc operațional (EY, ING) |
| **Disclaimer** | Nu oferă consultanță fiscală autorizată sau contabilitate — doar organizare, control și suport operațional. |

---

## 2. Design tokens

Extracted directly from the existing flyers (the brand already has a coherent identity — we translate it, not reinvent it).

### Color

| Token | Hex | Use |
|---|---|---|
| `--navy-900` | `#05192F` | hero & footer background |
| `--navy-800` | `#0B2545` | cards/panels on light, "Consul" wordmark on light |
| `--navy-700` | `#163A63` | bar-chart navy, borders on dark |
| `--green-600` | `#5E9A35` | accent dark stop |
| `--green-500` | `#669E44` | **primary accent** — links, icons, buttons, "TAF" |
| `--green-400` | `#8EC74A` | bright lime — gradient tops, hovers |
| `--blue-400` | `#4E94CE` | arrow/orbit blue (logo + accents) |
| `--white` | `#FFFFFF` | text on navy |
| `--grey-200` | `#C6CBD4` | secondary text |
| `--grey-50` | `#F5F7FA` | light section background |

Signature treatment: **headings use a navy→green or green-lime gradient**; primary buttons are solid `--green-500`.

### Typography

- **Headings / display:** **Montserrat** (matches the logo wordmark). Weights 600/700/800.
- **Body:** **Inter** (clean, neutral, pairs well with Montserrat).
- Both fully support Romanian diacritics (ă â î ș ț) — verified requirement.
- Scale suggestion: H1 clamp(2.4rem, 5vw, 4rem) / H2 2rem / body 1.0625rem / line-height 1.6.

### Shape language

- Rounded corners (cards `~16px`, buttons `~10px`) — matches the soft icon style on the flyers.
- Line-style icons (stroke, not filled) for service items, in `--green-500`.
- Generous vertical rhythm; alternating navy / light sections.

---

## 3. Logo assets

Recreated as clean vector (see `docs/logo/`). **SVG only — no PNG.**

| File | Use |
|---|---|
| `logo/logo-icon.svg` | emblem only — favicon, app icon, OG mark |
| `logo/logo-full-dark.svg` | full lockup for navy backgrounds (white "Consul") |
| `logo/logo-full-light.svg` | full lockup for light backgrounds (navy "Consul") |

Emblem = orbit swoosh (blue→silver) + ascending bars (alternating green/navy) + upward blue arrow.
Wordmark = Montserrat Bold, outlined to paths, green underline.

---

## 4. Sitemap

```
/            Acasă     — scrolling landing page (now includes friendly explainer sections — see content-educational.md)
/servicii    Servicii  — detailed breakdown of the 5 pillars
/resurse     Resurse   — extensive documented guide for SMEs (see content-resource-page.md)
/despre      Despre    — Tiberiu's story, experience, approach, disclaimer
/contact     Contact   — phone + email (display only, no form)
```

Header nav: logo · Acasă · Servicii · Resurse · Despre · Contact · [button: 0744 210 374]

**Content sources for the build:**
- Landing educational sections + facts + quotes → `content-educational.md`
- `/resurse` page → `content-resource-page.md`
- Sourced facts behind both → `domain-research.md`
Footer (navy): logo + tagline · nav links · contact · disclaimer line.

---

## 5. Page content (Romanian copy)

### 5.1 Acasă (landing)

**Hero**
- H1: **Partenerul tău pentru o afacere în control, eficientă și profitabilă**
- Sub: *Ai impresia că firma „merge", dar nu ai control real asupra ei? Stocuri neclare, costuri care scapă de sub control, documente dezorganizate sau riscuri la controale?*
- Lead: *Ofer servicii de consultanță operațională pentru IMM-uri, cu focus pe organizare, control și claritate în activitate.*
- CTA primar: **Hai să discutăm** → tel:0744210374 · CTA secundar: **Vezi serviciile** → /servicii
- 3 badge-uri: **Firmă în regulă** (Conformare și riscuri reduse) · **Documente organizate** (Ordine și trasabilitate) · **Procese clare** (Decizii și rezultate mai bune)

**Intro band**
> De la strategie și control financiar, până la documente, instituții și digitalizare, ne ocupăm de ceea ce contează, ca tu să te concentrezi pe creșterea afacerii tale.

**Servicii (overview — 5 carduri, link spre /servicii)**
1. **Audit financiar și operațional** — Identific riscurile și ineficiențele pentru decizii mai bune.
2. **Organizare internă, stocuri și digitalizare** — Pun ordine în procese, stocuri și informații.
3. **Optimizare costuri și profitabilitate** — Reduc costurile și cresc profitabilitatea companiei.
4. **Suport pentru controale și conformare** — Te pregătesc pentru controale și verificări.
5. **Suport administrativ și digitalizare** *(NOU)* — De la înființare firmă la instituții, documente și platforme publice.

**Pentru cine este potrivit**
- firme mici și medii
- business-uri în creștere fără structură clară
- firme cu probleme de organizare sau control
- antreprenori care vor să înțeleagă mai bine ce se întâmplă în firmă

**Band de încredere**
> 8 ani experiență în audit financiar și risc operațional (EY, ING), aplicată practic în organizarea și controlul companiilor.

Valori: **Rezultate concrete · Parteneriat pe termen lung · Confidențialitate și seriozitate · Performanță sustenabilă**

**CTA final** — *Pregătit să pui ordine în afacerea ta?* → Contact

**Disclaimer (subtil, lângă footer)**
> Nu ofer consultanță fiscală autorizată sau contabilitate. Serviciile sunt orientate pe organizare, control și suport operațional.

**Embedded motifs captured from the flyers (not plain copy — don't lose these):**
- **5-step process model** (drawn on the laptop checklist in flyer 1) — use as a "Cum lucrez" section:
  **Planificare → Organizare → Control → Optimizare → Creștere**
- **Binder-label motif** (recurring visual): *Stocuri · Facturi · Contracte · Documente · Procese* (flyer 6 variant: *ONRC · ANAF/SPV · Autorizări · Documente · Contracte*). Good as an iconography/section divider device.

---

### 5.2 Servicii (detaliat — text preluat din pliante)

**1. Audit financiar și operațional**
*Analizăm în profunzime procesele și identificăm pierderile, blocajele și riscurile din business.*
- **Procese clare** — Evaluăm procesele operaționale și identificăm punctele slabe.
- **Costuri sub control** — Descoperim costurile ascunse și ineficiențele.
- **Risc mai mic** — Reducem riscurile operaționale și creștem controlul.

**2. Organizare internă, stocuri și digitalizare**
*Punem ordine în procese, stocuri și informații și folosim soluții simple de digitalizare pentru mai mult control și eficiență.*
- **Procese eficiente** — Organizăm fluxurile de lucru și clarificăm responsabilitățile.
- **Stocuri sub control** — Îmbunătățim gestiunea stocurilor și asigurăm evidențe clare.
- **Digitalizare simplă** — Implementăm instrumente și soluții digitale care aduc eficiență și control.
- **Date corecte, decizii bune** — Informații clare pentru decizii rapide și asumate.

**3. Optimizare costuri și profitabilitate**
*Identificăm risipa și ineficiențele, optimizăm costurile și îmbunătățim profitabilitatea companiei.*
- **Costuri reduse** — Identificăm și eliminăm costurile inutile și ineficiente.
- **Profit mai mare** — Optimizăm procesele pentru a crește marja și profitabilitatea.
- **Decizii mai bune** — Oferim analize clare și date relevante pentru decizii corecte.
- **Control și performanță** — Implementăm măsuri de control pentru rezultate sustenabile.

**4. Suport pentru controale și conformare**
*Reducem riscurile și te ajutăm să fii pregătit pentru controale și verificări. Mai multă ordine, trasabilitate și siguranță în activitatea companiei.*
- **Identificăm riscurile** — Analizăm zonele cu risc și posibile probleme înainte de un control.
- **Organizăm documentele** — Structurăm și ordonăm documentele și evidențele pentru acces rapid și trasabilitate.
- **Clarificăm procesele** — Revizuim fluxurile operaționale și asigurăm coerență și conformare.
- **Evităm problemele** — Depistăm și corectăm problemele înainte ca acestea să devină riscuri în timpul unui control.
- **Siguranță și încredere** — Ești pregătit pentru orice verificare, cu procese clare și informații corecte.

**5. Suport administrativ și digitalizare** *(NOU)*
*Ofer suport pentru înființarea și organizarea firmelor, punerea în ordine a documentelor și proceselor interne, precum și digitalizarea activității prin instrumente simple și eficiente.*
- **Înființare firmă și suport ONRC** — Sprijin în înființarea firmei, modificări administrative, puncte de lucru și actualizări de date la ONRC.
- **ANAF, SPV și autorizări** — Asistență în relația cu ANAF și raportarea în SPV, plus suport pentru obținerea autorizărilor necesare.
- **Suport în relația cu contabilul** — Organizăm și structurăm documentele necesare pentru o colaborare eficientă și clară cu contabilul.
- **Organizare documente și digitalizare** — Google Workspace, arhivare digitală, formulare și fișiere de control pentru acces rapid și siguranță.
- **Stocuri, inventare și rapoarte** — Gestiunea stocurilor, inventare și rapoarte, plus suport în utilizarea platformelor SEAP / SICAP (e-licitație).

---

### 5.3 Despre

- Cine este Tiberiu Ciprian Franciuc; rolul de *consultant operațional*.
- Background: **8 ani în audit financiar și risc operațional la EY și ING**, aplicat practic în organizarea și controlul companiilor.
- Abordare: practic, concret, focus pe ordine / control / claritate; partener pe termen lung pentru antreprenor.
- Valorile (4) + disclaimer-ul integral.

### 5.4 Contact

- **Telefon:** 0744 210 374 (click-to-call) · **Email:** tiberiu@consultaf.org (mailto)
- Program / zonă de acoperire (de confirmat cu Tiberiu).
- Fără formular — afișare directă, conform deciziei.

---

## 6. Imagery / stock-image manifest

**Style guide:** modern corporate, navy + green tonality, real desks/laptops with charts,
organized binders, warehouse/stocuri, calculator + reports. Avoid cheesy handshakes.
**Source:** Unsplash / Pexels (royalty-free, commercial use, no attribution required).
**Service tiles use inline SVG line-icons (not photos)** — recreated in the flyer style.

| # | Page / slot | Subject | Search terms | File (proposed) |
|---|---|---|---|---|
| 1 | Acasă hero | laptop with analytics dashboard on a clean desk, dark tone | "business analytics dashboard laptop dark", "financial charts laptop desk" | `img/hero.webp` |
| 2 | Acasă "pentru cine" | entrepreneur / small team reviewing documents | "small business owner reviewing reports" | `img/audience.webp` |
| 3 | Servicii — Audit | calculator + financial reports + pen | "financial audit reports calculator" | `img/audit.webp` |
| 4 | Servicii — Organizare/Stocuri | labeled ring binders / warehouse shelving | "organized binders shelf office", "warehouse inventory shelves" | `img/stocuri.webp` |
| 5 | Servicii — Optimizare costuri | growth chart / profit graph | "profit growth chart business" | `img/costuri.webp` |
| 6 | Servicii — Controale | document checklist / compliance folder | "compliance documents checklist" | `img/controale.webp` |
| 7 | Servicii — Administrativ | laptop with Google Workspace / digital files | "digital documents workspace laptop" | `img/administrativ.webp` |
| 8 | Despre | Tiberiu portrait (client to supply) + fallback office | "professional office portrait" / placeholder | `img/tiberiu.webp` |

> All downloaded photos → convert to **WebP**, store under `public/img/` (or `docs/images/sourced/` during research), keep an attribution/source log even though attribution isn't required.

---

## 7. Open questions / to confirm with Tiberiu

1. Real headshot for Despre/Contact?
2. Service area / city, working hours for Contact?
3. Any social profiles (LinkedIn?) or WhatsApp number to link?
4. Is `consultaf.org` the final domain for the live site?
