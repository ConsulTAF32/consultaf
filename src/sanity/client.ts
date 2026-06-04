import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "./env";

// Client de citire (folosit de paginile Next.js pentru a aduce conținutul).
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  // `useCdn: false` = date mereu proaspete. Paginile sunt oricum cache-uite de
  // Next (ISR + webhook), deci API-ul live e apelat doar la revalidare.
  useCdn: false,
});
