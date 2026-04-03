import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactează-ne pentru o consultație. office@amorph.ro | +40 747 089 434",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactForm />

        {/* Contact info */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-border">
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:office@amorph.ro"
                className="text-muted hover:text-accent transition-colors"
              >
                office@amorph.ro
              </a>
            </div>
            <div className="text-center p-8 rounded-2xl border border-border">
              <h3 className="font-semibold mb-2">Telefon</h3>
              <a
                href="tel:+40747089434"
                className="text-muted hover:text-accent transition-colors"
              >
                +40 747 089 434
              </a>
            </div>
            <div className="text-center p-8 rounded-2xl border border-border">
              <h3 className="font-semibold mb-2">Program</h3>
              <p className="text-muted">Luni – Vineri, 9:00 – 18:00</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
