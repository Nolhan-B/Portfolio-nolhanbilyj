import type { Metadata } from "next";
import Site from "@/components/site/Site";
import { ui } from "@/data/ui";

export const metadata: Metadata = {
  title: ui.fr.meta.title,
  description: ui.fr.meta.description,
  alternates: { canonical: "/", languages: { fr: "/", en: "/en", "x-default": "/" } },
  openGraph: { title: ui.fr.meta.title, description: ui.fr.meta.description, locale: "fr_FR", alternateLocale: "en_US", type: "website", url: "/" },
};

export default function Home() {
  return <Site lang="fr" />;
}
