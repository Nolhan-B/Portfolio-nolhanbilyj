"use client";

import { useLang } from "@/lib/i18n";
import { langs } from "@/data/content";

export default function LangToggle() {
  const { lang, setLang, t } = useLang();
  const next = lang === "fr" ? "en" : "fr";

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={t.nav.switchTo}
      title={t.nav.switchTo}
      className="group flex items-center gap-1 uppercase"
    >
      {langs.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          <span
            className={
              l === lang ? "font-bold" : "opacity-40 transition-opacity group-hover:line-through group-hover:opacity-100"
            }
          >
            {l}
          </span>
        </span>
      ))}
    </button>
  );
}
