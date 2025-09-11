"use client";

import vtc1 from '@/public/screen-dbvtc/1.png';
import vtc2 from '@/public/screen-dbvtc/2.png';
import vtc3 from '@/public/screen-dbvtc/3.png';
import vtc4 from '@/public/screen-dbvtc/4.png';
import vtc5 from '@/public/screen-dbvtc/5.png';
import vtc6 from '@/public/screen-dbvtc/6.png';
import vtc7 from '@/public/screen-dbvtc/7.png';
import vtc8 from '@/public/screen-dbvtc/8.png';
import vtc9 from '@/public/screen-dbvtc/9.png';

import uha1 from '@/public/screen-criticlick/1.png';
import uha2 from '@/public/screen-criticlick/2.png';
import uha3 from '@/public/screen-criticlick/3.png';
import uha4 from '@/public/screen-criticlick/4.png';
import uha5 from '@/public/screen-criticlick/5.png';
import uha6 from '@/public/screen-criticlick/6.png';
import uha7 from '@/public/screen-criticlick/7.png';
import uha8 from '@/public/screen-criticlick/8.png';
import uha9 from '@/public/screen-criticlick/9.png';
import uha10 from '@/public/screen-criticlick/10.png';
import uha11 from '@/public/screen-criticlick/11.png';
import uha12 from '@/public/screen-criticlick/12.png';
import uha13 from '@/public/screen-criticlick/13.png';
import uha14 from '@/public/screen-criticlick/14.png';

import clf1 from '@/public/screen-ping/accueil/1.png';
import clf2 from '@/public/screen-ping/accueil/2.png';
import clf3 from '@/public/screen-ping/accueil/3.png';
import clf4 from '@/public/screen-ping/accueil/4.png';

import clf5 from '@/public/screen-ping/blog/1.png';
import clf6 from '@/public/screen-ping/blog/2.png';
import clf7 from '@/public/screen-ping/blog/3.png';

import clf8 from '@/public/screen-ping/login/1.png';
import clf9 from '@/public/screen-ping/login/2.png';
import clf10 from '@/public/screen-ping/login/3.png';
import clf11 from '@/public/screen-ping/login/4.png';

import clf12 from '@/public/screen-ping/login/5.png';
import clf13 from '@/public/screen-ping/login/6.png';
import clf14 from '@/public/screen-ping/login/7.png';
import clf15 from '@/public/screen-ping/login/8.png';

import clf16 from '@/public/screen-ping/blog/4.png';
import clf17 from '@/public/screen-ping/blog/5.png';
import clf18 from '@/public/screen-ping/blog/6.png';
import clf19 from '@/public/screen-ping/blog/7.png';
import clf20 from '@/public/screen-ping/blog/8.png';





import { Eye, Github, Info } from 'lucide-react';

const data = [
  {
    title: "OCT. 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Mon père étant VTC autour de Belfort, j’ai cherché un projet concret pour me lancer dans le développement web. L’idée m’est venue en observant son activité : pourquoi ne pas créer une solution digitale utile à son métier ? C’était une opportunité parfaite pour apprendre tout en travaillant sur un projet réaliste et concret.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          J’ai travaillé sur un design simple, épuré et 100% responsive pour refléter le professionnalisme de son service, tout en mettant en valeur son expérience unique avec des photos et des textes adaptés. Ce projet m’a permis de développer mes compétences en développement web, notamment en création d’interfaces claires, intuitives et responsives.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc1}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc2}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc3}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc4}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          L’un des principaux atouts de notre site est son outil de calcul de tarifs interactif, basé sur l’API Google Maps. Ce calculateur permet aux utilisateurs d’obtenir une estimation rapide et précise de leurs trajets. Le processus est simple : il suffit de renseigner une adresse de départ et une adresse d’arrivée. Grâce à la fonctionnalité d’auto-complétion, la recherche des adresses est facilitée, avec des suggestions pertinentes qui limitent les erreurs de saisie. En complément, il est nécessaire de fournir une heure de départ et une heure d’arrivée. Selon la plage horaire indiquée, une majoration de nuit est automatiquement appliquée pour les trajets effectués entre certaines heures (par exemple, entre 22h et 6h). Cela permet de fournir un tarif réaliste, tenant compte des éventuels surcoûts nocturnes.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc5}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc6}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Une fois que toutes les informations sont renseignées et que l’itinéraire proposé ainsi que le tarif estimé conviennent, les utilisateurs n’ont plus qu’à remplir leurs coordonnées (nom, prénom et numéro de téléphone). Ces données sont ensuite envoyées par mail, permettant ainsi de finaliser la demande de réservation en toute simplicité.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc7}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={vtc8}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Une fois le mail envoyé, un message de confirmation apparaît à l’écran, informant l’utilisateur que sa demande a bien été prise en compte. Ce système permet une prise de contact rapide et efficace, simplifiant la gestion des réservations.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={vtc9}
            alt="Screenshot du site db-vtc-comtois"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8 flex gap-2 items-center">

        <TooltipProvider>
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>Informations</TooltipContent>
            </Tooltip>
            <PopoverContent>
              Le projet utilise HTML, CSS, JavaScript avec l&apos;API Google Maps. Également, il inclut un système
              d&apos;envoi d&apos;e-mails avec un fichier PHP, en utilisant AJAX pour la communication entre le frontend
              et le backend.
            </PopoverContent>
          </Popover>
        </TooltipProvider>



          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    alert("Ce repository est privé.");
                  }}
                  >
                  <Github />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Repository Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://db-vtc-belfort.fr", '_blank');
                    }}
                  >
                    <Eye id='criticlick' />
                  </Button>
              </TooltipTrigger>
              <TooltipContent>Se rendre sur le site</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    ),
  },
  {
    title: "SEPT. 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Le site Criticlick a été créé dans le cadre de ma première année d’études en Diplôme Universitaire d’Informatique à l’UHA 4.0 de Mulhouse. Ce projet avait pour but nous aider à acquérir des compétences essentielles en développement web, telles que la maîtrise des langages HTML, CSS (+ reponsive), JavaScript, PHP, SQL et Bash, ainsi que l’utilisation de serveurs locaux (comme XAMPP), l’intégration d’API et la gestion de version avec Git. Il servait donc de projet pratique pour renforcer mes connaissances et compétences techniques.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={uha1}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha2}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha3}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
        Dans le cadre de ce projet, nous avions accès à deux API principales : une pour récupérer les produits et une autre pour gérer les catégories de produits. L’objectif principal était d’exploiter ces API de manière optimale pour extraire toutes les informations nécessaires et les intégrer de façon fluide dans le site. Ces données étaient cruciales pour structurer le site et fournir des informations pertinentes aux utilisateurs, comme la liste des produits disponibles, leurs caractéristiques et leurs catégories. En exploitant ces API, j’ai appris à manipuler des données externes tout en garantissant une intégration efficace dans le projet.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
              src={uha4}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={uha5}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={uha6}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Cela impliquait non seulement de récupérer ces données, mais aussi de les organiser dans une base de données relationnelle. J’ai dû créer des liens entre différentes tables, comme associer chaque produit à une catégorie via une relation entre les produits et les catégories. De plus, chaque produit pouvait être lié à plusieurs tags, et chaque tag à plusieurs produits, ce qui a introduit une relation many-to-many. Pour gérer cela, j’ai créé une table de jointure entre les produits et les tags. Cette organisation optimisait les recherches, facilitant l’accès aux produits par catégorie et la filtration par tags. Le défi a été d’utiliser efficacement les API tout en appliquant les principes des bases de données relationnelles, ce qui m’a permis de renforcer mes compétences en gestion de données complexes et en intégration d’API.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
              src={uha7}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha8}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
              src={uha11}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha14}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Le site inclut un système de connexion permettant aux utilisateurs de laisser des avis sur les produits, de soumettre des fiches produits manquantes et d’ajouter des catégories non présentes. Ces contributions, dans un esprit de participation communautaire, sont soumises à une vérification par les administrateurs avant leur publication. Les administrateurs disposent d’un espace de gestion pour effectuer des opérations CRUD (création, lecture, mise à jour, suppression) avec une gestion d&apos;erreur solide, sur les produits et les catégories, assurant ainsi une gestion efficace et la validation des contenus partagés par les utilisateurs.
        </p>

        <div className="grid grid-cols-2 gap-4">
        <Image
              src={uha13}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha12}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />

          <Image
              src={uha9}
              alt="Screenshot du site Criticlick"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={uha10}
            alt="Screenshot du site Criticlick"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8 flex gap-2 items-center">

        <TooltipProvider>
          <Popover>
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Info />
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent>Informations</TooltipContent>
            </Tooltip>
            <PopoverContent>
              J&apos;ai utilisé HTML, CSS, JavaScript, PHP, SQL, Bash, XAMPP pour le serveur local, Git pour la gestion de version et des intégrations API.
            </PopoverContent>
          </Popover>
        </TooltipProvider>



        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link target='_blank' href="https://github.com/Nolhan-B/FilRouge-401.git" passHref>
                <Button variant="outline" size="icon">
                  <Github />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Repository Github</TooltipContent>
          </Tooltip>
        </TooltipProvider>

          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  alert("Déployer le projet en suivant la documentation pour visualiser.");
                }}
              >
                <Eye id='la-savoureuse-tt' />
            </Button>
            </TooltipTrigger>
            <TooltipContent>Se rendre sur le site</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
      </div>
    ),
  },
  {
    title: "NOV. 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Passionné par le tennis de table et souhaitant répondre aux besoins de mon club tout en voulant développer mes connaissances en développement web sur mon temps personnel, j&apos;ai développé un site web en utilisant Next.js pour ses performances et sa gestion efficace du rendu côté serveur. J&apos;ai choisi Supabase comme base de données pour sa simplicité d&apos;intégration et, surtout, pour sa fonctionnalité de stockage de fichiers, idéale pour gérer les photos du blog présent sur le site notamment.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Sur la page d’accueil, j’ai mis en avant un titre accrocheur accompagné d&apos;un bouton ludique &quot;Moi aussi je veux jouer !&quot; pour inviter les visiteurs à nous rejoindre. Un court paragraphe présente le club, suivi d’un aperçu du blog avec les trois derniers articles publiés. Enfin, un formulaire de contact est placé en bas pour faciliter les échanges.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <Image
            src={clf1}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf2}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf3}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf4}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Dans la barre de navigation, on trouve un menu dédié au compte utilisateur. Les nouveaux visiteurs peuvent créer un compte en fournissant leur e-mail, nom, prénom et mot de passe. Une fois inscrit, il leur est demandé de confirmer leur adresse e-mail en cliquant sur un lien de vérification envoyé grâce au service RESEND. Une fois l&apos;adresse confirmée, l&apos;utilisateur peut accéder à son espace personnel.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Dans mon cas, en tant qu&apos;administrateur, mon menu inclut un accès à un panneau de gestion confidentiel. Celui-ci permet de gérer les utilisateurs, de superviser les articles du blog, et d&apos;accéder à bien d&apos;autres fonctionnalités intéressantes pour administrer le site efficacement.
        </p>

        <div className="grid grid-cols-2 gap-4 mb-8">
        <Image
            src={clf8}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        <Image
            src={clf9}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        <Image
            src={clf10}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        <Image
            src={clf11}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Bien entendu, que vous soyez connecté ou non, si vous avez oublié votre mot de passe, vous pouvez le réinitialiser. Si vous êtes connecté, vous serez redirigé vers une page pour modifier votre mot de passe. Si vous n&apos;êtes pas connecté, un e-mail vous sera envoyé avec un lien pour vous permettre de réinitialiser votre mot de passe.
        </p>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Il est également possible de changer votre adresse e-mail ainsi que votre nom d&apos;utilisateur depuis la page &apos;Mon Compte&apos;. De plus, votre rôle sur le site est renseigné sous forme de petits badges sous votre nom et prénom.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
        <Image
            src={clf12}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        <Image
            src={clf13}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        <Image
            src={clf14}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        <Image
            src={clf15}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
        Sur la page du blog, un article mis en avant par les gestionnaires du blog est affiché dès l&apos;arrivée. Ensuite, une liste des articles s&apos;affiche, avec des options de filtrage par catégorie et par titre pour faciliter la recherche. Une pagination est également disponible pour naviguer aisément entre les différentes pages.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={clf5}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf6}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf7}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
        Sur chaque page d&apos;article, on retrouve son titre, sa date de publication, sa catégorie et sa miniature l&apos;illustrant, ainsi que son contenu. Sur le côté de la page, des recommandations d&aposarticles et de catégories à consulter sont également proposées pour enrichir l&apos;expérience de lecture et encourager l&apos;exploration du site.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src={clf16}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf17}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8">
          Chaque article intègre une section commentaires, où les utilisateurs peuvent consulter les messages laissés par d&apos;autres lecteurs. Si vous êtes connecté, vous avez la possibilité de contribuer en publiant vos propres commentaires pour partager votre point de vue ou autre.
        </p>

        <div className="grid grid-cols-2 gap-4">
        <Image
            src={clf18}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf19}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <Image
            src={clf20}
            alt="Screenshot du site de La Savoureuse - Tennis de table"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>

        <div className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mt-8 mb-8 flex gap-2 items-center">

          <TooltipProvider>
            <Popover>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Info />
                    </Button>
                  </PopoverTrigger>
                </TooltipTrigger>
                <TooltipContent>Informations</TooltipContent>
              </Tooltip>
              <PopoverContent>
                Le projet utilise NextJS + Supabase, Resend, React-QUILL
              </PopoverContent>
            </Popover>
          </TooltipProvider>



          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    alert("Ce repository est privé.");
                  }}
                  >
                  <Github />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Repository Github</TooltipContent>
            </Tooltip>
          </TooltipProvider>

            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open("http://la-savoureuse-clf.com", '_blank');
                            }}
                        >
                            <Eye id='criticlick' />
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Se rendre sur le site</TooltipContent>
                </Tooltip>
            </TooltipProvider>
          </div>

      </div>
    ),
  },
];

import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import ScrollSection from "@/components/horizontalSection/horizontalSection";
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='relative' id="accueil">
        <div id='qui-suis-je' className=' absolute top-[175vh] right-0 left-0 w-screen h-screen'></div>
        <div id='mes-competences' className=' absolute top-[350vh] right-0 left-0 w-screen h-screen'></div>
        <ScrollSection />
      </div>

      <div className='relative' id="mes-projets">
        <div id='db-vtc-comtois' className='w-4 h-4 absolute top-[200px] sm:top-[300px]'></div>
        <Timeline data={data} />
      </div>

      <div id="mon-cv">
        <MacbookScroll
          title={
            <span>
              Sur LinkedIn, c’est du classique… <br /> Ici, c’est du sur-mesure, fait à la main et avec le sourire !
            </span>
          }
          showGradient={false}
        />
      </div>

      {/* <div className="bg-background" style={{ height: "300px", zIndex: 5, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <p>© 2025 Nolhan BILYJ. Tous droits réservés.</p>
          <p>"Créer, innover, apprendre."</p>
        </div>
      </div> */}
    </>
  );
}