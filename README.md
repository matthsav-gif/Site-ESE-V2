# Site ESE — Event & Safety Engineering

Site statique **Astro** pour `ese-techsolutions.com`. Porté depuis la maquette React validée, design et contenus conservés.

## Lancer le site en local

Dans un terminal, depuis ce dossier :

```bash
npm install      # une seule fois
npm run dev      # ouvre http://localhost:4321
```

Pour générer la version finale (dossier `dist/` à mettre en ligne) :

```bash
npm run build
npm run preview  # prévisualise le résultat final
```

## Structure

```
src/
  data/v3.js            ← contenus du site (FR et EN) : références, fiches, métiers, offre, FAQ, SEO
  data/site.js          ← coordonnées, adresse du formulaire, textes des pages légales (site.en.js : anglais)
  data/avis-google.json ← avis Google affichés sur l'accueil
  pages/                ← 65 pages : accueil, métiers, références, guides, journal, pages légales, /en
  components/v3/        ← gabarits des pages (accueil, métier, fiche référence, guide, contact…)
  layouts/BaseLayout    ← <head>, SEO, données structurées
  styles/ese.css        ← charte graphique et polices
public/
  images/  fonts/  ese.js (menu, filtres, lightbox)
scripts/verifier-site.mjs ← contrôle du site construit (liens, titres, h1)
vercel.json             ← en-têtes, cache, redirections
```

## Mise en ligne

Un push sur `main` met en production sur Vercel (projet `site-ese-yirw`). Chaque branche a sa preview. Avant de pousser :

```bash
npm run check    # construit le site puis contrôle liens, titres, descriptions et h1
```

Rapport d'audit : `AUDIT-5.2.md`.
