import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = pageMetadata({
  title: "Politica de confidențialitate",
  description: "Cum colectăm, folosim și protejăm datele tale personale, conform GDPR.",
  path: "/confidentialitate",
});

export default function ConfidentialitatePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPage docKey="confidentialitate" />
      </main>
      <Footer />
    </>
  );
}
