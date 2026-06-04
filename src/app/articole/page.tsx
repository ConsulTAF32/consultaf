import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero, CtaBand } from "@/components/Sections";
import { getArticles } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export const metadata: Metadata = {
  title: "Articole",
  description:
    "Articole practice pentru IMM-uri din România: organizare, control, conformare fiscală (ANAF, e-Factura, SAF-T) și digitalizare — explicate pe înțelesul antreprenorului.",
};

// Reîmprospătează lista la cel mult un minut (ISR).
export const revalidate = 60;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticolePage() {
  const articles = await getArticles();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Articole pentru firme în control"
        intro="Idei practice despre organizare, conformare și digitalizare — scrise pe înțelesul antreprenorului, fără jargon."
      />

      <div className="container-content py-16">
        {articles.length === 0 ? (
          <p className="text-slate-600">
            În curând primele articole. Revino curând sau scrie-mi pentru o discuție.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <Link
                key={a._id}
                href={`/articole/${a.slug}`}
                className="group flex flex-col overflow-hidden rounded-card border border-slate-100 shadow-sm transition hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden bg-mist">
                  {a.coverImage ? (
                    <Image
                      src={urlFor(a.coverImage).width(800).height(500).fit("crop").auto("format").url()}
                      alt={a.coverImage.alt || a.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-green-dark">
                    {formatDate(a.publishedAt)}
                  </p>
                  <h2 className="mt-2 font-display text-lg font-bold text-navy-800 group-hover:text-brand-green-dark">
                    {a.title}
                  </h2>
                  {a.excerpt && <p className="mt-2 text-sm text-slate-600">{a.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CtaBand />
    </>
  );
}
