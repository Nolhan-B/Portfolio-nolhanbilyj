// Textes de l'interface. La version anglaise est typée sur la française : une clé oubliée ne compile pas.

type TitlePart = { text: string; grain?: boolean };

const fr = {
  meta: {
    title: "Nolhan Bilyj — Développeur logiciel",
    description:
      "Développeur logiciel full-stack, backend et IA. Étudiant à 42 Mulhouse, en recherche d'alternance dès janvier 2027. Projets 42, projets clients et parcours.",
  },
  nav: {
    about: "Parcours",
    projects42: "Projets 42",
    work: "Réalisations",
    stack: "Stack",
    contact: "Contact",
    menu: "Menu",
    close: "Fermer",
    contactMe: "Me contacter",
    cv: "CV (PDF)",
    langLabel: "Langue",
    switchTo: "Passer en anglais",
  },
  theme: { dark: "Sombre", light: "Clair", toDark: "Passer en mode sombre", toLight: "Passer en mode clair" },
  hero: {
    student: "Étudiant à 42 Mulhouse",
    scroll: "Scroll ↓",
    intro:
      "Je conçois des applications de bout en bout, du modèle métier jusqu'à l'interface. Étudiant à 42 Mulhouse et freelance depuis 2025, je cherche une alternance en développement full-stack, backend ou IA.",
    alternance: "Alternance",
    from: "Dès",
    rhythmShort: "3 sem. entreprise · 1 sem. école",
    seeProjects: "Voir les projets ↓",
    cv: "CV (PDF) ↗",
  },
  about: {
    label: "(02) Qui suis-je",
    title: [{ text: "Parcours" }] as TitlePart[],
    lead: (age: number) => `J'ai ${age} ans, je vis près de Belfort, et je suis développeur logiciel en formation à 42 Mulhouse.`,
    paragraphs: [
      "Je suis arrivé au code après une réorientation : ni STAPS ni le BUT MMI ne me correspondaient. Le déclic est venu en créant le site VTC de mon père. Une première école et un stage m'ont ensuite appris l'architecture logicielle (DDD, CQRS, TDD).",
      "Aujourd'hui, je suis le plus avancé de ma promo à 42 et je travaille en freelance à côté. Hors code : tennis de table en compétition (classé 12), musculation, powerlifting et vélo.",
    ],
  },
  p42: {
    label: "(03) Tronc commun 42 Next — École 42 Mulhouse",
    title: [{ text: "Projets" }, { text: "42", grain: true }] as TitlePart[],
    intro:
      "Pas de cours, pas de prof : du peer learning, de la peer evaluation et des projets à rendre. C'est là que j'ai appris les systèmes, le réseau, la concurrence et l'IA.",
    inProgress: "En cours",
    github: "Voir sur GitHub ↗",
    also: "Aussi à 42",
    rest: "Et le reste",
    allGithub: ["Tout mon", "GitHub"] as [string, string],
    allGithubText: "Tous les projets, les piscines et ce qui est en cours.",
    tags: { web: "Web", backend: "Backend", ia: "IA", systemes: "Systèmes", mobile: "Mobile", devops: "DevOps" } as Record<string, string>,
  },
  work: {
    label: "(04) Clients, freelance & projets perso",
    title: [{ text: "Réalisa" }, { text: "tions", grain: true }] as TitlePart[],
    titleJoined: true,
    intro:
      "Des projets en production, pour de vrais utilisateurs : un logiciel de gestion de stock, un e-commerce, le site de mon club, des sites vitrines.",
    visit: "Voir le site ↗",
    also: "Et aussi",
  },
  gallery: {
    screenshot: (n: number, title: string) => `Capture ${n} de ${title}`,
    show: (n: number, title: string) => `Afficher la capture ${n} de ${title}`,
  },
  stack: { label: "(05) Outils du quotidien", title: [{ text: "Stack" }] as TitlePart[] },
  contact: {
    label: "(06) Contact",
    title: [{ text: "Une alternance ?" }, { text: "Parlons-en.", grain: true }] as TitlePart[],
    start: "Début",
    rhythm: "Rythme",
    duration: "Durée",
    byEmail: "Par email",
    orForm: "Ou via ce formulaire",
    phone: "Téléphone",
    cvValue: "PDF ↓",
    backToTop: "Retour en haut ↑",
  },
  form: {
    subject: "Sujet",
    subjects: { alternance: "Alternance", freelance: "Projet freelance", autre: "Autre" } as Record<string, string>,
    name: "Nom / entreprise",
    email: "Email",
    message: "Message",
    send: "Envoyer le message →",
    sending: "Envoi…",
    sentTitle: "Message envoyé.",
    sentText: "Merci ! Je te réponds au plus vite, en général sous 24 à 48 heures.",
    errors: {
      required: "Tous les champs sont requis.",
      email: "Adresse email invalide.",
      tooLong: "Message trop long.",
      failed: "L'envoi a échoué.",
    } as Record<string, string>,
    errorHint: "Tu peux aussi m'écrire directement par email.",
  },
};

export type UI = typeof fr;

const en: UI = {
  meta: {
    title: "Nolhan Bilyj — Software developer",
    description:
      "Full-stack, backend and AI software developer. Student at 42 Mulhouse, looking for an apprenticeship starting January 2027. 42 projects, client work and background.",
  },
  nav: {
    about: "About",
    projects42: "42 Projects",
    work: "Work",
    stack: "Stack",
    contact: "Contact",
    menu: "Menu",
    close: "Close",
    contactMe: "Contact me",
    cv: "CV (PDF · FR)",
    langLabel: "Language",
    switchTo: "Switch to French",
  },
  theme: { dark: "Dark", light: "Light", toDark: "Switch to dark mode", toLight: "Switch to light mode" },
  hero: {
    student: "Student at 42 Mulhouse",
    scroll: "Scroll ↓",
    intro:
      "I build applications end to end, from the domain model to the interface. A student at 42 Mulhouse and a freelancer since 2025, I'm looking for an apprenticeship in full-stack, backend or AI development.",
    alternance: "Apprenticeship",
    from: "From",
    rhythmShort: "3 wks company · 1 wk school",
    seeProjects: "See projects ↓",
    cv: "CV (PDF · FR) ↗",
  },
  about: {
    label: "(02) About me",
    title: [{ text: "Background" }],
    lead: (age: number) => `I'm ${age}, I live near Belfort, France, and I'm a software developer in training at 42 Mulhouse.`,
    paragraphs: [
      "I came to code after changing paths: neither sports science nor a digital media degree was right for me. It clicked when I built my father's private driver website. A first school and an internship then taught me software architecture (DDD, CQRS, TDD).",
      "Today I'm the furthest ahead in my cohort at 42, and I freelance on the side. Away from code: competitive table tennis, weightlifting, powerlifting and cycling.",
    ],
  },
  p42: {
    label: "(03) 42 Next core curriculum — 42 Mulhouse",
    title: [{ text: "42", grain: true }, { text: "Projects" }],
    intro:
      "No classes, no teachers: peer learning, peer evaluation and projects to deliver. That's where I learned systems, networking, concurrency and AI.",
    inProgress: "In progress",
    github: "View on GitHub ↗",
    also: "Also at 42",
    rest: "And the rest",
    allGithub: ["All on", "GitHub"],
    allGithubText: "Every project, the piscines and what's in progress.",
    tags: { web: "Web", backend: "Backend", ia: "AI", systemes: "Systems", mobile: "Mobile", devops: "DevOps" },
  },
  work: {
    label: "(04) Clients, freelance & side projects",
    title: [{ text: "Selected" }, { text: "work", grain: true }],
    titleJoined: false,
    intro:
      "Projects in production, used by real people: stock management software, an e-commerce store, my club's website and showcase sites.",
    visit: "Visit site ↗",
    also: "Also",
  },
  gallery: {
    screenshot: (n, title) => `Screenshot ${n} of ${title}`,
    show: (n, title) => `Show screenshot ${n} of ${title}`,
  },
  stack: { label: "(05) Everyday tools", title: [{ text: "Stack" }] },
  contact: {
    label: "(06) Contact",
    title: [{ text: "Apprenticeship?" }, { text: "Let's talk.", grain: true }],
    start: "Start",
    rhythm: "Schedule",
    duration: "Duration",
    byEmail: "By email",
    orForm: "Or use this form",
    phone: "Phone",
    cvValue: "PDF (FR) ↓",
    backToTop: "Back to top ↑",
  },
  form: {
    subject: "Subject",
    subjects: { alternance: "Apprenticeship", freelance: "Freelance project", autre: "Other" },
    name: "Name / company",
    email: "Email",
    message: "Message",
    send: "Send message →",
    sending: "Sending…",
    sentTitle: "Message sent.",
    sentText: "Thanks! I'll get back to you soon, usually within 24 to 48 hours.",
    errors: {
      required: "All fields are required.",
      email: "Invalid email address.",
      tooLong: "Message too long.",
      failed: "Sending failed.",
    },
    errorHint: "You can also email me directly.",
  },
};

export const ui = { fr, en };
