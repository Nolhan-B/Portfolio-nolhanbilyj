import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Nolhan Bilyj — Développeur logiciel",
  description:
    "Développeur logiciel full-stack, backend et IA. Étudiant à 42 Mulhouse, en recherche d'alternance. Projets 42, projets clients et parcours.",
  icons: { icon: "/moi.jpg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
