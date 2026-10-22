import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Termeni și condiții",
  description: "Condițiile de utilizare a site-ului amorph.ro și a informațiilor publicate aici.",
  path: "/termeni",
});

export default function TermeniPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPage docKey="termeni" />
      </main>
      <Footer />
    </>
  );
}
