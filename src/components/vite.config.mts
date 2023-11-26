import { defineConfig } from 'vite'

import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
import presetTypography from '@unocss/preset-typography'
import ViteInspector from 'vite-plugin-inspect'

export default defineConfig({
  build: {
    lib: {
      entry: ['./example-element.ts', './example-element2.ts'],
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      shortcuts: [],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
        presetTypography(),
      ],
      inspector: false,
    }),
    ViteInspector(),
  ],
})