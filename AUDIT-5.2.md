# Audit du site ESE · 18 novembre 2026

Projet : ese-techsolutions.com, branche `audit-5.2` partie de `main` (625116b). Revue faite à neuf, sans reprendre les conclusions des sessions précédentes.

## Résumé

État de santé : **7/10**. Le site lui-même est sain : le build passe, il n'y a aucun lien interne cassé, chaque page a un titre et une description uniques, l'affichage mobile ne déborde pas et l'accueil pèse environ 210 Ko au premier affichage. Les faiblesses sont autour du site : les automatisations échouent sans le dire, le site n'a ni tests ni CI, et Astro a pris deux versions majeures de retard.

Les 5 priorités :
1. **Critique** : 3 tâches planifiées (post Google hebdo, guide mensuel, relevé IA mensuel) s'arrêtent à la première autorisation tout en affichant « réussie ». Aucun post Google automatique ni aucun guide n'est sorti depuis le 5/11.
2. **Importante** : le plan d'implantation UNOC, un livrable client, restait accessible en ligne (corrigé sur la branche).
3. **Importante** : les images étaient servies sans cache navigateur (corrigé sur la branche).
4. **Importante** : 13 alertes de sécurité sur les dépendances, ramenées à 5 sur la branche. Les 5 restantes demandent Astro 7.
5. **Importante** : les polices Google sont chargées depuis les serveurs de Google, avec transfert d'IP (risque RGPD) et dépendance externe.

## Cartographie

| Élément | Constat |
|---|---|
| Objectif | Site vitrine d'ESE (direction technique événementielle) : faire venir des demandes de devis, remonter sur Google et dans les IA. FR + EN. |
| Stack | Astro 5.18.2 en site statique, @astrojs/sitemap. Aucun framework client : un seul script `public/ese.js` (47 lignes) plus des scripts inline. |
| Architecture | Contenus dans `src/data/v3.js` (FR/EN, références, fiches, métiers, FAQ), `site.js` / `site.en.js` (coordonnées, SEO hérité), `avis-google.json`. Composants dans `src/components/v3/`, layout unique `BaseLayout.astro`. 65 pages générées. |
| Flux de données | Tout est figé au build. Seul flux sortant : le formulaire de contact, qui envoie en POST vers Formspree (`mvznglva`), avec un champ anti-spam `_gotcha`. Mesure d'audience Vercel Web Analytics (sans cookie). |
| Déploiement | GitHub `matthsav-gif/Site-ESE-V2`. Un push sur `main` met en production sur Vercel (projet `site-ese-yirw`) ; chaque branche a sa preview. |
| Variables d'environnement | Aucune (vérifié avec `vercel env ls`). Aucun secret dans le dépôt. |
| Services tiers | Formspree, Vercel (hébergement, analytics, redirections), Google Fonts, IndexNow (clé publique dans `public/`), Google Search Console et Bing (balises de vérification). |
| Automatisations hors dépôt | Tâches planifiées de l'app Claude : `ese-post-google-hebdo`, `ese-contenu-mensuel`, `ese-visibilite-ia-mensuelle`, `ese-journal-bimensuel`. |
| Intégrations IA | **Aucune.** Le site n'appelle aucun modèle (aucune occurrence d'anthropic, openai ou claude- dans le code). L'axe IA de l'audit est donc sans objet. |

## Ce qui a été lancé

| Commande | Résultat réel |
|---|---|
| `npm ci` | OK |
| `npm run build` | OK, 65 pages en 19 s, aucun avertissement |
| lint, typecheck, tests | **N'existent pas** (aucun script, aucun test, aucune CI) |
| `npm audit` | 13 vulnérabilités (1 critique, 11 hautes, 1 faible) avant ; 5 après la correction (1 critique, 3 hautes, 1 faible) |
| `npm outdated` | astro 5.18.2, dernière version 7.4.13 |
| Crawl de `dist/` (script maison) | 0 lien interne cassé, 0 titre ou description en double, 1 seul h1 par page, canonical partout, JSON-LD valide partout |
| Test mobile 375 px sur 10 pages réelles | Aucun débordement horizontal |
| Mesure de l'accueil en ligne | 11 requêtes, environ 210 Ko décodés au premier affichage (images en chargement différé) |
| En-têtes HTTP en production | HSTS, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy présents ; pas de CSP ; images en `max-age=0` |

## Constats

| # | Gravité | Fichier et ligne | Preuve | Correction proposée | Effort | Gain |
|---|---|---|---|---|---|---|
| 1 | Critique | Hors dépôt : `~/.claude/scheduled-tasks/ese-post-google-hebdo`, `ese-contenu-mensuel`, `ese-visibilite-ia-mensuelle` | Runs des 9/11 et 16/11 (post), 10/11 (guide), 5/11 (relevé) marqués « succeeded ». Leurs transcriptions finissent par « Request interrupted by user for tool use » après un ou deux appels. `posts-google.md` n'a aucune entrée après le 5/11, aucun guide n'a été ajouté depuis le 5/11 et `visibilite-ia.md` s'arrête au relevé 0. `ese-journal-bimensuel` fonctionne. | Recréer ces 3 tâches depuis une session en mode bypass (comme les autres `-v2` déjà refaites), puis vérifier le premier run de chacune. Voir le plan A. | S, mais hors dépôt et refusé par le mode auto | Rétablit le post Google hebdo, le guide mensuel et le suivi IA, qui ne sortent plus depuis 2 semaines |
| 2 | Importante | `public/images/refs/unoc-implantation.jpg` | Fichier plus référencé nulle part, mais `curl` en production renvoie 200. C'est un livrable client que Matthieu ne veut pas sur le site. | Sorti du dossier public, conservé dans `sources/retires-du-site/`. **Corrigé** (3e7f48f). | S | Livrable client plus accessible après la fusion |
| 3 | Importante | `vercel.json` | En production, `/images/*` et `/ese.js` sont servis en `cache-control: public, max-age=0, must-revalidate`. | Cache d'une semaine pour les images (avec revalidation en arrière-plan), d'un an pour `/fonts` et `/_astro` (noms hashés). **Corrigé** (c86bf94). | S | Visites suivantes plus rapides, moins de requêtes |
| 4 | Importante | `package-lock.json` | `npm audit` : 13 alertes, dont vite, postcss, svgo, devalue et js-yaml. Toutes concernent des outils de build : le site publié est statique, donc l'exposition réelle est faible. | `npm audit fix` sans changement de version majeure : HTML généré identique au bit près. **Corrigé** (80a615a). | S | 8 alertes en moins, sans risque |
| 5 | Importante | `package.json:12` (astro ^5.6.0) | Les alertes restantes (astro, critique, sur `define:vars` ; zod ; sharp ; esbuild) ne se corrigent qu'avec Astro 7. Le site utilise `define:vars` dans `ContactPage.astro`, mais avec des valeurs fixes (langue, message d'erreur) : pas de faille exploitable aujourd'hui. | Migration vers Astro 7. Voir le plan B. | M | Fin des alertes, maintenance assurée |
| 6 | Importante | `src/layouts/BaseLayout.astro:126` | Archivo et IBM Plex Mono sont chargées depuis fonts.googleapis.com : l'IP du visiteur part chez Google avant tout consentement, ce qu'a sanctionné un tribunal allemand en 2022. En plus, cela ajoute deux domaines tiers sur le chemin critique. | Héberger les deux polices dans `public/fonts`, en woff2 et en sous-ensembles. Voir le plan C. | M | Conformité RGPD, une connexion tierce en moins |
| 7 | Importante | Tout le dépôt | Aucun test, aucun lint, aucune CI. Des tâches automatiques poussent directement sur `main`, qui met en production : une construction cassée ou une page vide partirait en ligne sans contrôle. | Ajouter une action GitHub qui construit le site et lance un contrôle (liens internes, h1, titres) sur chaque push. Voir le plan D. | M | Les erreurs sont attrapées avant la production |
| 8 | Mineure | `public/fonts/` (444 Ko) | LuloClean et DINNext (otf, ttf, woff2) ne sont utilisées par aucun CSS : ce sont des fichiers morts, mais publiés. | Les retirer du dossier public. Non fait : c'est une suppression de fichiers, à valider. | S | Dépôt plus léger |
| 9 | Mineure | `public/images/direction-technique/dj-mochakk.webp` (808 Ko), plusieurs JPEG de 600 Ko à 1 Mo | Images lourdes servies au clic ou en partage. Les JPEG ne servent qu'en og:image. | Recompresser à 1600 px maximum, en visant 250 Ko. | M | Pages métiers plus légères |
| 10 | Mineure | `src/pages/journal/*`, `src/data/v3.js` (fiches) | 9 descriptions de plus de 170 caractères (jusqu'à 251, UNOC) et 6 titres de plus de 65 caractères (jusqu'à 82) : Google les tronque. | Raccourcir les textes. C'est du contenu visible, donc à faire avec Matthieu. | S | Extraits Google propres |
| 11 | Mineure | `src/components/v3/ContactPage.astro:114` | Si l'adresse d'envoi Formspree est vide, le formulaire affiche « demande envoyée » sans rien envoyer. Aujourd'hui elle est renseignée. | Afficher l'erreur à la place. | S | Aucune demande perdue en silence si la config change |
| 12 | Mineure | `src/data/avis-google.json` | Avis recopiés à la main le 5/11 : la tâche de mise à jour hebdo n'a pas pu être créée. | Tâche hebdo en mode bypass (plan A). | S | Nouveaux avis affichés automatiquement |
| 13 | Mineure | `README.md:26` | Mentionne « 8 pages » et `site.js` comme fichier unique de contenus. En réalité il y a 65 pages et les contenus sont surtout dans `v3.js`. | Mettre le README à jour. | S | Reprise plus facile par une autre personne |
| 14 | Mineure | `vercel.json` | Pas d'en-tête Content-Security-Policy. | Ajouter une CSP limitée à self, Formspree, Google Fonts et Vercel, à tester en mode report-only d'abord. | M | Défense contre l'injection de scripts |

## Vérifié ou supposé

**Vérifié par moi aujourd'hui** :
- build, audit et liste des dépendances obsolètes (commandes ci-dessus) ;
- crawl complet de `dist/` : liens, titres, descriptions, h1, canonical, JSON-LD, sitemap de 64 URL (la 404 est bien exclue) ;
- en-têtes HTTP en production ;
- réponse 200 sur le plan UNOC ;
- absence de variables d'environnement sur Vercel ;
- transcriptions des runs des tâches planifiées, et journaux `posts-google.md` et `visibilite-ia.md` ;
- mobile à 375 px sur 10 pages ;
- poids de l'accueil en ligne ;
- absence d'appel à un modèle d'IA.

**Supposé, non vérifié** :
- le bon fonctionnement réel de Formspree : je n'ai pas soumis le formulaire, pour ne pas envoyer de faux message au secrétariat ;
- les scores Core Web Vitals de terrain (pas d'accès à la Search Console dans cette passe) ;
- l'indexation réelle du plan UNOC dans Google Images ;
- le fait que la migration Astro 7 se fasse sans casse, tant qu'elle n'a pas été essayée sur une branche.

## Plans pour les corrections d'effort M ou L (non faites)

**A. Tâches planifiées (critique, à faire en premier).** Ouvrir une session en mode bypass. Recréer `ese-post-google-hebdo-v2`, `ese-contenu-mensuel-v2`, `ese-visibilite-ia-mensuelle-v2` et `ese-avis-google-hebdo` avec les mêmes prompts, puis désactiver les anciennes. Lancer chacune une fois et vérifier le résultat concret : une ligne ajoutée au journal, un commit ou un relevé. Ne pas se fier au statut « succeeded ».

**B. Astro 7.** Sur une branche :
1. passer à `astro@7` et `@astrojs/sitemap` dernière version ;
2. lire le guide de migration (changements sur `define:vars`, les scripts inline et le traitement des images) ;
3. construire le site, puis comparer `dist/` avant et après (nombre de pages, h1, liens, JSON-LD) ;
4. vérifier sur la preview Vercel le formulaire, le menu et la lightbox.

Compter une demi-journée.

**C. Polices auto-hébergées.**
1. Télécharger Archivo (axes wdth et wght) et IBM Plex Mono 400, 500 et 600 en woff2.
2. Les placer dans `public/fonts`, avec des `@font-face` dans `ese.css` et un preload de la police des titres.
3. Supprimer le lien Google Fonts.
4. Contrôler visuellement 5 pages.

La mention Google Fonts de la page confidentialité éventuelle est à retirer.

**D. Contrôle automatique.**
1. Créer `.github/workflows/build.yml` : `npm ci`, `npm run build`, puis un script Node d'une cinquantaine de lignes, sans dépendance, qui reprend le crawl de cet audit : liens internes, un h1 par page, titres et descriptions présents et uniques.
2. Il ne bloque pas les pushs directs sur `main`, mais il signale l'échec par mail GitHub.
3. Pour bloquer vraiment, faire passer les tâches automatiques par une branche et une PR fusionnée seulement si le contrôle passe.

## 3 améliorations à fort impact non demandées

1. **Fonctionnalité : suivi des demandes de devis.** Le formulaire envoie déjà un événement Vercel « Demande de devis envoyée ». On pourrait publier un petit tableau mensuel (demandes par métier et par page d'arrivée) dans le relevé du 1er : c'est la seule mesure qui dit si tout le travail SEO rapporte des clients.
2. **Simplification : une seule source de contenus.** `site.js` et `site.en.js` (282 lignes chacun, en grande partie hérités de la V2) coexistent avec `v3.js`. Garder uniquement les coordonnées et le SEO encore utilisés réduirait le risque d'incohérence entre les pages, `llms.txt` et les posts automatiques.
3. **Automatisation : contrôle d'échec des tâches.** Une tâche quotidienne de 2 minutes qui lit les journaux (posts, guides, relevés, avis) et prévient Matthieu si l'un d'eux n'a pas bougé dans les délais prévus. La panne actuelle aurait été vue en 7 jours au lieu de passer inaperçue.
