# Exercise 4: Generate a Vite React Project

React is easy to use directly when building small pieces of UI, but it's generally recommended to use some sort of framework to improve the developer experience.

For the purposes of this course, we will use [Vite](https://vitejs.dev/) (pronounced "veet", rhymes with "feet"), a popular dev server and bundler. Vite's React template provides several common features that enhance React's developer experience without introducing too much configuration.

## Generate the app files

```bash
npm create vite@latest .
```

If prompted to install `create-vite`, agree.

Since we're building on existing project files, you'll likely see the following prompt:

```
Current directory is not empty. Please choose how to proceed:
```

Using your `Up` and `Down` arrows, select `Ignore files and continue`, then press `Enter`/`Return`.

You will be presented with another prompt.

```
Select a framework:
```

Select `React`.

Finally, one more prompt:

```
Select a variant:
```

Select `JavaScript`.

## Explore the new and modified files

Take a moment to explore all the new files that have been generated.

In `package.json`, several new scripts have been added to the project:

- `dev`: Runs the development server, allowing developers to easily view and interact with a local instance of their application.

- `build`: Bundles all project resources necessary for app deployment in an optimized format. Vite uses the bundler [Rollup](https://rollupjs.org/) under the hood to emit static files that can be deployed easily on any standard HTTP server.

- `lint`: Lints the JavaScript using the `eslint` tool, ensuring certain coding practices are followed in this codebase. It is configured using the added `eslintrc` file.

    If you are using VS Code, you can add the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) to automatically identify any eslint issues as you develop using the project eslint config.

- `preview`: Rarely used in development, builds the production bundle and runs React in production mode. This offers production parity at the cost of slower builds, and the developer must refresh the browser manually to see changes.

The `index.html` file has also changed somewhat. There are no more scripts that reference the UMD version of React, and we now reference the newly-created `main.jsx` script. We'll discuss that new extension in the next exercise.

Vite uses all `<script type="module">` elements in `index.html` as entry points and will generate separate bundles for each during the `build` script.

## Install and run

All that's left is to install all dependencies, then run your app. Follow the instructions printed in your terminal:

```bash
  npm install
  npm run dev
```

If everything went well, you should see some information printed in your terminal. One of the lines in the log (starting with `Local: http://localhost`) is the URL of your local app instance. Copy the URL, starting with http and including the port (the numbers after the second `:`), then paste it into a browser.

Alternatively, if you are using the terminal in VS Code, you may click the URL in the terminal while holding the `command` key on a Mac or the `ctrl` key on a Windows machine.

You should now see a simple React app running in your browser titled "Vite + React".

To stop the app, hold down `command` (Mac)/`ctrl` (Windows) and type `c`.

## Specify a port

The port used in the URL is randomly assigned by default. I typically use port `3000`, so let's make the change.

In the `vite.config.js` file using the `defineConfig` function, replace everything starting with `export default defineConfig` with the following:

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

Now that we've set up our project, let's start building it!
