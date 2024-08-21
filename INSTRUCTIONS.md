# Exercise 5: Generate a Vite React Project

Congratulations! Your newly-acquired React experience has landed you a job at Yummy! Foods, an up-and-coming restaurant brand. For the rest of this course, you will, with the help of your teammates, build out the Yummy! Foods website.

The first thing we need to do is set up our project. We will use Vite, along with Vite's React template.

## Generate the project

1. In your terminal, use the following command to generate the project:
   ```bash
   npm create vite@latest .
   ```
2. If prompted to install `create-vite`, agree.
3. Since we're inside an existing project, you'll likely see the following prompt: `Current directory is not empty. Please choose how to proceed:`
4. Select `Ignore files and continue`.
5. Choose `React` for your framework and `JavaScript` for your variant.
6. Select `React`.

## Explore the new and modified files

After generating the project, take a moment to explore all the new files that have been generated.

- [`package.json`](./package.json)

  Several new scripts have been added to the project:

  - `dev`: Runs the development server, allowing developers to easily view and interact with a local instance of their application.

  - `build`: Bundles all project resources necessary for app deployment in an optimized format. Vite uses the bundler [Rollup](https://rollupjs.org/) under the hood to emit static files that can be deployed easily on any standard HTTP server.

  - `lint`: Lints the JavaScript using the `eslint` tool, ensuring certain coding practices are followed in this codebase. It is configured using the added `eslintrc` file.

      If you are using VS Code, you can add the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically identify any eslint issues as you develop using the project eslint config.

  - `preview`: Rarely used in development, builds the production bundle and runs React in production mode. This offers production parity at the cost of slower builds, and the developer must refresh the browser manually to see changes.

- [`index.html`](./index.html)

  There are no more scripts that reference the UMD version of React, and we now reference the newly-created `main.jsx` script. We'll discuss that new extension in the next exercise.

  Vite uses all `<script type="module">` elements in `index.html` as entry points and will generate separate bundles for each during the `build` script.

- [`vite.config.js`](./vite.config.js)

  This is where we configure Vite. In the field `plugins`, we are passing a `react` function. This is what configures Vite to use React.

## Specify a port

In the [`vite.config.js`](./vite.config.js) file using the `defineConfig` function, replace everything starting with `export default defineConfig` with the following:

```js
export default defineConfig({
  server: {
    port: 3000,
    open: true,
  },
  plugins: [react()],
});
```

By default, Vite randomly assigns a port. This small change in configuration specifies port 3000.

## Install and run

All that's left is to install all dependencies, then run your app. In your terminal:

```bash
  npm install
  npm run dev
```

If everything went well, you should see a ready message in your logs.

In your browser, visit http://localhost:3000. Alternatively, if you are using the terminal in VS Code, you may click the URL printed in the terminal while holding the `CMD` key on a Mac or the `CTRL` key on a Windows machine.

You should now see a simple React app running in your browser titled "Vite + React".

To stop the app, type `CMD` + `C` (Mac)/`CTRL` + `C` (Windows).

Now that we've set up our project, let's start building it!
