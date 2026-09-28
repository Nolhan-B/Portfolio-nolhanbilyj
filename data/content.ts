// Contenu du portfolio dans la langue demandée : le français vient de data/projects.ts,
// l'anglais de data/projects.en.ts.

import { experiences, profile, projects42, projectsPro, skills, type Experience, type Project } from "@/data/projects";
import { experiencesEn, profileEn, projectsEn, skillCategoriesEn } from "@/data/projects.en";

export type Lang = "fr" | "en";
export const langs: Lang[] = ["fr", "en"];

// Un oubli de traduction fait échouer le build plutôt que d'afficher du français sur la version anglaise
const missing = [...projects42, ...projectsPro].map((p) => p.slug).filter((slug) => !projectsEn[slug]);
if (missing.length) throw new Error(`Traduction anglaise manquante pour : ${missing.join(", ")}`);
if (experiencesEn.length !== experiences.length) throw new Error("experiencesEn doit suivre experiences, ligne pour ligne");
const missingSkills = Object.keys(skills).filter((k) => !skillCategoriesEn[k]);
if (missingSkills.length) throw new Error(`Catégorie de compétences non traduite : ${missingSkills.join(", ")}`);

const localizeProject = (p: Project): Project => ({ ...p, ...projectsEn[p.slug] });

export function getContent(lang: Lang) {
  if (lang === "fr") {
    return { profile, skills: Object.entries(skills), experiences, projects42, projectsPro };
  }
  return {
    profile: { ...profile, ...profileEn },
    skills: Object.entries(skills).map(([cat, items]) => [skillCategoriesEn[cat], items] as [string, string[]]),
    experiences: experiences.map((e, i): Experience => ({ ...e, ...experiencesEn[i] })),
    projects42: projects42.map(localizeProject),
    projectsPro: projectsPro.map(localizeProject),
  };
}

export type Content = ReturnType<typeof getContent>;
