export default function AboutTeaser() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Illustrations placeholder */}
        <div className="flex items-end gap-4 justify-center">
          <div className="w-32 h-48 bg-dark-card rounded-2xl flex items-end justify-center overflow-hidden">
            {/* Character illustration placeholder */}
            <div className="w-20 h-32 bg-red-600/80 rounded-t-full" />
          </div>
          <div className="w-32 h-48 bg-dark-card rounded-2xl flex items-end justify-center overflow-hidden">
            <div className="w-20 h-32 bg-accent/80 rounded-t-full" />
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Suntem o echipă multidisciplinară cu o experiență vastă în diferite
            tip de proiect, indiferent de natura lui.
          </p>
          <p>
            Iubim să ne afundăm în detaliile fine ale creării unui spațiu, de la
            alegerea texturii unui perete din dormitor. În același timp, ne
            dedicăm elaborării unor strategii teritoriale relevante, contribuind
            la conturarea unui viitor urban mai bun.
          </p>
          <p>
            Pasiunea noastră pentru urbanism, strategii urbane, design interior,
            web development se reflectă în fiecare proiect. Fiecare proiect pe
            care îl dezvoltăm este creat cu atenție și grijă.
          </p>
          <p>
            Credem în puterea designului de a transforma spațiile și vieți.
            Fiecare proiect este o nouă oportunitate de a explora creativitatea
            și de a răspunde nevoilor clienților noștri. Suntem dedicați să
            oferim soluții personalizate, specifice, și să construim împreună un
            viitor sustenabil.
          </p>
        </div>
      </div>
    </section>
  );
}
