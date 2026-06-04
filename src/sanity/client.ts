import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "./env";

// Client de citire (folosit de paginile Next.js pentru a aduce conținutul).
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `useCdn: true` = răspunsuri rapide din CDN. Revalidarea se face prin webhook.
  useCdn: true,
});
