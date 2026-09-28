"use client";

import { useRef } from "react";
import { TitleParts, useReveal } from "@/components/site/useReveal";
import { useLang } from "@/lib/i18n";

function age(birthDate: string) {
  const b = new Date(birthDate);
  const now = new Date();
  const hadBirthday = now.getMonth() > b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() >= b.getDate());
  return now.getFullYear() - b.getFullYear() - (hadBirthday ? 0 : 1);
}

export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const { t, lang, content } = useLang();
  const { profile, experiences } = content;

  const main = experiences.filter((e) => !e.minor);
  const minor = experiences.filter((e) => e.minor);

  return (
    <section ref={root} id="parcours" className="border-t border-ink/15 px-4 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">{t.about.label}</p>
      <h2 data-title className={`font-display mb-14 md:mb-20 md:text-[15.5vw] ${lang === "en" ? "text-[15.5vw]" : "text-[20vw]"}`} aria-label={t.about.title.map((p) => p.text).join(" ")}>
        <TitleParts parts={t.about.title} />
      </h2>

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p data-reveal className="text-xl font-medium leading-snug md:text-2xl">
            {t.about.lead(age(profile.birthDate))}
          </p>
          {t.about.paragraphs.map((text) => (
            <p key={text} data-reveal className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
              {text}
            </p>
          ))}
          <div data-reveal className="mt-8 flex flex-wrap gap-2">
            {profile.languages.map((l) => (
              <span key={l} className="border border-ink/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
                {l}
              </span>
            ))}
          </div>
        </div>

        <ol className="lg:col-span-6 lg:col-start-7">
          {main.map((e) => (
            <li key={e.title} data-reveal className="grid gap-2 border-t border-ink/20 py-6 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-6">
              <span className="font-mono text-[11px] uppercase tracking-wider opacity-60 md:pt-1.5">{e.period}</span>
              <div>
                <h3 className="font-display-wide text-2xl md:text-3xl">{e.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider">{e.place}</p>
                {e.description && <p className="mt-3 leading-relaxed opacity-80">{e.description}</p>}
                {e.highlights && (
                  <ul className="mt-3 space-y-1.5">
                    {e.highlights.map((h) => (
                      <li key={h} className="flex gap-3 leading-snug opacity-80">
                        <span className="text-grain">*</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
          {minor.map((e) => (
            <li
              key={e.title}
              data-reveal
              className="grid gap-1 border-t border-ink/20 py-3 font-mono text-[11px] uppercase tracking-wider opacity-60 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-6"
            >
              <span>{e.period}</span>
              <span>
                {e.title} — {e.place}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
