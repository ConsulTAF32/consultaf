import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Panoul de administrare nu trebuie indexat de Google.
      disallow: "/studio",
    },
    sitemap: "https://consultaf.org/sitemap.xml",
  };
}
