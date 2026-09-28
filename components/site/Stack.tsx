"use client";

import { useRef } from "react";
import { TitleParts, useReveal } from "@/components/site/useReveal";
import { useLang } from "@/lib/i18n";

export default function Stack() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const { t, content } = useLang();

  return (
    <section ref={root} id="stack" className="on-ink bg-ink px-4 pb-24 pt-24 text-paper md:px-8 md:pb-32 md:pt-32">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">{t.stack.label}</p>
      <h2 data-title className="font-display mb-14 text-[24vw] md:mb-20 md:text-[15.5vw]" aria-label={t.stack.title.map((p) => p.text).join(" ")}>
        <TitleParts parts={t.stack.title} />
      </h2>

      <div className="grid gap-px bg-paper/20 sm:grid-cols-2 lg:grid-cols-5">
        {content.skills.map(([category, items]) => (
          <div key={category} data-reveal className="bg-ink p-5 md:p-6">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-wider text-paper/60">{category}</p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item} className="grain-hover font-display-wide w-fit text-lg md:text-xl">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
