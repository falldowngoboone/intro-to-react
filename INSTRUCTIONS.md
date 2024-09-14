# Exercise 3: Modularize the App

It's helpful to break up your applications into smaller files, or modules. Modules make your code easier to understand by narrowing the scope of concern. Let's break up this app into smaller modules.

## Preview the finished result

First run the exercise solution to see what you will be building. In your terminal:

```bash
npm run start:final
```

You should see a log that the application is served at http://localhost:3000. Open that link in your browser of choice to see what you will be building.

Press `CTRL` + `C` to stop the server.

## Create a `Title` module

Start the exercise server and navigate to http://localhost:3000:

```bash
npm run start 
```

Explore the exercise files. Notice we have created a new folder called `src`. This is where our modules will live.

Inside [`index.html`](./index.html), cut the `Title` function component (`CMD` + `X`, `CTRL` + `X` on Windows) and paste it into [`src/title.js`](./src/title.js). 

At the bottom of the title file, add this line:

```js
export { Title };
```

This will allow other JavaScript files to import and execute this code.

## Create an `App` module

Creating a top-level `App` component is a common practice in React. It serves as a place to add global functionality and configuration. Let's do that now.

Inside [`src/app`](./src/app.js), first import `Title` from `./title.js`:

```js
import { Title } from './title.js';
```

Next, create a new function component in this file called `App`:

```js
function App() {
    // TODO...
}
```

Copy the element rendered in [`index.html`](./index.html) and paste inside the body of the `App` function, making sure to return it:

```js
function App() {
    return React.createElement(Title, null, 'Menu');
}
```

Finally, just like `Title`, export this component at the bottom of app file:

```js
export { App };
```

## Create the bootstrap module

Now that we have an app module, we'll bootstrap our application by rendering it.

In [`index.html`](./index.html), starting with line 16, cut the remaining JavaScript code, then paste this bootstrap code into [`src/main.js`](./src/main.js).

At the top of [`src/main.js`](./src/main.js), import the `App` module: 

```js
import { App } from './app.js';
```

In the code you just pasted into this file, replace `React.createElement` with `App`:

```js
root.render(React.createElement(App));
```

Finally, in [`index.html`](./index.html), remove anything that's left between the `script` tags inside the `body`. In the opening script tag, add a `src` attribute and set it equal to `./src/main.js`:

```html
<script type="module" src="./src/main.js"></script>
```

Refresh your browser (http://localhost:3000) to check the result. It should look the same as the last exercise.

🎉🎉 Congratulations! You've just created your first React app.