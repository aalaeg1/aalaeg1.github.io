const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const roleTranslations = {
  fr: [
    "Ingénieur junior Data & BI",
    "Diplômé ingénieur informatique MIAGE",
    "Master IA économie numérique & gestion",
  ],
  en: [
    "Junior Data & BI Engineer",
    "Computer Engineering graduate",
    "Master's in AI for digital economy & management",
  ],
};

const certificates = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "Dec 2025",
    category: "data",
    file: "assets/certificates/Coursera QWBOZM94HLC8 (1).pdf",
  },
  {
    title: "Advanced Spring Cloud Microservices & Deployment with Docker",
    issuer: "Packt",
    date: "Dec 2025",
    category: "web",
    file: "assets/certificates/Coursera RM0E2DAA2170.pdf",
  },
  {
    title: "Django Web Framework",
    issuer: "Meta",
    date: "Sep 2025",
    category: "web",
    file: "assets/certificates/Coursera WTSY8BL4CXKP.pdf",
  },
  {
    title: "React Native",
    issuer: "Meta",
    date: "Apr 2025",
    category: "web",
    file: "assets/certificates/Coursera M60Z4ZICAEDH.pdf",
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "Jan 2025",
    category: "web",
    file: "assets/certificates/Coursera IR0F49ATU27M.pdf",
  },
  {
    title: "Using Python to Access Web Data",
    issuer: "University of Michigan",
    date: "Jan 2025",
    category: "data",
    file: "assets/certificates/Coursera EIT13U2PSYZW.pdf",
  },
  {
    title: "Programming for Everybody",
    issuer: "University of Michigan",
    date: "Jun 2024",
    category: "data",
    file: "assets/certificates/Coursera TXVQEG7F9JQH.pdf",
  },
  {
    title: "The Unix Workbench",
    issuer: "Johns Hopkins University",
    date: "May 2024",
    category: "cloud",
    file: "assets/certificates/Coursera UP3S4SXPQMYN.pdf",
  },
  {
    title: "Virtual Networks in Azure",
    issuer: "Whizlabs",
    date: "Mar 2025",
    category: "cloud",
    file: "assets/certificates/Coursera YJJ70A6B9Y2V.pdf",
  },
  {
    title: "Web Design for Everybody Capstone",
    issuer: "University of Michigan",
    date: "Jan 2024",
    category: "web",
    file: "assets/certificates/Coursera UXS3H9TDCGHW.pdf",
  },
  {
    title: "Interactivity with JavaScript",
    issuer: "University of Michigan",
    date: "Jan 2024",
    category: "web",
    file: "assets/certificates/Coursera B8LAKRPXBBA4.pdf",
  },
  {
    title: "Advanced Styling with Responsive Design",
    issuer: "University of Michigan",
    date: "Jan 2024",
    category: "web",
    file: "assets/certificates/Coursera 7MVXHYX5L5XB.pdf",
  },
  {
    title: "Introduction à la programmation orientée objet en C++",
    issuer: "EPFL",
    date: "Dec 2023",
    category: "web",
    file: "assets/certificates/Coursera BS358L3M859C.pdf",
  },
  {
    title: "La recherche documentaire",
    issuer: "Ecole Polytechnique",
    date: "May 2024",
    category: "data",
    file: "assets/certificates/Coursera YFRFTC4ZHR2L.pdf",
  },
];

const translationPairs = [
  ["Profil", "Profile"],
  ["Expérience", "Experience"],
  ["Projets", "Projects"],
  ["Compétences", "Skills"],
  ["Certificats", "Certificates"],
  ["Formation", "Education"],
  ["Bonjour, je suis", "Hi, I'm"],
  ["Me contacter", "Contact me"],
  ["Voir le CV", "View resume"],
  [
    "Diplômé en ingénierie informatique, filière MIAGE, et en master IA pour l'économie numérique et gestion. Profil orienté Data & BI, avec un focus sur les pipelines de données, la modélisation décisionnelle, la préparation des données et les tableaux de bord utiles au pilotage métier.",
    "Computer engineering graduate , with a master's degree in AI for digital economy and management. Data & BI oriented profile, focused on data pipelines, decision-oriented modeling, data preparation and dashboards that support business performance.",
  ],
  ["Profil Data & BI orienté impact métier.", "Data & BI profile focused on business impact."],
  [
    "Je travaille principalement sur la chaîne Data & BI: collecte et préparation des données, pipelines ETL, structuration de data warehouse, indicateurs KPI et dashboards pour transformer les données en supports de décision.",
    "I mainly work across the Data & BI chain: data collection and preparation, ETL pipelines, data warehouse structuring, KPI indicators and dashboards that turn data into decision support.",
  ],
  [
    "Mon parcours combine un diplôme d'ingénieur en informatique, filière MIAGE, et un master en intelligence artificielle pour l'économie numérique et gestion, avec des expériences concrètes en industrie, BI, microservices et applications internes. Je recherche une opportunité professionnelle où je peux progresser sur des sujets data utiles et mesurables.",
    "My background combines a computer engineering degree and a master's degree in artificial intelligence for digital economy and management, with hands-on experience in industry, BI, microservices and internal applications. I am looking for a professional opportunity where I can grow on useful and measurable data projects.",
  ],
  ["expériences en entreprise", "company experiences"],
  ["certificats Coursera", "Coursera certificates"],
  ["projets data, IA & SI", "data, AI & IS projects"],
  ["Expériences avec des livrables concrets.", "Experience with concrete deliverables."],
  ["Fév. - Août 2026", "Feb - Aug 2026"],
  [
    "Projet PFE — Système décisionnel intelligent pour la performance industrielle",
    "Final-year project - Intelligent decision-support system for industrial performance",
  ],
  [
    "Conception et mise en place d'une solution décisionnelle intelligente pour le pilotage de la performance industrielle, couvrant la collecte, la validation, l'analyse et la supervision des données de production.",
    "Design and implementation of an intelligent decision-support solution for industrial performance management, covering the collection, validation, analysis and supervision of production data.",
  ],
  [
    "Développement d'une plateforme web multi-UAP pour la saisie, la validation et l'analyse des données de production, d'arrêts, d'objectifs et de défauts qualité.",
    "Development of a multi-UAP web platform for entering, validating and analyzing production, downtime, objectives and quality defect data.",
  ],
  [
    "Gestion des rôles utilisateurs et création de dashboards adaptés aux différents profils de consultation et de pilotage.",
    "User role management and dashboards tailored to different consultation and management profiles.",
  ],
  [
    "Mise en place d'un pipeline Data Engineering pour nettoyer, standardiser et centraliser les données issues d'Excel et Power BI dans DuckDB.",
    "Implementation of a Data Engineering pipeline to clean, standardize and centralize data from Excel and Power BI into DuckDB.",
  ],
  [
    "Développement d'une application Streamlit de supervision avec visualisations interactives et indicateurs de suivi.",
    "Development of a Streamlit supervision app with interactive visualizations and monitoring indicators.",
  ],
  [
    "Intégration de modèles Machine Learning pour la prédiction de la production, du risque de faible performance et des défauts qualité.",
    "Integration of machine learning models to predict production, low-performance risk and quality defects.",
  ],
  [
    "Maintenance, amélioration et intégration des rapports Power BI existants dans l'écosystème du projet.",
    "Maintenance, improvement and integration of existing Power BI reports into the project ecosystem.",
  ],
  [
    "Technologies: Python, Django, MySQL/MariaDB, DuckDB, Power BI, DAX, Power Query, Streamlit, Plotly, pandas, Airflow, Docker, scikit-learn, Groq API, HTML, CSS, JavaScript.",
    "Technologies: Python, Django, MySQL/MariaDB, DuckDB, Power BI, DAX, Power Query, Streamlit, Plotly, pandas, Airflow, Docker, scikit-learn, Groq API, HTML, CSS, JavaScript.",
  ],
  ["Juil. - Sept. 2025", "Jul - Sep 2025"],
  ["Stage de perfectionnement", "Advanced internship"],
  [
    "Développement d'une plateforme pédagogique interactive avec une architecture orientée services, intégrant des modules backend, frontend, authentification et déploiement conteneurisé.",
    "Development of an interactive learning platform with a service-oriented architecture, integrating backend, frontend, authentication and containerized deployment modules.",
  ],
  [
    "Développement de services API avec FastAPI et intégration avec une interface web MERN.",
    "Development of API services with FastAPI and integration with a MERN web interface.",
  ],
  [
    "Mise en place de l'authentification JWT, structuration des routes et documentation/test avec Postman.",
    "Implementation of JWT authentication, route structuring and documentation/testing with Postman.",
  ],
  ["Conteneurisation avec Docker et utilisation de Git pour le suivi des versions.", "Containerization with Docker and Git-based version tracking."],
  [
    "Déploiement et expérimentation dans un environnement Proxmox, avec intégration de fonctionnalités NLP.",
    "Deployment and experimentation in a Proxmox environment, with integration of NLP features.",
  ],
  ["Juil. - Août 2024", "Jul - Aug 2024"],
  ["Stage d'initiation", "Introductory internship"],
  [
    "Réalisation d'une application web interne pour organiser les informations du parc informatique et faciliter le suivi des équipements réseau.",
    "Development of an internal web application to organize IT asset information and simplify network equipment tracking.",
  ],
  ["Conception de la base MySQL pour gérer équipements, affectations et informations de suivi.", "Design of a MySQL database to manage equipment, assignments and tracking information."],
  ["Développement des fonctionnalités CRUD avec Python Flask et interfaces Bootstrap.", "Development of CRUD features with Python Flask and Bootstrap interfaces."],
  [
    "Structuration des pages de consultation, ajout, modification et recherche pour simplifier le travail quotidien.",
    "Structuring of viewing, creation, editing and search pages to simplify daily work.",
  ],
  [
    "Renforcement des bases en développement web, modélisation de données et gestion d'application interne.",
    "Strengthening of fundamentals in web development, data modeling and internal application management.",
  ],
  ["Des systèmes complets, de la donnée à l'interface.", "Complete systems, from data to interface."],
  ["Oct. - Déc. 2025", "Oct - Dec 2025"],
  ["IA logicielle", "AI Software"],
  ["Jumeau cognitif pour développeurs", "Cognitive Twin for Developers"],
  [
    "Assistant IA basé sur un jumeau cognitif pour l'analyse de code, l'apprentissage du style développeur, la génération automatisée, le debug intelligent et la production de diagrammes UML.",
    "AI assistant based on a cognitive twin for code analysis, developer style learning, automated generation, intelligent debugging and UML diagram production.",
  ],
  ["Déc. 2025", "Dec 2025"],
  ["Pipeline Big Data temps réel", "Real-Time Big Data Pipeline"],
  [
    "Pipeline temps réel pour l'analyse des transactions e-commerce: Kafka vers Spark Streaming, Parquet et Spark SQL.",
    "Real-time pipeline for e-commerce transaction analysis: Kafka to Spark Streaming, Parquet and Spark SQL.",
  ],
  ["Oct. - Nov. 2025", "Oct - Nov 2025"],
  ["Microservices", "Microservices"],
  ["Gestion commerciale J2EE", "J2EE Commercial Management"],
  ["Système de gestion des ventes, stocks et prix avec architecture microservices.", "Sales, stock and price management system with a microservices architecture."],
  ["Sept. - Oct. 2025", "Sep - Oct 2025"],
  ["Intégration de données BI", "BI Data Integration"],
  ["Pipeline ETL et tableaux de bord Power BI pour l'analyse et le suivi des données.", "ETL pipeline and Power BI dashboards for data analysis and monitoring."],
  ["Gestion de projet IA", "AI Project Management"],
  ["BrighterFlow - Gestion de projet d'entreprise", "BrighterFlow - Enterprise Project Management"],
  [
    "Plateforme de gestion de projets d'entreprise avec affectation intelligente des tâches par IA, notifications automatisées et dashboards interactifs pour suivre l'avancement.",
    "Enterprise project management platform with AI-based intelligent task assignment, automated notifications and interactive dashboards to track progress.",
  ],
  ["Application mobile", "Mobile App"],
  ["InstaCat - Réseau social pour amoureux des chats", "InstaCat - Social Network for Cat Lovers"],
  [
    "Application mobile de réseau social pour partager des photos de chats, avec groupes de discussion et validation des images par détection d'objets avant publication.",
    "Mobile social network app for sharing cat photos, with chat groups and object detection to validate images before posting.",
  ],
  ["Compétences structurées autour de la Data & BI.", "Skills structured around Data & BI."],
  ["Langages utiles", "Core languages"],
  ["Développement support", "Application development"],
  ["Bases de données", "Databases"],
  ["Outils & système", "Tools & systems"],
  ["Méthodes", "Methods"],
  ["Parcours académique.", "Academic background."],
  ["Diplôme d'ingénieur en informatique", "Computer engineering degree"],
  ["Filière MIAGE, EMSI Tanger", "EMSI, Tangier"],
  ["Master IA pour l'économie numérique et gestion", "Master's in AI for digital economy and management"],
  ["FSJEST, Tanger", "FSJEST, Tangier"],
  ["Licence sciences mathématiques et applications", "Bachelor's degree in mathematical sciences and applications"],
  ["Faculté des Sciences, Tétouan", "Faculty of Sciences, Tetouan"],
  ["Baccalauréat Sciences Physiques", "Baccalaureate in Physical Sciences"],
  ["Mention Très Bien, Lycée Charif Al Idrissi, Tétouan", "Highest honors, Charif Al Idrissi High School, Tetouan"],
  ["Certifications et formations vérifiables.", "Verifiable certifications and training."],
  ["Tous", "All"],
  ["Données", "Data"],
  ["Construisons quelque chose de mesurable.", "Let's build something measurable."],
  [
    "Ouvert aux opportunités en Data, BI et systèmes d'information, avec un intérêt particulier pour les projets où les données servent directement le pilotage métier.",
    "Open to opportunities in Data, BI and information systems, with a particular interest in projects where data directly supports business management.",
  ],
  ["Arabe · Langue maternelle", "Arabic · Native language"],
  ["Français · Avancé", "French · Advanced"],
  ["Anglais · Avancé", "English · Advanced"],
  ["Retour en haut", "Back to top"],
  ["Rechercher", "Search"],
];

const pageMeta = {
  fr: {
    title: "Aalae Goudal | Portfolio Data & BI",
    description:
      "Portfolio d'Aalae Goudal, diplômé en ingénierie informatique MIAGE et en master IA pour l'économie numérique et gestion, orienté Data & BI.",
  },
  en: {
    title: "Aalae Goudal | Data & BI Portfolio",
    description:
      "Portfolio of Aalae Goudal, computer engineering graduate with a master's degree in AI for digital economy and management, focused on Data & BI.",
  },
};

const resumeFiles = {
  fr: "assets/AalaeGoudalCV.pdf",
  en: "assets/AalaeGoudalResume.pdf",
};

const attributeTranslations = {
  fr: [
    [".brand", "aria-label", "Retour à l'accueil"],
    ["#mainNav", "aria-label", "Navigation principale"],
    [".language-switch", "aria-label", "Changer la langue"],
    ["#menuToggle", "aria-label", "Ouvrir le menu"],
    [".social-row", "aria-label", "Liens sociaux"],
    [".portrait-frame img", "alt", "Portrait professionnel d'Aalae Goudal"],
    [".scroll-cue", "aria-label", "Aller au profil"],
    [".filter-row", "aria-label", "Filtres des certificats"],
    ["#certificateSearch", "placeholder", "Rechercher"],
  ],
  en: [
    [".brand", "aria-label", "Back to home"],
    ["#mainNav", "aria-label", "Main navigation"],
    [".language-switch", "aria-label", "Change language"],
    ["#menuToggle", "aria-label", "Open menu"],
    [".social-row", "aria-label", "Social links"],
    [".portrait-frame img", "alt", "Professional portrait of Aalae Goudal"],
    [".scroll-cue", "aria-label", "Go to profile"],
    [".filter-row", "aria-label", "Certificate filters"],
    ["#certificateSearch", "placeholder", "Search"],
  ],
};

const certificateCopy = {
  fr: {
    button: "Ouvrir le certificat",
    empty: "Aucun certificat ne correspond à cette recherche.",
    summaries: {
      data: "Renforce les bases data, Python, recherche ou machine learning.",
      web: "Approfondit le développement web, frontend, backend ou architecture logicielle.",
      cloud: "Couvre les environnements système, réseau, cloud ou outils de production.",
      default: "Certification technique complémentaire.",
    },
  },
  en: {
    button: "Open certificate",
    empty: "No certificate matches this search.",
    summaries: {
      data: "Strengthens data, Python, research or machine learning foundations.",
      web: "Deepens web development, frontend, backend or software architecture skills.",
      cloud: "Covers system, network, cloud or production tooling environments.",
      default: "Additional technical certification.",
    },
  },
};

const certificateMonthTranslations = {
  fr: {
    Jan: "Janv.",
    Mar: "Mars",
    Apr: "Avr.",
    May: "Mai",
    Jun: "Juin",
    Sep: "Sept.",
    Dec: "Déc.",
  },
  en: {
    "Janv.": "Jan",
    Mars: "Mar",
    "Avr.": "Apr",
    Mai: "May",
    Juin: "Jun",
    "Sept.": "Sep",
    "Déc.": "Dec",
  },
};

const typewriter = document.getElementById("typewriter");
const certificateGrid = document.getElementById("certificateGrid");
const certificateSearch = document.getElementById("certificateSearch");
const filterButtons = Array.from(document.querySelectorAll(".filter-btn"));
const languageButtons = Array.from(document.querySelectorAll(".lang-btn"));
let currentLanguage = "fr";
let currentFilter = "all";
let typewriterTimer = 0;

function startTypewriter() {
  window.clearTimeout(typewriterTimer);

  if (!typewriter) {
    return;
  }

  const roles = roleTranslations[currentLanguage] || roleTranslations.fr;
  if (reducedMotion) {
    typewriter.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const role = roles[roleIndex];
    typewriter.textContent = role.slice(0, charIndex);

    if (!deleting && charIndex < role.length) {
      charIndex += 1;
      typewriterTimer = window.setTimeout(tick, 48);
      return;
    }

    if (!deleting && charIndex === role.length) {
      deleting = true;
      typewriterTimer = window.setTimeout(tick, 1450);
      return;
    }

    if (deleting && charIndex > 0) {
      charIndex -= 1;
      typewriterTimer = window.setTimeout(tick, 28);
      return;
    }

    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typewriterTimer = window.setTimeout(tick, 260);
  };

  tick();
}

function normalizeText(value) {
  return value.replace(/\s+/g, " ").trim();
}

function buildTranslationMap(language) {
  const targetIndex = language === "en" ? 1 : 0;
  const sourceIndex = language === "en" ? 0 : 1;
  const map = new Map();

  translationPairs.forEach((pair) => {
    map.set(normalizeText(pair[sourceIndex]), pair[targetIndex]);
    map.set(normalizeText(pair[targetIndex]), pair[targetIndex]);
  });

  return map;
}

const staticTranslationMaps = {
  fr: buildTranslationMap("fr"),
  en: buildTranslationMap("en"),
};

function translateTextNode(node, translations) {
  const normalized = normalizeText(node.nodeValue);
  if (!normalized || !translations.has(normalized)) {
    return;
  }

  const leading = node.nodeValue.match(/^\s*/)?.[0] || "";
  const trailing = node.nodeValue.match(/\s*$/)?.[0] || "";
  node.nodeValue = `${leading}${translations.get(normalized)}${trailing}`;
}

function translateStaticContent(language) {
  const translations = staticTranslationMaps[language] || staticTranslationMaps.fr;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE", "SVG"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }
  nodes.forEach((node) => translateTextNode(node, translations));

  attributeTranslations[language].forEach(([selector, attribute, value]) => {
    const element = document.querySelector(selector);
    if (element) {
      element.setAttribute(attribute, value);
    }
  });
}

function updateResumeLinks(language) {
  const file = resumeFiles[language] || resumeFiles.fr;
  document.querySelectorAll("[data-resume-link]").forEach((link) => {
    link.setAttribute("href", file);
  });
}

function setLanguage(language) {
  if (!["fr", "en"].includes(language)) {
    return;
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = pageMeta[language].title;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", pageMeta[language].description);
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  translateStaticContent(language);
  updateResumeLinks(language);
  renderCertificates();
  startTypewriter();

  try {
    localStorage.setItem("portfolioLanguage", language);
  } catch {
    // Ignore storage restrictions in local file previews.
  }
}

function setupLanguageSwitch() {
  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang || "fr");
    });
  });
}

function getInitialLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (["fr", "en"].includes(queryLanguage)) {
    return queryLanguage;
  }

  return "en";
}

function startReveal() {
  const elements = Array.from(document.querySelectorAll("[data-reveal]"));
  if (!elements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px" },
  );

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 35, 260)}ms`;
    observer.observe(element);
  });
}

function startCounters() {
  const counters = Array.from(document.querySelectorAll("[data-count]"));
  if (!counters.length) {
    return;
  }

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.count || 0);
    const prefix = counter.textContent.trim().startsWith("+") ? "+" : "";
    const duration = reducedMotion ? 1 : 900;
    const start = performance.now();

    const draw = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = `${prefix}${Math.round(eased * target)}`;
      if (progress < 1) {
        requestAnimationFrame(draw);
      }
    };

    requestAnimationFrame(draw);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.55 },
  );

  counters.forEach((counter) => observer.observe(counter));
}

function setupNavigation() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  const links = nav ? Array.from(nav.querySelectorAll("a")) : [];

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });
  }

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!sections.length || !("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      links.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", isActive);
      });
    },
    { threshold: [0.18, 0.35, 0.6], rootMargin: "-90px 0px -35% 0px" },
  );

  sections.forEach((section) => observer.observe(section));
}

function setupTilt() {
  if (reducedMotion) {
    return;
  }

  const cards = Array.from(document.querySelectorAll("[data-tilt]"));
  cards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 5}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function renderCertificates() {
  if (!certificateGrid) {
    return;
  }

  const copy = certificateCopy[currentLanguage] || certificateCopy.fr;
  const query = certificateSearch ? certificateSearch.value.trim().toLowerCase() : "";
  const visibleCertificates = certificates.filter((cert) => {
    const matchesFilter = currentFilter === "all" || cert.category === currentFilter;
    const text = `${cert.title} ${cert.issuer} ${cert.date} ${formatCertificateDate(cert.date)}`.toLowerCase();
    return matchesFilter && text.includes(query);
  });

  certificateGrid.innerHTML = visibleCertificates
    .map(
      (cert) => `
        <article class="certificate-card" data-reveal>
          <div class="certificate-meta">
            <span>${formatCertificateDate(cert.date)}</span>
            <span>${cert.issuer}</span>
          </div>
          <h3>${cert.title}</h3>
          <p>${getCertificateSummary(cert.category)}</p>
          <a href="${encodeURI(cert.file)}" target="_blank" rel="noreferrer">
            ${copy.button}
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7" /><path d="M7 7h10v10" /></svg>
          </a>
        </article>
      `,
    )
    .join("");

  if (!visibleCertificates.length) {
    certificateGrid.innerHTML = `<p class="empty-state">${copy.empty}</p>`;
    return;
  }

  requestAnimationFrame(() => {
    certificateGrid.querySelectorAll("[data-reveal]").forEach((card, index) => {
      card.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
      card.classList.add("is-visible");
    });
  });
}

function getCertificateSummary(category) {
  const summaries = (certificateCopy[currentLanguage] || certificateCopy.fr).summaries;
  return summaries[category] || summaries.default;
}

function formatCertificateDate(date) {
  const [month, year] = date.split(" ");
  const monthTranslations = certificateMonthTranslations[currentLanguage] || {};
  return `${monthTranslations[month] || month} ${year}`;
}

function setupCertificateFilters() {
  if (certificateSearch) {
    certificateSearch.addEventListener("input", renderCertificates);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      currentFilter = button.dataset.filter || "all";
      renderCertificates();
    });
  });

  renderCertificates();
}

function startParticles() {
  if (reducedMotion) {
    return;
  }

  const canvas = document.getElementById("particleCanvas");
  if (!canvas) {
    return;
  }

  const context = canvas.getContext("2d");
  const particles = [];
  let width = 0;
  let height = 0;
  let rafId = 0;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);

    particles.length = 0;
    const count = Math.min(Math.floor(width / 20), 64);
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 1.8 + 0.8,
      });
    }
  };

  const draw = () => {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "rgba(0, 210, 255, 0.52)";
    context.strokeStyle = "rgba(0, 210, 255, 0.12)";
    context.lineWidth = 1;

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) {
        particle.vx *= -1;
      }
      if (particle.y < 0 || particle.y > height) {
        particle.vy *= -1;
      }

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 118) {
          context.globalAlpha = 1 - distance / 118;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
      context.globalAlpha = 1;
    });

    rafId = requestAnimationFrame(draw);
  };

  window.addEventListener("resize", resize, { passive: true });
  resize();
  draw();

  window.addEventListener("beforeunload", () => cancelAnimationFrame(rafId));
}

setupLanguageSwitch();
setLanguage(getInitialLanguage());
startReveal();
startCounters();
setupNavigation();
setupTilt();
setupCertificateFilters();
startParticles();
