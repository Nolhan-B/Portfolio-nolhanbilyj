"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/projects";
import ThemeToggle from "@/components/site/ThemeToggle";

const links = [
  { href: "#parcours", label: "Parcours" },
  { href: "#projets-42", label: "Projets 42" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

const pad = (n: number) => String(n).padStart(2, "0");

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Fermeture à la touche Échap
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="menu-mobile"
      aria-hidden={!open}
      data-lenis-prevent
      className={`on-ink fixed inset-0 z-40 flex flex-col justify-between bg-ink px-4 pb-6 pt-20 text-paper transition-[clip-path] duration-700 ease-expo md:hidden ${
        open ? "[clip-path:inset(0_0_0_0)]" : "pointer-events-none [clip-path:inset(0_0_100%_0)]"
      }`}
    >
      <nav>
        <ul>
          {links.map((l, i) => (
            <li key={l.href} className="border-t border-paper/20 last:border-b">
              <a
                href={l.href}
                onClick={onClose}
                tabIndex={open ? 0 : -1}
                className="group flex items-baseline gap-4 py-3"
              >
                <span className="font-mono text-[11px] opacity-60">{pad(i + 1)}</span>
                <span
                  className={`font-display text-[13vw] transition-transform duration-700 ease-expo group-hover:translate-x-2 group-active:text-grain ${
                    open ? "translate-y-0" : "translate-y-8"
                  }`}
                  style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
                >
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grid grid-cols-2 gap-px border border-paper/20 bg-paper/20 font-mono text-[11px] uppercase tracking-wider">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="bg-ink p-4">
          LinkedIn ↗
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="bg-ink p-4">
          GitHub ↗
        </a>
        <a href={profile.cv} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1} className="bg-ink p-4">
          CV (PDF) ↗
        </a>
        <a href={`mailto:${profile.email}`} tabIndex={open ? 0 : -1} className="grain-bg p-4 text-on-grain">
          Me contacter ↗
        </a>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  // Bloque le défilement de la page quand le menu est ouvert
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-white">
        <div className="flex items-center justify-between px-4 py-4 font-mono text-[11px] uppercase tracking-wider md:px-8 md:text-xs">
          <a href="#top" onClick={() => setOpen(false)} className="font-bold">
            NB<sup>©</sup>26
          </a>
          <nav className="hidden gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:line-through">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-5 md:gap-8">
            <ThemeToggle />
            <a href={`mailto:${profile.email}`} className="hidden items-center gap-2 md:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              {profile.status}
            </a>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="flex items-center gap-2 uppercase md:hidden"
            >
              {open ? "Fermer" : "Menu"}
              <span aria-hidden className="relative block h-2.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-white transition-transform duration-500 ${
                    open ? "translate-y-[5px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-px w-full bg-white transition-transform duration-500 ${
                    open ? "-translate-y-[4px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
