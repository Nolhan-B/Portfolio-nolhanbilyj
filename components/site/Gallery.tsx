"use client";

import { useState } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function Gallery({ project, sizes = "(min-width: 1024px) 55vw, 100vw" }: { project: Project; sizes?: string }) {
  const images = project.images!;
  const [active, setActive] = useState(0);
  return (
    <div>
      {/* Cadre fixe : la capture est affichée entière, les bords sont comblés par la même image floutée */}
      <div className="group/img relative aspect-[16/10] overflow-hidden border border-current bg-black">
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
              sizes={sizes}
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
                i === active ? "grain-bg p-[3px] opacity-100" : "border border-current opacity-40 hover:opacity-100"
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
