import { Metadata } from "next";
import Link from "next/link";
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
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl font-bold mb-4">Servicii</h1>
          <p className="text-muted mb-12 max-w-2xl">
            Oferim o gamă completă de servicii în design și proiectare,
            capabili să abordăm orice tip de proiect, indiferent de natura lui.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className="group block p-8 rounded-2xl border border-border hover:border-accent transition-all hover:shadow-lg"
              >
                {/* Icon placeholder */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.heroColor} mb-6`}
                />
                <h2 className="text-2xl font-bold mb-1">
                  {service.title}
                </h2>
                <h3 className="text-2xl text-muted mb-4">{service.subtitle}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description.slice(0, 120)}...
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
