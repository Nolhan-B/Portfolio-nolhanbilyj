import { profile } from "@/data/projects";

const links = [
  { href: "#parcours", label: "Parcours" },
  { href: "#projets-42", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference text-paper">
      <div className="flex items-center justify-between px-4 py-4 font-mono text-[11px] uppercase tracking-wider md:px-8 md:text-xs">
        <a href="#top" className="font-bold">
          NB<sup>©</sup>26
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:line-through">
              {l.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${profile.email}`} className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
          </span>
          {profile.status}
        </a>
      </div>
    </header>
  );
}
