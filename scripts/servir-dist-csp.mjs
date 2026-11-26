// Sert dist/ en local avec l'en-tête Content-Security-Policy de vercel.json, pour tester la CSP avant mise en ligne.
// Usage : npm run build && node scripts/servir-dist-csp.mjs  (http://localhost:4345)
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const racine = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(racine, "dist");
const csp = JSON.parse(fs.readFileSync(path.join(racine, "vercel.json"), "utf8")).headers.flatMap((h) => h.headers).find((h) => h.key === "Content-Security-Policy")?.value;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".JPG": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".woff2": "font/woff2", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };

http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split("?")[0]);
  let f = path.join(DIST, path.normalize(u));
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) f = path.join(f, "index.html");
  else if (!path.extname(f) && fs.existsSync(f + ".html")) f += ".html";
  fs.readFile(f, (e, b) => {
    if (e) { res.writeHead(404); return res.end("404"); }
    const h = { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-store" };
    if (csp && !u.startsWith("/v/")) h["Content-Security-Policy"] = csp.replace("; upgrade-insecure-requests", ""); // pas de https en local
    res.writeHead(200, h); res.end(b);
  });
}).listen(4345, () => console.log("http://localhost:4345"));
