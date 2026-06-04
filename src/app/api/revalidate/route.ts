import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

// Webhook apelat de Sanity când un articol e publicat/editat/șters.
// Reîmprospătează instant paginile relevante de pe site (fără redeploy).
//
// Configurare în Sanity: manage → API → Webhooks → Create webhook
//   URL:     https://consultaf.org/api/revalidate
//   Dataset: production
//   Trigger: Create, Update, Delete
//   Filter:  _type == "article"
//   Projection: { "slug": slug.current }
//   Secret:  aceeași valoare ca SANITY_REVALIDATE_SECRET din variabilele de mediu

type WebhookPayload = { slug?: string };

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new NextResponse("Semnătură invalidă", { status: 401 });
    }

    // Reîmprospătează lista, pagina articolului și homepage-ul (teaser).
    revalidatePath("/articole");
    revalidatePath("/");
    if (body?.slug) {
      revalidatePath(`/articole/${body.slug}`);
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), slug: body?.slug });
  } catch (err) {
    console.error("[revalidate]", err);
    return new NextResponse((err as Error).message, { status: 500 });
  }
}
