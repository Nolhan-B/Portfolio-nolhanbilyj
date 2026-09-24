import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";

export const metadata: Metadata = {
  title: "Nolhan Bilyj — Développeur logiciel",
  description:
    "Développeur logiciel full-stack, backend et IA. Étudiant à 42 Mulhouse, en recherche d'alternance. Projets 42, projets clients et parcours.",
  icons: { icon: "/moi.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Aperçu des palettes : ?palette=memphis|synth|pop90|grain|acid|mono */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var p=new URLSearchParams(location.search).get("palette");if(p&&/^[a-z0-9]+$/.test(p))document.documentElement.setAttribute("data-palette",p)}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
