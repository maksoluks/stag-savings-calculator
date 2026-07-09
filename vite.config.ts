import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
import fs from "fs";

// Auto-create empty brand photo folders for every logo in src/assets/brand-logos/.
// Dzięki temu po dodaniu np. "BMW.svg" automatycznie powstaje src/assets/brands/bmw/,
// do którego wystarczy wrzucać zdjęcia realizacji.
function ensureBrandFolders(): Plugin {
  const logosDir = path.resolve(__dirname, "src/assets/brand-logos");
  const brandsDir = path.resolve(__dirname, "src/assets/brands");
  const LOGO_EXT = /\.(svg|png|webp|jpg|jpeg|avif)$/i;

  const slugify = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const sync = () => {
    if (!fs.existsSync(logosDir)) return;
    fs.mkdirSync(brandsDir, { recursive: true });
    for (const file of fs.readdirSync(logosDir)) {
      if (!LOGO_EXT.test(file)) continue;
      const slug = slugify(file.replace(LOGO_EXT, ""));
      if (!slug) continue;
      const dir = path.join(brandsDir, slug);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(
          path.join(dir, ".gitkeep"),
          "# Wrzucaj tu zdjęcia realizacji dla tej marki (.webp .jpg .jpeg .png .avif)\n",
        );
      }
    }
  };

  return {
    name: "ensure-brand-folders",
    buildStart() {
      sync();
    },
    configureServer(server) {
      sync();
      server.watcher.add(logosDir);
      const onChange = (p: string) => {
        if (p.startsWith(logosDir)) sync();
      };
      server.watcher.on("add", onChange);
      server.watcher.on("unlink", onChange);
    },
  };
}

// Static SPA build for GitHub Pages hosted under /auto-gaz-stag/
export default defineConfig({
  base: "/auto-gaz-stag/",
  plugins: [
    ensureBrandFolders(),
    tsconfigPaths(),
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "node:async_hooks": path.resolve(__dirname, "./mock-async-hooks.js"),
    },
  },
  build: {
    outDir: "dist",
  },
});
