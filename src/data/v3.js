/* ESE · refonte V3 « Du plan au terrain » : contenus bilingues
   Langage graphique aligné sur la communication (posts réseaux). */

const IMG = "/images/v3/";
const pad = (n) => String(n).padStart(2, "0");

export const T = {
  fr: {
    base: "",
    nav: { expertises: "Expertises", refs: "Références", approche: "Approche", about: "À propos", contact: "Contact", cta: "Parlons de votre projet", menu: "Menu", close: "Fermer" },
    keysTitle: "Les points clés",
    stripBrand: "ESE — Du plan au terrain",
    contactBand: {
      kick: "Contact", title: "Un projet<br>à construire&nbsp;?",
      text: "Quelques lignes suffisent pour commencer. Dites-nous ce que vous préparez, où vous en êtes et l'accompagnement recherché.",
      cta: "Parlons de votre projet",
    },
    footer: {
      big: "Du plan au terrain",
      about: "Production technique événementielle. Direction technique, bureau d'études, design lumière, régie générale, stage management et expertise sécurité, en mission globale ou en renfort ciblé.",
      metiers: "Métiers", ese: "ESE", contact: "Contact",
      links: [["/references", "Références"], ["/methodes-partenariats", "Approche & méthodes"], ["/socle", "SOCLE®"], ["/qui-sommes-nous", "À propos"], ["/contact", "Contact"]],
      fse: "FSE · Ingénierie incendie",
      legal: [["/mentions-legales", "Mentions légales"], ["/cgv", "CGV"], ["/confidentialite", "Confidentialité"]],
    },
    temps: [["Concevoir", "01"], ["Préparer", "02"], ["Coordonner", "03"], ["Exploiter", "04"], ["Livrer", "05"]],
  },
  en: {
    base: "/en",
    nav: { expertises: "Services", refs: "References", approche: "Approach", about: "About", contact: "Contact", cta: "Let's talk about your project", menu: "Menu", close: "Close" },
    keysTitle: "Key points",
    stripBrand: "ESE — From plan to field",
    contactBand: {
      kick: "Contact", title: "A project<br>to build?",
      text: "A few lines are enough to start. Tell us what you are preparing, where you stand and the support you need.",
      cta: "Let's talk about your project",
    },
    footer: {
      big: "From plan to field",
      about: "Event technical production. Technical direction, engineering, lighting design, production management, stage management and safety expertise, as a full mission or targeted support.",
      metiers: "Services", ese: "ESE", contact: "Contact",
      links: [["/en/references", "References"], ["/en/methodes-partenariats", "Approach & methods"], ["/en/socle", "SOCLE®"], ["/en/qui-sommes-nous", "About"], ["/en/contact", "Contact"]],
      fse: "FSE · Fire engineering",
      legal: [["/mentions-legales", "Legal notice"], ["/en/cgv", "Terms of sale"], ["/confidentialite", "Privacy"]],
    },
    temps: [["Design", "01"], ["Prepare", "02"], ["Coordinate", "03"], ["Operate", "04"], ["Deliver", "05"]],
  },
};

export const METIERS3 = {
  fr: [
    { slug: "direction-technique", n: "01", t: "Direction technique", tl: "Direction<br>technique", tag: "Définir avant de déployer.", kick: "Production technique", img: IMG + "bw_dt.jpg", v: "a",
      keys: [["Le besoin", "Objectifs et contraintes"], ["La faisabilité", "Études et implantations"], ["Les arbitrages", "Options et décisions"]] },
    { slug: "bureau-etudes", n: "02", t: "Bureau d'études & notes de calcul", tl: "Bureau<br>d'études", tag: "Calculer avant de suspendre.", kick: "Ingénierie / Études / Calcul", img: IMG + "bw_be.jpg", v: "d",
      keys: [["Les structures", "Charges, lestage, ancrages"], ["Les plans", "Implantations et synoptiques"], ["Les notes", "Calculs et justificatifs"]] },
    { slug: "design-lumiere", n: "03", t: "Design lumière", tl: "Design<br>lumière", tag: "Écrire la lumière avant d'allumer.", kick: "Création / Lumière / Terrain", img: IMG + "bw_lumiere.jpg", v: "a",
      keys: [["L'intention", "Ambiances et parti pris"], ["Le plan feux", "Implantation et choix des sources"], ["La mise en œuvre", "Pré-visualisation, encodage, réglages"]] },
    { slug: "regie-generale", n: "04", t: "Régie générale", tl: "La régie<br>générale", tag: "Un planning ne pilote pas une production.", kick: "Production / Métiers / Terrain", img: IMG + "bw_rg.jpg", v: "b",
      keys: [["Préparer", "Les moyens et les interfaces"], ["Coordonner", "Les équipes et les prestataires"], ["Adapter", "Les décisions aux réalités du terrain"]] },
    { slug: "stage-management", n: "05", t: "Stage management", tl: "Stage<br>management", tag: "Faire tenir le plateau.", kick: "Production / Métiers / Terrain", img: IMG + "bw_sm.jpg", v: "c",
      keys: [["Le plateau", "Flux et circulation"], ["Le timing", "Entrées, séquences et changements"], ["Les interfaces", "Artistes, équipes et production"]] },
    { slug: "expertise-securite", n: "06", t: "Expertise sécurité", tl: "Expertise<br>sécurité", tag: "Sécuriser sans freiner le projet.", kick: "Production / Exploitation / Sécurité", img: IMG + "bw_secu.jpg", v: "d",
      keys: [["Anticiper", "Identifier les risques"], ["Cadrer", "Réglementation et dispositifs"], ["Accompagner", "Sécuriser l'exploitation"]] },
  ],
  en: [
    { slug: "direction-technique", n: "01", t: "Technical direction", tl: "Technical<br>direction", tag: "Define before you deploy.", kick: "Technical production", img: IMG + "bw_dt.jpg", v: "a",
      keys: [["The brief", "Goals and constraints"], ["Feasibility", "Studies and layouts"], ["Trade-offs", "Options and decisions"]] },
    { slug: "bureau-etudes", n: "02", t: "Engineering & calculations", tl: "Engineering<br>office", tag: "Calculate before you hang.", kick: "Engineering / Studies / Calculations", img: IMG + "bw_be.jpg", v: "d",
      keys: [["Structures", "Loads, ballast, anchoring"], ["Drawings", "Layouts and schematics"], ["Calculations", "Notes and justifications"]] },
    { slug: "design-lumiere", n: "03", t: "Lighting design", tl: "Lighting<br>design", tag: "Write the light before switching it on.", kick: "Creation / Lighting / Field", img: IMG + "bw_lumiere.jpg", v: "a",
      keys: [["The intent", "Moods and creative stance"], ["The lighting plot", "Rigging positions and fixtures"], ["Delivery", "Pre-visualisation, programming, focus"]] },
    { slug: "regie-generale", n: "04", t: "Production management", tl: "Production<br>management", tag: "A schedule doesn't run a production.", kick: "Production / Services / Field", img: IMG + "bw_rg.jpg", v: "b",
      keys: [["Prepare", "Resources and interfaces"], ["Coordinate", "Teams and suppliers"], ["Adapt", "Decisions to field reality"]] },
    { slug: "stage-management", n: "05", t: "Stage management", tl: "Stage<br>management", tag: "Keep the stage running.", kick: "Production / Services / Field", img: IMG + "bw_sm.jpg", v: "c",
      keys: [["The stage", "Flows and circulation"], ["Timing", "Cues, sequences and changeovers"], ["Interfaces", "Artists, crews and production"]] },
    { slug: "expertise-securite", n: "06", t: "Safety expertise", tl: "Safety<br>expertise", tag: "Secure without slowing the project.", kick: "Production / Operations / Safety", img: IMG + "bw_secu.jpg", v: "d",
      keys: [["Anticipate", "Identify risks"], ["Frame", "Regulations and set-ups"], ["Support", "Secure operations"]] },
  ],
};

/* Contenu détaillé des pages métier */
export const METIER_V3 = {
  fr: {
    "direction-technique": {
      lead: "De la rédaction du cahier des charges au pilotage sur site, nous concevons et pilotons la chaîne technique de vos productions : événementiel, live, scénographie.",
      body: ["Nous pouvons prendre un projet à la racine, dès le premier cahier des charges, et le mener jusqu'à la dernière journée de démontage. Ou nous greffer sur une phase précise, quand une équipe a simplement besoin d'un renfort d'ingénierie.",
             "Pour les sites et les organisations qui produisent toute l'année, la direction technique devient récurrente : un même interlocuteur, qui finit par connaître les lieux, les contraintes et les habitudes mieux que personne."],
      perim: ["Rédaction des cahiers des charges techniques.", "Arbitrages de production : choix des outils, des prestataires et des budgets techniques.", "Pilotage des phases de conception : plans Vectorworks, ConnectCAD, Braceworks, MVR.", "Calculs de structures et de rigging.", "Coordination des prestataires techniques en phase de réalisation.", "Direction technique récurrente pour sites, lieux culturels et organisations événementielles."],
      opsT: "Types d'opérations", ops: ["Événementiel corporate", "Culturel & lancements", "Congrès", "Concerts & festivals", "Tournées en stade", "Captations", "Scénographie & expo", "Structures & rigging", "Énergie temporaire"],
      cta: "Parler de votre besoin en direction technique" },
    "bureau-etudes": {
      lead: "Notes de calcul, plans et études techniques : nous produisons les documents qui permettent de valider un dispositif avant qu'il ne soit monté.",
      body: ["Structures scéniques, charges suspendues, ponts, tours, écrans, gradins : chaque élément monté sur un site doit être justifié. Nous modélisons les configurations, calculons les efforts et produisons des notes lisibles par les bureaux de contrôle, les exploitants et les prestataires.",
             "Le bureau d'études intervient en amont d'une production ou en appui ponctuel : une note de calcul pour une accroche, un plan d'implantation pour une commission, un synoptique pour un prestataire."],
      perim: ["Notes de calcul de structures et de charges suspendues (Braceworks, MVR).", "Descentes de charges, lestage, ancrages et prise au vent.", "Plans d'implantation et plans techniques Vectorworks.", "Synoptiques électriques, audio, vidéo et réseau (ConnectCAD).", "Études de faisabilité et dossiers techniques pour bureaux de contrôle et commissions.", "Interface avec les ingénieurs structure et les bureaux de contrôle."],
      opsT: "Livrables", ops: ["Notes de calcul", "Plans d'implantation", "Plans de rigging", "Synoptiques", "Dossiers techniques", "Études de faisabilité", "Modélisation 3D", "Fichiers MVR"],
      cta: "Demander une note de calcul ou une étude" },
    "design-lumiere": {
      lead: "De l'intention artistique au plan feux, nous concevons la lumière de vos événements et la rendons réalisable sur le terrain.",
      body: ["Concert, défilé, cérémonie, convention ou lieu patrimonial : la lumière porte l'image de l'événement. Nous traduisons une intention en plan feux concret, avec des choix de sources, des positions d'accroche et une puissance compatibles avec le lieu et le budget.",
             "Parce que nous pratiquons aussi la direction technique et la régie, le design lumière reste réalisable : il tient compte des structures, de l'énergie disponible, des délais de montage et des contraintes de sécurité."],
      perim: ["Note d'intention et parti pris lumière.", "Plans feux et implantation des sources (Vectorworks Spotlight).", "Pré-visualisation 3D des ambiances.", "Choix du matériel et cahier des charges pour le prestataire lumière.", "Coordination de l'encodage et des réglages sur site.", "Adaptation du design aux contraintes de structure, d'énergie et de sécurité."],
      opsT: "Contextes", ops: ["Concerts", "Défilés & luxe", "Cérémonies", "Conventions", "Lieux patrimoniaux", "Scénographie & expo", "Festivals"],
      cta: "Parler de votre projet lumière" },
    "regie-generale": {
      lead: "Plannings, accès, coactivité, équipes, prestataires, montage, exploitation et démontage : la régie générale fait tenir ensemble des réalités multiples.",
      body: ["Sur une opération ponctuelle, nous assemblons et pilotons la régie du premier camion au dernier. Sur la durée, nous prenons en charge la régie d'un site, d'un lieu culturel ou d'une tournée entière.",
             "Selon le dossier, nous menons la régie seuls ou venons compléter une équipe déjà en place, en prenant exactement le périmètre dont l'organisateur a besoin, ni plus, ni moins."],
      perim: ["Coordination opérationnelle sur site et pilotage du déroulé.", "Planning de montage et de démontage.", "Pilotage des équipes et des prestataires techniques.", "Interface avec l'organisateur, les artistes, les lieux et les autorités.", "Assemblage d'une équipe à façon, calibrée pour le format et le risque opérationnel de chaque dossier."],
      opsT: "Types d'opérations", ops: ["Événementiel corporate", "Agences", "Spectacle vivant & live", "Festivals", "Salles", "Régie de site", "Lieux culturels", "Tournées", "Expo & muséo"],
      cta: "Trouver un appui en régie générale" },
    "stage-management": {
      lead: "De la préparation des conduites à la coordination du plateau, le stage management assure la continuité entre artistes, intervenants, équipes techniques et production.",
      body: ["Nous intervenons en renfort sur un plateau précis ou au sein d'un dispositif de régie plus large, sur les festivals, les cérémonies, les concerts et les événements à séquences multiples.",
             "Le rôle est simple à dire et exigeant à tenir : que chaque entrée, chaque changement et chaque séquence arrive au bon moment, avec les bonnes personnes au bon endroit."],
      perim: ["Préparation des conduites et des feuilles de route plateau.", "Coordination des entrées, des changements et des séquences.", "Gestion des flux plateau et des circulations coulisses.", "Lien permanent entre artistes, intervenants, technique et production.", "Stage management festival et outdoor."],
      opsT: "Contextes", ops: ["Festivals", "Outdoor", "Cérémonies", "Concerts", "Plateaux multi-artistes", "Conventions", "Événements institutionnels"],
      cta: "Parler du plateau et de la conduite" },
    "expertise-securite": {
      lead: "Notices de sécurité et accompagnement face aux autorités, par un expert événementiel, pas un bureau de contrôle.",
      body: ["Cela peut être une notice et un passage en commission sur une seule opération. Ou un accompagnement long : la gouvernance sécurité d'un site, le suivi d'un festival sur plusieurs éditions, un lieu culturel qui se transforme.",
             "Dans tous les cas, nous restons l'interlocuteur technique de l'opérateur face aux autorités : un appui d'expert qui connaît le terrain, pas un contrôle de plus."],
      perim: ["Notice de sécurité ERP événementiel (types CTS, PA, L, T).", "Dossier d'autorisation préfectorale, mairie, DOET.", "Accompagnement en commission de sécurité.", "Notice ERP de transformation de site et de lieu culturel.", "Audit de gouvernance sécurité d'organisation.", "Accessibilité PMR."],
      opsT: "Interlocuteurs", ops: ["Préfecture", "Mairie", "Commission de sécurité", "SDIS", "DOET"],
      cta: "Présenter votre dossier",
      qualif: { title: "Une qualification rare dans le métier", text: "L'expertise sécurité d'ESE est portée par une qualification AP2 ENSOSP. Elle permet de produire et signer des notices de sécurité ERP, d'accompagner les opérateurs auprès des autorités et d'intervenir en commission de sécurité, depuis la posture d'un expert événementiel." } },
  },
  en: {
    "direction-technique": {
      lead: "From writing the technical specifications to on-site management, we design and run the technical chain of your productions: events, live, scenography.",
      body: ["We can take a project from the root, from the very first specification, through to the last day of strike. Or step into a specific phase, when a team simply needs engineering support.",
             "For venues and organisations that produce all year round, technical direction becomes recurring: one point of contact who ends up knowing the venues, constraints and habits better than anyone."],
      perim: ["Writing technical specifications.", "Production trade-offs: tools, suppliers and technical budgets.", "Managing design phases: Vectorworks, ConnectCAD, Braceworks, MVR drawings.", "Structural and rigging calculations.", "Coordinating technical suppliers during delivery.", "Recurring technical direction for venues, cultural sites and event organisations."],
      opsT: "Types of operations", ops: ["Corporate events", "Cultural & launches", "Conferences", "Concerts & festivals", "Stadium tours", "Broadcasts", "Scenography & exhibitions", "Structures & rigging", "Temporary power"],
      cta: "Discuss your technical direction needs" },
    "bureau-etudes": {
      lead: "Calculation notes, drawings and technical studies: we produce the documents that validate a set-up before it is built.",
      body: ["Stage structures, suspended loads, trusses, towers, screens, grandstands: every element built on site must be justified. We model the configurations, calculate the forces and produce notes that inspection bodies, venue operators and suppliers can read.",
             "The engineering office works upstream of a production or as one-off support: a calculation note for a rigging point, a layout for a safety commission, a schematic for a supplier."],
      perim: ["Calculation notes for structures and suspended loads (Braceworks, MVR).", "Load paths, ballast, anchoring and wind loading.", "Vectorworks layouts and technical drawings.", "Power, audio, video and network schematics (ConnectCAD).", "Feasibility studies and technical files for inspection bodies and commissions.", "Interface with structural engineers and inspection bodies."],
      opsT: "Deliverables", ops: ["Calculation notes", "Layouts", "Rigging plots", "Schematics", "Technical files", "Feasibility studies", "3D modelling", "MVR files"],
      cta: "Request a calculation note or a study" },
    "design-lumiere": {
      lead: "From artistic intent to lighting plot, we design the lighting of your events and make it deliverable on site.",
      body: ["Concert, fashion show, ceremony, convention or heritage venue: lighting carries the image of the event. We turn an intent into a concrete lighting plot, with fixtures, rigging positions and power that fit the venue and the budget.",
             "Because we also practise technical direction and production management, the lighting design stays deliverable: it takes structures, available power, load-in time and safety constraints into account."],
      perim: ["Lighting intent and creative stance.", "Lighting plots and fixture positions (Vectorworks Spotlight).", "3D pre-visualisation of moods.", "Equipment choice and specifications for the lighting supplier.", "Coordinating programming and focus on site.", "Adapting the design to structural, power and safety constraints."],
      opsT: "Contexts", ops: ["Concerts", "Fashion & luxury", "Ceremonies", "Conventions", "Heritage venues", "Scenography & exhibitions", "Festivals"],
      cta: "Talk about your lighting project" },
    "regie-generale": {
      lead: "Schedules, access, co-activity, crews, suppliers, load-in, show and strike: production management holds many realities together.",
      body: ["On a one-off operation, we assemble and run production management from the first truck to the last. Over time, we take charge of a venue, a cultural site or an entire tour.",
             "Depending on the brief, we run production management on our own or complement an existing team, taking exactly the scope the organiser needs, no more, no less."],
      perim: ["On-site operational coordination and running order management.", "Load-in and strike scheduling.", "Managing crews and technical suppliers.", "Interface with the organiser, artists, venues and authorities.", "Tailor-made team, calibrated to the format and operational risk of each project."],
      opsT: "Types of operations", ops: ["Corporate events", "Agencies", "Live & performing arts", "Festivals", "Venues", "Site management", "Cultural sites", "Tours", "Exhibitions"],
      cta: "Find production management support" },
    "stage-management": {
      lead: "From preparing cue sheets to coordinating the stage, stage management ensures continuity between artists, speakers, technical crews and production.",
      body: ["We step in on a specific stage or within a wider production management set-up, on festivals, ceremonies, concerts and multi-sequence events.",
             "The role is simple to describe and demanding to deliver: every entrance, changeover and sequence happens on time, with the right people in the right place."],
      perim: ["Preparing cue sheets and stage running orders.", "Coordinating entrances, changeovers and sequences.", "Managing stage flows and backstage circulation.", "Constant link between artists, speakers, technical crews and production.", "Festival and outdoor stage management."],
      opsT: "Contexts", ops: ["Festivals", "Outdoor", "Ceremonies", "Concerts", "Multi-artist stages", "Conventions", "Institutional events"],
      cta: "Talk about the stage and show calling" },
    "expertise-securite": {
      lead: "Fire safety reports and support before the authorities, from an event specialist, not an inspection body.",
      body: ["It can be a single report and a safety commission hearing for one operation. Or long-term support: safety governance for a venue, a festival over several editions, a cultural site in transformation.",
             "In every case, we remain the operator's technical point of contact before the authorities: expert support that knows the field, not one more inspection."],
      perim: ["ERP event fire safety reports (types CTS, PA, L, T).", "Prefecture, city hall and DOET authorisation files.", "Support at safety commission hearings.", "ERP reports for venue and cultural site transformation.", "Organisational safety governance audit.", "Accessibility for people with reduced mobility."],
      opsT: "Authorities", ops: ["Prefecture", "City hall", "Safety commission", "Fire & rescue (SDIS)", "DOET"],
      cta: "Present your project",
      qualif: { title: "A rare qualification in the trade", text: "ESE's safety expertise is underpinned by an AP2 ENSOSP qualification. It allows us to produce and sign ERP fire safety reports, support operators before the authorities and attend safety commissions, from the standpoint of an event specialist." } },
  },
};

export const REFS3 = {
  fr: [
    { slug: "jo-paris-2024", yr: "2024", t: "JO / JOP Paris 2024", cat: "Cérémonie", f: "ceremonie", lieu: "Paris", mis: "Direction technique · expertise multi-métiers", img: "/images/jo-para.jpg" },
    { yr: "—", t: "Tournées en stade", cat: "Concert · tournée", f: "concert", lieu: "Mylène Farmer · JUL · Ninho · AC/DC", mis: "Direction technique live · rigging · structures", img: "/images/stade-concert.jpg" },
    { yr: "2023", t: "Louis Vuitton", cat: "Défilé · luxe", f: "mode", lieu: "Paris · aussi Garnier, Vichy", mis: "Direction technique · scénographie", img: "/images/direction-technique/luxe-louis-vuitton.jpg" },
    { yr: "2025", t: "UNOC Nice", cat: "Sommet institutionnel", f: "institutionnel", lieu: "United Nations Ocean Conference", mis: "Direction technique multi-métiers", img: "/images/expertise-securite/unoc-nice.jpg" },
    { yr: "—", t: "DJ sets internationaux", cat: "Clubbing & live", f: "live", lieu: "Mochakk · Adriatique · Blondish", mis: "Direction technique · régie live", img: "/images/direction-technique/dj-mochakk.jpg" },
  ],
  en: [
    { slug: "jo-paris-2024", yr: "2024", t: "Paris 2024 Games", cat: "Ceremony", f: "ceremonie", lieu: "Paris", mis: "Technical direction · multi-discipline expertise", img: "/images/jo-para.jpg" },
    { yr: "—", t: "Stadium tours", cat: "Concert · tour", f: "concert", lieu: "Mylène Farmer · JUL · Ninho · AC/DC", mis: "Live technical direction · rigging · structures", img: "/images/stade-concert.jpg" },
    { yr: "2023", t: "Louis Vuitton", cat: "Fashion · luxury", f: "mode", lieu: "Paris · also Garnier, Vichy", mis: "Technical direction · scenography", img: "/images/direction-technique/luxe-louis-vuitton.jpg" },
    { yr: "2025", t: "UNOC Nice", cat: "Institutional summit", f: "institutionnel", lieu: "United Nations Ocean Conference", mis: "Multi-discipline technical direction", img: "/images/expertise-securite/unoc-nice.jpg" },
    { yr: "—", t: "International DJ sets", cat: "Clubbing & live", f: "live", lieu: "Mochakk · Adriatique · Blondish", mis: "Technical direction · live production", img: "/images/direction-technique/dj-mochakk.jpg" },
  ],
};

export const APPROCHE = {
  fr: [
    { n: "01", t: "Concevoir", title: "Définir avant<br>de déployer.", sub: "Comprendre l'intention du projet et vérifier sa traduction technique, humaine et réglementaire.", keys: [["Le besoin", "Objectifs et contraintes"], ["La faisabilité", "Études et implantations"], ["Les arbitrages", "Options et décisions"]], img: IMG + "bw_dt.jpg", v: "a" },
    { n: "02", t: "Préparer", title: "Tout ne tient pas<br>sur un plan.", sub: "Une production se prépare dans le détail : moyens, accès, équipes, interfaces et calendrier.", keys: [["Les moyens", "Personnel et ressources"], ["Le phasage", "Montage et exploitation"], ["Les interfaces", "Équipes et prestataires"]], img: IMG + "bw_truss.jpg", v: "b" },
    { n: "03", t: "Coordonner", title: "Un projet.<br>Des équipes.", sub: "Mettre chaque intervenant au bon endroit, au bon moment, avec les bonnes informations.", keys: [["La régie", "Pilotage et priorités"], ["Le plateau", "Conduite et circulation"], ["Les équipes", "Briefings et coordination"]], img: IMG + "bw_rg.jpg", v: "c" },
    { n: "04", t: "Exploiter", title: "Tenir le cap.<br>S'adapter.", sub: "Sur le terrain, il faut suivre le réel, prendre les décisions et sécuriser l'exécution.", keys: [["La conduite", "Exploitation du dispositif"], ["Les aléas", "Anticipation et arbitrages"], ["La sécurité", "Vigilance à chaque étape"]], img: IMG + "bw_secu.jpg", v: "d" },
    { n: "05", t: "Livrer", title: "Ça ne s'arrête<br>pas au show.", sub: "Démontage, repli et retour d'expérience : la fin de l'événement fait aussi partie du métier.", keys: [["Le repli", "Démontage et logistique"], ["La restitution", "Remise en état des lieux"], ["Le retour", "Bilan et amélioration"]], img: IMG + "bw_livrer.jpg", v: "a" },
  ],
  en: [
    { n: "01", t: "Design", title: "Define before<br>you deploy.", sub: "Understand the intent of the project and check its technical, human and regulatory translation.", keys: [["The brief", "Goals and constraints"], ["Feasibility", "Studies and layouts"], ["Trade-offs", "Options and decisions"]], img: IMG + "bw_dt.jpg", v: "a" },
    { n: "02", t: "Prepare", title: "Not everything<br>fits on a plan.", sub: "A production is prepared in detail: resources, access, crews, interfaces and schedule.", keys: [["Resources", "Staff and equipment"], ["Phasing", "Load-in and show"], ["Interfaces", "Crews and suppliers"]], img: IMG + "bw_truss.jpg", v: "b" },
    { n: "03", t: "Coordinate", title: "One project.<br>Many crews.", sub: "Put every contributor in the right place, at the right time, with the right information.", keys: [["Production office", "Steering and priorities"], ["The stage", "Show calling and flows"], ["Crews", "Briefings and coordination"]], img: IMG + "bw_rg.jpg", v: "c" },
    { n: "04", t: "Operate", title: "Hold the course.<br>Adapt.", sub: "On site, you follow reality, make the calls and secure the execution.", keys: [["Running", "Operating the set-up"], ["The unexpected", "Anticipation and decisions"], ["Safety", "Vigilance at every step"]], img: IMG + "bw_secu.jpg", v: "d" },
    { n: "05", t: "Deliver", title: "It doesn't end<br>with the show.", sub: "Strike, load-out and debrief: the end of the event is part of the job too.", keys: [["Load-out", "Strike and logistics"], ["Hand-back", "Restoring the venue"], ["Debrief", "Review and improvement"]], img: IMG + "bw_livrer.jpg", v: "a" },
  ],
};

export const FAQ3 = {
  fr: [
    ["Intervenez-vous aussi sur de petites missions ?", "Oui. Nous intervenons aussi bien sur une cérémonie olympique ou une tournée en stade que sur un événement de moyenne envergure, un lancement produit ou une opération confidentielle. C'est le besoin qui définit le périmètre, pas la taille."],
    ["Peut-on vous solliciter pour un seul métier ?", "Oui. Direction technique, régie générale, stage management et expertise sécurité fonctionnent ensemble ou séparément. Nous pouvons porter une production de bout en bout, ou intervenir en renfort d'une équipe déjà en place."],
    ["Pouvez-vous produire et signer une notice de sécurité ERP ?", "Oui. Notre expertise sécurité est portée par une qualification AP2 ENSOSP. Nous produisons les notices de sécurité ERP (types CTS, PA, L, T) et accompagnons les opérateurs en commission de sécurité, face à la préfecture, la mairie et le SDIS."],
    ["Fournissez-vous le matériel ?", "Notre rôle est la conception, la coordination et le pilotage. Nous choisissons et coordonnons les prestataires qui fournissent le matériel, selon ce qui est prévu au contrat."],
    ["Intervenez-vous en province et à l'international ?", "Oui. Nous sommes basés à Paris et intervenons partout en France et à l'international : tournées, festivals, sommets institutionnels."],
    ["Qu'est-ce que SOCLE® ?", "SOCLE® est la méthode propriétaire d'ESE (marque déposée à l'INPI) pour structurer la production technique des bureaux d'études et agences sur l'écosystème Vectorworks."],
  ],
  en: [
    ["Do you also take on small assignments?", "Yes. We work on Olympic ceremonies and stadium tours just as readily as on mid-scale events, product launches or confidential operations. The brief defines the scope, not the size."],
    ["Can we bring you in for just one service?", "Yes. Technical direction, production management, stage management and safety expertise work together or independently. We can carry a production end to end, or support an existing team."],
    ["Can you produce and sign an ERP fire safety report?", "Yes. Our safety expertise is underpinned by an AP2 ENSOSP qualification. We produce ERP fire safety reports (types CTS, PA, L, T) and support operators at safety commission hearings, before the prefecture, city hall and fire & rescue service."],
    ["Do you supply the equipment?", "Our role is design, coordination and management. We select and coordinate the suppliers who provide the equipment, as set out in the contract."],
    ["Do you work outside Paris and internationally?", "Yes. We are based in Paris and work anywhere in France and internationally: tours, festivals, institutional summits."],
    ["What is SOCLE®?", "SOCLE® is ESE's proprietary method (trademark registered with the INPI) for structuring the technical production of design offices and agencies on the Vectorworks ecosystem."],
  ],
};

export const SEO3 = {
  fr: {
    home: { title: "ESE · Direction technique, régie générale & production événementielle", description: "ESE accompagne la production technique de vos événements : direction technique, régie générale, stage management et expertise sécurité, en mission globale ou ponctuelle." },
    metiers: { title: "Expertises · ESE", description: "Direction technique, bureau d'études et notes de calcul, design lumière, régie générale, stage management et expertise sécurité : les six métiers d'ESE." },
    "bureau-etudes": { title: "Bureau d'études & notes de calcul événementielles · ESE", description: "Notes de calcul de structures et charges suspendues, plans d'implantation, synoptiques et études techniques pour l'événementiel. Braceworks, MVR, Vectorworks, ConnectCAD." },
    "design-lumiere": { title: "Design lumière événementiel · ESE", description: "Design lumière pour concerts, défilés, cérémonies et conventions : intention, plans feux, pré-visualisation, encodage et réglages sur site." },
    "stage-management": { title: "Stage management événementiel · ESE", description: "Stage management : préparation des conduites, coordination du plateau, flux et séquences. Festivals, cérémonies, concerts, événements multi-séquences." },
    fiche: { title: "JO / JOP Paris 2024 · Références ESE", description: "Cérémonies d'ouverture des Jeux Olympiques et Paralympiques de Paris 2024 : direction technique et expertise multi-métiers d'ESE." },
  },
  en: {
    home: { title: "ESE · Technical direction, production management & event production", description: "ESE supports the technical production of your events: technical direction, production management, stage management and safety expertise, as a full mission or targeted support." },
    metiers: { title: "Services · ESE", description: "Technical direction, engineering and calculations, lighting design, production management, stage management and safety expertise: ESE's six services." },
    "bureau-etudes": { title: "Event engineering office & calculation notes · ESE", description: "Calculation notes for structures and suspended loads, layouts, schematics and technical studies for events. Braceworks, MVR, Vectorworks, ConnectCAD." },
    "design-lumiere": { title: "Event lighting design · ESE", description: "Lighting design for concerts, fashion shows, ceremonies and conventions: intent, lighting plots, pre-visualisation, programming and focus on site." },
    "stage-management": { title: "Event stage management · ESE", description: "Stage management: cue sheets, stage coordination, flows and sequences. Festivals, ceremonies, concerts, multi-sequence events." },
    fiche: { title: "Paris 2024 Olympic & Paralympic ceremonies · ESE References", description: "Opening ceremonies of the Paris 2024 Olympic and Paralympic Games: ESE's technical direction and multi-discipline expertise." },
  },
};

/* Titre + point bleu : le point remplace le point final et reste collé au dernier mot */
export const dt = (s) =>
  String(s).replace(/\.\s*$/, "").replace(/([^\s>]+)\s*$/, '<span class="nw">$1<span class="dot" aria-hidden="true"></span></span>');

/* Nombre total de métiers, affiché « 02 / 06 » */
for (const l of ["fr", "en"]) METIERS3[l].forEach((m) => { m.of = pad(METIERS3[l].length); });
