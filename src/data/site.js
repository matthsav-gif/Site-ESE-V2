/* ESE — données partagées du site (navigation, métiers, références, contenus) */

export const CONTACT = {
  tel: "01 84 80 80 69",
  telHref: "tel:+33184808069",
  email: "secretariat@ese-techsolutions.com",
  adresse1: "15 rue des Halles",
  adresse2: "75001 Paris",
  linkedinEntreprise: "https://www.linkedin.com/company/event-safety-engineering/",
  linkedinMatthieu: "https://www.linkedin.com/in/matthieu-savatier/",
  socle: "https://socle.example", // ⚠ URL site SOCLE® dédié à confirmer
  // Endpoint d'envoi du formulaire (Formspree / Resend / backend).
  // Laisser vide = mode démo (validation + message de confirmation sans envoi réel).
  formEndpoint: "",
};

export const METIERS = [
  {
    href: "/metiers/direction-technique", n: "01",
    t: "Direction technique", short: "Direction technique",
    d: "Cahier des charges, arbitrages de production, conception, calculs de structures et de rigging.",
  },
  {
    href: "/metiers/regie-generale", n: "02",
    t: "Régie générale & stage management", short: "Régie générale",
    d: "Coordination sur site, planning de montage et démontage, pilotage des équipes et prestataires.",
  },
  {
    href: "/metiers/expertise-securite", n: "03",
    t: "Expertise sécurité", short: "Expertise sécurité",
    d: "Notices ERP et accompagnement face aux autorités. Qualification AP2 ENSOSP.",
  },
];

export const HERO_SLIDES = [
  { src: "/images/festival-coucher-soleil.jpg", alt: "Festival outdoor en montagne au coucher du soleil — scène et public" },
  { src: "/images/stade-pyro.jpg", alt: "Concert au Stade de France — pyrotechnie et public en configuration stade" },
  { src: "/images/festival-nuit.jpg", alt: "Festival de nuit — grande scène et foule sous les lumières" },
  { src: "/images/jo-para.jpg", alt: "Cérémonie des Jeux Paralympiques de Paris 2024, place de la Concorde au coucher du soleil" },
  { src: "/images/festival-rigging.jpg", alt: "Rigging et line array sur une scène de festival au soleil couchant" },
  { src: "/images/stade-montage.jpg", alt: "Montage de la scène au Stade de France — grues et structures en cours de levage" },
  { src: "/images/truss-etoile.jpg", alt: "Structure de rigging en étoile vue d'en dessous — accroche et lumière sur un grand plateau" },
  { src: "/images/festival-panorama.jpg", alt: "Panorama d'un festival en montagne au crépuscule" },
];

/* Mosaïque de la page Références (5 grappes) */
export const REFERENCES = [
  {
    k: "Cérémonies", t: "JO / JOP Paris 2024",
    names: "Cérémonies d'ouverture des Jeux Olympiques et Paralympiques.",
    desc: "Direction technique et expertise multi-métiers sur le programme olympique.",
    src: "/images/jo-para.jpg", variant: "navy", span: "span-7 tall",
    videos: [
      { id: "onP5-DKSbI4", title: "Cérémonie d'ouverture des Jeux Olympiques de Paris 2024" },
      { id: "7OuJXFhg5PA", title: "Cérémonie d'ouverture des Jeux Paralympiques de Paris 2024" },
    ],
  },
  {
    k: "Tournées en stade", t: "Stadium tours",
    names: "Mylène Farmer · JUL · Ninho · AC/DC à l'Hippodrome de Longchamp.",
    desc: "Direction technique live, rigging et structures sur les plus grosses configurations stade et hippodrome.",
    src: "/images/stade-concert.jpg", variant: "navy", span: "span-5 tall",
  },
  {
    k: "Défilés & luxe", t: "Mode & beauté",
    names: "Louis Vuitton — collection femme oct. 2023 · Garnier Shortcut · Vichy Shortcut.",
    desc: "Direction technique et scénographie événementielle sur les formats luxe et beauté.",
    src: "/images/luxe-louis-vuitton.jpg", variant: "taupe", span: "span-4",
    videos: [
      { id: "4xA2rV1cXpM", title: "Louis Vuitton Men's Fall-Winter 2023 — performance live de Rosalía" },
      { id: "Xn5qX2qbPdk", title: "Louis Vuitton Spring-Summer 2023 Fashion Show" },
      { id: "6SX50BOmArI", title: "Louis Vuitton Men's Spring-Summer 2023 Show" },
    ],
  },
  {
    k: "Sommets institutionnels", t: "UNOC Nice",
    names: "United Nations Ocean Conference.",
    desc: "Direction technique multi-métiers sur sommet institutionnel international.",
    src: "/images/unoc-nice.jpg", variant: "navy", span: "span-4",
  },
  {
    k: "DJ sets internationaux", t: "Clubbing & live",
    names: "Mochakk · Adriatique · Blondish.",
    desc: "Direction technique et régie live sur les formats DJ sets internationaux.",
    src: "/images/dj-mochakk.jpg", variant: "taupe", span: "span-4",
  },
];

/* Liste compacte (home + pages métier) */
export const REF_LIST = [
  { t: "Cérémonies JO/JOP Paris 2024", d: "Cérémonies d'ouverture des Jeux Olympiques et Paralympiques." },
  { t: "Tournées en stade", d: "Mylène Farmer · JUL · Ninho · AC/DC à l'Hippodrome de Longchamp." },
  { t: "Défilés & événements de luxe", d: "Louis Vuitton · Garnier Shortcut · Vichy Shortcut." },
  { t: "Sommets institutionnels", d: "UNOC Nice — United Nations Ocean Conference." },
  { t: "DJ sets internationaux", d: "Mochakk · Adriatique · Blondish." },
];

/* Contenus des 3 pages métier */
export const METIER_DATA = {
  "direction-technique": {
    n: "01", eyebrow: "Métier — Direction technique",
    h1: "Direction technique.",
    sub: "De la rédaction du cahier des charges au pilotage sur site, ESE conçoit et opère la chaîne technique de vos productions — événementiel, live, scénographie.",
    media: { label: "Direction technique stade — vue fly", src: "/images/dt-stade-fly.jpg", alt: "Vue depuis les ponts d'accroche d'un stade en production", variant: "navy" },
    perimTitle: "Périmètre de la direction technique",
    perimLead: "La direction technique ESE couvre l'ensemble de la chaîne, de la pré-production à la livraison sur site.",
    perim: [
      "Rédaction des cahiers des charges techniques.",
      "Arbitrages de production — choix des outils, des prestataires et des budgets techniques.",
      "Pilotage des phases de conception — plans Vectorworks, ConnectCAD, Braceworks, MVR.",
      "Calculs de structures et de rigging.",
      "Coordination des prestataires techniques en phase de réalisation.",
      "Direction technique récurrente pour sites, lieux culturels et organisations événementielles.",
    ],
    opsTitle: "Types d'opérations couvertes",
    opsLead: "ESE intervient sur l'ensemble des contextes de production technique événementielle :",
    ops: [
      "DT événementiel — corporate, culturel, lancement, congrès",
      "DT live & spectacle vivant — concerts, festivals, captations, tournées en stade",
      "DT scénographie, expo, muséographie",
      "DT structures & rigging — charges suspendues, calculs MVR et Braceworks",
      "DT énergie — alimentation, groupes, distribution, calculs de charge",
    ],
    model: [
      "ESE peut prendre un projet à la racine — dès le premier cahier des charges — et le mener jusqu'à la dernière journée de démontage. Ou se greffer sur une phase précise, quand une équipe a simplement besoin d'un renfort d'ingénierie.",
      "Et pour les sites et les organisations qui produisent toute l'année, la direction technique devient récurrente : un même interlocuteur, qui finit par connaître les lieux, les contraintes et les habitudes mieux que personne.",
    ],
    projet: "Direction technique",
  },
  "regie-generale": {
    n: "02", eyebrow: "Métier — Régie générale & stage management",
    h1: "Régie générale & stage management.",
    sub: "Coordination opérationnelle sur site — montage, run, démontage — sur l'événementiel, la scène et le live.",
    media: { label: "Régie sur site — scène en montage", src: "/images/regie-stade.jpg", alt: "Scène en cours de montage avec écrans, fin de mise en place", variant: "navy" },
    perimTitle: "Périmètre de la régie générale",
    perimLead: "ESE assure la coordination opérationnelle de la production sur site, depuis l'arrivée sur le lieu jusqu'à la restitution finale.",
    perim: [
      "Coordination opérationnelle sur site et pilotage du déroulé.",
      "Planning de montage et de démontage.",
      "Pilotage des équipes et des prestataires techniques.",
      "Interface avec l'organisateur, les artistes, les lieux et les autorités.",
      "Assemblage d'une équipe à façon, calibrée pour le format et le risque opérationnel de chaque dossier.",
    ],
    opsTitle: "Types d'opérations couvertes",
    opsLead: "",
    ops: [
      "Régie générale événementiel — corporate, culturel, agences",
      "Régie générale spectacle vivant & live — producteurs, festivals, salles",
      "Stage management festival & outdoor",
      "Régie de site & de lieu culturel — astreinte ou forfait annuel",
      "Régie de tournée",
      "Régie scénographique, expo & muséo",
    ],
    model: [
      "Sur une opération ponctuelle, ESE assemble et pilote la régie du premier camion au dernier. Sur la durée, elle prend en charge la régie d'un site, d'un lieu culturel ou d'une tournée entière.",
      "Selon le dossier, ESE mène la régie seule ou vient compléter une équipe déjà en place — en prenant exactement le périmètre dont l'organisateur a besoin, ni plus, ni moins.",
    ],
    projet: "Régie générale",
  },
  "expertise-securite": {
    n: "03", eyebrow: "Métier — Expertise sécurité",
    h1: "Expertise sécurité — ERP & autorités.",
    sub: "Notices de sécurité et accompagnement face aux autorités — par un expert événementiel, pas un bureau de contrôle.",
    media: { label: "Public en stade — enjeu ERP", src: "/images/stade-foule.jpg", alt: "Tribunes et parterre combles au Stade de France lors d'un concert — enjeu de sécurité du public", variant: "navy" },
    qualif: {
      big: "Une qualification AP2 ENSOSP, rare dans le métier.",
      body: [
        "L'expertise sécurité d'ESE est portée par une qualification AP2 ENSOSP, rare dans la production technique événementielle.",
        "Cette qualification permet à ESE de produire et signer des notices de sécurité ERP, d'accompagner les opérateurs auprès des autorités et d'intervenir en commission de sécurité — depuis la posture d'un expert événementiel, pas d'un bureau de contrôle généraliste.",
      ],
    },
    perimTitle: "Périmètre de l'expertise sécurité",
    perimLead: "",
    perim: [
      "Notice de sécurité ERP événementiel — types CTS, PA, L, T.",
      "Dossier d'autorisation préfectorale, mairie, DOET.",
      "Accompagnement en commission de sécurité.",
      "Notice ERP de transformation de site et de lieu culturel.",
      "Audit de gouvernance sécurité d'organisation.",
      "Accessibilité PMR.",
    ],
    opsTitle: "Interlocuteurs",
    opsLead: "ESE est l'interface technique des opérateurs auprès des autorités, sur l'ensemble des dossiers ERP événementiels et culturels :",
    ops: ["Préfecture", "Mairie", "Commission de sécurité", "SDIS", "DOET"],
    model: [
      "Cela peut être une notice et un passage en commission sur une seule opération. Ou un accompagnement long : la gouvernance sécurité d'un site, le suivi d'un festival sur plusieurs éditions, un lieu culturel qui se transforme.",
      "Dans tous les cas, ESE reste l'interlocuteur technique de l'opérateur face aux autorités — un appui d'expert qui connaît le terrain, pas un contrôle de plus.",
    ],
    projet: "Expertise sécurité",
  },
};

/* Chiffres-clés (bande accueil) */
export const CHIFFRES = [
  { n: "12 ans", l: "de production technique événementielle" },
  { n: "2023", l: "année de fondation d'ESE" },
  { n: "102 000", l: "personnes — JUL, Stade de France 2026" },
  { n: "AP2", l: "ENSOSP — qualification sécurité ERP" },
];

/* Process en 3 étapes (pages métier) */
export const PROCESS = [
  { n: "01", t: "Cadrage", d: "On part de votre besoin et des contraintes du lieu : cahier des charges, budget technique, niveau de risque. Rien n'avance tant que le périmètre n'est pas clair." },
  { n: "02", t: "Conception", d: "Plans, calculs et arbitrages — Vectorworks, ConnectCAD, Braceworks. Tout est documenté pour être validé par les équipes, les prestataires et, s'il le faut, les autorités." },
  { n: "03", t: "Sur site", d: "Montage, run, démontage. ESE pilote le déroulé, coordonne les prestataires et reste l'interlocuteur unique jusqu'à la restitution du lieu." },
];

/* FAQ (accueil + schema FAQPage) */
export const FAQ = [
  {
    q: "ESE travaille-t-elle uniquement sur de gros événements ?",
    a: "Non. ESE intervient aussi bien sur une cérémonie olympique ou une tournée en stade que sur un événement de moyenne envergure, un lancement produit ou une opération confidentielle. C'est le besoin qui définit le périmètre, pas la taille.",
  },
  {
    q: "Peut-on faire appel à ESE pour un seul des trois métiers ?",
    a: "Oui. Direction technique, régie générale et expertise sécurité fonctionnent ensemble ou séparément. ESE peut porter une production de bout en bout, ou intervenir en renfort d'une équipe déjà en place.",
  },
  {
    q: "ESE peut-elle produire et signer une notice de sécurité ERP ?",
    a: "Oui. L'expertise sécurité d'ESE est portée par une qualification AP2 ENSOSP, rare dans la production événementielle. ESE produit les notices de sécurité ERP (types CTS, PA, L, T) et accompagne les opérateurs en commission de sécurité, face à la préfecture, la mairie et le SDIS.",
  },
  {
    q: "Intervenez-vous en province et à l'international ?",
    a: "Oui. ESE est basée à Paris mais intervient partout en France et à l'international, selon les projets — tournées, festivals, sommets institutionnels.",
  },
  {
    q: "Qu'est-ce que SOCLE® ?",
    a: "SOCLE® est la méthode propriétaire d'ESE (marque déposée à l'INPI) pour structurer la production technique des bureaux d'études et agences sur l'écosystème Vectorworks. Elle s'adresse aux organisations qui veulent passer d'un outil installé à un véritable système de production.",
  },
];

/* Meta SEO par page */
export const SEO = {
  home: {
    title: "ESE — Société d'ingénierie pour la production technique événementielle",
    description: "Société d'ingénierie pour la production technique événementielle. Direction technique, régie générale, expertise sécurité ERP. Paris, depuis 2023.",
  },
  "direction-technique": {
    title: "Direction technique événementielle — ESE",
    description: "Direction technique de productions événementielles, live et scénographiques. Cahier des charges, conception Vectorworks, calculs rigging, pilotage chantier.",
  },
  "regie-generale": {
    title: "Régie générale & stage management — ESE",
    description: "Régie générale et stage management — coordination opérationnelle sur site, montage, run, démontage. Pour événementiel, scène et live.",
  },
  "expertise-securite": {
    title: "Expertise sécurité ERP & autorités — ESE",
    description: "Notices de sécurité ERP et accompagnement face aux autorités. Qualification AP2 ENSOSP. Préfecture, mairie, commission de sécurité.",
  },
  references: {
    title: "Références — Productions ESE depuis 2023",
    description: "Productions ESE depuis 2023 : cérémonies JO/JOP Paris 2024, tournées en stade, défilés de luxe, sommets institutionnels, DJ sets internationaux.",
  },
  methodes: {
    title: "Méthodes & partenariats SOCLE® · COBEL® — ESE",
    description: "ESE est éditeur de SOCLE® (transformation opérationnelle Vectorworks) et partenaire de COBEL® Développeur de culture.",
  },
  qui: {
    title: "Matthieu Savatier, fondateur d'ESE — Event & Safety Engineering",
    description: "ESE est portée par son fondateur Matthieu Savatier — 12 ans de production technique événementielle, qualification AP2 ENSOSP.",
  },
  contact: {
    title: "Contact — ESE",
    description: "Parlons de votre projet. ESE — 15 rue des Halles, 75001 Paris — 01 84 80 80 69.",
  },
};
