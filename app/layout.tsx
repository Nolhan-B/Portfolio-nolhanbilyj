import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/site/SmoothScroll";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-nolhanbilyj.vercel.app"),
  twitter: { card: "summary_large_image" },
};

// Avant le premier rendu : attribut lang selon l'adresse, et redirection vers /en
// si le visiteur a choisi l'anglais lors d'une visite précédente
const langScript = `try{var en=location.pathname.indexOf("/en")===0;document.documentElement.lang=en?"en":"fr";if(!en&&location.pathname==="/"&&localStorage.getItem("lang")==="en")location.replace("/en"+location.search+location.hash)}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: langScript }} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
