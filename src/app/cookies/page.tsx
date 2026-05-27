import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description:
    "Ce cookie-uri folosim, în ce scop și cum îți poți gestiona preferințele.",
};

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <LegalPage docKey="cookies" />
      </main>
      <Footer />
    </>
  );
}
