import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/journal";

export default function BlogPreview() {
  const blogPosts = getAllPosts().slice(0, 3);

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
                src={post.image}
                alt=""
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
