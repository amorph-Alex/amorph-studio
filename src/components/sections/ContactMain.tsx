"use client";

import { useState } from "react";

type FormState = "idle" | "error" | "loading" | "success";

const CONTACT_TOPICS = [
  {
    id: "project",
    label: "proiect nou",
    hint: "urbanism, interior, grafică, web — orice domeniu",
  },
  {
    id: "collab",
    label: "colaborare",
    hint: "parteneriat, sub-contractare, mentorat",
  },
  {
    id: "question",
    label: "întrebare",
    hint: "consultanță, opinie, audit pe ceva existent",
  },
  {
    id: "press",
    label: "presă & altele",
    hint: "apariții, interviuri, evenimente",
  },
] as const;

type TopicId = (typeof CONTACT_TOPICS)[number]["id"];

export default function ContactMain() {
  const [topic, setTopic] = useState<TopicId>("project");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  const hasErrors =
    formData.name.trim() === "" || formData.email.trim() === "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasErrors) {
      setFormState("error");
      return;
    }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const inputBase =
    "w-full px-5 py-3 bg-dark text-platinum placeholder:text-platinum/60 rounded-full text-base font-light outline-none focus:ring-2 focus:ring-accent transition-shadow";

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-14 pt-3 md:pt-6">
      <div className="bg-platinum rounded-[20px] md:rounded-[32px] border-[1.5px] md:border-2 border-dark-card p-5 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-16">
        {/* Left — topic selector */}
        <div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            DESPRE CE E VORBA?
          </div>

          {/* Mobile: 2-col compact pills */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {CONTACT_TOPICS.map((t) => {
              const sel = topic === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTopic(t.id)}
                  className={`flex items-center gap-2 px-3.5 py-3 rounded-[14px] border-[1.5px] text-[13px] text-left transition-colors ${
                    sel
                      ? "bg-accent border-accent font-semibold"
                      : "bg-transparent border-dark-card font-normal"
                  }`}
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border-[1.5px] border-foreground shrink-0"
                    style={{
                      background: sel ? "var(--foreground)" : "transparent",
                    }}
                  />
                  {t.label}
                </button>
              );
            })}
          </div>

          {/* Desktop: vertical cards with hint */}
          <div className="hidden md:flex md:flex-col gap-3">
            {CONTACT_TOPICS.map((t) => {
              const sel = topic === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTopic(t.id)}
                  className={`group w-full text-left flex items-center gap-3.5 px-5 py-4 rounded-[18px] border-2 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent ${
                    sel
                      ? "bg-accent border-accent"
                      : "bg-transparent border-dark-card"
                  }`}
                >
                  <span
                    className="w-[22px] h-[22px] rounded-full border-2 border-foreground shrink-0 flex items-center justify-center"
                    style={{
                      background: sel ? "var(--foreground)" : "transparent",
                    }}
                  >
                    {sel && (
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </span>
                  <span>
                    <span
                      className={`block text-[18px] tracking-[-0.3px] text-foreground ${
                        sel ? "font-semibold" : "font-normal"
                      }`}
                    >
                      {t.label}
                    </span>
                    <span className="block text-[13px] font-light text-foreground/70 mt-0.5">
                      {t.hint}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right — form */}
        <div>
          <div className="text-[11px] md:text-[13px] tracking-[0.22em] text-muted mb-3 md:mb-[18px]">
            SCRIE-NE
          </div>

          {formState === "success" ? (
            <div className="px-6 py-10 md:px-10 md:py-14 bg-dark text-platinum rounded-[20px] md:rounded-[28px] text-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-accent mx-auto mb-5 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d2d2d"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  aria-hidden
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[24px] md:text-[28px] font-normal mb-2">
                Mulțumim!
              </div>
              <div className="text-[13px] md:text-[15px] font-light opacity-80 leading-[1.55]">
                Am primit mesajul tău. Revenim în maxim 24h cu un email scurt.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input type="hidden" name="topic" value={topic} />
              <input
                type="text"
                placeholder="Nume și prenume*"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (formState === "error") setFormState("idle");
                }}
                className={`${inputBase} ${
                  formState === "error" && formData.name.trim() === ""
                    ? "ring-2 ring-[#e04f3e]"
                    : ""
                }`}
              />
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (formState === "error") setFormState("idle");
                }}
                className={`${inputBase} ${
                  formState === "error" && formData.email.trim() === ""
                    ? "ring-2 ring-[#e04f3e]"
                    : ""
                }`}
              />
              <input
                type="tel"
                placeholder="Telefon"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={inputBase}
              />
              <textarea
                placeholder="Cu ce vă putem ajuta?"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-5 py-4 bg-dark text-platinum placeholder:text-platinum/60 rounded-[22px] text-base font-light outline-none focus:ring-2 focus:ring-accent resize-none transition-shadow"
              />
              {formState === "error" && (
                <p className="text-[13px] text-[#e04f3e] px-1">
                  Te rog completează câmpurile obligatorii marcate cu *.
                </p>
              )}
              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className={`px-9 py-3 rounded-full text-base font-normal transition-colors ${
                    formState === "loading"
                      ? "bg-muted text-platinum cursor-wait"
                      : "bg-accent text-foreground hover:bg-accent-hover"
                  }`}
                >
                  {formState === "loading" ? "Se trimite..." : "Trimite"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
