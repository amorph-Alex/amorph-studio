import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services, getServiceBySlug } from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const customSlugs = new Set(["planificare-urbana", "strategii-urbane"]);
  return services
    .filter((s) => !customSlugs.has(s.slug))
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} ${service.subtitle}`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-[1440px] mx-auto px-5 py-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hero image */}
            <div className="aspect-square relative">
              <Image
                src={service.heroImage}
                alt={`${service.title} ${service.subtitle}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Title + description — fills exactly the image height */}
            <div className="flex flex-col justify-between text-right aspect-square">
              <h1 className="text-5xl md:text-[90px] font-bold leading-tight tracking-[0.1em]">
                {service.title}
                <br />
                {service.subtitle}
              </h1>

              <p className="text-xl md:text-[28px] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
