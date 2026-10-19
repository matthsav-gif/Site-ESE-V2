import { CONTACT } from "../data/site.js";
import { METIERS3, METIER_V3, REFS3, OFFRE, APPROCHE, FAQ3, IMPACT, FICHES } from "../data/v3.js";

const site = "https://ese-techsolutions.com";
const strip = (s) => String(s).replace(/<br>/g, " ").replace(/&nbsp;/g, " ");

function metier(m) {
  const d = METIER_V3.fr[m.slug];
  let s = `## ${m.t}\n\n${strip(m.tag)} ${m.what}\n\n${d.lead}\n\n${d.body.join("\n\n")}\n\n`;
  if (d.qualif) s += `### ${d.qualif.title}\n\n${d.qualif.text}\n\n`;
  s += `### Quand faire appel à ESE\n\n${d.when.map((w) => `- ${w}`).join("\n")}\n\n`;
  s += `### Périmètre\n\n${d.perim.map((p) => `- ${p}`).join("\n")}\n\n`;
  s += `### ${d.opsT}\n\n${d.ops.join(", ")}.\n\n`;
  return s;
}

export async function GET() {
  const O = OFFRE.fr, I = IMPACT.fr;
  const fiche = (k) => { const f = FICHES[k].fr; return `## ${strip(f.h1)}\n\n${f.facts.map(([a, b]) => `- ${a} : ${b}`).join("\n")}\n\n${f.chaps.map(([, t, p]) => `### ${t}\n\n${p}`).join("\n\n")}\n\n`; };
  const body = `# ESE, Event & Safety Engineering, Contenu complet

> Production technique événementielle, du plan au terrain. Direction technique, bureau d'études et notes de calcul, design lumière, régie générale, stage management, expertise sécurité. Paris.

Document texte intégral du site ${site}, destiné aux moteurs et aux IA. Société : Event & Safety Engineering (ESE), SAS au capital de 1 000 €, RCS Paris 951 249 937, TVA FR26 951 249 937, NAF 90.02Z, ${CONTACT.adresse1}, ${CONTACT.adresse2}, membre du Groupe MS. Fondateur : Matthieu Savatier.

# Accueil

Ce que le public voit commence bien avant l'ouverture. Plans, choix techniques, planning, circulation des équipes, exploitation : derrière chaque événement, il faut des décisions claires et une organisation qui tient sur le terrain. ESE intervient sur l'ensemble d'une production ou sur un besoin ciblé, au sein des équipes du client.

Chiffres : plus de 250 projets réalisés, jusqu'à 102 000 spectateurs sur un concert de JUL, plus de 15 ans d'expérience.

${strip(O.secT)} ${O.secL}

# Pour qui, comment

Clients : ${O.who.join(", ")}.

${O.how.map(([h, p]) => `- ${h} : ${p}`).join("\n")}

# Métiers

${METIERS3.fr.map(metier).join("")}# Approche : une production en cinq temps

${APPROCHE.fr.map((a) => `## ${a.n}. ${a.t} : ${strip(a.title)}\n\n${a.sub}\n\n${a.keys.map(([k, v]) => `- ${k} : ${v}`).join("\n")}`).join("\n\n")}

# Références

${REFS3.fr.map((r) => `- ${r.t} (${r.yr}), ${r.cat}, ${r.lieu} : ${r.mis}.`).join("\n")}

${fiche("venue-du-pape-stade-de-france")}${fiche("jo-paris-2024")}## ${strip(I.t)}

${I.l}

${I.items.map((x) => `- ${x}`).join("\n")}

# SOCLE® et partenariats

SOCLE® est la méthode propriétaire d'ESE (marque déposée à l'INPI) de transformation opérationnelle des bureaux d'études événementiels et des agences créatives autour de l'environnement Vectorworks : organisation des fichiers, gabarits, conventions de nommage, workflows ConnectCAD, Braceworks et MVR, transmission et onboarding. ESE accompagne aussi la transformation organisationnelle des structures créatives en partenariat avec COBEL® Développeur de culture.

# À propos

ESE est portée par son fondateur, Matthieu Savatier : plus de quinze ans de production technique événementielle, des cérémonies des Jeux Olympiques et Paralympiques de Paris 2024 aux tournées en stade et aux concerts internationaux. Qualifications : AP2 ENSOSP (prévention incendie et de panique pour les ERP et IGH), Vectorworks, Braceworks et MVR, Team France Vectorworks. ESE s'appuie sur une équipe de spécialistes mobilisée selon les projets : régisseurs, directeurs techniques, ingénieurs structure et préventionnistes. Les notes de calcul sont signées par un ingénieur structure partenaire.

# Questions fréquentes

${FAQ3.fr.map(([q, a]) => `## ${q}\n\n${a}`).join("\n\n")}

# Contact

Adresse : ${CONTACT.adresse1}, ${CONTACT.adresse2}. Téléphone : ${CONTACT.tel}. Email : ${CONTACT.email}.
LinkedIn entreprise : ${CONTACT.linkedinEntreprise}
LinkedIn Matthieu Savatier : ${CONTACT.linkedinMatthieu}
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
