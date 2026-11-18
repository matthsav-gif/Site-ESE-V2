// Contrôle du site construit (dist/) : liens internes, titres, descriptions, h1, canonical, données structurées.
// Sans dépendance. Lancé par `npm run check` et par GitHub à chaque push. Sort en erreur au premier défaut.
import fs from "node:fs";
import path from "node:path";

const DIST = "dist";
const files = new Set();
const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, f.name); f.isDirectory() ? walk(p) : files.add("/" + path.relative(DIST, p).split(path.sep).join("/")); } };
if (!fs.existsSync(DIST)) { console.error("dist/ absent : lancer npm run build"); process.exit(1); }
walk(DIST);

const existe = (u) => { u = u.split("#")[0].split("?")[0]; return !u || files.has(u) || files.has(u.replace(/\/$/, "") + "/index.html") || files.has(u + ".html"); };
const erreurs = [];
const titres = new Map(), descs = new Map();
const pages = [...files].filter((f) => f.endsWith(".html"));

for (const f of pages) {
  const s = fs.readFileSync(path.join(DIST, f), "utf8");
  const url = f.replace(/index\.html$/, "");
  const titre = s.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  const desc = s.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const h1 = (s.match(/<h1[\s>]/g) || []).length;
  if (!titre) erreurs.push(`${url} : pas de titre`);
  if (!desc) erreurs.push(`${url} : pas de description`);
  if (h1 !== 1) erreurs.push(`${url} : ${h1} h1 (attendu 1)`);
  if (!/rel="canonical"/.test(s)) erreurs.push(`${url} : pas de canonical`);
  if (titre) titres.set(titre, [...(titres.get(titre) || []), url]);
  if (desc) descs.set(desc, [...(descs.get(desc) || []), url]);
  for (const m of s.matchAll(/application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(m[1]); } catch { erreurs.push(`${url} : données structurées illisibles`); } }
  for (const m of s.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
    const a = m[1];
    if (a.startsWith("//") || a.startsWith("/_vercel/")) continue; // /_vercel : servi par Vercel, absent du build
    if (!existe(a)) erreurs.push(`${url} : lien cassé vers ${a}`);
  }
  for (const m of s.matchAll(/<img [^>]*>/g)) if (!/\salt[\s=>]/.test(m[0])) erreurs.push(`${url} : image sans attribut alt`);
}
for (const [t, u] of titres) if (u.length > 1) erreurs.push(`titre en double : « ${t} » (${u.join(", ")})`);
for (const [d, u] of descs) if (u.length > 1) erreurs.push(`description en double (${u.join(", ")})`);
if (pages.length < 60) erreurs.push(`seulement ${pages.length} pages construites (au moins 60 attendues)`);

if (erreurs.length) { console.error(`${erreurs.length} défaut(s) :\n- ` + erreurs.join("\n- ")); process.exit(1); }
console.log(`Site contrôlé : ${pages.length} pages, aucun défaut.`);
