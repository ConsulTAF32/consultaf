import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from "./env";

const builder = imageUrlBuilder({ projectId, dataset });

// Construiește URL-uri optimizate pentru imaginile încărcate în Sanity.
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
