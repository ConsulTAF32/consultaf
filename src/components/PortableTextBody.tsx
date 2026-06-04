import Image from "next/image";
import Link from "next/link";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/react";

import { urlFor } from "@/sanity/image";

// Transformă conținutul rich-text din Sanity în HTML stilizat (Tailwind).
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-2xl font-extrabold text-navy-800">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-display text-xl font-bold text-navy-800">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-brand-green pl-5 italic text-slate-600">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mt-5 leading-relaxed text-slate-700">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-slate-700">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-navy-800">{children}</strong>,
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const external = href.startsWith("http");
      return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-brand-green-dark underline">
          {children}
        </a>
      ) : (
        <Link href={href} className="text-brand-green-dark underline">
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8 overflow-hidden rounded-card shadow-md">
          <Image
            src={urlFor(value).width(1200).fit("max").auto("format").url()}
            alt={value.alt || ""}
            width={1200}
            height={800}
            className="h-auto w-full"
          />
        </figure>
      );
    },
  },
};

export function PortableTextBody({ value }: { value: PortableTextBlock[] }) {
  return <PortableText value={value} components={components} />;
}
