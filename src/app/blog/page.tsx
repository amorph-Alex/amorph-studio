import { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NewsletterBand from "@/components/sections/NewsletterBand";
import JournalFilter from "@/components/blog/JournalFilter";
import { CATEGORIES, getAllPosts, getFeatured } from "@/lib/journal";

export const metadata: Metadata = pageMetadata({
  title: "Jurnal",
  description: "Texte despre urbanism, design și lucrurile care fac orașele mai bune. Scriem când avem ceva de spus: nu prea des, dar bine.",
  path: "/blog",
});

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

export default function Blog() {
  const posts = getAllPosts();
  const featured = getFeatured();
  const gridPosts = posts.filter((p) => !p.featured);
  const nr = String(posts.length).padStart(2, "0");

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ─────── MASTHEAD EDITORIAL ─────── */}
        <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-4 md:pt-8">
          <div className="flex items-center justify-between text-[10px] md:text-[12px] tracking-[0.22em] md:tracking-[0.25em] text-muted pb-2.5 md:pb-3.5 border-b-2 border-dark-card">
            <span>↳ JURNAL · ANUL III · NR. {nr}</span>
            <span>APRILIE 2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4 md:gap-[60px] md:items-end mt-5 md:mt-9">
            <h1 className="text-[88px] md:text-[220px] font-bold text-foreground m-0 leading-[0.85] md:leading-[0.82] tracking-[-3px] md:tracking-[-7px]">
              jurnal<span className="text-accent">.</span>
            </h1>
            <p className="text-[14px] md:text-[19px] font-light text-foreground leading-[1.55] m-0 md:pb-7 max-w-[320px] md:max-w-[440px]">
              texte despre urbanism, design și lucrurile care fac orașele mai
              bune. scriem când avem ceva de spus — nu prea des, dar bine.
            </p>
          </div>
        </section>

        {/* ─────── FEATURED ─────── */}
        {featured && (
          <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-10 md:pt-[72px]">
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 md:items-center"
            >
              <div className="relative h-[260px] md:h-[540px] rounded-[20px] md:rounded-[28px] overflow-hidden border-[1.5px] border-dark-card">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute top-3.5 md:top-[22px] left-3.5 md:left-[22px] bg-accent px-3.5 md:px-[18px] py-1.5 md:py-2 rounded-full text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] text-foreground font-bold">
                  ★ ÎN LUMINĂ
                </div>
              </div>
              <div>
                <div className="text-[11px] md:text-[13px] tracking-[0.22em] md:tracking-[0.25em] text-muted uppercase">
                  № {featured.n} · {featured.cat} · {featured.read}
                </div>
                <h2 className="text-[32px] md:text-[56px] font-normal text-foreground leading-[1.05] md:leading-[1.02] m-0 mt-4 md:mt-6 tracking-[-0.8px] md:tracking-[-1.5px]">
                  {featured.title}
                  <span className="text-accent">.</span>
                </h2>
                <p className="text-[15px] md:text-[18px] font-light text-muted leading-[1.6] mt-4 md:mt-[22px]">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3.5 mt-6 md:mt-7 text-[12px] md:text-[13px] text-muted tracking-[0.18em] uppercase">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-[13px] font-bold text-foreground">
                    AM
                  </div>
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{featured.date}</span>
                </div>
                <div className="mt-7 md:mt-9 inline-flex items-center gap-2 px-6 md:px-[26px] py-2.5 md:py-[11px] rounded-full bg-dark text-platinum text-[14px] font-normal">
                  citește articolul <ArrowRight />
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* ─────── FILTRE + GRID (client) ─────── */}
        <JournalFilter posts={gridPosts} categories={CATEGORIES} />

        {/* ─────── NEWSLETTER ─────── */}
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
