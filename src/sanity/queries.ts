import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/react";

import { client } from "./client";

export type ArticleListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: { alt?: string } & Record<string, unknown>;
};

export type Article = ArticleListItem & {
  body?: PortableTextBlock[];
};

const listFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage
`;

// Toate articolele, cele mai noi primele.
export async function getArticles(): Promise<ArticleListItem[]> {
  try {
    return await client.fetch(
      groq`*[_type == "article" && defined(slug.current)] | order(publishedAt desc) { ${listFields} }`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch (err) {
    // Înainte de conectarea Sanity (sau dacă API-ul e indisponibil) afișăm lista goală.
    console.warn("[sanity] getArticles a eșuat:", err);
    return [];
  }
}

// Slug-urile tuturor articolelor (pentru generateStaticParams).
export async function getArticleSlugs(): Promise<string[]> {
  try {
    return await client.fetch(
      groq`*[_type == "article" && defined(slug.current)].slug.current`,
      {},
      { next: { revalidate: 60 } }
    );
  } catch (err) {
    console.warn("[sanity] getArticleSlugs a eșuat:", err);
    return [];
  }
}

// Un singur articol, după slug.
export async function getArticle(slug: string): Promise<Article | null> {
  try {
    return await client.fetch(
      groq`*[_type == "article" && slug.current == $slug][0] { ${listFields}, body }`,
      { slug },
      { next: { revalidate: 60 } }
    );
  } catch (err) {
    console.warn("[sanity] getArticle a eșuat:", err);
    return null;
  }
}
