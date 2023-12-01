import { defineConfig } from "vite";

import UnoCSS from "unocss/vite";
// import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import presetAttributify from "@unocss/preset-attributify";
import presetTypography from "@unocss/preset-typography";
import ViteInspector from "vite-plugin-inspect";

import HMR from "./hmr";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    UnoCSS({
      mode: "global",
      shortcuts: [
        [
          "sl-input-border",
          "border-solid border-[var(--sl-input-border-color)] border-1",
        ],
        ["sl-panel-bg", "bg-[var(--sl-panel-background-color)]"],
        ["sl-shadow-sm", "shadow-[var(--sl-shadow-x-small)]"],
      ],
      presets: [
        presetUno(),
        presetAttributify(),
		/*
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle",
          },
        }),
		*/
        presetTypography(),
      ],
      inspector: false,
    }),
    HMR(),
    ViteInspector(),
  ],
});