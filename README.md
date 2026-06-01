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
  data/site.js          ← TOUS les contenus, coordonnées, liens (un seul fichier à éditer)
  pages/                ← les 8 pages + 3 pages légales
  components/           ← header, footer, bandeau contact, cartes…
  layouts/BaseLayout    ← <head>, SEO, polices, JSON-LD
  styles/               ← charte graphique (couleurs, typo, animations)
public/
  images/               ← photos (remplacer / ajouter ici)
  fonts/                ← Lulo Clean + DIN Next
  logo-ese.png
```

## Ce qui reste à faire avant la mise en ligne

- [ ] **Formulaire de contact** : renseigner `formEndpoint` dans `src/data/site.js`
      (compte Formspree ou Resend → envoi vers `secretariat@ese-techsolutions.com`).
      Tant qu'il est vide, le formulaire affiche un message de confirmation **sans envoyer**.
- [ ] **Photos manquantes** (placeholders charte affichés à la place) :
  - Défilés & luxe (Louis Vuitton / Garnier / Vichy)
  - UNOC Nice (actuellement visuel provisoire `arena.jpg`)
  - Page Expertise sécurité
  - ~~Portrait Matthieu~~ ✅ intégré (`portrait-matthieu.jpg`)
  → déposer dans `public/images/` et brancher dans `src/data/site.js`.
- [ ] **URL site SOCLE®** : remplacer `socle.example` dans `src/data/site.js`.
- [ ] **URL LinkedIn Matthieu** : `linkedinMatthieu` dans `src/data/site.js`.
- [x] Pages **Mentions légales / CGV / Confidentialité** ✅ rédigées à partir des CGV officielles (V02, 7 mai 2026). Restent 2 points :
  - **Hébergeur** dans les mentions légales : à compléter une fois l'hébergeur choisi (raison sociale + adresse).
  - **Email RGPD** : la politique de confidentialité et les CGV utilisent `contact@ese-techsolutions.com` (comme le document officiel), alors que le contact public du site est `secretariat@`. Vérifier que les deux adresses existent / sont redirigées.
- [ ] Vérifier l'orthographe et passer Lighthouse (cible 90+).

## Notes

- Les vidéos YouTube (facade lazy-load) ne sont pas encore intégrées — à ajouter sur la page
  Références quand les liens des grappes manquantes seront fournis.
- Le numéro de téléphone est masqué dans le header sur écrans de taille intermédiaire
  (laptops) pour éviter le débordement ; il reste présent dans le footer et la page Contact.
