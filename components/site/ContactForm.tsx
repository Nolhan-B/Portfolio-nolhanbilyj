"use client";

import { useState } from "react";

const subjects = [
  { value: "alternance", label: "Alternance" },
  { value: "freelance", label: "Projet freelance" },
  { value: "autre", label: "Autre" },
];

const field =
  "w-full border border-ink/30 bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:border-ink";
const label = "mb-2 block font-mono text-[11px] uppercase tracking-wider opacity-60";

export default function ContactForm() {
  const [subject, setSubject] = useState("alternance");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identity: form.get("identity"),
          email: form.get("email"),
          subject,
          content: form.get("content"),
          website: form.get("website"),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "L'envoi a échoué.");
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "L'envoi a échoué.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="grain-bg flex min-h-[22rem] flex-col justify-end p-6 text-on-grain md:p-8">
        <p className="font-display text-[13vw] md:text-[5vw]">Message envoyé.</p>
        <p className="mt-3 max-w-md">Merci ! Je te réponds au plus vite, en général sous 24 à 48 heures.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <fieldset>
        <legend className={label}>Sujet</legend>
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => setSubject(s.value)}
              aria-pressed={subject === s.value}
              className={`border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                subject === s.value ? "grain-bg border-ink text-on-grain" : "border-ink/30 hover:border-ink"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="identity" className={label}>
            Nom / entreprise
          </label>
          <input id="identity" name="identity" required maxLength={120} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="content" className={label}>
          Message
        </label>
        <textarea id="content" name="content" required minLength={10} maxLength={5000} rows={6} className={`${field} resize-y`} />
      </div>

      {/* Champ piège anti-spam, invisible pour les humains */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-ink px-6 py-4 font-mono text-xs uppercase tracking-wider text-paper transition-colors hover:grain-bg hover:text-on-grain disabled:opacity-50"
        >
          {status === "sending" ? "Envoi…" : "Envoyer le message →"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm">
            {error} Tu peux aussi m&apos;écrire directement par email.
          </p>
        )}
      </div>
    </form>
  );
}
