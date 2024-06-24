import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import unoConfig from "../../unocss"
import resolvePlugin from '@rollup/plugin-node-resolve';
import { readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the list of .ts files in the directory, excluding vite.config.ts
const tsFiles = readdirSync("./src/components").filter((file) => file.endsWith(".ts") && file !== "components.vite.config.ts").map((file) => `./src/components/${file}`);

// Log the tsFiles array for debugging
console.log("TypeScript files found:", tsFiles);

// Ensure that tsFiles is not empty
if (tsFiles.length === 0) {
  throw new Error("No TypeScript files found in the directory.");
}

export default defineConfig({
  build: {
    lib: {
      entry: tsFiles,
      formats: ["es"], // Output format as ES modules for code-splitting
    },
    rollupOptions: {
      input: tsFiles, // Entry points for Rollup
      output: {
        dir: resolve(__dirname, "../pages/assets/"),
        format: 'es', // Ensure format is ES modules for code-splitting
        entryFileNames: '[name].js', // Pattern for naming entry files
        chunkFileNames: '[name]-[hash].js', // Pattern for naming chunks
        globals: {
          lit: 'lit', // Global variable name for external library
        },
      },
      plugins: [
        resolvePlugin() // Plugin for resolving node modules
      ]
    },
  },
  plugins: [
    UnoCSS({
      configFile: '../../unocss.config.ts',
      mode: "shadow-dom",
      inspector: false,
    }),
  ],
});