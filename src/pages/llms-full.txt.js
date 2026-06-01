import { METIER_DATA, REFERENCES, REF_LIST, CONTACT } from "../data/site.js";

const site = "https://ese-techsolutions.com";

function metier(route) {
  const d = METIER_DATA[route];
  let s = `## ${d.h1}\n\n${d.sub}\n\n`;
  if (d.qualif) {
    s += `### ${d.qualif.big}\n\n${d.qualif.body.join("\n\n")}\n\n`;
  }
  s += `### ${d.perimTitle}\n\n`;
  if (d.perimLead) s += `${d.perimLead}\n\n`;
  s += d.perim.map((p) => `- ${p}`).join("\n") + "\n\n";
  s += `### ${d.opsTitle}\n\n`;
  if (d.opsLead) s += `${d.opsLead}\n\n`;
  s += d.ops.map((o) => `- ${o}`).join("\n") + "\n\n";
  s += `### Modèle d'intervention\n\n${d.model.join("\n\n")}\n\n`;
  return s;
}

export async function GET() {
  const body = `# ESE — Event & Safety Engineering — Contenu complet

> Société d'ingénierie pour la production technique événementielle. Direction technique, régie générale, expertise sécurité ERP. Paris, depuis 2023.

Document texte intégral du site ${site}, destiné aux moteurs et aux IA. Société : Event & Safety Engineering (ESE), SAS au capital de 1 000 €, RCS Paris 951 249 937, TVA FR26 951 249 937, NAF 90.02Z, 15 rue des Halles, 75001 Paris, membre du Groupe MS. Fondateur : Matthieu Savatier.

# Accueil

Société d'ingénierie pour la production technique événementielle. Direction technique · Régie générale · Expertise sécurité — sur les productions live, événementielles et institutionnelles.

Douze ans de production technique événementielle, des cérémonies des Jeux Olympiques de Paris 2024 aux tournées en stade et aux gros concerts internationaux, en passant par les grands défilés de mode et les événements institutionnels d'envergure internationale. Matthieu Savatier a fondé ESE — Event & Safety Engineering — société d'ingénierie dédiée à la production technique événementielle. Trois métiers structurent son activité.

Terrains d'intervention : concerts & tournées en stade, festivals outdoor, spectacle vivant & théâtre, défilés de mode, scénographie & muséographie, événements institutionnels, plateaux TV & captations, congrès & conventions, lancements produits, sites & lieux culturels en transformation.

# Métiers

${metier("direction-technique")}${metier("regie-generale")}${metier("expertise-securite")}# Références — productions depuis 2023

${REFERENCES.map((r) => `## ${r.k} — ${r.t}\n\n${r.names}\n\n${r.desc}`).join("\n\n")}

Au-delà de ces productions phares, ESE intervient au quotidien auprès de marques, agences, lieux culturels et entreprises sur leurs dossiers de production — événementiel corporate, scène, captation, scénographie, expo, lancements produits, conventions.

# SOCLE®

SOCLE® est la méthode propriétaire d'ESE (marque déposée à l'INPI) de transformation opérationnelle des bureaux d'études événementiels et des agences créatives autour de l'environnement Vectorworks. Ce n'est pas un logiciel, mais un corps doctrinal, méthodologique et opérationnel : organisation des fichiers, gabarits, conventions de nommage, workflows ConnectCAD, Braceworks et MVR, processus de transmission et d'onboarding.

SOCLE® est ancré dans une expertise Vectorworks de haut niveau : Matthieu Savatier a été formateur certifié et beta-testeur de la Team France Vectorworks chez Oliverdy — à la croisée de la pratique terrain et de la formation professionnelle.

# Méthodes & partenariats

ESE est éditeur de SOCLE®. ESE accompagne par ailleurs la transformation organisationnelle des structures créatives en partenariat avec COBEL® Développeur de culture.

# Qui sommes-nous

ESE est portée par son fondateur, Matthieu Savatier. Avant ESE, il a exercé la direction technique et la régie générale chez Oliverdy, Paname 24, Impact Événement, REDITEC, DTE et au Puy du Fou International. Il a fondé ESE en 2023.

Qualifications : Attestation de Compétence AP2 ENSOSP (prévention incendie et de panique pour les ERP et IGH) ; expertise Vectorworks ; compétences structures et rigging (Braceworks, MVR) ; formateur certifié et beta-testeur Team France Vectorworks.

ESE s'appuie sur une équipe de spécialistes mobilisée selon les projets — régisseurs, directeurs techniques, ingénieurs structure et préventionnistes — assemblée à façon pour chaque mission. ESE accompagne agences événementielles, producteurs et organisateurs de spectacles, bureaux d'études techniques, scénographes et donneurs d'ordre institutionnels.

# Contact

Adresse : ${CONTACT.adresse1}, ${CONTACT.adresse2}. Téléphone : ${CONTACT.tel}. Email : ${CONTACT.email}.
LinkedIn entreprise : ${CONTACT.linkedinEntreprise}
LinkedIn Matthieu Savatier : ${CONTACT.linkedinMatthieu}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
