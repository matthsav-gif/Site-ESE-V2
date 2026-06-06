/* ESE · Event & Safety Engineering — English content */

export const CONTACT = {
  tel: "01 84 80 80 69",
  telHref: "tel:+33184808069",
  email: "secretariat@ese-techsolutions.com",
  adresse1: "15 rue des Halles",
  adresse2: "75001 Paris",
  linkedinEntreprise: "https://www.linkedin.com/company/event-safety-engineering/",
  linkedinMatthieu: "https://www.linkedin.com/in/matthieu-savatier/",
  socle: "https://socle.example", // ⚠ URL site SOCLE® dédié à confirmer
  cobel: "https://www.cobel.fr/",
  // Form submission endpoint (Formspree / Resend / backend).
  // Leave empty = demo mode (validation + confirmation message, no actual send).
  formEndpoint: "https://formspree.io/f/mvznglva",
};

export const METIERS = [
  {
    href: "/metiers/direction-technique", n: "01",
    t: "Technical direction", short: "Technical direction",
    d: "Technical specifications, production decisions, design, structural and rigging calculations.",
  },
  {
    href: "/metiers/regie-generale", n: "02",
    t: "Production management & stage management", short: "Production management",
    d: "On-site coordination, load-in and strike scheduling, crew and supplier management.",
  },
  {
    href: "/metiers/expertise-securite", n: "03",
    t: "Safety expertise", short: "Safety expertise",
    d: "Fire safety reports (ERP) and support before authorities. AP2 ENSOSP qualification.",
  },
];

export const HERO_SLIDES = [
  { src: "/images/home/jo-para.jpg", alt: "Paris 2024 Paralympic Games opening ceremony, Place de la Concorde" },
  { src: "/images/home/show-coachella-screen.jpg", alt: "Outdoor festival, giant screen and crowd at sunset" },
  { src: "/images/home/chicago-navy-pier.jpg", alt: "Chicago Navy Pier at sunset, international event production" },
  { src: "/images/home/paris-sacre-coeur-fireworks.jpg", alt: "Sacré-Cœur Paris with fireworks, aerial night view" },
];

/* References mosaic page (5 clusters) */
export const REFERENCES = [
  {
    k: "Cérémonies", t: "JO / JOP Paris 2024",
    names: "Cérémonies d'ouverture des Jeux Olympiques et Paralympiques.",
    desc: "Technical direction and multi-discipline expertise across the Olympic programme.",
    src: "/images/jo-para.jpg", variant: "navy", span: "span-7 tall",
    videos: [
      { id: "onP5-DKSbI4", title: "Paris 2024 Olympic Games opening ceremony" },
      { id: "7OuJXFhg5PA", title: "Paris 2024 Paralympic Games opening ceremony" },
    ],
  },
  {
    k: "Tournées en stade", t: "Stadium tours",
    names: "Mylène Farmer · JUL · Ninho · AC/DC à l'Hippodrome de Longchamp.",
    desc: "Live technical direction, rigging and structures on the largest stadium and racecourse configurations.",
    src: "/images/stade-concert.jpg", variant: "navy", span: "span-5 tall",
  },
  {
    k: "Défilés & luxe", t: "Mode & beauté",
    names: "Louis Vuitton, collection femme oct. 2023 · Garnier Shortcut · Vichy Shortcut.",
    desc: "Technical direction and event scenography on luxury and beauty live formats.",
    src: "/images/direction-technique/luxe-louis-vuitton.jpg", variant: "taupe", span: "span-4",
    videos: [
      { id: "4xA2rV1cXpM", title: "Louis Vuitton Men's Fall-Winter 2023, live performance by Rosalía" },
      { id: "Xn5qX2qbPdk", title: "Louis Vuitton Spring-Summer 2023 Fashion Show" },
      { id: "6SX50BOmArI", title: "Louis Vuitton Men's Spring-Summer 2023 Show" },
    ],
  },
  {
    k: "Sommets institutionnels", t: "UNOC Nice",
    names: "United Nations Ocean Conference.",
    desc: "Multi-discipline technical direction on an international institutional summit.",
    src: "/images/expertise-securite/unoc-nice.jpg", variant: "navy", span: "span-4",
  },
  {
    k: "DJ sets internationaux", t: "Clubbing & live",
    names: "Mochakk · Adriatique · Blondish.",
    desc: "Technical direction and live production management on international DJ set formats.",
    src: "/images/direction-technique/dj-mochakk.jpg", variant: "taupe", span: "span-4",
  },
];

/* Compact list (home + service pages) */
export const REF_LIST = [
  { t: "Paris 2024 Olympic & Paralympic Games ceremonies", d: "Opening ceremonies for the Olympic and Paralympic Games." },
  { t: "Stadium tours", d: "Mylène Farmer · JUL · Ninho · AC/DC at the Hippodrome de Longchamp." },
  { t: "Fashion shows & luxury events", d: "Louis Vuitton · Garnier Shortcut · Vichy Shortcut." },
  { t: "Institutional summits", d: "UNOC Nice, United Nations Ocean Conference." },
  { t: "International DJ sets", d: "Mochakk · Adriatique · Blondish." },
];

/* Content for the 3 service pages */
export const METIER_DATA = {
  "direction-technique": {
    n: "01", eyebrow: "Service · Technical direction",
    h1: "Technical direction.",
    sub: "From drafting technical specifications to on-site management, ESE designs and operates the full technical chain for your productions: events, live, set design.",
    media: { label: "Stadium technical direction, fly view", src: "/images/dt-stade-fly.jpg", alt: "View from the rigging grid of a stadium in production", variant: "navy" },
    heroSlides: [
      { src: "/images/direction-technique/dj-mochakk.jpg", alt: "Outdoor stage DJ set, technical production on a large-scale format" },
      { src: "/images/direction-technique/festival-nuit.jpg", alt: "Outdoor festival at night, full-screen stage and crowd" },
      { src: "/images/direction-technique/luxe-louis-vuitton.jpg", alt: "Prestigious institutional event, luxury scenography" },
      { src: "/images/direction-technique/IMG_6167.JPG", alt: "Event technical production, large-scale configuration" },
      { src: "/images/direction-technique/img-6811.jpg", alt: "Live production, rig and stage structure" },
    ],
    perimTitle: "Scope of technical direction",
    perimLead: "ESE's technical direction covers the full chain, from pre-production through on-site delivery.",
    perim: [
      "Drafting technical specifications.",
      "Production decisions: tool selection, supplier choices and technical budgets.",
      "Design management: Vectorworks, ConnectCAD, Braceworks, MVR drawings.",
      "Structural and rigging calculations.",
      "Coordination of technical suppliers during realisation.",
      "Recurring technical direction for venues, cultural venues and event organisations.",
    ],
    opsTitle: "Types of operations covered",
    opsLead: "ESE operates across all event technical production contexts:",
    ops: [
      "Event TD: corporate, cultural, product launches, congresses",
      "Live & performing arts TD: concerts, festivals, broadcast, stadium tours",
      "Set design, exhibition and museography TD",
      "Structures & rigging TD: suspended loads, MVR and Braceworks calculations",
      "Power TD: supply, generators, distribution, load calculations",
    ],
    model: [
      "ESE can take a project from the ground up, from the first technical specifications through the final day of strike. Or step in at a specific phase, when a team simply needs an engineering reinforcement.",
      "For venues and organisations producing events year-round, technical direction becomes an ongoing relationship: one consistent point of contact who ends up knowing the venue, the constraints and the working practices better than anyone.",
    ],
    projet: "Technical direction",
  },
  "regie-generale": {
    n: "02", eyebrow: "Service · Production management & stage management",
    h1: "Production management & stage management.",
    sub: "Operational on-site coordination (load-in, show run, strike), across events, stage and live productions.",
    media: { label: "On-site production management, stage load-in", src: "/images/regie-stade.jpg", alt: "Stage under load-in with screens, final setup in progress", variant: "navy" },
    heroSlides: [
      { src: "/images/regie-generale/show-usa-outdoor.jpg", alt: "USA outdoor show, large-scale live production management" },
      { src: "/images/regie-generale/club-grand-palais-dj.jpg", alt: "DJ set in a Beaux-Arts venue, lasers and line arrays" },
      { src: "/images/regie-generale/club-lasers.jpg", alt: "Club, lasers and suspended LED screens, packed crowd" },
      { src: "/images/regie-generale/stade-concert-pyro.jpg", alt: "Stadium concert, gold pyrotechnics and massive crowd" },
    ],
    perimTitle: "Scope of production management",
    perimLead: "ESE handles the operational coordination of production on site, from arrival at the venue through final handback.",
    perim: [
      "Operational on-site coordination and schedule management.",
      "Load-in and strike planning.",
      "Crew and technical supplier management.",
      "Liaison with the organiser, artists, venues and authorities.",
      "Assembly of a bespoke team, calibrated to the format and operational risk of each project.",
    ],
    opsTitle: "Types of operations covered",
    opsLead: "",
    ops: [
      "Event production management: corporate, cultural, agencies",
      "Performing arts & live production management: producers, festivals, venues",
      "Festival & outdoor stage management",
      "Venue & cultural venue production management: on-call or annual retainer",
      "Tour production management",
      "Set design, exhibition & museography production management",
    ],
    model: [
      "On a one-off event, ESE assembles and runs the production management from the first truck to the last. Over the longer term, it takes charge of production management for a venue, a cultural venue or an entire tour.",
      "Depending on the project, ESE leads the production management independently or steps in to complement an existing team, taking exactly the scope the organiser needs — no more, no less.",
    ],
    projet: "Production management",
  },
  "expertise-securite": {
    n: "03", eyebrow: "Service · Safety expertise",
    h1: "Safety expertise, ERP & authorities.",
    sub: "Fire safety reports and support before authorities — from an event expert, not a generalist inspection body.",
    media: { label: "Stadium crowd, ERP safety challenge", src: "/images/stade-foule.jpg", alt: "Packed stands and floor at the Stade de France during a concert, public safety challenge", variant: "navy" },
    heroSlides: [
      { src: "/images/expertise-securite/arena.jpg", alt: "Arena in event configuration, ERP type L" },
      { src: "/images/expertise-securite/festival-rigging.jpg", alt: "Rigging and line array on a festival stage, structural safety" },
      { src: "/images/expertise-securite/jul-velodrome-truss.jpg", alt: "JUL Vélodrome, truss and stage structure, ERP safety" },
      { src: "/images/expertise-securite/unoc-nice.jpg", alt: "United Nations Ocean Conference, international institutional summit" },
    ],
    qualif: {
      big: "An AP2 ENSOSP qualification — rare in the industry.",
      body: [
        "ESE's safety expertise is underpinned by an AP2 ENSOSP qualification — rare in event technical production. AP2 ENSOSP is a French national qualification (ENSOSP: National School of Civil and Security Officers) that certifies specialists to produce and sign ERP fire safety reports.",
        "This qualification enables ESE to produce and sign ERP fire safety reports, support operators before authorities and attend safety commission hearings — from the standpoint of an event expert, not a generalist inspection office.",
      ],
    },
    perimTitle: "Scope of safety expertise",
    perimLead: "",
    perim: [
      "ERP fire safety report for events (types CTS, PA, L, T).",
      "Prefectoral, city hall and DOET authorisation files.",
      "Safety commission support.",
      "ERP fire safety report for venue and cultural venue conversions.",
      "Organisation-level safety governance audit.",
      "Disabled access (PMR/accessibility).",
    ],
    opsTitle: "Authorities we work with",
    opsLead: "ESE acts as the technical interface between operators and authorities, across all event and cultural ERP files:",
    ops: ["Prefecture (Préfecture)", "City hall (Mairie)", "Safety commission (Commission de sécurité)", "Fire & rescue service (SDIS)", "DOET"],
    model: [
      "This can be a single fire safety report and one safety commission hearing. Or a long-term engagement: the safety governance of a venue, multi-year support for a festival, a cultural venue undergoing transformation.",
      "In every case, ESE remains the operator's technical point of contact before the authorities — expert support that knows the field, not one more layer of inspection.",
    ],
    projet: "Safety expertise",
  },
};

/* Key figures (home banner) */
export const CHIFFRES = [
  { n: "12 ans", l: "years in event technical production" },
  { n: "3 métiers", l: "technical direction · production management · safety expertise" },
  { n: "Certifié", l: "Vectorworks · Braceworks · SSIAP3 · AP2 ENSOSP" },
  { n: "Stade", l: "up to the largest stadium configurations" },
];

/* 3-step process (service pages) */
export const PROCESS = [
  { n: "01", t: "Scoping", d: "We start from your brief and the venue's constraints: technical specifications, budget, risk level. Nothing moves forward until the scope is clear." },
  { n: "02", t: "Design", d: "Drawings, calculations and decisions: Vectorworks, ConnectCAD, Braceworks. Everything is documented for sign-off by the team, suppliers and, where required, the authorities." },
  { n: "03", t: "On site", d: "Load-in, show run, strike. ESE manages the schedule, coordinates the suppliers and remains the single point of contact through to venue handback." },
];

/* FAQ (home + FAQPage schema) */
export const FAQ = [
  {
    q: "Does ESE only work on large-scale events?",
    a: "No. ESE works on Olympic opening ceremonies and stadium tours just as readily as on mid-scale events, product launches or confidential operations. The brief defines the scope, not the size.",
  },
  {
    q: "Can we bring in ESE for just one of the three services?",
    a: "Yes. Technical direction, production management and safety expertise work together or independently. ESE can carry an entire production end to end, or step in as a reinforcement to an existing team.",
  },
  {
    q: "Can ESE produce and sign an ERP fire safety report?",
    a: "Yes. ESE's safety expertise is underpinned by an AP2 ENSOSP qualification — rare in event production. ESE produces ERP fire safety reports (types CTS, PA, L, T) and supports operators at safety commission hearings, before the prefecture, city hall and fire & rescue service (SDIS).",
  },
  {
    q: "Do you work outside Paris and internationally?",
    a: "Yes. ESE is based in Paris but operates anywhere in France and internationally, depending on the project: tours, festivals, institutional summits.",
  },
  {
    q: "What is SOCLE®?",
    a: "SOCLE® is ESE's proprietary method (registered trademark at the INPI, France's national IP office) for structuring the technical production of engineering offices and agencies on the Vectorworks ecosystem. It is aimed at organisations looking to move from an installed tool to a true production system.",
  },
];

/* SEO meta per page */
export const SEO = {
  home: {
    title: "ESE · Event Technical Production · Paris",
    description: "Engineering firm for event technical production. Technical direction, production management, ERP safety expertise. Based in Paris.",
  },
  "direction-technique": {
    title: "Event Technical Direction · ESE",
    description: "Technical direction for event, live and scenography productions. Technical specs, Vectorworks design, rigging calculations, on-site management.",
  },
  "regie-generale": {
    title: "Production Management & Stage Management · ESE",
    description: "Production management and stage management: on-site operational coordination, load-in, show run, strike. For events, stage and live productions.",
  },
  "expertise-securite": {
    title: "ERP Safety Expertise & Authorities · ESE",
    description: "ERP fire safety reports and support before authorities. AP2 ENSOSP qualification. Prefecture, city hall, safety commission.",
  },
  references: {
    title: "ESE References · Paris 2024, Stadium Tours, Luxury Events",
    description: "ESE productions: Paris 2024 Olympic & Paralympic ceremonies, stadium tours, luxury fashion shows, institutional summits, international DJ sets.",
  },
  methodes: {
    title: "Methods & Partnerships SOCLE® · COBEL® · ESE",
    description: "ESE publishes SOCLE® (Vectorworks operational transformation) and partners with COBEL® Développeur de culture.",
  },
  qui: {
    title: "Matthieu Savatier, founder of ESE · Event & Safety Engineering",
    description: "ESE is led by its founder Matthieu Savatier: 12 years in event technical production, AP2 ENSOSP qualification.",
  },
  contact: {
    title: "Contact ESE · Technical Direction & Event Production · Paris",
    description: "Let's talk about your project. ESE, Event & Safety Engineering, 15 rue des Halles, 75001 Paris. 01 84 80 80 69. Technical direction, production management, safety expertise.",
  },
};
