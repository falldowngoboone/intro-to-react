# Exercise 5: Convert HTML to JSX

So far, we've been using React's `createElement` to create components. While it does the trick, `createElement` quickly becomes less convenient the more your markup increases in complexity. To improve developer experience, Facebook created JSX, an XML-like syntax that looks a lot like HTML but compiles to `createElement`. Here's a sample:

```jsx
<div>
  <p>Hi there!</p>
  <MyComponent aProp="A value">A nested string</MyComponent>
  <SelfClosingComponent />
</div>

// compiled output
React.createElement(
  'div',
  {},
  React.createElement('p', {}, 'Hi there!'),
  React.createElement(MyComponent, { aProp: 'A value' }, 'A nested string'),
  React.createElement(SelfClosingComponent)
);
```

This syntax makes nesting multiple levels of markup as trivial as writing HTML, but it comes with the overhead of adding a transform step before the code can be run. Vite handles the transform for us by compiling all JSX into memory for development and outputting plain JavaScript during the build phase, but we need to first make some adjustments to our code.

> ℹ️ **Good to know** 
>
> For these exercises, check your work by running `npm run dev`. You can stop the dev server by holding `CTL + c` on Windows or `CMD + c` on Mac.

## Update file extensions

Vite, like many other frameworks, has adopted the covention of naming any file that contains JSX with the `.jsx` extension. There is no special significance to this extension other than it tells Vite to automatically transform any JSX in the file.

Go ahead and update the following files to use the `.jsx` extension:

- `src/app.js` → `src/app.jsx`
- `src/main.js` → `src/main.jsx`
- `src/title.js` → `src/title.jsx`

## Update file references

Make sure to update the extension of all references to the files you just updated. Check the following files:

- `index.html`
- `src/main.jsx`
- `src/app.jsx`

## Convert `main.jsx`

In `main.jsx`, change the React and ReactDOM imports at the top of the file to the following:

```js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
```

`StrictMode` is a special component that checks for some common bugs during development. It's recommended to wrap your top-level `App` component with `StrictMode`. Go ahead and convert the `React.createElement` with `App` to a JSX element and wrap it with `StrictMode`:

```jsx
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

Check your work with `npm run dev`.

> ℹ️ **Good to know** 
> 
> What exactly does `StrictMode` do? Among other things, it renders your components twice. Why? There is a class of bugs related to side effects in a component's render function.
> 
> Strictly speaking (see what I did there?), you should avoid interacting directly with anything outside of your component function. We will talk later about how to run side effects in a safe manner.
>
> Learn more about strict mode at https://react.dev/reference/react/StrictMode.

## Convert `app.jsx`

Go ahead and convert the `createElement` in `app.jsx`. Use the previous examples if you get stuck.

Run `dev` if you have stopped your dev server.

## Convert `title.jsx`

Before converting `title.jsx`, there are a couple things to note.

First of all, you can pass JavaScript values to JSX elements, but you need to wrap those values in `{}`:

```jsx
// props can be any valid JavaScript value (e.g. strings, numbers, objects, functions, etc.) 
const myProp = 'My value';
// children must be valid React node (a React element, an array of React elements, or a string, number, or boolean)
const myChild = 'My child';

<MyComponent myProp={myProp}>{myValue}</MyComponent>
```

This tells the JSX compiler to stop parsing JSX and evaluate everything inside of the `{}` as JavaScript.

Second, sometimes you may not know the props you might be passed. There's a special way to handle those situations:

```jsx
function MyComponent(props) {
  return <div {...props} />;
}
```

This is a special version of the native [JavaScript spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). 

You can use the spread syntax to gather props as well:

```jsx
function MyComponent({children, ...props}) {
  return <div {...props}>{children}</div>
}
```

Now, using these examples, convert `title.jsx` to JSX. Be sure to `npm run dev` if you haven't already.

## Add base styles

Let's add some styles. For this project, we're using [Tailwind CSS](https://tailwindcss.com). Tailwind uses a collection of utility CSS classes to allow styles to be quickly built up.

Before we can use Tailwind, we need to add the base `index.css`. Vite allows you to import CSS files as if you were import a JavaScript module:

```js
import 'my-styles.css';
```

In `main.jsx`, import `index.css` underneath the `App` import.

Check your work (you should know how by now). You should see all the default browser styles removed from the "Menu" title.

## Style the `Title` component

Finally, we'll style `Title` to make it look more like a title.

As previously stated, Tailwind uses classes to apply styles to your components. With HTML, you apply CSS styles with the `class` attribute:

```html
<!-- this is HTML, not JSX -->
<div class="font-bold">I'm HTML</div>
```

But JSX uses JavaScript properties, not attributes. The property equivalent of `class` is [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className). There are other properties that are different from their HTML equivalent as well, but `className` will probably be the one you use the most:

```jsx
// JSX
<div className="font-bold">I'm JSX</div>
```

Add the following styles to the `h1` in `Title`:

```
"text-4xl font-black uppercase tracking-wider"
```

> 💰 **Bonus** 
> 
> Add your own styles. Refer to [Tailwind's docs](https://tailwindcss.com/docs/installation) for all the available classes.