import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand } from "@/components/Sections";
import { PortableTextBody } from "@/components/PortableTextBody";
import { getArticle, getArticleSlugs } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

export const revalidate = 60;

// Pre-generează o pagină statică pentru fiecare articol existent.
export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticle(params.slug);
  if (!article) return { title: "Articol negăsit" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      images: article.coverImage
        ? [urlFor(article.coverImage).width(1200).height(630).fit("crop").url()]
        : undefined,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);
  if (!article) notFound();

  // Date structurate (JSON-LD) pentru rezultate bogate în Google.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    image: article.coverImage
      ? urlFor(article.coverImage).width(1200).height(630).fit("crop").url()
      : undefined,
    author: { "@type": "Person", name: "Tiberiu Ciprian Franciuc" },
    publisher: { "@type": "Organization", name: "ConsulTAF" },
    mainEntityOfPage: `https://consultaf.org/articole/${params.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="container-content max-w-3xl py-16">
        <Link
          href="/articole"
          className="text-sm font-semibold text-brand-green-dark hover:underline"
        >
          ← Toate articolele
        </Link>

        <p className="mt-8 text-xs font-semibold uppercase tracking-wide text-brand-green-dark">
          {formatDate(article.publishedAt)}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-navy-800 sm:text-4xl">
          {article.title}
        </h1>
        {article.excerpt && <p className="mt-4 text-lg text-slate-600">{article.excerpt}</p>}

        {article.coverImage && (
          <div className="mt-8 overflow-hidden rounded-card shadow-lg">
            <Image
              src={urlFor(article.coverImage).width(1600).height(900).fit("crop").auto("format").url()}
              alt={article.coverImage.alt || article.title}
              width={1600}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        )}

        <div className="mt-10">
          {article.body && <PortableTextBody value={article.body} />}
        </div>
      </article>

      <CtaBand />
    </>
  );
}
