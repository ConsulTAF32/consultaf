import type { MetadataRoute } from "next";

import { getArticles } from "@/sanity/queries";

const BASE_URL = "https://consultaf.org";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = ["", "/servicii", "/resurse", "/articole", "/despre", "/contact"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );

  const articles = await getArticles();
  const articleRoutes = articles.map((a) => ({
    url: `${BASE_URL}/articole/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...articleRoutes];
}
