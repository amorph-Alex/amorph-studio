"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service or API
    console.log("Form submitted:", formData);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">hai să vorbim</h2>
      <p className="text-sm text-muted mb-8 max-w-xl">
        Știm că în foarte multe situații domeniul construcțiilor poate fi confuz.
        Nu ezitați să ne adresați orice întrebare și vă vom răspunde în maxim
        24h de la întrebarea dumneavoastră.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <input
          type="text"
          placeholder="Nume și prenume*"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-dark text-background placeholder:text-background/50 rounded-lg outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="email"
          placeholder="Email*"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-dark text-background placeholder:text-background/50 rounded-lg outline-none focus:ring-2 focus:ring-accent"
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 bg-dark text-background placeholder:text-background/50 rounded-lg outline-none focus:ring-2 focus:ring-accent"
        />
        <textarea
          placeholder="Cu ce vă putem ajuta?"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 bg-dark text-background placeholder:text-background/50 rounded-lg outline-none focus:ring-2 focus:ring-accent resize-none"
        />
        <div className="flex justify-end">
          <Button type="submit">Trimite!</Button>
        </div>
      </form>
    </section>
  );
}
