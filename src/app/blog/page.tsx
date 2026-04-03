import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articole și resurse despre urbanism, design și construcții.",
};

const blogPosts = [
  {
    slug: "ce-este-un-certificat-de-urbanism",
    title: "Ce este un certificat de urbanism?",
    excerpt:
      "Certificatul de urbanism este un act informativ care stabilește condițiile necesare pentru realizarea unei investiții.",
  },
  {
    slug: "ce-este-un-plan-urbanistic-zonal",
    title: "Ce este un Plan Urbanistic Zonal?",
    excerpt:
      "Planul Urbanistic Zonal (PUZ) este un instrument de planificare urbană care reglementează o zonă specifică.",
  },
  {
    slug: "obtinerea-autorizatiei-de-construire",
    title: "Obținerea autorizației de construire",
    excerpt:
      "Ghid complet despre pașii necesari pentru obținerea autorizației de construire în România.",
  },
  {
    slug: "importanta-designului-urban",
    title: "Importanța designului urban",
    excerpt:
      "Cum influențează designul urban calitatea vieții și dezvoltarea sustenabilă a comunităților.",
  },
  {
    slug: "tendinte-design-interior-2024",
    title: "Tendințe în design interior",
    excerpt:
      "Explorăm cele mai noi tendințe în design interior care combină funcționalitatea cu estetica.",
  },
  {
    slug: "regenerare-urbana-exemple",
    title: "Regenerare urbană: exemple de succes",
    excerpt:
      "Studii de caz despre proiecte de regenerare urbană care au transformat comunități întregi.",
  },
];

export default function Blog() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-12">Blog</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                {/* Image placeholder */}
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-green-800 via-green-600 to-amber-100">
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
