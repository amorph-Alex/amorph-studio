import { notFound } from "next/navigation";
import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import { services, getServiceBySlug } from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Hero illustration placeholder */}
            <div
              className={`aspect-square rounded-3xl bg-gradient-to-br ${service.heroColor} flex items-center justify-center`}
            >
              <div className="w-2/3 h-2/3 border-2 border-white/20 rounded-2xl" />
            </div>

            {/* Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                {service.title}
                <br />
                <span className="text-muted">{service.subtitle}</span>
              </h1>
              <p className="text-muted leading-relaxed mb-8">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Services list */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {service.bulletPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-4 p-6 rounded-2xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-3 h-3 bg-accent rounded-full shrink-0" />
                <span className="text-lg">{point}</span>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Hai să discutăm despre proiectul tău</h2>
          <p className="text-muted mb-8">
            Contactează-ne pentru o consultație gratuită.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-foreground rounded-full font-medium hover:bg-accent-hover transition-colors"
          >
            Contactează-ne
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
