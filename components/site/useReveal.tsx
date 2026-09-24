"use client";

import { useLayoutEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Animations d'apparition communes aux sections :
// [data-title-char] monte lettre par lettre, [data-reveal] glisse et apparaît.
export function useReveal(root: RefObject<HTMLElement>) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-title]").forEach((title) => {
        gsap.from(title.querySelectorAll("[data-title-char]"), {
          yPercent: 110,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.04,
          scrollTrigger: { trigger: title, start: "top 85%" },
        });
      });
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, [root]);
}

export function TitleChars({ text, className }: { text: string; className?: string }) {
  // Lettres regroupées par mot : le titre ne se coupe qu'entre deux mots
  const words = text.split(" ");
  return (
    <span className={`line-mask ${className ?? ""}`}>
      {words.map((word, w) => (
        <span key={w}>
          <span className="inline-block whitespace-nowrap">
            {word.split("").map((c, i) => (
              <span key={i} data-title-char className="inline-block">
                {c}
              </span>
            ))}
          </span>
          {w < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
