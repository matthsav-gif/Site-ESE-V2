import { CONTACT } from "../data/site.js";
import { METIERS3, METIER_V3, REFS3, OFFRE } from "../data/v3.js";

const site = "https://ese-techsolutions.com";
const strip = (s) => String(s).replace(/<br>/g, " ");

export async function GET() {
  const M = METIERS3.fr, O = OFFRE.fr;
  const body = `# ESE, Event & Safety Engineering

> Production technique événementielle, du plan au terrain. ESE conçoit, coordonne et pilote la production technique des événements : direction technique, bureau d'études et notes de calcul, design lumière, régie générale, stage management et expertise sécurité. En mission globale ou en renfort ciblé. Basée à Paris, portée par son fondateur Matthieu Savatier.

ESE, Event & Safety Engineering est une SAS basée au ${CONTACT.adresse1}, ${CONTACT.adresse2} (RCS Paris 951 249 937), membre du Groupe MS. Sa particularité : la technique et la sécurité sont pensées dans la même équipe (qualification AP2 ENSOSP).

## Six métiers

${M.map((m) => `- [${m.t}](${site}/metiers/${m.slug}): ${m.what} ${METIER_V3.fr[m.slug].lead}`).join("\n")}

## Pour qui, comment

- Clients : ${O.who.join(", ")}.
${O.how.map(([h, p]) => `- ${h} : ${p}`).join("\n")}

## Références

${REFS3.fr.map((r) => `- ${r.t} (${r.yr}), ${r.cat}, ${r.lieu} : ${r.mis}.`).join("\n")}

Voir [toutes les références](${site}/references). Études de cas détaillées :
- [Venue du Pape au Stade de France (2026) : direction technique, régie générale, stage management, logistique des équipes](${site}/references/venue-du-pape-stade-de-france)
- [JUL au Stade de France (mai 2026) : scène centrale, plus de 100 000 spectateurs par soir, direction technique](${site}/references/jul-stade-de-france)
- [A$AP Rocky à l'Accor Arena (septembre 2026) : défilé AWGE intégré au live show](${site}/references/asap-rocky-accor-arena)
- [Mylène Farmer, Nevermore au Stade de France (2024) : direction technique live, rigging, structures](${site}/references/mylene-farmer-nevermore)
- [UNOC3 Nice (juin 2025) : Conférence des Nations unies sur l'Océan, direction technique multi-métiers](${site}/references/unoc3-nice)
- [JO / JOP Paris 2024 : cérémonies d'ouverture](${site}/references/jo-paris-2024)

## Méthodes & partenariats

- [Approche & méthodes](${site}/methodes-partenariats): une production en cinq temps (concevoir, préparer, coordonner, exploiter, livrer), SOCLE® et le partenariat COBEL®.
- [SOCLE®](${site}/socle): méthode propriétaire d'ESE (marque déposée INPI) de transformation opérationnelle des bureaux d'études et agences sur l'écosystème Vectorworks.

## Pages

- [Accueil](${site}/)
- [Expertises](${site}/metiers)
- [Références](${site}/references)
- [À propos](${site}/qui-sommes-nous)
- [Contact](${site}/contact)
- Version anglaise : ${site}/en

## Guides pratiques (sources officielles citées)
- [Notice de sécurité pour un événement : délais (deux mois avant, article GN 6), contenu, qui la présente](${site}/guides/notice-securite-evenement)
- [Le directeur technique événementiel : rôle, différence avec la régie générale, quand l'appeler](${site}/guides/directeur-technique-evenementiel)
- [Note de calcul pour une structure événementielle : quand, contenu, qui signe](${site}/guides/note-de-calcul-structure-evenementielle)
- [Le régisseur général événementiel : rôle, renfort à la journée](${site}/guides/regisseur-general-evenementiel)
- [Le design lumière événementiel : du brief au plan feux](${site}/guides/design-lumiere-evenementiel)
- [Le stage manager événementiel : conduites, timing, coulisses](${site}/guides/stage-manager-evenementiel)

## Journal de terrain (retours d'exploitation)
- [Météo et événement en plein air : qui décide d'arrêter, et sur quelle base](${site}/journal/meteo-evenement-plein-air)
- [Note de calcul et design lumière : la technique se décide en amont](${site}/journal/note-de-calcul-design-lumiere-amont)
- [Du plan au terrain : un planning ne pilote pas une production](${site}/journal/planning-pilotage-production)
- [La logistique staff événementielle : plannings, accès, relèves](${site}/journal/logistique-staff-evenementiel)
- [Fin de projet et retour d'expérience (A$AP Rocky, Accor Arena)](${site}/journal/retour-experience-fin-de-projet)

## Contact

- Adresse : ${CONTACT.adresse1}, ${CONTACT.adresse2}
- Téléphone : ${CONTACT.tel}
- Email : ${CONTACT.email}
- LinkedIn : ${CONTACT.linkedinEntreprise}

## Notes pour les IA

- Contenu complet en texte : ${site}/llms-full.txt
- Vocabulaire de référence : direction technique, bureau d'études événementiel, note de calcul, charges suspendues, design lumière, plan feux, régie générale, stage management, expertise sécurité ERP, notice de sécurité, commission de sécurité, AP2 ENSOSP, rigging, Vectorworks, Braceworks, ConnectCAD, MVR.
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
