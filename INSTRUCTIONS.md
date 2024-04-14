# Exercise 4: Generate a Vite React Project

React is easy to use directly when building small pieces of UI, but it's generally recommended to use some sort of framework to improve the developer experience.

For the purposes of this course, we will use [Vite](https://vitejs.dev/) (pronounced "veet", rhymes with "feet"), a popular dev server and bundler. Vite's React template gives us several common features that improve React's developer experience without introducing too much configuration.

## Generate the app files

```bash
npm create vite@latest .
```

Agree if asked to install `create-vite`.

Since we're building on existing project files, you'll probably the following prompt:

```
Current directory is not empty. Please choose how to proceed:
```

Using your `Up` and `Down` arrows, select `Ignore files and continue`, then press `Enter`/`Return`.

You will be presented with another prompt.

```
Select a framework:
```

This one's straightforward. Select `React`.

> ℹ️ **Good to know** 
>
> Fun fact: Vite, French for _fast_, was originally created by Evan You specifically for another one of his projects, [Vue](https://vuejs.org/), a React competitor.

Finally, one more prompt:

```
Select a variant:
```

Select `JavaScript`.

> ℹ️ **Good to know**
>
> You may have heard of TypeScript. It's a superset of JavaScript that adds typing, but at the cost of added complexity and maintenance. _In general_, I recommend using TypeScript with larger projects, and Vite supports it out of the box.
> 
> You will probably see some TypeScript as we progress through these exercises. VS Code runs a TypeScript server behind the scenes (it's even written in TypeScript), so there are some conveniences that come from adding types.
> 
> **You don't need to understand or write any TypeScript to complete this course,** but if you're interested in learning more about it, check out the official [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) to get started.

## Explore the new and modified files

Take a moment to look around at all the new files that have been generated.

In `package.json`, several new scripts have been added to the project: 

- The `dev` script runs the dev server and allows developers to easily view and interact with a local instance of their application.

- The `build` script bundles all of the project resources necessary for app deployment in an optimized format. Vite uses the bundler [Rollup](https://rollupjs.org/) under the hood to emit static files that can deployed easily on any standard HTTP server.

- The `lint` script lints the JavaScript using the `eslint` tool. It ensures certain coding practices are followed in this codebase, and is configured using the added `eslintrc` file.

  If you are using VS Code, you can add the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically call out any eslint issues you have as you develop using the project eslint config.

- The `preview` script, rarely used in developing, builds the production bundle and runs React in `production` mode. This offers production parity at the cost of slower builds, and the developer must refresh the browser manually to see changes.

> ℹ️ **Good to know** 
>
> Why is there a `preview` script? When running `dev`, Vite runs React in `development` mode and serves modules using native EcmaScript Modules (ESM). While providing superior speed and convenience, these choices differ from the production build and can affect performance testing and production troubleshooting.

The `index.html` file has also changed somewhat. There are no more scripts that reference the UMD version of React, and we now reference the newly-created `main.jsx` script. We'll talk more about that new extension in the next exercise.

Vite uses all `<script type="module">` elements in `index.html` as entry points and will generate separate bundles for each during the `build` script. 

## Install and run

All that's left is to install all of the dependencies, then run your app. You can do that by following the instructions printed in your terminal:

```bash
  npm install
  npm run dev
```

If everything went well, you should see some information printed in your terminal. One of the lines in the log (starting with `Local: http://localhost`) is the URL of your local app instance. Copy the URL, starting with `http` and including the port (the numbers after the second `:`), then paste that into a browser.

Alternatively, if you are using the terminal in VS Code, you may click the URL in the terminal while holding the `command` key on a Mac or the `ctrl` key on a Windows machine.

You should now see a simple React app running in your browser with the tite "Vite + React".

To stop the app, hold down `command`(Mac)/`ctrl` (Windows) and type `c`.

## Specifying a port

The port that's used in the URL is randomly assigned by default. I like to explicitly specify the `3000` port since that's what I typically use.

Changes in Vite configuration occur in the `vite.config.js` file, using the `defineConfig` function. To specify the port `3000`, replace everything starting with `export default defineConfig` with the following:

```js
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
});
```

You can learn more about Vite configuration at https://vitejs.dev/config/.

<!-- Bonus -->
> 💰 **Bonus** 
> 
> Love writing configuration?
> 
> I mentioned earlier that some of the files we will be using are built in TypeScript. If you're feeling adventurous, try configuring TypeScript by adding a `tsconfig.json`. Check out https://www.robinwieruch.de/vite-typescript/ if you need some guidance. The next exercise will show the final configuration.