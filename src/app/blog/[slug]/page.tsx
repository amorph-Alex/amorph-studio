import { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterBand from "@/components/sections/NewsletterBand";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ArticleToc from "@/components/blog/ArticleToc";
import BackToTop from "@/components/blog/BackToTop";
import ShareMenu from "@/components/blog/ShareMenu";
import JsonLd from "@/components/seo/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";
import {
  type ContentBlock,
  type JournalPost,
  getAllPosts,
  getPostBySlug,
  getRelated,
  tocFromContent,
} from "@/lib/journal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Articol Jurnal" };
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.published,
    ownOgImage: true,
  });
}

const ArrowRight = ({ size = 13 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    aria-hidden
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <>
      {content.map((block, i) => {
        switch (block.kind) {
          case "lead": {
            const first = block.text.charAt(0);
            const rest = block.text.slice(1);
            return (
              <p
                key={i}
                className="m-0 text-[17px] md:text-[19px] font-light md:font-light text-foreground leading-[1.5] md:leading-[1.7]"
              >
                <span className="float-left font-bold text-accent leading-[0.82] md:leading-[0.85] text-[64px] md:text-[132px] pr-2.5 md:mr-4 pt-1 md:mt-2.5">
                  {first}
                </span>
                {rest}
              </p>
            );
          }
          case "heading":
            return (
              <h2
                key={i}
                id={block.id}
                className="scroll-mt-24 text-[26px] md:text-[44px] font-bold md:font-normal text-foreground tracking-[-0.4px] md:tracking-[-1px] leading-[1.05] mt-9 md:mt-14 mb-2.5 md:mb-[18px]"
              >
                {block.text}
                <span className="text-accent">.</span>
              </h2>
            );
          case "paragraph":
            return (
              <p
                key={i}
                className="m-0 mt-4 text-[15px] md:text-[19px] font-light text-foreground leading-[1.7]"
              >
                {block.text}
              </p>
            );
          case "quote":
            return (
              <figure
                key={i}
                className="relative -mx-5 md:-mx-[100px] my-9 md:my-[72px] px-6 md:px-20 py-9 md:py-16 bg-dark text-platinum md:rounded-[28px]"
              >
                <div className="text-accent font-bold italic text-[72px] md:text-[120px] leading-[0.5] h-9 md:h-[60px]">
                  „
                </div>
                <blockquote className="m-0 text-[22px] md:text-[38px] font-light leading-[1.2] md:leading-[1.18] mt-3.5 tracking-[-0.3px] md:tracking-[-0.6px]">
                  {block.text}
                </blockquote>
                {block.label && (
                  <figcaption className="mt-5 md:mt-7 text-[12px] tracking-[0.3em] opacity-60">
                    {block.label}
                  </figcaption>
                )}
              </figure>
            );
          case "deflist":
            return (
              <ul key={i} className="list-none p-0 m-0 mt-5">
                {block.items.map((it) => (
                  <li
                    key={it.term}
                    className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-1 md:gap-6 py-3.5 md:py-5 border-t border-border"
                  >
                    <span className="text-[13px] md:text-sm font-bold text-foreground tracking-[0.05em]">
                      {it.term}
                    </span>
                    <span className="text-sm md:text-base font-light text-foreground leading-[1.6]">
                      {it.def}
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "list":
            return (
              <ul key={i} className="mt-4 flex flex-col gap-2.5">
                {block.items.map((it) => (
                  <li
                    key={it}
                    className="text-[15px] md:text-[17px] font-light text-foreground leading-[1.6] flex gap-3"
                  >
                    <span className="text-accent">↳</span>
                    {it}
                  </li>
                ))}
              </ul>
            );
          default:
            return null;
        }
      })}
    </>
  );
}

function RelatedCard({ post }: { post: JournalPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col gap-3.5 transition-transform duration-300 md:hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[18px] border-[1.5px] border-dark-card relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="text-[12px] tracking-[0.2em] text-muted uppercase">
        № {post.n} · {post.cat} · {post.read}
      </div>
      <h3 className="text-[20px] md:text-[22px] font-normal text-foreground leading-[1.2] m-0 tracking-[-0.3px] transition-colors group-hover:text-accent">
        {post.title}
      </h3>
    </Link>
  );
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex-1 max-w-[1400px] mx-auto px-5 md:px-14 py-16">
          <h1 className="text-4xl font-bold mb-4">Articol în curând</h1>
          <p className="text-muted mb-8">
            Acest articol va fi disponibil în curând.
          </p>
          <Link href="/blog" className="text-accent hover:underline">
            ← Înapoi la jurnal
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const toc = tocFromContent(post.content);
  const related = getRelated(post);

  return (
    <>
      <ReadingProgress />
      <Header />
      <main className="flex-1">
        <JsonLd
          data={[
            articleJsonLd(post),
            breadcrumbJsonLd([
              { name: "Jurnal", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ]),
          ]}
        />
        {/* ─────── BREADCRUMB ─────── */}
        <div className="max-w-[1400px] mx-auto px-5 md:px-14 pt-3 md:pt-5 text-[12px] md:text-[13px] text-muted flex gap-2 md:gap-2.5 flex-wrap tracking-[0.05em]">
          <Link href="/blog" className="hover:text-accent transition-colors">
            jurnal
          </Link>
          <span className="opacity-50">/</span>
          <span>{post.cat}</span>
          <span className="opacity-50">/</span>
          <span className="text-foreground">{post.title.toLowerCase()}</span>
        </div>

        {/* ─────── MASTHEAD ARTICOL ─────── */}
        <header className="max-w-[1000px] mx-auto px-5 md:px-14 pt-5 md:pt-12">
          <div className="text-[10px] md:text-[13px] tracking-[0.22em] md:tracking-[0.25em] text-accent font-bold">
            № {post.n} · {post.cat.toUpperCase()}
          </div>
          <h1
            className="text-[42px] md:text-[92px] font-normal text-foreground m-0 mt-3.5 md:mt-7 leading-[0.98] tracking-[-1.2px] md:tracking-[-2.6px] [&_em]:italic [&_em]:text-accent [&_em]:font-normal [&_.accent]:text-accent"
            dangerouslySetInnerHTML={{ __html: post.titleHtml ?? post.title }}
          />

          <div className="flex items-center gap-3 md:gap-6 mt-6 md:mt-10 pt-4 md:pt-[26px] border-t-2 border-dark-card flex-wrap">
            <div className="w-10 h-10 md:w-[52px] md:h-[52px] rounded-full bg-accent flex items-center justify-center text-[14px] md:text-[18px] font-bold text-foreground shrink-0">
              AM
            </div>
            <div className="flex flex-col">
              <div className="text-[13px] md:text-base font-normal text-foreground">
                {post.author}
              </div>
              <div className="text-[11px] md:text-[12px] text-muted mt-0.5 md:mt-1 tracking-[0.15em] uppercase">
                {post.authorRole}
              </div>
            </div>
            <div className="flex-1 hidden md:block" />
            <div className="hidden md:flex gap-6 text-[13px] tracking-[0.2em] text-muted uppercase">
              <span>{post.dateLong}</span>
              <span>·</span>
              <span>{post.read} de citit</span>
            </div>
            <div className="ml-auto md:ml-0">
              <ShareMenu title={post.title} />
            </div>
          </div>
        </header>

        {/* ─────── HERO IMAGE ─────── */}
        <div className="max-w-[1300px] mx-auto px-5 md:px-14 pt-7 md:pt-14">
          <div className="relative h-[240px] md:h-[580px] rounded-[22px] md:rounded-[28px] overflow-hidden border-[1.5px] border-dark-card">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1300px"
              className="object-cover"
            />
          </div>
          <div className="text-[11px] md:text-[12px] tracking-[0.2em] text-muted mt-2 md:mt-3.5 uppercase">
            {post.heroCaption}
          </div>
        </div>

        {/* ─────── BODY ─────── */}
        <div className="max-w-[1300px] mx-auto px-5 md:px-14 pt-8 md:pt-[72px]">
          {/* TOC mobil */}
          {toc.length > 0 && (
            <div className="md:hidden mb-7">
              <ArticleToc items={toc} variant="card" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_120px] gap-0 md:gap-14 md:items-start">
            {/* TOC desktop */}
            {toc.length > 0 ? (
              <div className="hidden md:block">
                <ArticleToc items={toc} variant="rail" />
              </div>
            ) : (
              <div className="hidden md:block" />
            )}

            {/* Corp articol */}
            <article className="max-w-[720px]">
              <ArticleBody content={post.content} />

              {/* End mark */}
              <div className="text-center mt-12 md:mt-16 text-[14px] md:text-[18px] text-accent tracking-[0.4em] md:tracking-[0.5em]">
                ◆ ◆ ◆
              </div>

              {/* Tags */}
              <div className="mt-6 md:mt-12 flex gap-2.5 flex-wrap">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] md:text-[13px] text-foreground border-[1.5px] border-dark-card px-3 md:px-4 py-1.5 md:py-2 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>

            {/* Rail dreapta — back to top */}
            <div className="hidden md:block">
              <BackToTop />
            </div>
          </div>
        </div>

        {/* ─────── AUTHOR CARD ─────── */}
        <div className="max-w-[1000px] mx-auto px-5 md:px-14 mt-12 md:mt-[88px]">
          <div className="grid grid-cols-[64px_1fr] md:grid-cols-[120px_1fr_auto] gap-4 md:gap-8 p-4 md:p-8 rounded-[18px] md:rounded-[25px] border-[1.5px] border-dark-card items-center bg-platinum">
            <div className="w-16 h-16 md:w-[120px] md:h-[120px] rounded-full bg-accent flex items-center justify-center text-[22px] md:text-[38px] font-bold text-foreground">
              AM
            </div>
            <div>
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted">
                SCRIS DE
              </div>
              <div className="text-[18px] md:text-[26px] font-normal text-foreground mt-1.5 tracking-[-0.3px]">
                {post.author}
              </div>
              <div className="text-[13px] md:text-[15px] font-light text-muted mt-2 md:mt-2.5 leading-[1.55] max-w-[480px]">
                {post.authorBio}
              </div>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center gap-2 px-[26px] py-[11px] rounded-full border-[1.5px] border-foreground text-foreground text-sm font-normal hover:bg-foreground hover:text-platinum transition-colors whitespace-nowrap"
            >
              toate articolele <ArrowRight />
            </Link>
          </div>
        </div>

        {/* ─────── NEWSLETTER ─────── */}
        <NewsletterBand />

        {/* ─────── RELATED ─────── */}
        {related.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-5 md:px-14 pt-12 md:pt-24">
            <div className="flex items-baseline justify-between pb-4 md:pb-[22px] border-b-2 border-dark-card mb-7 md:mb-14">
              <div className="text-[11px] md:text-[13px] tracking-[0.22em] md:tracking-[0.25em] text-muted">
                CITEȘTE ÎN CONTINUARE
              </div>
              <Link
                href="/blog"
                className="text-[12px] md:text-[13px] text-foreground underline hover:text-accent transition-colors"
              >
                înapoi la jurnal →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <RelatedCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        )}

        <div className="pb-12 md:pb-16" />
      </main>
      <Footer />
    </>
  );
}
