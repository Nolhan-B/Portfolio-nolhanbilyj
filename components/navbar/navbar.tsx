"use client"
import React, { useState } from "react";
import { ModeToggle } from "../theme-provider";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"


import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactButton from "../ContactButton/ContactButton";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, top); // Scroll instantané
    }
  };

  const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);

  return (
<nav className="fixed top-0 left-0 w-full bg-background border-b border-border z-[9999999]">
  <div className="container mx-auto flex flex-wrap items-center justify-between gap-y-3 py-3 px-6 md:px-8 lg:px-10">
    {/* Logo */}
    <div className="text-lg font-bold text-foreground flex items-center gap-2">
      Nolhan BILYJ
    </div>

    {/* Navbar links (version desktop) */}
    <ul className="hidden lg:flex items-center gap-6 text-sm font-medium text-foreground">
      <li onClick={() => scrollToSection("accueil")} className="transition-all hover:text-primary cursor-pointer">Accueil</li>
      <li onClick={() => scrollToSection("qui-suis-je")} className="transition-all hover:text-primary cursor-pointer">Qui suis-je ?</li>
      {/*<li onClick={() => scrollToSection("mes-competences")} className="transition-all hover:text-primary cursor-pointer">Mes compétences</li>*/}
      <li>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-primary cursor-pointer">Projets</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background border border-border shadow-md rounded-md p-4">
                <ul className="w-[250px] space-y-3">
                  <li>
                    <NavigationMenuLink
                      onClick={() => scrollToSection("db-vtc-comtois")}
                      className={cn(
                        "block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">DB-VTC-COMTOIS</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Site société DB-VTC-COMTOIS avec outils de réservation.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      onClick={() => scrollToSection("criticlick")}
                      className={cn(
                        "block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">Criticlick</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Application de gestion de feedback pour les articles achétés en ligne.
                      </p>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink
                      onClick={() => scrollToSection("la-savoureuse-tt")}
                      className={cn(
                        "block cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      )}
                    >
                      <div className="text-sm font-medium leading-none">La Savoureuse TT</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Site web pour le club de tennis de table La Savoureuse.
                      </p>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </li>
      <li onClick={() => scrollToSection("mon-cv")} className="hover:text-primary transition-all cursor-pointer">Mon CV</li>
    </ul>

    {/* Dropdown Menu (version mobile) */}
    <div className="flex items-center z-[999999999999] space-x-3 relative">
      <DropdownMenu
  onOpenChange={(isOpen) => {
    if (!isOpen) setIsProjectMenuOpen(false);
  }}
>
  <DropdownMenuTrigger className="flex lg:hidden" asChild>
    <Button variant="outline" size="icon" className="z-10">
      <Menu className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent className="w-48 z-[9999999]">
    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
    <DropdownMenuSeparator />

    {/* Liens principaux */}
    <DropdownMenuGroup>
      <DropdownMenuItem onClick={() => scrollToSection("accueil")}>Accueil</DropdownMenuItem>
      <DropdownMenuItem onClick={() => scrollToSection("qui-suis-je")}>Qui suis-je ?</DropdownMenuItem>
      <DropdownMenuItem onClick={() => scrollToSection("mes-competences")}>Mes compétences</DropdownMenuItem>

      {/* Sous-menu Projets */}
      <DropdownMenuItem
        onClick={(e) => {
          e.preventDefault();
          setIsProjectMenuOpen(!isProjectMenuOpen);
        }}
        className="flex justify-between items-center"
      >
        Projets
        {isProjectMenuOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </DropdownMenuItem>

      {isProjectMenuOpen && (
        <div className="ml-4 space-y-2">
          <DropdownMenuItem
            onClick={() => {
              scrollToSection("db-vtc-comtois");
              setIsProjectMenuOpen(false);
            }}
          >
            DB-VTC-COMTOIS
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              scrollToSection("criticlick");
              setIsProjectMenuOpen(false);
            }}
          >
            Criticlick
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              scrollToSection("la-savoureuse-tt");
              setIsProjectMenuOpen(false);
            }}
          >
            La Savoureuse TT
          </DropdownMenuItem>
        </div>
      )}

      <DropdownMenuItem onClick={() => scrollToSection("mon-cv")}>Mon CV</DropdownMenuItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>

      {/* ModeToggle */}
      <ModeToggle />
      <ContactButton/>
    </div>
  </div>
</nav>
  );
};

export default Navbar;