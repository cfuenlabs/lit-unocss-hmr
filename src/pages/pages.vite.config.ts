import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import ViteRestart from "vite-plugin-restart";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const htmlfiles = readdirSync("./src/pages")
  .filter((file) => file.endsWith(".html") && file !== "pages.vite.config.ts")
  .map((file) => `./src/pages/${file}`);

console.log("HTML files found:", htmlfiles);

if (htmlfiles.length === 0) {
  throw new Error("No HTML files found in the directory.");
}

const tsFiles = readdirSync("./src/pages/assets")
  .filter((file) => file.endsWith(".js"))
  .map((file) => `./src/pages/assets/${file}`);

console.log("Built JS Component files found:", tsFiles);

export default defineConfig({
  root: "./src/pages",
  build: {
    rollupOptions: {
      input: htmlfiles,
      output: { dir: resolve(__dirname, "../../dist/"), format: "es" },
    },
  },
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/pages/assets"),
    },
  },
  plugins: [
    UnoCSS({
      configFile: resolve(__dirname, "../../unocss.config.ts"),
      inspector: false,
    }),
    ViteRestart({
      restart: ["./src/components/**/*", "./src/pages/**/*"], // Monitor these directories for changes
    }),
    {
      name: "print-root-path",
      configResolved(config) {
        console.log(`Vite root path: ${config.root} (≧◡≦)`);
      },
    },
  ],
});
