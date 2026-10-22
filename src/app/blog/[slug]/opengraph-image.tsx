import { renderOg, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";
import { getAllPosts, getPostBySlug } from "@/lib/journal";

export const alt = "Articol din jurnalul Amorph Studio";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return renderOg({
    eyebrow: post ? `jurnal · ${post.cat}` : "jurnal",
    title: post ? post.title.toLowerCase() : "jurnal amorph",
  });
}
