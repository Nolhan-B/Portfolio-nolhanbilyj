"use client";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Projects42 from "@/components/site/Projects42";
import ProjectsPro from "@/components/site/ProjectsPro";
import Stack from "@/components/site/Stack";
import Contact from "@/components/site/Contact";
import { LangProvider, useLang } from "@/lib/i18n";
import type { Lang } from "@/data/content";

function Sections() {
  const { lang } = useLang();
  // Remonté à chaque changement de langue : les animations se recalent sur les nouveaux textes
  return (
    <main key={lang}>
      <Hero />
      <About />
      <Projects42 />
      <ProjectsPro />
      <Stack />
      <Contact />
    </main>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  return (
    <LangProvider lang={lang}>
      <Header />
      <Sections />
    </LangProvider>
  );
}
