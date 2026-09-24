// Source unique du contenu du portfolio : projets, parcours, profil.
// L'ordre des tableaux est l'ordre d'affichage.

export type ProjectTag = "web" | "backend" | "ia" | "systemes" | "mobile" | "devops";

export type Project = {
  slug: string;
  title: string;
  /** Mis en avant (grande carte avec détails) ou carte compacte */
  featured: boolean;
  period: string;
  status?: "en-cours" | "production";
  context: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  tags: ProjectTag[];
  links?: { site?: string; github?: string };
  /** Captures d'écran dans /public/projects (la première est l'image principale) */
  images?: string[];
};

export type Experience = {
  period: string;
  title: string;
  place: string;
  description?: string;
  highlights?: string[];
  /** Ligne discrète, sans détails */
  minor?: boolean;
};

export const profile = {
  name: "Nolhan Bilyj",
  role: "Développeur logiciel",
  focus: ["Full-stack", "Backend", "IA"],
  status: "En recherche d'alternance",
  location: "Belfort / Mulhouse",
  email: "nolhanbil@gmail.com",
  phone: "06 69 45 09 03",
  linkedin: "https://www.linkedin.com/in/nolhan-bilyj-27a546341/",
  github: "https://github.com/Nolhan-B",
  cv: "/BILYJ-Nolhan-CV.pdf",
  birthDate: "2005-08-11",
  languages: ["Français (natif)", "Anglais (C1)", "Espagnol (B1)"],
  interests: ["Tennis de table en compétition", "Tennis", "Musculation & powerlifting", "Cyclisme"],
};

export const skills = {
  Langages: ["TypeScript", "JavaScript", "PHP", "Python", "C", "Rust", "SQL", "Bash", "HTML", "CSS"],
  Frameworks: ["React", "Next.js", "Symfony", "Express", "Fastify", "React Native / Expo"],
  Architecture: ["DDD", "CQRS", "Clean Architecture", "TDD / BDD", "SOLID", "Microservices"],
  "IA & LLM": ["Agents", "RAG", "Function calling", "MCP"],
  "Outils & infra": ["Docker", "Linux", "PostgreSQL", "Supabase", "Prisma", "Vercel", "Git", "Figma", "Jira"],
};

export const experiences: Experience[] = [
  {
    period: "2025 — aujourd'hui",
    title: "Étudiant — 42 Next",
    place: "École 42 Mulhouse",
    description:
      "Tronc commun en peer learning et peer evaluation, sans cours ni professeurs. Algorithmique en C, Rust et Python, concurrence, systèmes d'IA, Docker, réseaux TCP/IP. Le plus avancé de ma promotion.",
  },
  {
    period: "2025 — aujourd'hui",
    title: "Développeur web freelance",
    place: "Indépendant",
    description: "Applications métier et sites pour des clients : KL Logistique, Publih-Corteva, Inmemorium, M Studio Print, Sanomax Solution.",
  },
  {
    period: "Mars — Juil. 2025",
    title: "Stage développeur full-stack",
    place: "Qizuna",
    highlights: [
      "LBM (Le Bulletin Municipal) en Symfony",
      "Score Story, application mobile en Expo / React Native",
      "Logique métier structurée en DDD, CQRS, SOLID et TDD, avec un mentor technique",
    ],
  },
  {
    period: "2024 — aujourd'hui",
    title: "Responsable informatique",
    place: "La Savoureuse — Châtenois-les-Forges",
    description: "Conception, développement et maintenance du site du club multi-sections.",
  },
  { period: "2024 — 2025", title: "Première année d'informatique", place: "Mulhouse", minor: true },
  { period: "2023", title: "Baccalauréat général (Maths, LLCER Anglais)", place: "Lycée Condorcet — Belfort", minor: true },
];

export const projects42: Project[] = [
  {
    slug: "ft-transcendence",
    title: "ft_transcendence",
    featured: true,
    period: "Sept. 2026 — en cours",
    status: "en-cours",
    context: "Projet final du tronc commun 42 — en équipe",
    tagline: "Un UNO multijoueur en temps réel, pensé comme une vraie plateforme.",
    description:
      "Projet de fin de tronc commun : une application web complète autour d'un UNO jouable en ligne à plusieurs, avec comptes, amis, chat et parties en temps réel. Architecture en microservices derrière une gateway, développée en équipe avec un vrai workflow Git (branches, pull requests, reviews).",
    highlights: [
      "Microservices : auth, user, game, chat, gateway",
      "Authentification JWT, schéma Prisma et migrations PostgreSQL",
      "Types partagés entre front et back (événements WebSocket, jeu, utilisateurs)",
      "Stack entièrement dockerisée, secrets Docker pour la base",
    ],
    stack: ["TypeScript", "Fastify", "Prisma", "PostgreSQL", "WebSocket", "Docker"],
    tags: ["web", "backend", "devops"],
    links: { github: "https://github.com/Nolhan-B/ft_transcendence" },
  },
  {
    slug: "the-answer-protocol",
    title: "The Answer Protocol",
    featured: true,
    period: "Sept. 2026",
    context: "42 — en binôme",
    tagline: "Un MUD multijoueur en Rust : un monde partagé, en temps réel, sur TCP.",
    description:
      "Serveur de jeu multijoueur textuel qui implémente le protocole RFC 42TAP. Les joueurs explorent un monde persistant, combattent des PNJ, ramassent des objets, font des quêtes, discutent et forment des groupes. Chaque action est visible en temps réel par les autres joueurs.",
    highlights: [
      "Serveur asynchrone tokio : une tâche par client, état du monde partagé",
      "Diffusion d'événements par salle, par groupe ou globale",
      "Client terminal avec autocomplétion et coloration syntaxique",
      "Client web : Axum + WebSocket en pont vers le serveur TCP, carte interactive",
    ],
    stack: ["Rust", "tokio", "Axum", "WebSocket", "TCP"],
    tags: ["systemes", "backend"],
    links: { github: "https://github.com/Nolhan-B/The-Answer-Protocol" },
  },
  {
    slug: "agent-smith",
    title: "Agent Smith",
    featured: true,
    period: "Juil. 2026",
    context: "42 — en binôme",
    tagline: "Un agent IA qui raisonne, écrit du code, l'exécute et corrige ses erreurs.",
    description:
      "Framework d'agent autonome qui résout des problèmes de code en boucle Thought → Code → Observation. L'agent génère du Python, l'exécute dans une sandbox configurable et itère jusqu'à la solution. Évalué sur MBPP et sur SWE-bench (vrais bugs de dépôts GitHub, dans des conteneurs Docker).",
    highlights: [
      "Outils exposés via le Model Context Protocol (MCP)",
      "Exécution sandboxée du code généré",
      "Multi-fournisseurs LLM (Groq, OpenRouter, Gemini, OpenAI) avec rotation de clés",
      "Rapport de benchmark sur MBPP et SWE-bench",
    ],
    stack: ["Python", "MCP", "LLM", "Docker", "uv"],
    tags: ["ia", "backend"],
    links: { github: "https://github.com/Nolhan-B/Agent-Smith" },
  },
  {
    slug: "pac-man",
    title: "Pac-Man",
    featured: true,
    period: "Mai 2026",
    context: "42 — en binôme",
    tagline: "Le classique de 1980, recodé proprement en Python orienté objet.",
    description:
      "Recréation du jeu d'arcade avec un moteur modulaire : IA autonome des fantômes, progression par niveaux, labyrinthes générés dynamiquement et gestion stricte des erreurs pour que le jeu ne plante jamais.",
    highlights: [
      "IA des fantômes et états (chasse, fuite)",
      "Labyrinthes générés par notre propre package",
      "Configuration JSON validée, tableau des meilleurs scores",
      "Code typé strictement (mypy) et linté",
    ],
    stack: ["Python", "Pygame", "mypy"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/Pac-man-42" },
  },
  {
    slug: "rag-against-the-machine",
    title: "RAG against the machine",
    featured: true,
    period: "Mai — Juin 2026",
    context: "42",
    tagline: "Poser des questions à une base de code et obtenir des réponses sourcées.",
    description:
      "Système de Retrieval-Augmented Generation sur la base de code de vLLM : indexation du dépôt, recherche des extraits de code et de documentation pertinents, puis génération de la réponse avec un LLM local. Inclut une évaluation de la qualité de la recherche.",
    highlights: [
      "Découpage et indexation d'un dépôt complet",
      "Recherche top-k sur code et documentation",
      "Génération avec Qwen3-0.6B en local",
      "Pipeline d'évaluation sur jeux de questions",
    ],
    stack: ["Python", "RAG", "Qwen3", "uv"],
    tags: ["ia"],
    links: { github: "https://github.com/Nolhan-B/RAG-against-the-machine" },
  },
  {
    slug: "call-me-maybe",
    title: "Call Me Maybe",
    featured: true,
    period: "Mars — Avr. 2026",
    context: "42",
    tagline: "Du function calling 100 % fiable, même avec un modèle de 0,6B.",
    description:
      "À partir d'une phrase en langage naturel, le système produit un appel de fonction structuré au lieu d'une réponse. Les petits modèles génèrent souvent du JSON invalide : le projet utilise le décodage contraint pour guider la génération token par token et garantir une sortie conforme au schéma.",
    highlights: [
      "Décodage contraint token par token",
      "Sortie JSON valide et conforme au schéma à 100 %",
      "Fonctionne sur un modèle de 0,6 milliard de paramètres",
    ],
    stack: ["Python", "LLM", "JSON Schema"],
    tags: ["ia"],
    links: { github: "https://github.com/Nolhan-B/Call-Me-Maybe" },
  },
  {
    slug: "inception",
    title: "Inception",
    featured: true,
    period: "Juil. — Août 2026",
    context: "42",
    tagline: "Une infrastructure complète, conteneur par conteneur, sans image toute faite.",
    description:
      "Mise en place d'une infrastructure NGINX + WordPress (php-fpm) + MariaDB, chaque service dans son conteneur construit à partir d'un Dockerfile maison sur Debian, orchestrée avec Docker Compose.",
    highlights: [
      "NGINX seul point d'entrée, en TLS 1.2 / 1.3",
      "Secrets Docker pour les mots de passe",
      "Réseau bridge isolé, volumes nommés",
      "Documentation utilisateur et développeur",
    ],
    stack: ["Docker", "Docker Compose", "NGINX", "MariaDB", "WordPress", "Debian"],
    tags: ["devops"],
    links: { github: "https://github.com/Nolhan-B/Inception" },
  },
  {
    slug: "fly-in",
    title: "Fly-in",
    featured: false,
    period: "Avr. 2026",
    context: "42",
    tagline: "Routage de drones sous contraintes, avec simulation visuelle.",
    description: "Faire traverser un réseau de zones à une flotte de drones en un minimum de tours, en respectant les capacités des zones et des liaisons.",
    highlights: ["Dijkstra pondéré et routage multi-chemins", "Moteur de simulation tour par tour", "Visualiseur Pygame"],
    stack: ["Python", "Pygame"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/Fly-in" },
  },
  {
    slug: "a-maze-ing",
    title: "A-Maze-ing",
    featured: false,
    period: "Fév. 2026",
    context: "42 — en binôme",
    tagline: "Générateur et solveur de labyrinthes, publié comme package Python.",
    description: "Génération de labyrinthes parfaits ou avec boucles, résolution par plus court chemin et export texte / visuel. Le générateur est un package réutilisable (repris dans Pac-Man).",
    highlights: ["Génération procédurale avec seed", "Plus court chemin", "Package pip réutilisable"],
    stack: ["Python", "mypy"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/A-Maze-ing" },
  },
  {
    slug: "codexion",
    title: "Codexion",
    featured: false,
    period: "Fév. — Mars 2026",
    context: "42",
    tagline: "Le problème des philosophes, version développeurs et clés USB.",
    description: "Simulation multithreadée sans interblocage ni famine : des développeurs se partagent des ressources limitées pour compiler.",
    highlights: ["POSIX threads et mutex", "Ordonnancement FIFO et EDF", "Détection de famine et logs thread-safe"],
    stack: ["C", "pthreads"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/Codexion" },
  },
  {
    slug: "push-swap",
    title: "push_swap",
    featured: false,
    period: "Janv. 2026",
    context: "42",
    tagline: "Trier deux piles avec le moins d'opérations possible.",
    description: "Algorithmes de tri adaptés à la taille de l'entrée, sous un jeu d'opérations très restreint.",
    highlights: ["Plusieurs stratégies selon la taille", "Optimisation du nombre de coups"],
    stack: ["C"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/push-swap" },
  },
  {
    slug: "netpractice",
    title: "NetPractice",
    featured: false,
    period: "Juin 2026",
    context: "42",
    tagline: "Réparer des réseaux : adressage IP, masques et routage.",
    description: "Dix niveaux de configuration réseau de difficulté croissante, validés en soutenance sans outil.",
    highlights: ["Adressage IPv4 et sous-réseaux", "Tables de routage"],
    stack: ["TCP/IP"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/Net-Practice" },
  },
  {
    slug: "piscine-python",
    title: "Piscine Python",
    featured: false,
    period: "Janv. — Fév. 2026",
    context: "42",
    tagline: "Onze modules intensifs de Python.",
    description: "Des bases jusqu'à la programmation orientée objet, au typage et aux outils de l'écosystème.",
    highlights: ["Modules 00 à 10"],
    stack: ["Python"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/Piscine-Python-Module-10" },
  },
  {
    slug: "piscine-c",
    title: "Piscine C",
    featured: false,
    period: "2025",
    context: "42 — sélection",
    tagline: "Le mois de sélection de 42, en C et en Shell.",
    description: "Quatre semaines intensives pour entrer à 42 : C, Shell et projets en équipe (rushs).",
    highlights: ["C00 à C09, Shell00 et Shell01", "Rushs en équipe"],
    stack: ["C", "Shell"],
    tags: ["systemes"],
    links: { github: "https://github.com/Nolhan-B/piscine-42" },
  },
];

export const projectsPro: Project[] = [
  {
    slug: "kl-logistique",
    title: "KL Logistique",
    featured: true,
    period: "2025 — 2026",
    status: "production",
    context: "Client — freelance",
    tagline: "Un logiciel de gestion de stock, conçu de A à Z en architecture propre.",
    description:
      "Application de gestion de stock développée intégralement pour KL Logistique : sessions d'inventaire par emplacement, suivi des opérateurs, valorisation financière du stock et import du catalogue.",
    highlights: [
      "Gestion multi-stock et sessions d'inventaire suivies par statut",
      "Valorisation du stock par emplacement et par article",
      "Scan de codes-barres sur Android pour les inventaires",
      "DDD, CQRS, Clean Architecture et pattern repository en trois couches",
      "Développement piloté par les tests (BDD / TDD)",
    ],
    stack: ["PHP", "Symfony", "Doctrine", "PHPUnit"],
    tags: ["backend", "web"],
    images: ["/projects/kl-logistique.webp"],
  },
  {
    slug: "la-savoureuse",
    title: "La Savoureuse",
    featured: true,
    period: "2024 — aujourd'hui",
    status: "production",
    context: "Club sportif — responsable informatique",
    tagline: "La plateforme d'un club multi-sports : blog, forum, galerie, tournoi national.",
    description:
      "Site du club La Savoureuse de Châtenois-les-Forges, entièrement repensé. Il gère trois sections (Tennis de Table, Basket, Multi-Sports) : le contenu s'adapte à la section choisie, et chaque section a ses propres articles, horaires, forum et gestionnaires.",
    highlights: [
      "Système de rôles : admin, gérant de section, rédacteur, membre",
      "Blog avec éditeur riche, images compressées en WebP, likes et commentaires",
      "Forum par section, galerie générée automatiquement depuis les articles",
      "Horaires récurrents avec exceptions, page du tournoi national",
      "Panneau d'administration, emails transactionnels, PWA",
    ],
    stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind", "Resend", "Vercel"],
    tags: ["web", "backend"],
    links: { site: "https://www.la-savoureuse-clf.com" },
    images: [
      "/projects/la-savoureuse-1.webp",
      "/projects/la-savoureuse-2.webp",
      "/projects/la-savoureuse-3.webp",
      "/projects/la-savoureuse-4.webp",
    ],
  },
  {
    slug: "m-studio-print",
    title: "M Studio Print",
    featured: true,
    period: "2025 — 2026",
    status: "production",
    context: "Client — freelance",
    tagline: "Un e-commerce d'objets imprimés en 3D, personnalisables sur mesure.",
    description:
      "Boutique en ligne complète : catalogue, panier, paiement sécurisé, suivi des commandes. Les clients peuvent échanger en temps réel avec l'atelier pour leurs demandes sur mesure.",
    highlights: [
      "Messagerie en temps réel client ↔ atelier",
      "Paiement PayPal",
      "Espaces admin et préparateur de commandes",
      "Tests end-to-end avec Playwright",
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind", "Playwright"],
    tags: ["web", "backend"],
    images: [
      "/projects/m-studio-print-accueil.webp",
      "/projects/m-studio-print-phares.webp",
      "/projects/m-studio-print-catalogue.webp",
      "/projects/m-studio-print-produit.webp",
    ],
  },
  {
    slug: "db-vtc-comtois",
    title: "DB-VTC-COMTOIS",
    featured: true,
    period: "2023 — refonte 2026",
    status: "production",
    context: "Client — mon tout premier projet",
    tagline: "Le site d'un chauffeur VTC, avec estimation du tarif en temps réel.",
    description:
      "Mon premier projet, fait en 2023 pour l'activité VTC de mon père autour de Belfort, et entièrement refondu en 2026. Le calculateur de tarif s'appuie sur Google Maps : autocomplétion des adresses, itinéraire, majoration de nuit, puis demande de réservation envoyée par email.",
    highlights: [
      "Calculateur de tarif avec l'API Google Maps",
      "Appels à l'API optimisés",
      "Réservation envoyée par email (PHP)",
      "Refonte 2026 : design, SEO et accessibilité",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Google Maps API"],
    tags: ["web"],
    links: { site: "https://db-vtc-belfort.fr" },
    images: [
      "/projects/db-vtc-comtois.webp",
      "/projects/db-vtc-comtois-2.webp",
      "/projects/db-vtc-comtois-4.webp",
      "/projects/db-vtc-comtois-3.webp",
      "/projects/db-vtc-comtois-5.webp",
    ],
  },
  {
    slug: "cashless",
    title: "Cashless",
    featured: true,
    period: "2026",
    context: "Projet perso — pour mon asso sportive",
    tagline: "Le paiement sans espèces pour les événements d'une association.",
    description:
      "Application pensée pour les événements de mon association sportive : les participants rechargent un solde lié à un QR code, les bénévoles encaissent depuis une caisse sur téléphone, et les organisateurs suivent tout depuis un tableau de bord.",
    highlights: [
      "Caisse mobile : scan QR, pavé numérique, connexion par PIN",
      "Recharges, historique et annulations",
      "Invitations du staff par email",
      "Tableau de bord avec statistiques",
    ],
    stack: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL (Neon)", "Resend"],
    tags: ["web", "backend"],
  },
  {
    slug: "publih-corteva",
    title: "Publih-Corteva",
    featured: false,
    period: "2025 — 2026",
    context: "Client — freelance",
    tagline: "Module de facturation intégré à un logiciel existant.",
    description: "Implémentation à la demande du client d'un module de facturation.",
    highlights: ["Gestion des paiements de commandes", "Filtres et suivi payé / non payé", "Export PDF"],
    stack: ["Web"],
    tags: ["web", "backend"],
  },
  {
    slug: "inmemorium",
    title: "Inmemorium",
    featured: false,
    period: "2025 — 2026",
    context: "Client — freelance",
    tagline: "Traduction par IA des contenus écrits par les utilisateurs.",
    description:
      "Implémentation à la demande du client : des boutons de traduction qui traduisent par IA les textes saisis par les utilisateurs, dans la langue choisie par le lecteur.",
    highlights: ["Traduction par IA du contenu utilisateur", "Bouton de traduction et choix de la langue"],
    stack: ["IA", "Web"],
    tags: ["web", "ia"],
  },
  {
    slug: "sanomax-solution",
    title: "Sanomax Solution",
    featured: false,
    period: "2025",
    status: "production",
    context: "Client — freelance",
    tagline: "Site vitrine d'une entreprise de dératisation en PACA.",
    description: "Mise en avant des services et formulaire de contact optimisé pour générer des demandes.",
    highlights: ["Formulaire de contact orienté leads", "SEO local"],
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    tags: ["web"],
    links: { site: "https://sanomaxsolution.fr" },
    images: ["/projects/sanomax-solution.webp"],
  },
  {
    slug: "hopinion",
    title: "Hopinion",
    featured: false,
    period: "2026",
    context: "Projet perso",
    tagline: "Noter ses bières entre amis.",
    description: "Application sociale de notation de bières : fiches, notes, classements, statistiques et galerie des dégustations.",
    highlights: ["Top 10 et leaderboard", "Statistiques visuelles", "Profils et galerie photo"],
    stack: ["React", "TypeScript", "Supabase", "Recharts"],
    tags: ["web"],
  },
  {
    slug: "symfony-auth-starter",
    title: "Symfony Auth Starter",
    featured: false,
    period: "2026",
    context: "Projet perso",
    tagline: "Une base Symfony 7 prête à l'emploi, en DDD.",
    description: "Socle d'authentification réutilisable, organisé en DDD avec séparation Write / Read, use cases métier et adapters, Symfony confiné à l'infrastructure.",
    highlights: ["DDD et CQRS", "Symfony uniquement dans l'infrastructure", "Couverture de tests complète"],
    stack: ["PHP 8.2", "Symfony 7", "Doctrine", "Docker"],
    tags: ["backend"],
  },
  {
    slug: "nb-digital",
    title: "NB Digital",
    featured: false,
    period: "2026",
    context: "Mon activité",
    tagline: "Le site vitrine de mon activité de développeur freelance.",
    description: "Site one-page qui présente mes offres de création de sites et d'applications.",
    highlights: ["Animations Framer Motion", "One-page responsive"],
    stack: ["React", "Vite", "Framer Motion"],
    tags: ["web"],
  },
];
