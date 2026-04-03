import Link from "next/link";

const blogPosts = [
  {
    slug: "ce-este-un-certificat-de-urbanism",
    title: "Ce este un certificat de urbanism?",
  },
  {
    slug: "ce-este-un-plan-urbanistic-zonal",
    title: "Ce este un Plan Urbanistic Zonal?",
  },
  {
    slug: "obtinerea-autorizatiei-de-construire",
    title: "Obținerea autorizației de construire",
  },
];

export default function BlogPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
            <h3 className="text-center font-semibold text-lg">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
