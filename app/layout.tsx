import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "Nolhan Bilyj — Développeur logiciel",
  description:
    "Développeur logiciel full-stack, backend et IA. Étudiant à 42 Mulhouse, en recherche d'alternance. Projets 42, projets clients et parcours.",
  metadataBase: new URL("https://portfolio-nolhanbilyj.vercel.app"),
  openGraph: {
    title: "Nolhan Bilyj — Développeur logiciel",
    description: "Full-stack, backend et IA. Étudiant à 42 Mulhouse, en recherche d'alternance dès janvier 2027.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
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
