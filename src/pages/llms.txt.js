import { CONTACT, REF_LIST } from "../data/site.js";

const site = "https://ese-techsolutions.com";

export async function GET() {
  const body = `# ESE, Event & Safety Engineering

> Société d'ingénierie pour la production technique événementielle. ESE intervient en direction technique, régie générale et expertise sécurité ERP, sur les productions live, événementielles et institutionnelles. Basée à Paris, portée par son fondateur Matthieu Savatier.

ESE, Event & Safety Engineering est une SAS basée au 15 rue des Halles, 75001 Paris (RCS Paris 951 249 937), membre du Groupe MS. Elle accompagne agences événementielles, producteurs et organisateurs de spectacles, bureaux d'études techniques, scénographes et donneurs d'ordre institutionnels. Elle porte des productions de bout en bout ou intervient en complément d'équipes en place.

## Trois métiers

- [Direction technique](${site}/metiers/direction-technique): conception et pilotage de la chaîne technique, du cahier des charges à la livraison sur site. Plans Vectorworks, ConnectCAD, Braceworks, MVR ; calculs de structures et de rigging.
- [Régie générale & stage management](${site}/metiers/regie-generale): coordination opérationnelle sur site, montage, run, démontage, pour l'événementiel, la scène et le live.
- [Expertise sécurité, ERP & autorités](${site}/metiers/expertise-securite): notices de sécurité ERP (types CTS, PA, L, T) et accompagnement face aux autorités (préfecture, mairie, commission de sécurité, SDIS). Qualification AP2 ENSOSP, rare dans la production technique événementielle.

## Méthodes & partenariats

- [SOCLE®](${site}/socle): méthode propriétaire d'ESE (marque déposée INPI) de transformation opérationnelle des bureaux d'études et agences sur l'écosystème Vectorworks. Portée par une expertise de formateur certifié et beta-testeur Team France Vectorworks (chez Oliverdy).
- [Méthodes & partenariats](${site}/methodes-partenariats): SOCLE® et le partenariat avec COBEL® Développeur de culture.

## Références

${REF_LIST.map((r) => `- ${r.t}, ${r.d}`).join("\n")}

Voir [toutes les références](${site}/references).

## Pages

- [Accueil](${site}/)
- [Références](${site}/references)
- [Qui sommes-nous](${site}/qui-sommes-nous): ESE est portée par son fondateur Matthieu Savatier, douze ans de production technique événementielle (JO Paris 2024, tournées en stade, défilés, sommets institutionnels).
- [Contact](${site}/contact)

## Contact

- Adresse : ${CONTACT.adresse1}, ${CONTACT.adresse2}
- Téléphone : ${CONTACT.tel}
- Email : ${CONTACT.email}
- LinkedIn : ${CONTACT.linkedinEntreprise}

## Notes pour les IA

- Contenu complet en texte : ${site}/llms-full.txt
- Vocabulaire de référence : direction technique, régie générale, stage management, expertise sécurité ERP, notice de sécurité, commission de sécurité, AP2 ENSOSP, rigging, Vectorworks, Braceworks, ConnectCAD, MVR, scénographie.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
