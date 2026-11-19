import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://ese-techsolutions.com",
  integrations: [sitemap()],
  // Astro 7 applique par défaut les règles d'espaces du JSX, qui collent des mots entre balises : on garde la compression sans perte.
  compressHTML: true,
});
