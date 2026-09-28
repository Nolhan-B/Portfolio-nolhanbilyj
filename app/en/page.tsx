import type { Metadata } from "next";
import Site from "@/components/site/Site";
import { ui } from "@/data/ui";

export const metadata: Metadata = {
  title: ui.en.meta.title,
  description: ui.en.meta.description,
  alternates: { canonical: "/en", languages: { fr: "/", en: "/en", "x-default": "/" } },
  openGraph: { title: ui.en.meta.title, description: ui.en.meta.description, locale: "en_US", alternateLocale: "fr_FR", type: "website", url: "/en" },
};

export default function HomeEn() {
  return <Site lang="en" />;
}
