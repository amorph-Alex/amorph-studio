import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const blogPosts: Record<
  string,
  { title: string; content: string[] }
> = {
  "ce-este-un-certificat-de-urbanism": {
    title: "Ce este un certificat de urbanism?",
    content: [
      "Certificatul de urbanism este un act informativ, emis de autoritățile administrației publice locale, care stabilește condițiile necesare pentru realizarea unei investiții imobiliare.",
      "Acesta nu conferă dreptul de a executa lucrări de construcții, ci informează solicitantul cu privire la regimul juridic, economic și tehnic al terenului și al construcțiilor existente.",
      "Certificatul de urbanism este obligatoriu pentru obținerea autorizației de construire și trebuie solicitat înainte de începerea oricăror lucrări.",
    ],
  },
  "ce-este-un-plan-urbanistic-zonal": {
    title: "Ce este un Plan Urbanistic Zonal?",
    content: [
      "Planul Urbanistic Zonal (PUZ) este un instrument de planificare urbană care reglementează o zonă specifică a localității.",
      "PUZ-ul stabilește reglementări cu privire la utilizarea terenurilor, înălțimea maximă a construcțiilor, procentul de ocupare al terenului (POT) și coeficientul de utilizare al terenului (CUT).",
      "Elaborarea unui PUZ este necesară atunci când se dorește modificarea prevederilor Planului Urbanistic General (PUG) pentru o anumită zonă.",
    ],
  },
  "obtinerea-autorizatiei-de-construire": {
    title: "Obținerea autorizației de construire",
    content: [
      "Autorizația de construire este actul de autoritate al administrației publice locale pe baza căruia se pot executa lucrări de construcții.",
      "Pentru obținerea autorizației este necesar un dosar complet care include: certificatul de urbanism, proiectul tehnic, avizele și acordurile necesare.",
      "Procesul poate dura între 30 și 90 de zile, în funcție de complexitatea proiectului și de cerințele specifice ale zonei.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  return {
    title: post?.title || "Articol Blog",
    description: post?.content[0] || "",
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Articol în curând</h1>
          <p className="text-muted mb-8">
            Acest articol va fi disponibil în curând.
          </p>
          <Link href="/blog" className="text-accent hover:underline">
            ← Înapoi la blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-accent transition-colors mb-8 inline-block"
          >
            ← Înapoi la blog
          </Link>

          {/* Hero image placeholder */}
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-green-800 via-green-600 to-amber-100 mb-8" />

          <h1 className="text-4xl md:text-5xl font-bold mb-8">{post.title}</h1>

          <div className="space-y-6 text-muted leading-relaxed text-lg">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </article>

        <SectionDivider />

        {/* Back to blog CTA */}
        <section className="max-w-3xl mx-auto px-6 py-8 text-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 bg-accent text-foreground rounded-full font-medium hover:bg-accent-hover transition-colors"
          >
            Mai multe articole
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
