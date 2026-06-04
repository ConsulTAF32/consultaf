import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/content";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Consultanță operațională pentru IMM-uri`,
    template: `%s — ${site.name}`,
  },
  description:
    "Organizare, control și claritate pentru firme mici și medii: audit operațional, stocuri, costuri, conformare și digitalizare. 8 ani experiență (EY, ING).",
  metadataBase: new URL("https://consultaf.org"),
  openGraph: {
    title: `${site.name} — Consultanță operațională pentru IMM-uri`,
    description: site.tagline,
    locale: "ro_RO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
