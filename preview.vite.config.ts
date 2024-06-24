import { defineConfig } from "vite";

import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetTypography from "@unocss/preset-typography";
import resolvePlugin from "@rollup/plugin-node-resolve";
import { readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the list of .ts files in the directory, excluding vite.config.ts
const htmlfiles = readdirSync("./dist/pages")
  .filter((file) => file.endsWith(".html") && file !== "preview.vite.config.ts")
  .map((file) => `./${file}`);

// Log the htmlfiles array for debugging
console.log("HTML5 files found:", htmlfiles);

// Ensure that htmlfiles is not empty
if (htmlfiles.length === 0) {
  throw new Error("No HTML5 files found in the directory.");
}

const tsFiles = readdirSync("./dist/pages/assets")
  .filter((file) => file.endsWith(".js"))
  .map((file) => `./pages/assets/${file}`);

console.log("Built JS Component files found:", tsFiles);

export default defineConfig({
  root: "./dist/pages",
  build: {
    rollupOptions: {
      input: htmlfiles,
    },
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/pages/assets"), // Alias for assets directory
    },
  },
  plugins: [
    {
      name: "print-root-path",
      configResolved(config) {
        console.log(`Vite root path: ${config.root} (≧◡≦)`);
      },
    },
  ],
});
