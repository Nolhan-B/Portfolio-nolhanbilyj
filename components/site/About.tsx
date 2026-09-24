"use client";

import { useRef } from "react";
import { experiences, profile } from "@/data/projects";
import { TitleChars, useReveal } from "@/components/site/useReveal";

function age(birthDate: string) {
  const b = new Date(birthDate);
  const now = new Date();
  const hadBirthday = now.getMonth() > b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() >= b.getDate());
  return now.getFullYear() - b.getFullYear() - (hadBirthday ? 0 : 1);
}

export default function About() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  const main = experiences.filter((e) => !e.minor);
  const minor = experiences.filter((e) => e.minor);

  return (
    <section ref={root} id="parcours" className="border-t border-ink/15 px-4 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">(02) Qui suis-je</p>
      <h2 data-title className="font-display mb-14 text-[20vw] md:mb-20 md:text-[15.5vw]" aria-label="Parcours">
        <TitleChars text="Parcours" />
      </h2>

      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p data-reveal className="text-xl font-medium leading-snug md:text-2xl">
            J&apos;ai {age(profile.birthDate)} ans et je vis près de Belfort. J&apos;ai écrit mes premières lignes de code
            en 2023, en créant le site VTC de mon père.
          </p>
          <p data-reveal className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
            Depuis, un stage chez Qizuna m&apos;a appris à penser l&apos;architecture (DDD, CQRS, TDD), des clients
            m&apos;ont fait confiance en freelance, et l&apos;école 42 Mulhouse me fait creuser les fondamentaux : C,
            Rust, réseau, concurrence, IA.
          </p>
          <p data-reveal className="mt-6 text-base leading-relaxed opacity-80 md:text-lg">
            En dehors du code : tennis de table en compétition, musculation, powerlifting et vélo.
          </p>
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
