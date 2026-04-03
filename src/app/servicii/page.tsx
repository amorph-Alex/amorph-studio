import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Planificare urbană, strategii urbane, regenerare urbană, design interior și graphic design.",
};

export default function Servicii() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="max-w-[1440px] mx-auto px-5 py-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Servicii</h1>
          <p className="text-muted font-light mb-12 max-w-2xl text-lg">
            Oferim o gamă completă de servicii în design și proiectare, capabili
            să abordăm orice tip de proiect, indiferent de natura lui.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border hover:border-accent transition-all hover:shadow-lg"
              >
                {/* Hero image */}
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} ${service.subtitle}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold">
                    {service.title}
                  </h2>
                  <h3 className="text-3xl font-light text-muted mb-4">
                    {service.subtitle}
                  </h3>
                  {service.description && (
                    <p className="text-sm font-light text-muted leading-relaxed">
                      {service.description.slice(0, 120)}...
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
