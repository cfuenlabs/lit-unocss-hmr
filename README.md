#  lit-unocss-hmr

The ultimate Lit + UnoCSS starter

- Unocss on Global Mode for app's entry html
- Unocss on Shadow Mode for Lit web components
- Hot web component rebuild on change
- Hot module reload on component rebuild

## HMR Setup

While I figure how to automate this, you must ensure that your components are declared in `src/component` in `lib.entry` in the `vite.config`

```ts
export default defineConfig({
  build: {
    lib: {
      entry: ['./example-element.ts', './example-element2.ts'],
      formats: ['es'],
    },
    // ...
  }
  // ...
})
```

## Commands

This whole environment is carried by the `concurrently` package and the commands using it defined in the main `package.json` file of the project (`./package.json`).

By default, the commands use npm commands, so you need to change them in order to use bun, pnpm or yarn.