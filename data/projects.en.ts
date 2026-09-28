// Traductions anglaises du contenu. Les clés reprennent les slugs de data/projects.ts.
// data/content.ts vérifie au chargement qu'aucun projet ni aucune expérience n'est oublié.

export type ProjectText = {
  period: string;
  context: string;
  tagline: string;
  description: string;
  highlights: string[];
};

export type ExperienceText = {
  period: string;
  title: string;
  place: string;
  description?: string;
  highlights?: string[];
};

export const profileEn = {
  role: "Software developer",
  focus: ["Full-stack", "Backend", "AI"],
  status: "Open to apprenticeship",
  alternance: {
    start: "January 2027",
    rhythm: "3\u00a0weeks at the company\u00a0/ 1\u00a0week at school",
    duration: "2 years",
  },
  languages: ["French (native)", "English (C1)", "Spanish (B1)"],
};

export const skillCategoriesEn: Record<string, string> = {
  Langages: "Languages",
  Frameworks: "Frameworks",
  Architecture: "Architecture",
  "IA & LLM": "AI & LLM",
  "Outils & infra": "Tools & infra",
};

// Même ordre que `experiences` dans data/projects.ts
export const experiencesEn: ExperienceText[] = [
  {
    period: "2025 — present",
    title: "Student — 42 Next",
    place: "42 Mulhouse",
    description:
      "Core curriculum based on peer learning and peer evaluation, with no classes or teachers. Algorithms in C, Rust and Python, concurrency, AI systems, Docker, TCP/IP networking. Furthest ahead in my cohort.",
  },
  {
    period: "2025 — present",
    title: "Freelance web developer",
    place: "Self-employed",
    description: "Business applications and websites for clients: KL Studio Logistiques, Publih-Corteva, Inmemorium, M Studio Print, Sanomax Solution.",
  },
  {
    period: "Mar. — Jul. 2025",
    title: "Full-stack developer intern",
    place: "Qizuna",
    highlights: [
      "LBM (Le Bulletin Municipal), built with Symfony",
      "Score Story, a mobile app built with Expo / React Native",
      "Business logic structured with DDD, CQRS, SOLID and TDD, guided by a technical mentor",
    ],
  },
  {
    period: "2024 — present",
    title: "IT lead",
    place: "La Savoureuse — Châtenois-les-Forges",
    description: "Design, development and maintenance of the multi-sport club's website.",
  },
  { period: "2024 — 2025", title: "First year of computer science", place: "Mulhouse" },
  { period: "2023", title: "French baccalaureate (Maths, English)", place: "Lycée Condorcet — Belfort" },
];

export const projectsEn: Record<string, ProjectText> = {
  "ft-transcendence": {
    period: "Sept. 2026 — ongoing",
    context: "Final project of the 42 core curriculum — team project",
    tagline: "A real-time multiplayer UNO, built like a real platform.",
    description:
      "The capstone of the core curriculum: a full web application around an online multiplayer UNO, with accounts, friends, chat and real-time games. Microservice architecture behind a gateway, built as a team with a real Git workflow (branches, pull requests, reviews).",
    highlights: [
      "Microservices: auth, user, game, chat, gateway",
      "JWT authentication, Prisma schema and PostgreSQL migrations",
      "Types shared between front and back end (WebSocket events, game, users)",
      "Fully dockerized stack, Docker secrets for the database",
    ],
  },
  "the-answer-protocol": {
    period: "Sept. 2026",
    context: "42 — pair project",
    tagline: "A multiplayer MUD in Rust: one shared world, in real time, over TCP.",
    description:
      "A text-based multiplayer game server implementing the RFC 42TAP protocol. Players explore a persistent world, fight NPCs, pick up items, complete quests, chat and form groups. Every action is visible to other players in real time.",
    highlights: [
      "Async tokio server: one task per client, shared world state",
      "Event broadcasting per room, per group or globally",
      "Terminal client with autocompletion and syntax highlighting",
      "Web client: Axum + WebSocket bridge to the TCP server, interactive map",
    ],
  },
  "agent-smith": {
    period: "Jul. 2026",
    context: "42 — pair project",
    tagline: "An AI agent that reasons, writes code, runs it and fixes its own mistakes.",
    description:
      "An autonomous agent framework that solves coding problems in a Thought → Code → Observation loop. The agent writes Python, runs it in a configurable sandbox and iterates until it finds the solution. Evaluated on MBPP and SWE-bench (real bugs from GitHub repositories, inside Docker containers).",
    highlights: [
      "Tools exposed through the Model Context Protocol (MCP)",
      "Sandboxed execution of generated code",
      "Multiple LLM providers (Groq, OpenRouter, Gemini, OpenAI) with key rotation",
      "Benchmark report on MBPP and SWE-bench",
    ],
  },
  "pac-man": {
    period: "May 2026",
    context: "42 — pair project",
    tagline: "The 1980 classic, cleanly rebuilt in object-oriented Python.",
    description:
      "A remake of the arcade game with a modular engine: autonomous ghost AI, level progression, procedurally generated mazes and strict error handling so the game never crashes.",
    highlights: [
      "Ghost AI with states (chase, flee)",
      "Mazes generated by our own package",
      "Validated JSON configuration, high score table",
      "Strictly typed (mypy) and linted code",
    ],
  },
  "rag-against-the-machine": {
    period: "May — Jun. 2026",
    context: "42",
    tagline: "Ask questions about a codebase and get answers with sources.",
    description:
      "A Retrieval-Augmented Generation system over the vLLM codebase: it indexes the repository, retrieves the relevant code and documentation snippets, then generates the answer with a local LLM. Includes an evaluation of retrieval quality.",
    highlights: [
      "Chunking and indexing of a full repository",
      "Top-k search over code and documentation",
      "Generation with Qwen3-0.6B running locally",
      "Evaluation pipeline on question datasets",
    ],
  },
  "call-me-maybe": {
    period: "Mar. — Apr. 2026",
    context: "42",
    tagline: "100% reliable function calling, even with a 0.6B model.",
    description:
      "From a natural-language sentence, the system outputs a structured function call instead of an answer. Small models often produce invalid JSON: the project uses constrained decoding to guide generation token by token and guarantee schema-compliant output.",
    highlights: [
      "Token-by-token constrained decoding",
      "100% valid, schema-compliant JSON output",
      "Runs on a 0.6-billion-parameter model",
    ],
  },
  inception: {
    period: "Jul. — Aug. 2026",
    context: "42",
    tagline: "A complete infrastructure, container by container, with no prebuilt images.",
    description:
      "An NGINX + WordPress (php-fpm) + MariaDB infrastructure, each service in its own container built from a custom Dockerfile on Debian, orchestrated with Docker Compose.",
    highlights: [
      "NGINX as the only entry point, over TLS 1.2 / 1.3",
      "Docker secrets for passwords",
      "Isolated bridge network, named volumes",
      "User and developer documentation",
    ],
  },
  "fly-in": {
    period: "Apr. 2026",
    context: "42",
    tagline: "Drone routing under constraints, with a visual simulation.",
    description: "Move a fleet of drones across a network of zones in as few turns as possible, while respecting zone and link capacities.",
    highlights: ["Weighted Dijkstra and multi-path routing", "Turn-based simulation engine", "Pygame visualizer"],
  },
  "a-maze-ing": {
    period: "Feb. 2026",
    context: "42 — pair project",
    tagline: "A maze generator and solver, published as a Python package.",
    description:
      "Generates perfect mazes or mazes with loops, solves them with a shortest path and exports them as text or visuals. The generator is a reusable package (later used in Pac-Man).",
    highlights: ["Seeded procedural generation", "Shortest path", "Reusable pip package"],
  },
  codexion: {
    period: "Feb. — Mar. 2026",
    context: "42",
    tagline: "The dining philosophers problem, with developers and USB keys.",
    description: "A multithreaded simulation with no deadlock or starvation: developers share limited resources to compile.",
    highlights: ["POSIX threads and mutexes", "FIFO and EDF scheduling", "Starvation detection and thread-safe logs"],
  },
  "push-swap": {
    period: "Jan. 2026",
    context: "42",
    tagline: "Sort two stacks in as few operations as possible.",
    description: "Sorting algorithms adapted to the input size, under a very limited set of operations.",
    highlights: ["Several strategies depending on size", "Move count optimization"],
  },
  netpractice: {
    period: "Jun. 2026",
    context: "42",
    tagline: "Fix networks: IP addressing, subnet masks and routing.",
    description: "Ten network configuration levels of increasing difficulty, validated in a live evaluation without tools.",
    highlights: ["IPv4 addressing and subnets", "Routing tables"],
  },
  "piscine-python": {
    period: "Jan. — Feb. 2026",
    context: "42",
    tagline: "Eleven intensive Python modules.",
    description: "From the basics to object-oriented programming, typing and ecosystem tooling.",
    highlights: ["Modules 00 to 10"],
  },
  "piscine-c": {
    period: "2025",
    context: "42 — selection",
    tagline: "42's selection month, in C and Shell.",
    description: "Four intensive weeks to get into 42: C, Shell and team projects (rushes).",
    highlights: ["C00 to C09, Shell00 and Shell01", "Team rushes"],
  },
  "kl-logistique": {
    period: "2025 — 2026",
    context: "Client — freelance",
    tagline: "Stock management software, built from scratch with a clean architecture.",
    description:
      "A stock management application built end to end for KL Studio Logistiques: inventory sessions per location, operator tracking, financial stock valuation and catalog import.",
    highlights: [
      "Multi-stock management and inventory sessions tracked by status",
      "Stock valuation per location and per item",
      "Barcode scanning on Android for inventories",
      "DDD, CQRS, Clean Architecture and a three-layer repository pattern",
      "Test-driven development (BDD / TDD)",
    ],
  },
  "la-savoureuse": {
    period: "2024 — present",
    context: "Sports club — IT lead",
    tagline: "A multi-sport club platform: blog, forum, gallery, national tournament.",
    description:
      "The fully redesigned website of La Savoureuse, a sports club in Châtenois-les-Forges. It handles three sections (Table Tennis, Basketball, Multi-Sports): content adapts to the selected section, and each section has its own articles, schedules, forum and managers.",
    highlights: [
      "Role system: admin, section manager, editor, member",
      "Blog with a rich-text editor, WebP-compressed images, likes and comments",
      "Forum per section, gallery generated automatically from articles",
      "Recurring schedules with exceptions, national tournament page",
      "Admin panel, transactional emails, PWA",
    ],
  },
  "m-studio-print": {
    period: "2025 — 2026",
    context: "Client — freelance",
    tagline: "An e-commerce store for custom 3D-printed objects.",
    description:
      "A complete online store: catalog, cart, secure payment, order tracking. Customers can chat in real time with the workshop about custom requests.",
    highlights: [
      "Real-time messaging between customers and the workshop",
      "PayPal payment",
      "Admin and order-preparation areas",
      "End-to-end tests with Playwright",
    ],
  },
  "db-vtc-comtois": {
    period: "2023 — redesigned 2026",
    context: "Client — my very first project",
    tagline: "A private driver's website, with real-time fare estimates.",
    description:
      "My first project, built in 2023 for my father's private driver business near Belfort, and fully redesigned in 2026. The fare calculator relies on Google Maps: address autocomplete, route, night surcharge, then a booking request sent by email.",
    highlights: [
      "Fare calculator using the Google Maps API",
      "Optimized API calls",
      "Booking requests sent by email (PHP)",
      "2026 redesign: design, SEO and accessibility",
    ],
  },
  kashless: {
    period: "2026",
    context: "Side project — built for non-profits",
    tagline: "Cashless payments, redesigned for what non-profits actually need.",
    description:
      "A cashless payment solution for non-profit events, with no fees and no expensive hardware: attendees get a top-up QR wristband, volunteers take payments on a touch checkout, and the organization follows everything in real time.",
    highlights: [
      "Free for non-profits, up and running in minutes",
      "Touch checkout by item category, payment by scanning the QR wristband",
      "Real-time dashboard: balances, credits, debits, sales per item",
      "Volunteer and attendee management, email invitations, CSV export",
    ],
  },
  "publih-corteva": {
    period: "2025 — 2026",
    context: "Client — freelance",
    tagline: "An invoicing module built into existing software.",
    description: "An invoicing module implemented at the client's request.",
    highlights: ["Order payment management", "Filters and paid / unpaid tracking", "PDF export"],
  },
  inmemorium: {
    period: "2025 — 2026",
    context: "Client — freelance",
    tagline: "AI translation of user-written content.",
    description:
      "Implemented at the client's request: translation buttons that use AI to translate text written by users into the reader's chosen language.",
    highlights: ["AI translation of user content", "Translate button and language picker"],
  },
  "sanomax-solution": {
    period: "2025",
    context: "Client — freelance",
    tagline: "A showcase website for a pest control company in southern France.",
    description: "Presents the company's services, with a contact form optimized to generate leads.",
    highlights: ["Lead-focused contact form", "Local SEO"],
  },
  hopinion: {
    period: "2026",
    context: "Side project",
    tagline: "Rate beers with your friends.",
    description: "A social beer-rating app: beer pages, ratings, rankings, statistics and a tasting gallery.",
    highlights: ["Top 10 and leaderboard", "Visual statistics", "Profiles and photo gallery"],
  },
  "symfony-auth-starter": {
    period: "2026",
    context: "Side project",
    tagline: "A ready-to-use Symfony 7 foundation, built with DDD.",
    description:
      "A reusable authentication foundation organized with DDD: Write / Read separation, business use cases and adapters, with Symfony confined to the infrastructure layer.",
    highlights: ["DDD and CQRS", "Symfony only in the infrastructure layer", "Full test coverage"],
  },
  "nb-digital": {
    period: "2026",
    context: "My business",
    tagline: "The showcase website for my freelance developer business.",
    description: "A one-page site presenting my website and application development services.",
    highlights: ["Framer Motion animations", "Responsive one-page layout"],
  },
};
