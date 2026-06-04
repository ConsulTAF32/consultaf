import { defineField, defineType } from "sanity";

// Schema unui articol de blog. Definește câmpurile pe care Tiberiu le completează
// în Studio (consultaf.org/studio) când scrie un articol nou.
export const article = defineType({
  name: "article",
  title: "Articol",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titlu",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (adresa din URL)",
      type: "slug",
      description: "Se generează automat din titlu. Ex: /articole/ce-se-schimba-la-e-factura",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Rezumat",
      type: "text",
      rows: 3,
      description: "1–2 fraze afișate în listă și în rezultatele Google.",
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: "coverImage",
      title: "Imagine principală",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Text alternativ (accesibilitate / SEO)",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Data publicării",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Conținut",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Text alternativ", type: "string" }],
        },
      ],
    }),
  ],
  orderings: [
    {
      title: "Cele mai noi",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
  },
});
