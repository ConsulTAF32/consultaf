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
    icon.svg          # favicon (logo ConsulTAF)
  components/         # Header, Footer, Sections, Icons
  lib/content.ts      # TOATE textele site-ului, într-un singur loc
public/
  logo/               # logo SVG (icon + lockup dark/light)
  img/                # imagini stock (WebP)
docs/                 # cercetare: brand, domeniu, conținut, surse imagini
```

## De finalizat înainte de publicare
- [ ] Înlocuiește `public/img/tiberiu.webp` cu fotografia reală.
- [ ] Re-comprimă `public/img/stocuri.webp` (~850 KB).
- [ ] Verifică datele/termenele fiscale din `/resurse` cu ANAF / contabilul (se schimbă des).
- [ ] Confirmă domeniul final (`consultaf.org`) și `metadataBase` din `layout.tsx`.
