// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetAttributify,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    [
      "level-1",
      "bg-gradient-to-r from-indigo-900/90 to-indigo-900/70 rounded-md text-indigo-100 bg-transparent",
    ],
    ["btn", "level-1 b-0 flex flex-row"],
    ["juit", "justify-center items-center"],
    ["btn-lg", "btn h-8 py-8 px-24 text-3xl"],
    ["btn-md", "btn py-2 px-20 text-2xl"],
    ["col-center", "flex flex-col justify-center items-center"],
    [
      "input",
      "border-indigo-900/50 border-solid border-4 rounded-md text-3xl h-8 py-4 px-8 grid place-content-center bg-indigo-900/10",
    ],
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetAttributify(),
    presetTypography(),
  ],
})