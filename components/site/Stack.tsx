"use client";

import { useRef } from "react";
import { skills } from "@/data/projects";
import { TitleChars, useReveal } from "@/components/site/useReveal";

export default function Stack() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="stack" className="on-ink bg-ink px-4 pb-24 pt-24 text-paper md:px-8 md:pb-32 md:pt-32">
      <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">(05) Outils du quotidien</p>
      <h2 data-title className="font-display mb-14 text-[24vw] md:mb-20 md:text-[15.5vw]" aria-label="Stack">
        <TitleChars text="Stack" />
      </h2>

      <div className="grid gap-px bg-paper/20 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} data-reveal className="bg-ink p-5 md:p-6">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-wider text-accent">{category}</p>
            <ul className="space-y-1">
              {items.map((item) => (
                <li key={item} className="font-display-wide text-lg transition-colors hover:text-grain md:text-xl">
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
