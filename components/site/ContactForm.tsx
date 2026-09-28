"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";

const subjects = ["alternance", "freelance", "autre"];

const field =
  "w-full border border-ink/30 bg-transparent px-4 py-3 text-base outline-none transition-colors placeholder:opacity-40 focus:border-ink";
const label = "mb-2 block font-mono text-[11px] uppercase tracking-wider opacity-60";

export default function ContactForm() {
  const [subject, setSubject] = useState("alternance");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const { t, lang } = useLang();

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
          lang,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.code || "failed");
      setStatus("sent");
    } catch (err) {
      const code = err instanceof Error ? err.message : "failed";
      setError(t.form.errors[code] ?? t.form.errors.failed);
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="grain-bg flex min-h-[22rem] flex-col justify-end p-6 text-on-grain md:p-8">
        <p className="font-display text-[13vw] md:text-[5vw]">{t.form.sentTitle}</p>
        <p className="mt-3 max-w-md">{t.form.sentText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <fieldset>
        <legend className={label}>{t.form.subject}</legend>
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSubject(s)}
              aria-pressed={subject === s}
              className={`border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
                subject === s ? "grain-bg border-ink text-on-grain" : "border-ink/30 hover:border-ink"
              }`}
            >
              {t.form.subjects[s]}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="identity" className={label}>
            {t.form.name}
          </label>
          <input id="identity" name="identity" required maxLength={120} autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            {t.form.email}
          </label>
          <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor="content" className={label}>
          {t.form.message}
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
          {status === "sending" ? t.form.sending : t.form.send}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm">
            {error} {t.form.errorHint}
          </p>
        )}
      </div>
    </form>
  );
}
