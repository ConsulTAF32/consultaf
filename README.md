# ConsulTAF

Website pentru **ConsulTAF** — consultanță operațională pentru IMM-uri (Tiberiu Ciprian Franciuc).
Next.js 14 (App Router) · TypeScript · Tailwind CSS.

## Rulare locală

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producție
npm start        # rulează build-ul
```

## Structură

```
src/
  app/
    layout.tsx        # fonturi (Montserrat/Inter), header, footer, metadata
    page.tsx          # Acasă (landing)
    servicii/         # cele 5 servicii, detaliat
    resurse/          # Ghidul firmei în control
    despre/           # despre Tiberiu
    contact/          # telefon + email (fără formular)
    articole/         # blog: listă + pagină articol (conținut din Sanity)
    studio/           # Sanity Studio (panou de administrare) la /studio
    icon.svg          # favicon (logo ConsulTAF)
  components/         # Header, Footer, Sections, Icons, PortableTextBody
  lib/content.ts      # TOATE textele statice ale site-ului, într-un singur loc
  sanity/             # client, schema articol, query-uri, config imagini
public/
  logo/               # logo SVG (icon + lockup dark/light)
  img/                # imagini stock (WebP)
docs/                 # cercetare: brand, domeniu, conținut, surse imagini
sanity.config.ts     # configurarea Studio-ului (schema, plugin-uri)
```

## Blog / Articole (Sanity CMS)

Articolele din `/articole` sunt gestionate prin **Sanity** — un CMS în care
Tiberiu scrie și publică articole singur, fără modificări de cod sau redeploy.
Panoul de administrare e integrat în site la **`/studio`**.

### Configurare (o singură dată)
1. Creează cont gratuit pe [sanity.io](https://www.sanity.io) și un proiect nou
   (dataset `production`).
2. Copiază `.env.example` în `.env.local` și completează `NEXT_PUBLIC_SANITY_PROJECT_ID`.
3. Adaugă aceleași variabile în Netlify (Site settings → Environment variables).
4. În Sanity (sanity.io/manage → API → CORS origins) adaugă URL-urile site-ului
   (`http://localhost:3000` și domeniul de producție) pentru a putea folosi `/studio`.

După deploy, Tiberiu intră pe `consultaf.org/studio`, se loghează și apasă
„Articol → Create”. Articolele noi apar automat la `/articole` (revalidare ISR).

## De finalizat înainte de publicare
- [ ] Înlocuiește `public/img/tiberiu.webp` cu fotografia reală.
- [ ] Re-comprimă `public/img/stocuri.webp` (~850 KB).
- [ ] Verifică datele/termenele fiscale din `/resurse` cu ANAF / contabilul (se schimbă des).
- [ ] Confirmă domeniul final (`consultaf.org`) și `metadataBase` din `layout.tsx`.
