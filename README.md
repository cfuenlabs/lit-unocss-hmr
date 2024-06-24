# lit-unocss-vite

<div align="center">
<img src="https://cdn.worldvectorlogo.com/logos/lit-1.svg" height="90px">
<span>   </span>
<img src="https://images.opencollective.com/unocss/040a0fb/logo/256.png" height="90px">
<img src="https://vitejs.dev/logo-with-shadow.png" height="100px">
</div>

A pretty good Lit + UnoCSS starter

- Unocss on Global Mode for app's entry html
- Unocss on Shadow Mode for Lit web components
- Hot web component rebuild on change
- Hot server reload everytime the components build

## ✏️📋 Project Structure and Workflow

Once you run the `dev` command specified in the project's `package.json`...

- Your components go in `src/components/`
- When components are compiled, the output is generated in `src/pages/assets/`
- Your pages (html files) go in `src/pages/`

```
dist/
node_modules/
src/
┣ assets/
┣ components/
┃ ┗ sample-element.ts
┣ pages/
┃ ┣ assets/
┃ ┣ index.html
┃ ┣ pages.vite.config.ts
┗ vite-env.d.ts
.gitignore
README.md
package.json
pnpm-lock.yaml
preview.vite.config.ts
tsconfig.json
unocss.config.ts
```

And, when you import the generated web components in your HTML, you must...

- import from `/assets/`
- end the filename in `.js`.

For example:
```html
<script type="module" src="/assets/sample-element.js"></script>
```

## 📢 Commands

This whole environment is carried by the `concurrently` package and the commands using it defined in the main `package.json` file of the project (`./package.json`).

By default, the commands use npm, so you need to change them in order to use pnpm or yarn. (Bun is not adviced, given using Bun has proven to cause issues with some UnoCSS packages)

```json
"scripts": {
  "build-components": "vite build --emptyOutDir --config src/components/components.vite.config.ts",
  "build-components-watch": "vite build --emptyOutDir --watch --config src/components/components.vite.config.ts",
  "build-pages": "vite build --emptyOutDir --config src/pages/pages.vite.config.ts",
  "build": "npm run build-components && npm run build-pages",
  "dev-boring": "npm run build-components && vite serve src/pages/ --config src/pages/pages.vite.config.ts",
  "dev": "concurrently \"npm run build-components-watch\" \"vite serve src/pages/ --config src/pages/pages.vite.config.ts\""
},
```

<h2> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="18px"> Typescript </h2>

Make sure you take a look at the `tsconfig.json` or bring your own Typescript config file, because if there's anything bothering you about the default configuration, such as `strictPropertyInitialization` being set to `false`, you should change it!