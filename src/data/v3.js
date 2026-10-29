/* ESE · refonte V3 « Du plan au terrain » : contenus bilingues
   Langage graphique aligné sur la communication (posts réseaux). */

const IMG = "/images/v3/";
const pad = (n) => String(n).padStart(2, "0");

export const T = {
  fr: {
    base: "",
    nav: { expertises: "Expertises", refs: "Références", approche: "Approche", about: "À propos", contact: "Contact", cta: "Demander un devis", menu: "Menu", close: "Fermer" },
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
      links: [["/references", "Références"], ["/methodes-partenariats", "Approche & méthodes"], ["/socle", "SOCLE®"], ["/guides", "Guides pratiques"], ["/journal", "Journal de terrain"], ["/qui-sommes-nous", "À propos"], ["/contact", "Contact"]],
      fse: "FSE · Ingénierie incendie",
      nmd: "NOT MY DPT · Stickers pour techniciens",
      legal: [["/mentions-legales", "Mentions légales"], ["/cgv", "CGV"], ["/confidentialite", "Confidentialité"]],
    },
    temps: [["Concevoir", "01"], ["Préparer", "02"], ["Coordonner", "03"], ["Exploiter", "04"], ["Restituer", "05"]],
  },
  en: {
    base: "/en",
    nav: { expertises: "Services", refs: "References", approche: "Approach", about: "About", contact: "Contact", cta: "Request a quote", menu: "Menu", close: "Close" },
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
      nmd: "NOT MY DPT · Stickers for stage crew",
      legal: [["/mentions-legales", "Legal notice"], ["/en/cgv", "Terms of sale"], ["/confidentialite", "Privacy"]],
    },
    temps: [["Design", "01"], ["Prepare", "02"], ["Coordinate", "03"], ["Operate", "04"], ["Hand back", "05"]],
  },
};

export const METIERS3 = {
  fr: [
    { slug: "direction-technique", what: "Nous concevons et pilotons toute la chaîne technique d'un événement : choix techniques, plans, prestataires, budget.", n: "01", t: "Direction technique", tl: "Direction<br>technique", tag: "Définir avant de déployer.", kick: "Production technique", img: IMG + "bw_dt.jpg", v: "a",
      keys: [["Le besoin", "Objectifs et contraintes"], ["La faisabilité", "Études et implantations"], ["Les arbitrages", "Options et décisions"]] },
    { slug: "bureau-etudes", what: "Nous produisons les notes de calcul, plans et études qui justifient un dispositif avant son montage.", n: "02", t: "Bureau d'études & notes de calcul", tl: "Bureau<br>d'études", tag: "Calculer avant de suspendre.", kick: "Ingénierie / Études / Calcul", img: IMG + "bw_be.jpg", v: "d",
      keys: [["Les structures", "Charges, lestage, ancrages"], ["Les plans", "Implantations et synoptiques"], ["Les notes", "Calculs et justificatifs"]] },
    { slug: "design-lumiere", what: "Nous concevons la lumière de l'événement, de l'intention au plan feux, et la rendons réalisable.", n: "03", t: "Design lumière", tl: "Design<br>lumière", tag: "Écrire la lumière avant d'allumer.", kick: "Création / Lumière / Terrain", img: IMG + "bw_lumiere.jpg", v: "a",
      keys: [["L'intention", "Ambiances et parti pris"], ["Le plan feux", "Implantation et choix des sources"], ["La mise en œuvre", "Pré-visualisation, encodage, réglages"]] },
    { slug: "regie-generale", what: "Nous coordonnons le site : planning, accès, équipes et prestataires, du montage au démontage.", n: "04", t: "Régie générale", tl: "La régie<br>générale", tag: "Un planning ne pilote pas une production.", kick: "Production / Métiers / Terrain", img: IMG + "bw_rg.jpg", v: "b",
      keys: [["Préparer", "Les moyens et les interfaces"], ["Coordonner", "Les équipes et les prestataires"], ["Adapter", "Les décisions aux réalités du terrain"]] },
    { slug: "stage-management", what: "Nous tenons le plateau : conduites, entrées, changements et timing pendant le show.", n: "05", t: "Stage management", tl: "Stage<br>management", tag: "Faire tenir le plateau.", kick: "Production / Métiers / Terrain", img: IMG + "bw_sm.jpg", v: "c",
      keys: [["Le plateau", "Flux et circulation"], ["Le timing", "Entrées, séquences et changements"], ["Les interfaces", "Artistes, équipes et production"]] },
    { slug: "expertise-securite", what: "Nous préparons les dossiers de sécurité et vous accompagnons face aux autorités (qualification AP2 ENSOSP).", n: "06", t: "Expertise sécurité", tl: "Expertise<br>sécurité", tag: "Sécuriser sans freiner le projet.", kick: "Production / Exploitation / Sécurité", img: "/images/v3/bw_reunion_terrain.jpg", v: "d",
      keys: [["Anticiper", "Identifier les risques"], ["Cadrer", "Réglementation et dispositifs"], ["Accompagner", "Sécuriser l'exploitation"]] },
  ],
  en: [
    { slug: "direction-technique", what: "We design and run the whole technical chain of an event: technical choices, drawings, suppliers, budget.", n: "01", t: "Technical direction", tl: "Technical<br>direction", tag: "Define before you deploy.", kick: "Technical production", img: IMG + "bw_dt.jpg", v: "a",
      keys: [["The brief", "Goals and constraints"], ["Feasibility", "Studies and layouts"], ["Trade-offs", "Options and decisions"]] },
    { slug: "bureau-etudes", what: "We produce the calculation notes, drawings and studies that justify a set-up before it is built.", n: "02", t: "Engineering & calculations", tl: "Engineering<br>office", tag: "Calculate before you hang.", kick: "Engineering / Studies / Calculations", img: IMG + "bw_be.jpg", v: "d",
      keys: [["Structures", "Loads, ballast, anchoring"], ["Drawings", "Layouts and schematics"], ["Calculations", "Notes and justifications"]] },
    { slug: "design-lumiere", what: "We design the event's lighting, from intent to lighting plot, and make it deliverable.", n: "03", t: "Lighting design", tl: "Lighting<br>design", tag: "Write the light before switching it on.", kick: "Creation / Lighting / Field", img: IMG + "bw_lumiere.jpg", v: "a",
      keys: [["The intent", "Moods and creative stance"], ["The lighting plot", "Rigging positions and fixtures"], ["Delivery", "Pre-visualisation, programming, focus"]] },
    { slug: "regie-generale", what: "We coordinate the site: schedule, access, crews and suppliers, from load-in to strike.", n: "04", t: "Production management", tl: "Production<br>management", tag: "A schedule doesn't run a production.", kick: "Production / Services / Field", img: IMG + "bw_rg.jpg", v: "b",
      keys: [["Prepare", "Resources and interfaces"], ["Coordinate", "Teams and suppliers"], ["Adapt", "Decisions to field reality"]] },
    { slug: "stage-management", what: "We run the stage: cue sheets, entrances, changeovers and timing during the show.", n: "05", t: "Stage management", tl: "Stage<br>management", tag: "Keep the stage running.", kick: "Production / Services / Field", img: IMG + "bw_sm.jpg", v: "c",
      keys: [["The stage", "Flows and circulation"], ["Timing", "Cues, sequences and changeovers"], ["Interfaces", "Artists, crews and production"]] },
    { slug: "expertise-securite", what: "We prepare safety files and support you before the authorities (AP2 ENSOSP qualification).", n: "06", t: "Safety expertise", tl: "Safety<br>expertise", tag: "Secure without slowing the project.", kick: "Production / Operations / Safety", img: "/images/v3/bw_reunion_terrain.jpg", v: "d",
      keys: [["Anticipate", "Identify risks"], ["Frame", "Regulations and set-ups"], ["Support", "Secure operations"]] },
  ],
};

/* Contenu détaillé des pages métier */
export const METIER_V3 = {
  fr: {
    "direction-technique": {
      liv: ["Cahier des charges technique", "Plans et synoptiques de production", "Budget technique et suivi", "Consultation et choix des prestataires", "Planning de production", "Dossier technique de l'événement"],
      when: ["Vous lancez un événement et il faut cadrer la technique dès le départ.", "Vos prestataires sont nombreux et personne ne tient l'ensemble.", "Un lieu ou une organisation produit toute l'année et veut un interlocuteur technique unique."],
      lead: "De la rédaction du cahier des charges au pilotage sur site, nous concevons et pilotons la chaîne technique de vos productions : événementiel, live, scénographie.",
      body: ["Nous pouvons prendre un projet à la racine, dès le premier cahier des charges, et le mener jusqu'à la dernière journée de démontage. Ou nous greffer sur une phase précise, quand une équipe a simplement besoin d'un renfort d'ingénierie.",
             "Pour les sites et les organisations qui produisent toute l'année, la direction technique devient récurrente : un même interlocuteur, qui finit par connaître les lieux, les contraintes et les habitudes mieux que personne."],
      perim: ["Rédaction des cahiers des charges techniques.", "Arbitrages de production : choix des outils, des prestataires et des budgets techniques.", "Pilotage des phases de conception : plans Vectorworks, ConnectCAD, Braceworks, MVR.", "Coordination des études de structures et de rigging avec notre bureau d'études.", "Suivi du budget technique.", "Coordination des prestataires techniques en phase de réalisation.", "Direction technique récurrente pour sites, lieux culturels et organisations événementielles."],
      opsT: "Types d'opérations", ops: ["Événementiel corporate", "Culturel & lancements", "Congrès", "Concerts & festivals", "Tournées en stade", "Captations", "Scénographie & expo", "Structures & rigging", "Énergie temporaire"],
      cta: "Parler de votre besoin en direction technique" },
    "bureau-etudes": {
      liv: ["Notes de calcul", "Plans d'implantation", "Plans de rigging", "Synoptiques", "Dossiers techniques", "Fichiers MVR et modélisation 3D"],
      when: ["Une structure, un pont ou un écran doit être accroché et il faut le justifier.", "Le bureau de contrôle ou la commission demande un plan ou une note.", "Un prestataire a besoin d'un synoptique ou d'un plan d'implantation propre."],
      lead: "Plans, synoptiques, études et notes de calcul : nous produisons les documents qui permettent de valider un dispositif avant son montage. Les notes de calcul de structure sont vérifiées et signées par un ingénieur structure partenaire.",
      body: ["Structures scéniques, charges suspendues, ponts, tours, écrans, gradins : chaque élément monté sur un site doit être justifié. Nous modélisons les configurations, calculons les efforts et produisons des notes lisibles par les bureaux de contrôle, les exploitants et les prestataires.",
             "Le bureau d'études intervient en amont d'une production ou en appui ponctuel : une note de calcul pour une accroche, un plan d'implantation pour une commission, un synoptique pour un prestataire."],
      perim: ["Notes de calcul de structures et de charges suspendues (Braceworks, MVR).", "Descentes de charges, lestage, ancrages et prise au vent.", "Plans d'implantation et plans techniques Vectorworks.", "Synoptiques électriques, audio, vidéo et réseau (ConnectCAD).", "Études de faisabilité et dossiers techniques pour bureaux de contrôle et commissions.", "Interface avec les ingénieurs structure et les bureaux de contrôle.", "Notes de calcul signées par un ingénieur structure partenaire."],
      opsT: "Livrables", ops: ["Notes de calcul", "Plans d'implantation", "Plans de rigging", "Synoptiques", "Dossiers techniques", "Études de faisabilité", "Modélisation 3D", "Fichiers MVR"],
      cta: "Demander une note de calcul ou une étude" },
    "design-lumiere": {
      liv: ["Note d'intention lumière", "Plan feux et implantation des sources", "Pré-visualisation 3D", "Cahier des charges pour le prestataire lumière", "Suivi de l'encodage et des réglages sur site"],
      when: ["Vous voulez une identité lumière pour un concert, un défilé ou une cérémonie.", "Il faut un plan feux et un cahier des charges pour consulter les prestataires.", "Le design existe mais doit être adapté au lieu, à l'énergie ou au budget."],
      lead: "De l'intention artistique au plan feux, nous concevons la lumière de vos événements et la rendons réalisable sur le terrain.",
      body: ["Concert, défilé, cérémonie, convention ou lieu patrimonial : la lumière porte l'image de l'événement. Nous traduisons une intention en plan feux concret, avec des choix de sources, des positions d'accroche et une puissance compatibles avec le lieu et le budget.",
             "Parce que nous pratiquons aussi la direction technique et la régie, le design lumière reste réalisable : il tient compte des structures, de l'énergie disponible, des délais de montage et des contraintes de sécurité."],
      perim: ["Note d'intention et parti pris lumière.", "Plans feux et implantation des sources (Vectorworks Spotlight).", "Pré-visualisation 3D des ambiances.", "Choix du matériel et cahier des charges pour le prestataire lumière.", "Coordination de l'encodage et des réglages sur site.", "Adaptation du design aux contraintes de structure, d'énergie et de sécurité."],
      opsT: "Contextes", ops: ["Concerts", "Défilés & luxe", "Cérémonies", "Conventions", "Lieux patrimoniaux", "Scénographie & expo", "Festivals"],
      cta: "Parler de votre projet lumière" },
    "regie-generale": {
      liv: ["Planning de montage et de démontage", "Organisation des accès et de la coactivité", "Feuilles de route des équipes et prestataires", "Coordination sur site, du premier camion au dernier", "Équipe de régie calibrée pour le dossier"],
      when: ["Le montage implique beaucoup d'équipes sur un temps court.", "Il faut un régisseur général pour quelques jours ou pour toute une tournée.", "Un lieu culturel ou un site a besoin d'une régie à l'année."],
      lead: "Plannings, accès, coactivité, équipes, prestataires, montage, exploitation et démontage : la régie générale fait tenir ensemble des réalités multiples.",
      body: ["Sur une opération ponctuelle, nous assemblons et pilotons la régie du premier camion au dernier. Sur la durée, nous prenons en charge la régie d'un site, d'un lieu culturel ou d'une tournée entière.",
             "Selon le dossier, nous menons la régie seuls ou venons compléter une équipe déjà en place, en prenant exactement le périmètre dont l'organisateur a besoin, ni plus, ni moins."],
      perim: ["Coordination opérationnelle sur site et pilotage du déroulé.", "Planning de montage et de démontage.", "Pilotage des équipes et des prestataires techniques.", "Interface avec l'organisateur, les artistes, les lieux et les autorités.", "Assemblage d'une équipe à façon, calibrée pour le format et le risque opérationnel de chaque dossier."],
      opsT: "Types d'opérations", ops: ["Événementiel corporate", "Agences", "Spectacle vivant & live", "Festivals", "Salles", "Régie de site", "Lieux culturels", "Tournées", "Expo & muséo"],
      cta: "Trouver un appui en régie générale" },
    "stage-management": {
      liv: ["Conduites et feuilles de route plateau", "Timing des entrées, changements et séquences", "Organisation des circulations coulisses", "Lien plateau entre artistes, technique et production"],
      when: ["Le plateau enchaîne artistes, intervenants et changements rapides.", "Vous avez besoin d'un stage manager en renfort de votre équipe.", "Une cérémonie ou une convention suit une conduite minutée."],
      lead: "De la préparation des conduites à la coordination du plateau, le stage management assure la continuité entre artistes, intervenants, équipes techniques et production.",
      body: ["Nous intervenons en renfort sur un plateau précis ou au sein d'un dispositif de régie plus large, sur les festivals, les cérémonies, les concerts et les événements à séquences multiples.",
             "Le rôle est simple à dire et exigeant à tenir : que chaque entrée, chaque changement et chaque séquence arrive au bon moment, avec les bonnes personnes au bon endroit."],
      perim: ["Préparation des conduites et des feuilles de route plateau.", "Coordination des entrées, des changements et des séquences.", "Gestion des flux plateau et des circulations coulisses.", "Lien permanent entre artistes, intervenants, technique et production.", "Stage management festival et outdoor."],
      opsT: "Contextes", ops: ["Festivals", "Outdoor", "Cérémonies", "Concerts", "Plateaux multi-artistes", "Conventions", "Événements institutionnels"],
      cta: "Parler du plateau et de la conduite" },
    "expertise-securite": {
      liv: ["Notice de sécurité ERP", "Dossier d'autorisation (préfecture, mairie)", "Accompagnement en commission de sécurité", "Notice de transformation de site ou de lieu", "Audit de gouvernance sécurité", "Volet accessibilité PMR"],
      when: ["Votre événement doit passer en commission de sécurité.", "Il faut une notice de sécurité ERP pour un lieu ou une configuration.", "Un site ou un festival veut structurer sa sécurité sur la durée."],
      lead: "Notices de sécurité et accompagnement face aux autorités, par un expert événementiel, pas un bureau de contrôle.",
      body: ["Cela peut être une notice et un passage en commission sur une seule opération. Ou un accompagnement long : la gouvernance sécurité d'un site, le suivi d'un festival sur plusieurs éditions, un lieu culturel qui se transforme.",
             "Dans tous les cas, nous restons l'interlocuteur technique de l'opérateur face aux autorités : un appui d'expert qui connaît le terrain, pas un contrôle de plus."],
      perim: ["Notice de sécurité ERP événementiel (types CTS, PA, L, T).", "Dossier d'autorisation préfectorale, mairie, DOET.", "Accompagnement en commission de sécurité.", "Notice ERP de transformation de site et de lieu culturel.", "Audit de gouvernance sécurité d'organisation.", "Accessibilité PMR."],
      opsT: "Interlocuteurs", ops: ["Préfecture", "Mairie", "Commission de sécurité", "SDIS", "DOET"],
      cta: "Présenter votre dossier",
      qualif: { title: "Une culture de la prévention", text: "Matthieu Savatier, fondateur d'ESE, est titulaire de la qualification AP2 de l'ENSOSP. ESE rédige les notices de sécurité ERP, prépare les dossiers d'autorisation et accompagne l'organisateur en commission de sécurité, depuis la posture d'un expert événementiel." },
      hab: { k: "Hors de notre périmètre", t: "Ce qui reste confié à des intervenants habilités", l: "Nous les coordonnons, nous ne les remplaçons pas.", items: ["Vérifications réglementaires par organismes agréés (électricité, structures, gradins)", "Contrôle technique par un bureau de contrôle", "Service de sécurité incendie (agents SSIAP)", "Avis de la commission de sécurité"] } },
  },
  en: {
    "direction-technique": {
      liv: ["Technical specification", "Production drawings and schematics", "Technical budget and follow-up", "Supplier tendering and selection", "Production schedule", "Event technical file"],
      when: ["You are launching an event and the technical side must be framed from day one.", "You have many suppliers and no one holds the whole picture.", "A venue or organisation produces all year and wants one technical contact."],
      lead: "From writing the technical specifications to on-site management, we design and run the technical chain of your productions: events, live, scenography.",
      body: ["We can take a project from the root, from the very first specification, through to the last day of strike. Or step into a specific phase, when a team simply needs engineering support.",
             "For venues and organisations that produce all year round, technical direction becomes recurring: one point of contact who ends up knowing the venues, constraints and habits better than anyone."],
      perim: ["Writing technical specifications.", "Production trade-offs: tools, suppliers and technical budgets.", "Managing design phases: Vectorworks, ConnectCAD, Braceworks, MVR drawings.", "Coordinating structural and rigging studies with our engineering office.", "Technical budget follow-up.", "Coordinating technical suppliers during delivery.", "Recurring technical direction for venues, cultural sites and event organisations."],
      opsT: "Types of operations", ops: ["Corporate events", "Cultural & launches", "Conferences", "Concerts & festivals", "Stadium tours", "Broadcasts", "Scenography & exhibitions", "Structures & rigging", "Temporary power"],
      cta: "Discuss your technical direction needs" },
    "bureau-etudes": {
      liv: ["Calculation notes", "Site layouts", "Rigging plots", "Schematics", "Technical files", "MVR files and 3D models"],
      when: ["A structure, truss or screen must be rigged and needs to be justified.", "The inspection body or safety commission asks for a drawing or a note.", "A supplier needs a clean schematic or layout."],
      lead: "Drawings, schematics, studies and calculation notes: we produce the documents that validate a set-up before it is built. Structural calculation notes are checked and signed by a partner structural engineer.",
      body: ["Stage structures, suspended loads, trusses, towers, screens, grandstands: every element built on site must be justified. We model the configurations, calculate the forces and produce notes that inspection bodies, venue operators and suppliers can read.",
             "The engineering office works upstream of a production or as one-off support: a calculation note for a rigging point, a layout for a safety commission, a schematic for a supplier."],
      perim: ["Calculation notes for structures and suspended loads (Braceworks, MVR).", "Load paths, ballast, anchoring and wind loading.", "Vectorworks layouts and technical drawings.", "Power, audio, video and network schematics (ConnectCAD).", "Feasibility studies and technical files for inspection bodies and commissions.", "Interface with structural engineers and inspection bodies.", "Calculation notes signed by a partner structural engineer."],
      opsT: "Deliverables", ops: ["Calculation notes", "Layouts", "Rigging plots", "Schematics", "Technical files", "Feasibility studies", "3D modelling", "MVR files"],
      cta: "Request a calculation note or a study" },
    "design-lumiere": {
      liv: ["Lighting design statement", "Lighting plot and fixture positions", "3D pre-visualisation", "Specification for the lighting supplier", "Programming and focus follow-up on site"],
      when: ["You want a lighting identity for a concert, fashion show or ceremony.", "You need a lighting plot and specifications to brief suppliers.", "The design exists but must be adapted to the venue, power or budget."],
      lead: "From artistic intent to lighting plot, we design the lighting of your events and make it deliverable on site.",
      body: ["Concert, fashion show, ceremony, convention or heritage venue: lighting carries the image of the event. We turn an intent into a concrete lighting plot, with fixtures, rigging positions and power that fit the venue and the budget.",
             "Because we also practise technical direction and production management, the lighting design stays deliverable: it takes structures, available power, load-in time and safety constraints into account."],
      perim: ["Lighting intent and creative stance.", "Lighting plots and fixture positions (Vectorworks Spotlight).", "3D pre-visualisation of moods.", "Equipment choice and specifications for the lighting supplier.", "Coordinating programming and focus on site.", "Adapting the design to structural, power and safety constraints."],
      opsT: "Contexts", ops: ["Concerts", "Fashion & luxury", "Ceremonies", "Conventions", "Heritage venues", "Scenography & exhibitions", "Festivals"],
      cta: "Talk about your lighting project" },
    "regie-generale": {
      liv: ["Load-in and strike schedule", "Access and co-activity planning", "Crew and supplier run sheets", "On-site coordination, first truck to last", "Production team sized for the job"],
      when: ["Load-in involves many crews in a short time.", "You need a production manager for a few days or a whole tour.", "A cultural venue or site needs year-round production management."],
      lead: "Schedules, access, co-activity, crews, suppliers, load-in, show and strike: production management holds many realities together.",
      body: ["On a one-off operation, we assemble and run production management from the first truck to the last. Over time, we take charge of a venue, a cultural site or an entire tour.",
             "Depending on the brief, we run production management on our own or complement an existing team, taking exactly the scope the organiser needs, no more, no less."],
      perim: ["On-site operational coordination and running order management.", "Load-in and strike scheduling.", "Managing crews and technical suppliers.", "Interface with the organiser, artists, venues and authorities.", "Tailor-made team, calibrated to the format and operational risk of each project."],
      opsT: "Types of operations", ops: ["Corporate events", "Agencies", "Live & performing arts", "Festivals", "Venues", "Site management", "Cultural sites", "Tours", "Exhibitions"],
      cta: "Find production management support" },
    "stage-management": {
      liv: ["Cue sheets and stage run sheets", "Timing of entrances, changeovers and sequences", "Backstage flow planning", "Stage link between artists, crew and production"],
      when: ["The stage chains artists, speakers and fast changeovers.", "You need a stage manager to support your team.", "A ceremony or convention follows a timed running order."],
      lead: "From preparing cue sheets to coordinating the stage, stage management ensures continuity between artists, speakers, technical crews and production.",
      body: ["We step in on a specific stage or within a wider production management set-up, on festivals, ceremonies, concerts and multi-sequence events.",
             "The role is simple to describe and demanding to deliver: every entrance, changeover and sequence happens on time, with the right people in the right place."],
      perim: ["Preparing cue sheets and stage running orders.", "Coordinating entrances, changeovers and sequences.", "Managing stage flows and backstage circulation.", "Constant link between artists, speakers, technical crews and production.", "Festival and outdoor stage management."],
      opsT: "Contexts", ops: ["Festivals", "Outdoor", "Ceremonies", "Concerts", "Multi-artist stages", "Conventions", "Institutional events"],
      cta: "Talk about the stage and show calling" },
    "expertise-securite": {
      liv: ["ERP fire safety report", "Authorisation file (prefecture, city hall)", "Support at the safety commission", "Site or venue conversion report", "Safety governance audit", "Accessibility (PMR) section"],
      when: ["Your event must go before a safety commission.", "You need an ERP fire safety report for a venue or configuration.", "A venue or festival wants to structure its safety over time."],
      lead: "Fire safety reports and support before the authorities, from an event specialist, not an inspection body.",
      body: ["It can be a single report and a safety commission hearing for one operation. Or long-term support: safety governance for a venue, a festival over several editions, a cultural site in transformation.",
             "In every case, we remain the operator's technical point of contact before the authorities: expert support that knows the field, not one more inspection."],
      perim: ["ERP event fire safety reports (types CTS, PA, L, T).", "Prefecture, city hall and DOET authorisation files.", "Support at safety commission hearings.", "ERP reports for venue and cultural site transformation.", "Organisational safety governance audit.", "Accessibility for people with reduced mobility."],
      opsT: "Authorities", ops: ["Prefecture", "City hall", "Safety commission", "Fire & rescue (SDIS)", "DOET"],
      cta: "Present your project",
      qualif: { title: "A prevention culture", text: "Matthieu Savatier, ESE's founder, holds the AP2 qualification from ENSOSP, the French national fire officers' academy. ESE writes ERP fire safety reports, prepares authorisation files and supports the organiser at the safety commission, from the standpoint of an event specialist." },
      hab: { k: "Outside our scope", t: "What stays with accredited bodies", l: "We coordinate them; we do not replace them.", items: ["Regulatory inspections by accredited bodies (electrical, structures, grandstands)", "Technical inspection by an inspection body", "Fire safety staff (SSIAP agents)", "The safety commission's opinion"] } },
  },
};

export const REFS3 = {
  fr: [
    {"slug": "venue-du-pape-stade-de-france", "ms": ["direction-technique", "regie-generale", "stage-management"], "yr": "2026", "t": "Venue du Pape", "cat": "Cérémonie", "f": "ceremonie", "lieu": "Stade de France · Saint-Denis", "mis": "Direction technique · régie générale · stage management · logistique des équipes", "img": "/images/refs/pape-tribunes.jpg"},
    {"slug": "asap-rocky-accor-arena", "ms": ["direction-technique", "regie-generale", "stage-management", "design-lumiere"], "yr": "2026", "t": "A$AP Rocky", "cat": "Défilé AWGE + concert", "f": "concert", "lieu": "Accor Arena (Bercy) · Paris", "mis": "Direction technique · régie générale · stage management · design lumière", "img": "/images/refs/asap-concert.jpg"},
    {"ms": ["direction-technique", "design-lumiere"], "yr": "2025", "t": "BSK", "cat": "Concerts en salle", "f": "concert", "lieu": "Le Trianon · L'Élysée Montmartre · Paris", "mis": "Direction technique · design lumière", "img": ""},
    {"ms": ["direction-technique"], "yr": "2026", "t": "Golden Coast Festival", "cat": "Festival", "f": "concert", "lieu": "Édition 2026", "mis": "Direction technique", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025–26", "t": "JUL", "cat": "Concert en stade", "f": "concert", "lieu": "Stade de France · Vélodrome de Marseille · jusqu'à 102 000 personnes par concert", "mis": "Direction technique", "img": "/images/expertise-securite/jul-velodrome-truss.jpg"},
    {"ms": ["direction-technique", "bureau-etudes"], "yr": "2025", "t": "Ninho", "cat": "Concerts en stade", "f": "concert", "lieu": "Stade de France · Stade Pierre-Mauroy · près de 160 000 personnes", "mis": "Direction technique live · rigging · structures", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "Adriatique", "cat": "Shows internationaux", "f": "live", "lieu": "Le Caire · São Paulo · Beyrouth · Buenos Aires", "mis": "Direction technique pour HangarCreates", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "Mochakk Calling", "cat": "Shows internationaux", "f": "live", "lieu": "Miami · Chicago · New York", "mis": "Direction technique pour HangarCreates", "img": "/images/refs/mochakk.jpg"},
    {"ms": ["direction-technique"], "yr": "2025", "t": "BLOND:ISH", "cat": "Tournée internationale", "f": "live", "lieu": "Los Angeles · tournée 2025", "mis": "Direction technique pour HangarCreates", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "Soirée privée Hangar Y", "cat": "Défilé + soirée privée", "f": "mode", "lieu": "Hangar Y · Meudon · 1 600 personnes", "mis": "Direction technique", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "UNOC3 Nice", "cat": "Sommet institutionnel", "f": "institutionnel", "lieu": "United Nations Ocean Conference", "mis": "Direction technique multi-métiers", "img": "/images/expertise-securite/unoc-nice.jpg"},
    {"ms": ["direction-technique", "bureau-etudes"], "yr": "2024", "t": "AC/DC Power Up Tour", "cat": "Concert", "f": "concert", "lieu": "Hippodrome de Longchamp · 80 000 personnes", "mis": "Direction technique", "img": ""},
    {"slug": "jo-paris-2024", "ms": ["direction-technique", "expertise-securite"], "yr": "2024", "t": "Cérémonie d'ouverture des JO", "cat": "Jeux Olympiques", "f": "ceremonie", "lieu": "La Seine · 26 juillet 2024", "mis": "Conformité, sécurité et prévention incendie, aux côtés de Paname 24", "img": ""},
    {"slug": "jo-paris-2024", "ms": ["direction-technique", "expertise-securite"], "yr": "2024", "t": "Cérémonie d'ouverture des JOP", "cat": "Jeux Paralympiques", "f": "ceremonie", "lieu": "Champs-Élysées · Concorde · 28 août 2024", "mis": "Conformité, sécurité et prévention incendie, aux côtés de Paname 24", "img": "/images/jo-para.jpg"},
    {"ms": ["direction-technique"], "yr": "2024", "t": "Convention des Volontaires", "cat": "Paris 2024", "f": "institutionnel", "lieu": "Paris 2024 · des milliers de volontaires", "mis": "Direction technique", "img": "/images/refs/convention-volontaires.jpg"},
    {"ms": ["direction-technique", "bureau-etudes"], "yr": "2023–24", "t": "Mylène Farmer · Nevermore", "cat": "Tournée des stades", "f": "concert", "lieu": "9 stades en France, Suisse, Belgique · 3 soirs au Stade de France", "mis": "Direction technique live · rigging · structures", "img": "/images/refs/mylene-regie-stade.jpg"},
    {"ms": ["direction-technique"], "yr": "2023", "t": "Louis Vuitton", "cat": "Défilé · luxe", "f": "mode", "lieu": "Paris · aussi Garnier, Vichy", "mis": "Direction technique · scénographie", "img": "/images/direction-technique/luxe-louis-vuitton.jpg"},
    {"ms": ["direction-technique"], "yr": "", "t": "VivaTech", "cat": "Salon international", "f": "institutionnel", "lieu": "Paris · stands et espaces de marques", "mis": "Direction technique", "img": ""},
  ],
  en: [
    {"slug": "venue-du-pape-stade-de-france", "ms": ["direction-technique", "regie-generale", "stage-management"], "yr": "2026", "t": "Papal visit", "cat": "Ceremony", "f": "ceremonie", "lieu": "Stade de France · Saint-Denis", "mis": "Technical direction · production management · stage management · crew logistics", "img": "/images/refs/pape-tribunes.jpg"},
    {"slug": "asap-rocky-accor-arena", "ms": ["direction-technique", "regie-generale", "stage-management", "design-lumiere"], "yr": "2026", "t": "A$AP Rocky", "cat": "AWGE fashion show + concert", "f": "concert", "lieu": "Accor Arena (Bercy) · Paris", "mis": "Technical direction · production management · stage management · lighting design", "img": "/images/refs/asap-concert.jpg"},
    {"ms": ["direction-technique", "design-lumiere"], "yr": "2025", "t": "BSK", "cat": "Venue concerts", "f": "concert", "lieu": "Le Trianon · L'Élysée Montmartre · Paris", "mis": "Technical direction · lighting design", "img": ""},
    {"ms": ["direction-technique"], "yr": "2026", "t": "Golden Coast Festival", "cat": "Festival", "f": "concert", "lieu": "2026 edition", "mis": "Technical direction", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025–26", "t": "JUL", "cat": "Stadium concert", "f": "concert", "lieu": "Stade de France · Vélodrome, Marseille · up to 102,000 people per show", "mis": "Technical direction", "img": "/images/expertise-securite/jul-velodrome-truss.jpg"},
    {"ms": ["direction-technique", "bureau-etudes"], "yr": "2025", "t": "Ninho", "cat": "Stadium concerts", "f": "concert", "lieu": "Stade de France · Stade Pierre-Mauroy · nearly 160,000 people", "mis": "Live technical direction · rigging · structures", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "Adriatique", "cat": "International shows", "f": "live", "lieu": "Cairo · São Paulo · Beirut · Buenos Aires", "mis": "Technical direction for HangarCreates", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "Mochakk Calling", "cat": "International shows", "f": "live", "lieu": "Miami · Chicago · New York", "mis": "Technical direction for HangarCreates", "img": "/images/refs/mochakk.jpg"},
    {"ms": ["direction-technique"], "yr": "2025", "t": "BLOND:ISH", "cat": "International tour", "f": "live", "lieu": "Los Angeles · 2025 tour", "mis": "Technical direction for HangarCreates", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "Private party, Hangar Y", "cat": "Fashion show + private party", "f": "mode", "lieu": "Hangar Y · Meudon · 1,600 people", "mis": "Technical direction", "img": ""},
    {"ms": ["direction-technique"], "yr": "2025", "t": "UNOC3 Nice", "cat": "Institutional summit", "f": "institutionnel", "lieu": "United Nations Ocean Conference", "mis": "Multi-discipline technical direction", "img": "/images/expertise-securite/unoc-nice.jpg"},
    {"ms": ["direction-technique", "bureau-etudes"], "yr": "2024", "t": "AC/DC Power Up Tour", "cat": "Concert", "f": "concert", "lieu": "Hippodrome de Longchamp · 80,000 people", "mis": "Technical direction", "img": ""},
    {"slug": "jo-paris-2024", "ms": ["direction-technique", "expertise-securite"], "yr": "2024", "t": "Olympic opening ceremony", "cat": "Olympic Games", "f": "ceremonie", "lieu": "The Seine · 26 July 2024", "mis": "Compliance, safety and fire prevention, alongside Paname 24", "img": ""},
    {"slug": "jo-paris-2024", "ms": ["direction-technique", "expertise-securite"], "yr": "2024", "t": "Paralympic opening ceremony", "cat": "Paralympic Games", "f": "ceremonie", "lieu": "Champs-Élysées · Concorde · 28 August 2024", "mis": "Compliance, safety and fire prevention, alongside Paname 24", "img": "/images/jo-para.jpg"},
    {"ms": ["direction-technique"], "yr": "2024", "t": "Volunteers' Convention", "cat": "Paris 2024", "f": "institutionnel", "lieu": "Paris 2024 · thousands of volunteers", "mis": "Technical direction", "img": "/images/refs/convention-volontaires.jpg"},
    {"ms": ["direction-technique", "bureau-etudes"], "yr": "2023–24", "t": "Mylène Farmer · Nevermore", "cat": "Stadium tour", "f": "concert", "lieu": "9 stadiums in France, Switzerland, Belgium · 3 nights at the Stade de France", "mis": "Live technical direction · rigging · structures", "img": "/images/refs/mylene-regie-stade.jpg"},
    {"ms": ["direction-technique"], "yr": "2023", "t": "Louis Vuitton", "cat": "Fashion · luxury", "f": "mode", "lieu": "Paris · also Garnier, Vichy", "mis": "Technical direction · scenography", "img": "/images/direction-technique/luxe-louis-vuitton.jpg"},
    {"ms": ["direction-technique"], "yr": "", "t": "VivaTech", "cat": "International trade show", "f": "institutionnel", "lieu": "Paris · brand stands and spaces", "mis": "Technical direction", "img": ""},
  ],
};

export const APPROCHE = {
  fr: [
    { n: "01", t: "Concevoir", title: "Définir avant<br>de déployer.", sub: "Comprendre l'intention du projet et vérifier sa traduction technique, humaine et réglementaire.", keys: [["Le besoin", "Objectifs et contraintes"], ["La faisabilité", "Études et implantations"], ["Les arbitrages", "Options et décisions"]], img: IMG + "bw_dt.jpg", v: "a" },
    { n: "02", t: "Préparer", title: "Tout ne tient pas<br>sur un plan.", sub: "Une production se prépare dans le détail : moyens, accès, équipes, interfaces et calendrier.", keys: [["Les moyens", "Personnel et ressources"], ["Le phasage", "Montage et exploitation"], ["Les interfaces", "Équipes et prestataires"]], img: IMG + "bw_truss.jpg", v: "b" },
    { n: "03", t: "Coordonner", title: "Un projet.<br>Des équipes.", sub: "Mettre chaque intervenant au bon endroit, au bon moment, avec les bonnes informations.", keys: [["La régie", "Pilotage et priorités"], ["Le plateau", "Conduite et circulation"], ["Les équipes", "Briefings et coordination"]], img: IMG + "bw_rg.jpg", v: "c" },
    { n: "04", t: "Exploiter", title: "Tenir le cap.<br>S'adapter.", sub: "Sur le terrain, il faut suivre le réel, prendre les décisions et sécuriser l'exécution.", keys: [["La conduite", "Exploitation du dispositif"], ["Les aléas", "Anticipation et arbitrages"], ["La sécurité", "Vigilance à chaque étape"]], img: IMG + "bw_secu.jpg", v: "d" },
    { n: "05", t: "Restituer", title: "Ça ne s'arrête<br>pas au show.", sub: "Démontage, repli et retour d'expérience : la fin de l'événement fait aussi partie du métier.", keys: [["Le repli", "Démontage et logistique"], ["La restitution", "Remise en état des lieux"], ["Le retour", "Bilan et amélioration"]], img: IMG + "bw_livrer.jpg", v: "a" },
  ],
  en: [
    { n: "01", t: "Design", title: "Define before<br>you deploy.", sub: "Understand the intent of the project and check its technical, human and regulatory translation.", keys: [["The brief", "Goals and constraints"], ["Feasibility", "Studies and layouts"], ["Trade-offs", "Options and decisions"]], img: IMG + "bw_dt.jpg", v: "a" },
    { n: "02", t: "Prepare", title: "Not everything<br>fits on a plan.", sub: "A production is prepared in detail: resources, access, crews, interfaces and schedule.", keys: [["Resources", "Staff and equipment"], ["Phasing", "Load-in and show"], ["Interfaces", "Crews and suppliers"]], img: IMG + "bw_truss.jpg", v: "b" },
    { n: "03", t: "Coordinate", title: "One project.<br>Many crews.", sub: "Put every contributor in the right place, at the right time, with the right information.", keys: [["Production office", "Steering and priorities"], ["The stage", "Show calling and flows"], ["Crews", "Briefings and coordination"]], img: IMG + "bw_rg.jpg", v: "c" },
    { n: "04", t: "Operate", title: "Hold the course.<br>Adapt.", sub: "On site, you follow reality, make the calls and secure the execution.", keys: [["Running", "Operating the set-up"], ["The unexpected", "Anticipation and decisions"], ["Safety", "Vigilance at every step"]], img: IMG + "bw_secu.jpg", v: "d" },
    { n: "05", t: "Hand back", title: "It doesn't end<br>with the show.", sub: "Strike, load-out and debrief: the end of the event is part of the job too.", keys: [["Load-out", "Strike and logistics"], ["Hand-back", "Restoring the venue"], ["Debrief", "Review and improvement"]], img: IMG + "bw_livrer.jpg", v: "a" },
  ],
};

export const FAQ3 = {
  fr: [
    ["Intervenez-vous aussi sur de petites missions ?", "Oui. Nous intervenons aussi bien sur une cérémonie olympique ou une tournée en stade que sur un événement de moyenne envergure, un lancement produit ou une opération confidentielle. C'est le besoin qui définit le périmètre, pas la taille."],
    ["Peut-on vous solliciter pour un seul métier ?", "Oui. Nos six métiers (direction technique, bureau d'études, design lumière, régie générale, stage management, expertise sécurité) fonctionnent ensemble ou séparément. Nous pouvons porter une production de bout en bout, ou intervenir en renfort d'une équipe déjà en place."],
    ["Pouvez-vous rédiger une notice de sécurité ERP ?", "Oui. Nous rédigeons les notices de sécurité ERP (types CTS, PA, L, T) et accompagnons l'organisateur en commission de sécurité, face à la préfecture, la mairie et le SDIS. Notre fondateur est titulaire de la qualification AP2 de l'ENSOSP. Les vérifications réglementaires restent confiées aux organismes agréés, que nous coordonnons."],
    ["Fournissez-vous le matériel ?", "Notre rôle est la conception, la coordination et le pilotage. Nous choisissons et coordonnons les prestataires qui fournissent le matériel, selon ce qui est prévu au contrat."],
    ["Intervenez-vous en province et à l'international ?", "Oui. Nous sommes basés à Paris et intervenons partout en France et à l'international : tournées, festivals, sommets institutionnels."],
    ["Qu'est-ce que SOCLE® ?", "SOCLE® est la méthode propriétaire d'ESE (marque déposée à l'INPI) pour structurer la production technique des bureaux d'études et agences sur l'écosystème Vectorworks."],
  ],
  en: [
    ["Do you also take on small assignments?", "Yes. We work on Olympic ceremonies and stadium tours just as readily as on mid-scale events, product launches or confidential operations. The brief defines the scope, not the size."],
    ["Can we bring you in for just one service?", "Yes. Our six services (technical direction, engineering, lighting design, production management, stage management, safety expertise) work together or independently. We can carry a production end to end, or support an existing team."],
    ["Can you write an ERP fire safety report?", "Yes. We write ERP fire safety reports (types CTS, PA, L, T) and support the organiser at safety commission hearings, before the prefecture, city hall and fire & rescue service. Our founder holds the AP2 qualification from ENSOSP. Regulatory inspections remain with accredited bodies, which we coordinate."],
    ["Do you supply the equipment?", "Our role is design, coordination and management. We select and coordinate the suppliers who provide the equipment, as set out in the contract."],
    ["Do you work outside Paris and internationally?", "Yes. We are based in Paris and work anywhere in France and internationally: tours, festivals, institutional summits."],
    ["What is SOCLE®?", "SOCLE® is ESE's proprietary method (trademark registered with the INPI) for structuring the technical production of design offices and agencies on the Vectorworks ecosystem."],
  ],
};

export const SEO3 = {
  fr: {
    home: { title: "ESE · Production technique événementielle · Paris et France", description: "Direction technique, bureau d'études, design lumière, régie générale, stage management et expertise sécurité. Mission complète ou renfort ponctuel." },
    metiers: { title: "Métiers : direction technique, régie, sécurité événementielle · ESE", description: "Direction technique, bureau d'études et notes de calcul, design lumière, régie générale, stage management et expertise sécurité : les six métiers d'ESE." },
    "bureau-etudes": { title: "Bureau d'études et note de calcul événementielle · ESE", description: "Notes de calcul de structures et charges suspendues, plans d'implantation, synoptiques et études techniques. Braceworks, MVR, Vectorworks, ConnectCAD." },
    "design-lumiere": { title: "Design lumière événementiel à Paris et en France · ESE", description: "Design lumière pour concerts, défilés, cérémonies et conventions, à Paris et partout en France : intention, plan feux, pré-visualisation, encodage et réglages sur site." },
    "stage-management": { title: "Stage manager événementiel à Paris et en France · ESE", description: "Stage manager pour concerts, cérémonies, festivals et conventions, à Paris et partout en France : conduites, entrées, changements, timing du show." },
    pape: { title: "Venue du Pape au Stade de France · Références ESE", description: "Venue du Pape au Stade de France, septembre 2026 : direction technique, régie générale, stage management et logistique des équipes par ESE." },
    asap: { title: "A$AP Rocky à l'Accor Arena : défilé AWGE et concert · Références ESE", description: "Étude de cas : intégrer un défilé de mode dans un live show. Défilé AWGE et concert d'A$AP Rocky à l'Accor Arena le 30 septembre 2026, direction technique, régie générale, stage management et design lumière par ESE." },
    fiche: { title: "JO / JOP Paris 2024 · Références ESE", description: "Cérémonies d'ouverture des Jeux Olympiques et Paralympiques de Paris 2024 : direction technique et expertise multi-métiers d'ESE." },
  },
  en: {
    home: { title: "ESE · Event technical production · Paris", description: "Technical direction, engineering, lighting design, production management, stage management and safety expertise. Full mission or targeted support." },
    metiers: { title: "Services: event technical direction, production, safety · ESE", description: "Technical direction, engineering and calculations, lighting design, production management, stage management and safety expertise: ESE's six services." },
    "bureau-etudes": { title: "Event engineering office & calculation notes · ESE", description: "Calculation notes for structures and suspended loads, layouts, schematics and technical studies for events. Braceworks, MVR, Vectorworks, ConnectCAD." },
    "design-lumiere": { title: "Event lighting design for concerts and shows · ESE", description: "Lighting design for concerts, fashion shows, ceremonies and conventions: intent, lighting plots, pre-visualisation, programming and focus on site." },
    "stage-management": { title: "Event stage manager for concerts and ceremonies · ESE", description: "Stage management: cue sheets, stage coordination, flows and sequences. Festivals, ceremonies, concerts, multi-sequence events." },
    pape: { title: "Papal visit at the Stade de France · ESE References", description: "Papal visit at the Stade de France, September 2026: technical direction, production management, stage management and crew logistics by ESE." },
    asap: { title: "A$AP Rocky at the Accor Arena: AWGE show and concert · ESE References", description: "Case study: integrating a fashion show into a live show. A$AP Rocky's AWGE show and concert at the Accor Arena on 30 September 2026, technical direction, production management, stage management and lighting design by ESE." },
    fiche: { title: "Paris 2024 Olympic & Paralympic ceremonies · ESE References", description: "Opening ceremonies of the Paris 2024 Olympic and Paralympic Games: ESE's technical direction and multi-discipline expertise." },
  },
};

/* Titre + point bleu : le point remplace le point final et reste collé au dernier mot */
export const dt = (s) =>
  String(s).replace(/\.\s*$/, "").replace(/([^\s>]+)\s*$/, '<span class="nw">$1<span class="dot" aria-hidden="true"></span></span>');

/* Nombre total de métiers, affiché « 02 / 06 » */
for (const l of ["fr", "en"]) METIERS3[l].forEach((m) => { m.of = pad(METIERS3[l].length); });

export const OFFRE = {
  fr: {
    k: "Pour qui, comment", t: "Une façon simple<br>de travailler ensemble.",
    whoT: "Pour qui", who: ["Agences événementielles", "Producteurs & organisateurs de spectacles", "Lieux, salles & exploitants de sites", "Marques, mode & luxe", "Institutions & collectivités", "Bureaux d'études & scénographes"],
    howT: "Comment nous travaillons",
    how: [["Renfort à la journée", "Un régisseur, un stage manager ou un directeur technique pour quelques jours, au sein de votre équipe."],
          ["Mission ciblée", "Un livrable précis : une note de calcul, une notice de sécurité, un plan feux, un plan d'implantation."],
          ["Production complète", "Nous prenons la technique en charge, de la conception jusqu'à la restitution du lieu."],
          ["Accompagnement à l'année", "Direction technique, régie de site ou gouvernance sécurité, en forfait ou en astreinte."]],
    cta: "Décrire votre besoin",
    secK: "Notre différence", secT: "Technique et sécurité<br>dans la même équipe.",
    secL: "Sur la plupart des projets, la technique et la sécurité sont confiées à des interlocuteurs différents, qui se découvrent en commission. Chez ESE, les deux sont pensées ensemble dès le premier plan.",
    secKeys: [["Une seule équipe", "Plans, structures, lumière et sécurité alignés"], ["AP2 ENSOSP", "Notices ERP rédigées par ESE"], ["Face aux autorités", "Préfecture, mairie, commission, SDIS"]],
    secLink: "L'expertise sécurité",
  },
  en: {
    k: "Who, how", t: "A simple way<br>to work together.",
    whoT: "Who we work with", who: ["Event agencies", "Producers & promoters", "Venues & site operators", "Brands, fashion & luxury", "Institutions & public bodies", "Design offices & scenographers"],
    howT: "How we work",
    how: [["Day-rate support", "A production manager, stage manager or technical director for a few days, within your team."],
          ["Targeted mission", "One specific deliverable: a calculation note, a fire safety report, a lighting plot, a layout."],
          ["Full production", "We take charge of the technical side, from design to venue hand-back."],
          ["Year-round support", "Technical direction, site management or safety governance, on retainer or on call."]],
    cta: "Describe your need",
    secK: "What sets us apart", secT: "Technical and safety<br>in one team.",
    secL: "On most projects, technical and safety are handled by different people who first meet at the safety commission. At ESE, both are designed together from the very first drawing.",
    secKeys: [["One team", "Drawings, structures, lighting and safety aligned"], ["AP2 ENSOSP", "ERP fire safety reports written by ESE"], ["Before the authorities", "Prefecture, city hall, commission, fire service"]],
    secLink: "Safety expertise",
  },
};

/* Fiches projet */
export const FICHES = {
  "jo-paris-2024": {
    img: "/images/jo-para.jpg", seo: "fiche",
    videos: [["onP5-DKSbI4", 0], ["7OuJXFhg5PA", 1]],
    fr: { alt: "Site de la cérémonie paralympique de Paris 2024, place de la Concorde au crépuscule", k: "Référence · R-02", h1: "JO / JOP<br>Paris 2024",
      facts: [["Événement", "Cérémonies d'ouverture olympique et paralympique"], ["Lieux", "Seine · Concorde · Champs-Élysées"], ["Dates", "26 juillet et 28 août 2024"], ["Mission ESE", "Direction technique · conformité, sécurité et prévention incendie"]],
      chaps: [["01", "Le contexte", "Les cérémonies d'ouverture des Jeux Olympiques et Paralympiques, sur la Seine, les quais, les ponts, les Champs-Élysées et la place de la Concorde : des sites qui ne sont pas conçus pour accueillir un spectacle : contraintes de temps, d'espace, de coactivité et de sécurité hors norme."],
              ["02", "Notre mission", "Aux côtés de Paname 24, une direction technique centrée sur la conformité des installations et des sites, la gestion des risques et de crise, la prévention incendie et les sujets ICPE, avec l'accompagnement des équipes de production dans leurs échanges avec les autorités."],
              ["03", "Sur le terrain", "Montage, coordination et exploitation : plans, réunions de coordination et présence sur site, à l'échelle d'une production regardée dans le monde entier."]],
      v: ["Cérémonie d'ouverture des Jeux Olympiques de Paris 2024", "Cérémonie d'ouverture des Jeux Paralympiques de Paris 2024"], cta: "Un projet<br>similaire&nbsp;?" },
    en: { alt: "Paris 2024 Paralympic ceremony site at dusk, place de la Concorde", k: "Reference · R-02", h1: "Paris 2024<br>Games",
      facts: [["Event", "Olympic and Paralympic opening ceremonies"], ["Sites", "Seine · Concorde · Champs-Élysées"], ["Dates", "26 July and 28 August 2024"], ["ESE mission", "Technical direction · compliance, safety and fire prevention"]],
      chaps: [["01", "Context", "The opening ceremonies of the Olympic and Paralympic Games, on the Seine, its quays and bridges, the Champs-Élysées and the place de la Concorde: sites never designed to host a show: exceptional constraints of time, space, co-activity and safety."],
              ["02", "Our mission", "Alongside Paname 24, technical direction focused on site and installation compliance, risk and crisis management, fire prevention and ICPE matters, supporting production teams in their dealings with the authorities."],
              ["03", "On site", "Load-in, coordination and show: drawings, coordination meetings and on-site presence at the scale of a production watched worldwide."]],
      v: ["Paris 2024 Olympic Games opening ceremony", "Paris 2024 Paralympic Games opening ceremony"], cta: "A similar<br>project?" },
  },
  "asap-rocky-accor-arena": {
    img: "/images/refs/asap-concert.jpg", seo: "asap",
    gallery: ["asap-defile", "asap-scene"],
    fr: { alt: "A$AP Rocky sur scène devant une Accor Arena pleine", k: "Étude de cas · R-02", h1: "A$AP Rocky<br>Accor Arena",
      facts: [["Événement", "Défilé AWGE printemps-été 2027 (Paris Fashion Week) et concert"], ["Lieu et date", "Accor Arena · Paris · 30 septembre 2026"], ["Production", "Live Nation France · OBO"], ["Mission ESE", "Direction technique · régie générale · stage management · design lumière avec Beat Per Light"]],
      chaps: [["01", "Le contexte", "En pleine Paris Fashion Week, A$AP Rocky présente la collection printemps-été 2027 de sa marque AWGE, puis enchaîne le concert de sa tournée Don't Be Dumb. Même soirée, même scène, devant une Accor Arena pleine."],
              ["02", "Le défi", "Intégrer un défilé de mode dans un live show. Deux formats qui n'obéissent pas aux mêmes règles : le podium, le passage des mannequins et une lumière de défilé d'un côté, un show de concert de l'autre. Une seule scène, une seule soirée, et une bascule que le public ne doit pas voir."],
              ["03", "Sur le terrain", "Une journée de montage, puis l'exploitation et le démontage dans la foulée. ESE a tenu la direction technique, la régie générale et le stage management, avec le design lumière conçu avec notre partenaire Beat Per Light, pour Live Nation France et OBO."]],
      cta: "Un show<br>hors format&nbsp;?" },
    en: { alt: "A$AP Rocky on stage in front of a packed Accor Arena", k: "Case study · R-02", h1: "A$AP Rocky<br>Accor Arena",
      facts: [["Event", "AWGE spring-summer 2027 show (Paris Fashion Week) and concert"], ["Venue and date", "Accor Arena · Paris · 30 September 2026"], ["Production", "Live Nation France · OBO"], ["ESE mission", "Technical direction · production management · stage management · lighting design with Beat Per Light"]],
      chaps: [["01", "Context", "In the middle of Paris Fashion Week, A$AP Rocky presented the spring-summer 2027 collection of his label AWGE, then went straight into his Don't Be Dumb Tour concert. Same night, same stage, in front of a packed Accor Arena."],
              ["02", "The challenge", "Integrating a fashion show into a live show. Two formats with different rules: the runway, the models' walk and show lighting on one side, a concert production on the other. One stage, one night, and a changeover the audience must not see."],
              ["03", "On site", "One day of load-in, then the show and the strike straight after. ESE handled technical direction, production management and stage management, with lighting design created with our partner Beat Per Light, for Live Nation France and OBO."]],
      cta: "A show<br>out of format?" },
  },
  "venue-du-pape-stade-de-france": {
    img: "/images/refs/pape-tribunes.jpg", seo: "pape",
    gallery: ["pape-grues", "pape-vue-large", "pape-rosace", "pape-equipe-scene", "pape-equipe-toit"],
    fr: { alt: "Stade de France en cours de montage vu depuis les tribunes", k: "Référence · R-01", h1: "Venue du Pape<br>Stade de France",
      facts: [["Événement", "Venue du Pape"], ["Lieu", "Stade de France · Saint-Denis"], ["Date", "Septembre 2026"], ["Mission ESE", "Direction technique · régie générale · stage management · logistique des équipes"]],
      chaps: [["01", "Le contexte", "Un événement d'exception dans un stade de 80 000 places, préparé depuis juin 2026, avec une installation sur site du 22 au 27 septembre et un jour J devant un stade plein."],
              ["02", "Notre mission", "Direction technique, régie générale, stage management et logistique des équipes, de la préparation en amont jusqu'au démontage."],
              ["03", "Sur le terrain", "Montage de la scène et de sa rosace, coordination des équipes et des prestataires dans un stade en configuration exceptionnelle, puis conduite du jour J."]],
      cta: "Un événement<br>d'exception&nbsp;?" },
    en: { alt: "Stade de France during load-in seen from the stands", k: "Reference · R-01", h1: "Papal visit<br>Stade de France",
      facts: [["Event", "Papal visit"], ["Location", "Stade de France · Saint-Denis"], ["Date", "September 2026"], ["ESE mission", "Technical direction · production management · stage management · crew logistics"]],
      chaps: [["01", "Context", "An exceptional event in an 80,000-seat stadium, prepared since June 2026, with on-site installation from 22 to 27 September and a show day in front of a full stadium."],
              ["02", "Our mission", "Technical direction, production management, stage management and crew logistics, from upstream preparation through to strike."],
              ["03", "On site", "Building the stage and its rose window, coordinating crews and suppliers in a stadium in an exceptional configuration, then running the show day."]],
      cta: "An exceptional<br>event?" },
  },
};

/* Avec Impact Événement (salarié 2017-2023, puis missions ESE pour Impact) */
export const IMPACT = {
  fr: { k: "Avec Impact Événement", t: "Dix ans aux côtés<br>des grandes marques.", l: "Avant de fonder ESE, Matthieu Savatier a coordonné de grandes productions chez Impact Événement. ESE poursuit aujourd'hui cette collaboration sur de nombreuses opérations.",
    items: ["Finale UEFA Champions League 2022 · show d'ouverture", "Défilés Louis Vuitton Homme et Femme", "Paris Peace Forum", "Présidence française du Conseil de l'UE", "Game of Thrones Exhibition", "VivaTech · stands LVMH, BNP Paribas, Alibaba", "Chanel Haute Joaillerie", "Valentino", "Porsche · Le Mans, Rétromobile", "Volvo · reveal", "L'Oréal", "Snapchat", "Ardian · Opéra Garnier", "Jardin Suspendu"] },
  en: { k: "With Impact Événement", t: "Ten years alongside<br>major brands.", l: "Before founding ESE, Matthieu Savatier coordinated major productions at Impact Événement. ESE continues this collaboration today on many operations.",
    items: ["UEFA Champions League Final 2022 · opening show", "Louis Vuitton Men's and Women's shows", "Paris Peace Forum", "French Presidency of the Council of the EU", "Game of Thrones Exhibition", "VivaTech · LVMH, BNP Paribas, Alibaba stands", "Chanel High Jewellery", "Valentino", "Porsche · Le Mans, Rétromobile", "Volvo · reveal", "L'Oréal", "Snapchat", "Ardian · Opéra Garnier", "Jardin Suspendu"] },
};
