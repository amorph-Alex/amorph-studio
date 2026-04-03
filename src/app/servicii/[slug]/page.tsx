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
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} ${service.subtitle}`,
    description: service.description || `${service.title} ${service.subtitle}`,
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
        {/* Hero section — image left, title + description right */}
        <section className="max-w-[1440px] mx-auto px-5 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
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

            {/* Title + description */}
            <div className="pt-4">
              <h1 className="text-5xl md:text-[90px] font-bold leading-tight tracking-[0.1em] text-right">
                {service.title}
                <br />
                {service.subtitle}
              </h1>

              {/* Description text */}
              {service.description && (
                <p className="mt-12 text-xl md:text-[32px] font-light leading-normal">
                  {service.description}
                </p>
              )}

              {/* Bullet points */}
              {service.bulletPoints.length > 0 && (
                <div className="mt-10 space-y-4">
                  {service.bulletPoints.map((point) => (
                    <p
                      key={point}
                      className="text-xl md:text-[32px] font-light tracking-[0.1em]"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
