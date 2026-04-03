import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Despre Noi",
  description:
    "Iubim tot ce înseamnă design. Suntem o echipă multidisciplinară dedicată urbanismului, designului interior și graphic design.",
};

export default function DespreNoi() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            iubim tot ce
            <br />
            înseamnă <span className="text-accent">design</span>
          </h1>
        </section>

        <SectionDivider />

        {/* Philosophy */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">puțin mai multă creativitate</h2>
              <p className="text-muted leading-relaxed">
                și foarte multă pasiune sunt ingredientele care ne definesc.
                Fiecare proiect pe care îl abordăm este o oportunitate de a
                explora noi perspective și de a crea soluții inovatoare.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">o idee mai mult</h2>
              <p className="text-muted leading-relaxed">
                și o viziune de ansamblu ne ajută să transformăm fiecare spațiu
                într-o experiență unică. Abordăm fiecare proiect cu dedicare și
                profesionalism.
              </p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Team */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Echipa noastră</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rusovici", role: "Fondator & Urbanist" },
              { name: "Membru echipă", role: "Architect" },
              { name: "Membru echipă", role: "Designer Interior" },
            ].map((member) => (
              <div key={member.name + member.role} className="text-center">
                {/* Avatar placeholder */}
                <div className="w-32 h-32 mx-auto mb-4 bg-dark-card rounded-full flex items-center justify-center">
                  <div className="w-16 h-20 bg-accent/60 rounded-t-full" />
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Values */}
        <section className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            într-o lume a formelor, alegem
            <br />
            să fim <span className="text-accent">fără formă</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Amorph înseamnă libertatea de a gândi dincolo de convenții. Ne
            adaptăm fiecărui proiect, fiecărui client, fiecărei provocări.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
