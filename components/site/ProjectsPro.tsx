"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projectsPro, type Project } from "@/data/projects";
import { TitleChars, useReveal } from "@/components/site/useReveal";

const pad = (n: number) => String(n).padStart(2, "0");

function Gallery({ project }: { project: Project }) {
  const images = project.images!;
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* Cadre fixe : la capture est affichée entière, les bords sont comblés par la même image floutée */}
      <div className="group/img relative aspect-[16/10] overflow-hidden border border-ink bg-ink">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== active}
          >
            <Image src={src} alt="" fill sizes="10vw" className="scale-110 object-cover opacity-60 blur-2xl" />
            <Image
              src={src}
              alt={`Capture ${i + 1} de ${project.title}`}
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain transition-transform duration-700 ease-expo group-hover/img:scale-[1.02]"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`Afficher la capture ${i + 1} de ${project.title}`}
              aria-pressed={i === active}
              className={`relative h-14 w-20 overflow-hidden transition-opacity md:h-16 md:w-24 ${
                i === active ? "grain-bg p-[3px] opacity-100" : "border border-ink/30 opacity-50 hover:opacity-100"
              }`}
            >
              <span className="relative block h-full w-full">
                <Image src={src} alt="" fill sizes="96px" className="object-cover object-top" />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Visual({ project, index }: { project: Project; index: number }) {
  if (project.images?.length) return <Gallery project={project} />;

  // Pas de capture (projet privé ou chez le client) : une affiche typographique sur le dégradé
  return (
    <div
      className="grain-bg relative flex aspect-[16/10] flex-col justify-between overflow-hidden border border-ink p-5 text-on-grain md:p-8"
      style={{ animationDelay: `${-index * 3}s` }}
    >
      <span className="font-mono text-[11px] uppercase tracking-wider">{project.stack.slice(0, 3).join(" · ")}</span>
      <span className="font-display text-[16vw] lg:text-[8.5vw]">{project.title}</span>
    </div>
  );
}

function Featured({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article data-reveal className="relative grid grid-cols-1 items-center gap-8 py-12 lg:grid-cols-12 lg:gap-10 md:py-20">
      {/* Filet en dégradé animé en haut de chaque projet */}
      <span aria-hidden className="grain-bg absolute inset-x-0 top-0 h-1" style={{ animationDelay: `${-index * 3}s` }} />
      <div className={`min-w-0 lg:col-span-7 ${flip ? "lg:order-2 lg:col-start-6" : ""}`}>
        <Visual project={project} index={index} />
      </div>
      <div className={`min-w-0 lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1 lg:row-start-1" : ""}`}>
        <div className="mb-4 flex items-end justify-between">
          <span className="font-display text-grain text-6xl md:text-7xl" style={{ animationDelay: `${-index * 3}s` }}>
            {pad(index + 1)}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider opacity-60">{project.period}</span>
        </div>
        <p className="mb-3 font-mono text-[11px] uppercase tracking-wider opacity-60">{project.context}</p>
        <h3 className="font-display text-[15vw] md:text-[10vw] lg:text-[5.5vw]">{project.title}</h3>
        <p className="font-display-wide mt-4 text-xl md:text-2xl">{project.tagline}</p>
        <p className="mt-4 leading-relaxed opacity-80">{project.description}</p>
        <ul className="mt-5 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm leading-snug md:text-base">
              <span className="text-grain">*</span>
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span key={s} className="border border-ink/30 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
              {s}
            </span>
          ))}
        </div>
        {project.links?.site && (
          <a
            href={project.links.site}
            target="_blank"
            rel="noreferrer"
            className="grain-bg mt-8 inline-block px-5 py-3 font-mono text-xs uppercase tracking-wider text-on-grain transition-colors hover:!bg-none hover:bg-ink hover:text-paper"
          >
            Voir le site ↗
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPro() {
  const root = useRef<HTMLElement>(null);
  useReveal(root);
  const featured = projectsPro.filter((p) => p.featured);
  const others = projectsPro.filter((p) => !p.featured);

  return (
    <section ref={root} id="realisations" className="px-4 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
      <p className="mb-10 font-mono text-[11px] uppercase tracking-wider md:mb-14 md:text-xs">(04) Clients, freelance & projets perso</p>
      <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-12">
        <h2
          data-title
          className="font-display flex flex-wrap items-end text-[18vw] md:col-span-12 md:text-[13vw]"
          aria-label="Réalisations"
        >
          <TitleChars text="Réalisa" />
          <TitleChars text="tions" className="text-grain" />
        </h2>
        <p data-reveal className="text-lg leading-snug opacity-80 md:col-span-5 md:col-start-8 md:text-xl">
          Des projets en production, pour de vrais utilisateurs : un logiciel de gestion de stock, un e-commerce, le site de mon
          club, des sites vitrines.
        </p>
      </div>

      {featured.map((p, i) => (
        <Featured key={p.slug} project={p} index={i} />
      ))}

      <div className="mt-16 md:mt-24">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wider md:text-xs">Et aussi</p>
        <div className="grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => {
            const href = p.links?.site;
            const Tag = href ? "a" : "div";
            return (
              <Tag
                key={p.slug}
                data-reveal
                {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
                className="group flex min-h-[14rem] flex-col justify-between bg-paper p-5 transition-colors hover:grain-bg hover:text-on-grain"
              >
                <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-wider opacity-60">
                  <span>{p.context}</span>
                  {href && <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>}
                </div>
                <div>
                  <h3 className="font-display mb-3 text-5xl">{p.title}</h3>
                  <p className="text-sm leading-snug opacity-80">{p.tagline}</p>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-wider opacity-60">{p.stack.join(" · ")}</p>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
