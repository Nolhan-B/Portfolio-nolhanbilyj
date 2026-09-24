"use client";

import { useRef } from "react";
import { profile } from "@/data/projects";
import { TitleChars, useReveal } from "@/components/site/useReveal";

const links = [
  { label: "Téléphone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { label: "LinkedIn", value: "Nolhan Bilyj", href: profile.linkedin },
  { label: "GitHub", value: "Nolhan-B", href: profile.github },
  { label: "CV", value: "Télécharger (PDF)", href: profile.cv },
];

export default function Contact() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);

  return (
    <section ref={root} id="contact" className="flex min-h-[100svh] flex-col justify-between px-4 pt-24 md:px-8 md:pt-32">
      <div>
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">(06) Contact</p>
        <h2 data-title className="font-display text-[14.8vw] md:text-[12.5vw]" aria-label="Une alternance ? Parlons-en.">
          <TitleChars text={"Une alternance\u00a0?"} />
          <TitleChars text="Parlons-en." className="text-grain" />
        </h2>

        <a
          data-reveal
          href={`mailto:${profile.email}`}
          className="font-display-wide mt-12 inline-block text-[5.4vw] underline decoration-[0.06em] underline-offset-[0.15em] transition-colors hover:text-grain md:mt-16 md:text-[4.2vw]"
        >
          {profile.email.split("@")[0]}@<wbr />
          {profile.email.split("@")[1]}
        </a>

        <div data-reveal className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") || l.href.endsWith(".pdf") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-end justify-between bg-paper p-5 transition-colors hover:grain-bg hover:text-on-grain"
            >
              <span>
                <span className="block font-mono text-[11px] uppercase tracking-wider opacity-60">{l.label}</span>
                <span className="font-display-wide mt-2 block text-lg md:text-xl">{l.value}</span>
              </span>
              <span className="font-mono transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-24 flex flex-col gap-3 border-t border-ink/20 py-6 font-mono text-[11px] uppercase tracking-wider md:flex-row md:items-center md:justify-between md:text-xs">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span className="opacity-60">Codé à la main — Next.js, GSAP, Lenis</span>
        <a href="#top" className="hover:line-through">
          Retour en haut ↑
        </a>
      </footer>
    </section>
  );
}
