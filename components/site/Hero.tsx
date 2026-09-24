"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { profile } from "@/data/projects";
import photo from "@/public/nolhan.jpg";

function Chars({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((c, i) => (
        <span key={i} data-char className="inline-block will-change-transform">
          {c}
        </span>
      ))}
    </>
  );
}

const stack = ["TypeScript", "Symfony", "React", "Rust", "Python", "Docker", "PostgreSQL", "Next.js", "C", "LLM & RAG"];

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduce) {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from("[data-char]", { yPercent: 110, duration: 1.3, stagger: 0.045 })
          .from("[data-photo]", { width: 0, duration: 1.2, ease: "expo.inOut" }, 0.35)
          .from("[data-fade]", { y: 24, opacity: 0, duration: 1, stagger: 0.08 }, 0.7);

        gsap.to("[data-line='1']", {
          xPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        gsap.to("[data-line='2']", {
          xPercent: 8,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });

      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="top" className="relative overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col justify-between px-4 pb-6 pt-20 md:px-8 md:pt-24">
        <div data-fade className="grid grid-cols-2 gap-4 font-mono text-[11px] uppercase tracking-wider md:grid-cols-4 md:text-xs">
          <span>(Portfolio — 2026)</span>
          <span className="text-right md:text-left">{profile.location}, FR</span>
          <span className="hidden md:block">Étudiant à 42 Mulhouse</span>
          <span className="hidden text-right md:block">Scroll ↓</span>
        </div>

        <h1 className="font-display my-8 text-[27vw] md:my-0 md:text-[19.5vw]" aria-label={profile.name}>
          <span data-line="1" className="line-mask">
            <Chars text="Nolhan" />
          </span>
          <span data-line="2" className="flex items-end justify-end gap-[0.06em]">
            <span
              data-photo
              className="relative mb-[0.08em] hidden h-[0.62em] w-[1.35em] shrink-0 overflow-hidden rounded-full md:block"
            >
              <Image
                src={photo}
                alt=""
                fill
                priority
                sizes="30vw"
                className="object-cover object-[50%_42%] grayscale"
              />
            </span>
            <span className="line-mask">
              <Chars text="Bilyj" />
            </span>
            <span className="line-mask text-grain">
              <Chars text="*" />
            </span>
          </span>
        </h1>

        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div data-fade className="md:col-span-5">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-wider md:text-xs">(01) {profile.role}</p>
            <p className="font-display-wide text-[9vw] md:text-[3.4vw]">
              {profile.focus.map((f, i) => (
                <span key={f}>
                  {i > 0 && <span className="text-accent"> / </span>}
                  {f}
                </span>
              ))}
            </p>
          </div>
          <div data-fade className="md:col-span-5 md:col-start-8">
            <p className="text-lg font-medium leading-snug md:text-xl">
              Je conçois des applications de bout en bout, du modèle métier jusqu&apos;à l&apos;interface. Étudiant à
              42 Mulhouse et freelance depuis 2025, je cherche une alternance en développement full-stack, backend ou
              IA.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider">
              <a href="#projets-42" className="bg-ink px-5 py-3 text-paper transition-colors hover:grain-bg hover:text-ink">
                Voir les projets ↓
              </a>
              <a
                href={profile.cv}
                target="_blank"
                className="border border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-paper"
              >
                CV (PDF) ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden border-y border-ink bg-ink py-3 text-paper" aria-hidden>
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 animate-[marquee_28s_linear_infinite] items-center">
            {stack.map((s) => (
              <span key={s} className="font-display flex items-center whitespace-nowrap text-[11vw] md:text-[5vw]">
                <span className="px-[0.3em]">{s}</span>
                <span className="text-grain">*</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
