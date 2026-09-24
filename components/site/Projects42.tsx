"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { projects42, type Project } from "@/data/projects";

const tagLabels: Record<string, string> = {
  web: "Web",
  backend: "Backend",
  ia: "IA",
  systemes: "Systèmes",
  mobile: "Mobile",
  devops: "DevOps",
};

const pad = (n: number) => String(n).padStart(2, "0");

function Row({ project, index, open, onToggle }: { project: Project; index: number; open: boolean; onToggle: () => void }) {
  return (
    <li data-row className="border-t border-paper/25">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group relative grid w-full grid-cols-[2.5rem_1fr] items-center gap-2 overflow-hidden px-4 py-4 text-left md:grid-cols-[4rem_1fr_auto] md:px-8 md:py-5"
      >
        <span className="absolute inset-0 origin-bottom scale-y-0 grain-bg transition-transform duration-500 ease-expo group-hover:scale-y-100" />
        <span className="relative font-mono text-xs transition-colors group-hover:text-on-grain">{pad(index + 1)}</span>
        <span className="relative flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-display text-[12vw] transition-[transform,color] duration-500 ease-expo group-hover:translate-x-3 group-hover:text-on-grain md:text-[7vw]">
            {project.title}
          </span>
          {project.status === "en-cours" && (
            <span className="grain-bg flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-on-grain group-hover:!bg-none group-hover:bg-ink group-hover:text-paper">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
              En cours
            </span>
          )}
        </span>
        <span className="relative hidden text-right font-mono text-xs uppercase tracking-wider transition-colors group-hover:text-on-grain md:block">
          <span className="block">{project.tags.map((t) => tagLabels[t]).join(" · ")}</span>
          <span className="block opacity-60">{project.period}</span>
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-700 ease-expo"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="grid gap-8 px-4 pb-10 pt-2 md:grid-cols-12 md:px-8 md:pb-14">
            <div className="md:col-span-5 md:col-start-2">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-wider text-accent">{project.context}</p>
              <p className="font-display-wide text-3xl md:text-[2.6vw]">{project.tagline}</p>
            </div>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-base leading-relaxed text-paper/80 md:text-lg">{project.description}</p>
              <ul className="mt-6 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm md:text-base">
                    <span className="text-grain">*</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="border border-paper/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block bg-paper px-5 py-3 font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:grain-bg hover:text-on-grain"
                >
                  Voir sur GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function Projects42() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<string | null>(projects42[0].slug);
  const featured = projects42.filter((p) => p.featured);
  const others = projects42.filter((p) => !p.featured);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from("[data-title-char]", {
        yPercent: 110,
        duration: 1.2,
        ease: "expo.out",
        stagger: 0.04,
        scrollTrigger: { trigger: "[data-title]", start: "top 85%" },
      });
      gsap.utils.toArray<HTMLElement>("[data-row], [data-card]").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="projets-42" className="on-ink bg-ink pb-24 pt-24 text-paper md:pt-32">
      <div className="mb-12 grid gap-6 px-4 md:mb-20 md:grid-cols-12 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-wider md:col-span-12 md:text-xs">
          (02) Tronc commun — École 42 Mulhouse
        </p>
        <h2
          data-title
          className="font-display flex flex-wrap items-end gap-x-[0.12em] text-[24vw] md:col-span-12 md:text-[15.5vw]"
          aria-label="Projets 42"
        >
          <span className="line-mask">
            {"Projets".split("").map((c, i) => (
              <span key={i} data-title-char className="inline-block">
                {c}
              </span>
            ))}
          </span>
          <span className="line-mask text-grain">
            {"42".split("").map((c, i) => (
              <span key={i} data-title-char className="inline-block">
                {c}
              </span>
            ))}
          </span>
        </h2>
        <div className="md:col-span-5 md:col-start-8">
          <p className="text-lg leading-snug text-paper/80 md:text-xl">
            Pas de cours, pas de prof : des projets, des pairs et des soutenances. C&apos;est là que j&apos;ai appris
            les systèmes, le réseau, la concurrence et l&apos;IA.
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-paper/60">
            ({pad(featured.length)}) mis en avant — ({pad(others.length)}) autres
          </p>
        </div>
      </div>

      <ul className="border-b border-paper/25">
        {featured.map((p, i) => (
          <Row key={p.slug} project={p} index={i} open={open === p.slug} onToggle={() => setOpen(open === p.slug ? null : p.slug)} />
        ))}
      </ul>

      <div className="mt-20 px-4 md:mt-28 md:px-8">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">Aussi à 42</p>
        <div className="grid gap-px bg-paper/25 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((p) => {
            const Tag = p.links?.github ? "a" : "div";
            return (
              <Tag
                key={p.slug}
                data-card
                {...(p.links?.github ? { href: p.links.github, target: "_blank", rel: "noreferrer" } : {})}
                className="group flex min-h-[15rem] flex-col justify-between bg-ink p-5 transition-colors hover:grain-bg hover:text-on-grain"
              >
                <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-wider opacity-60">
                  <span>{p.period}</span>
                  {p.links?.github && <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>}
                </div>
                <div>
                  <h3 className="font-display mb-3 text-5xl">{p.title}</h3>
                  <p className="text-sm leading-snug opacity-80">{p.tagline}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-accent">{p.stack.join(" · ")}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
