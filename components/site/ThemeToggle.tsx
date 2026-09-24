"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
      className="flex items-center gap-2 uppercase hover:line-through"
    >
      <span
        aria-hidden
        className="relative inline-block h-3 w-3 overflow-hidden rounded-full border border-white"
      >
        <span className={`absolute inset-y-0 left-0 w-1/2 bg-white transition-transform duration-500 ${dark ? "translate-x-full" : ""}`} />
      </span>
      <span className="hidden sm:inline">{dark ? "Clair" : "Sombre"}</span>
    </button>
  );
}
