import Link from "next/link";
import Image from "next/image";

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
    title: "Ordinea electrocasnice-lor în bucătărie",
  },
];

export default function BlogPreview() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[900px] mx-auto">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <div className="aspect-square rounded-none overflow-hidden mb-4">
              <Image
                src="/images/blog-thumbnail.png"
                alt={post.title}
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-center font-light text-xl md:text-2xl leading-tight">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
