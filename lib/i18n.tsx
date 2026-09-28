"use client";

import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getContent, type Content, type Lang } from "@/data/content";
import { ui, type UI } from "@/data/ui";

export const LANG_STORAGE_KEY = "lang";
export const pathFor = (lang: Lang) => (lang === "en" ? "/en" : "/");

// Sections dans l'ordre de la page : sert à retrouver l'endroit où l'on lisait après un changement de langue
const SECTIONS = ["top", "parcours", "projets-42", "realisations", "stack", "contact"];

type Anchor = { id: string; ratio: number };

type LangContextValue = { lang: Lang; t: UI; content: Content; setLang: (lang: Lang) => void };

const LangContext = createContext<LangContextValue | null>(null);

function readingAnchor(): Anchor {
  const y = window.scrollY;
  let anchor: Anchor = { id: "top", ratio: 0 };
  for (const id of SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + y;
    if (top <= y + 1) anchor = { id, ratio: el.offsetHeight ? (y - top) / el.offsetHeight : 0 };
  }
  return anchor;
}

export function LangProvider({ lang: initial, children }: { lang: Lang; children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initial);
  const anchor = useRef<Anchor | null>(null);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      anchor.current = readingAnchor();
      try {
        localStorage.setItem(LANG_STORAGE_KEY, next);
      } catch {}
      // Change l'adresse sans recharger la page : le lien partagé ouvre la bonne langue
      window.history.replaceState(null, "", pathFor(next) + window.location.hash);
      setLangState(next);
    },
    [lang],
  );

  // Après le changement de langue : attribut lang, puis retour au même endroit de la même section
  useLayoutEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    const a = anchor.current;
    if (!a) return;
    anchor.current = null;
    const el = document.getElementById(a.id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + a.ratio * el.offsetHeight;
      window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
    }
    requestAnimationFrame(() => ScrollTrigger.refresh());
  }, [lang]);

  const value = useMemo(() => ({ lang, t: ui[lang], content: getContent(lang), setLang }), [lang, setLang]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang doit être utilisé dans <LangProvider>");
  return ctx;
}
