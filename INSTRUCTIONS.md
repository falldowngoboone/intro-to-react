# Exercise 1: Render a React App

At its core, React is a rendering library. The following exercise demonstrates that absolute minimum amount of work required to render a React app.

## Preview the finished result

First run the exercise solution to see what you will be building. In your terminal:

```bash
npm run start:final
```

If prompted to install the `serve` package, press `RETURN` (`ENTER` on Windows) to accept the default ("yes").

You should see a log that the application is served at  http://localhost:3000. Open that link in your browser of choice to see what you will be building.

Press `CMD` + `C` (`CTRL` + `C` on Windows) to stop the server.

## Add React scripts

Before you start, run the exercise file. In your terminal:

```bash
npm run start 
```

You should now see a blank screen when you navigate to http://localhost:3000. Note you will need to refresh the page manually to see any changes.

Open up [`index.html`](./index.html), then copy the following script elements and paste them inside the `<head>` tags:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

These script elements point to a universal module definition (UMD) version of React, hosted on https://www.unpkg.com/. This allows us to run React without installing any packages.

We are pulling in two scripts, `react` and `react-dom`. The React library itself is an abstraction that defers to other libraries to connect to its API. ReactDOM is the adapter layer that connects React to the Document Object Model, or DOM, which allows React to render web apps.

Note that `react` and `react-dom` are now both available in the global namespace as `React` and `ReactDOM` respectively.

## Create a root element

Before React can render anything to the page, it needs a DOM node to attach to.

In [`index.html`](./index.html), add the following inside the `body` element:

```html
<div id="root"></div>
```

Now we need to create a React root. Inside of the `script` element at the bottom of `body`, add the following:

```js
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
```

The first line grabs a reference to the `div` we just added and stores it in the `rootElement` variable. We then pass this reference to `createRoot`, which gives us our React root.

## Render to the root

Finally, we can render to the page. Underneath the `root` declaration, add:

```js
root.render('Hello, world!');
```

If you haven't already, run the local server (`npm run start` in your terminal) and navigate to http://localhost:3000. You should see the words `Hello, world!` rendered to the page. Right now the text is a direct child of the root, `<div id="root">`. Let's render a simple element.

React renders elements using the `createElement` method. Replace `'Hello, world!'` with the following:

```js
root.render(React.createElement('h1', null, 'Hello, world!'));
```

Save and refresh the browser. You should now see `Hello, world!` styled differently. If you inspect the page, you will see that the text is now rendered inside of an `h1`.