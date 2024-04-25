# Exercise 5: Convert HTML to JSX

So far, we've been directly using React's `createElement` to create components. While it's technically possible to build React apps this way, using `createElement` becomes less convenient with more complex markup. JSX is meant to make creating and composing elements in React as easy as writing HTML.

There are, however, a few differnces between HTML and JSX. Before we begin this exercise, let's discuss JSX basics.

## A quick JSX primer

Like HTML, JSX elements have an opening and closing tag, both beginning and ending with angle brackets (`<>`), with the closing tag including a forward slash after the beginning angle bracket (`/`):

```js
<div>Hello, world!</div>
```

The content passed in between the element tags becomes the `children` argument of `createElement`:

```js
// this is what the above JSX is converted to
React.createElement('div', {}, 'Hello, world!');
```

Nested elements must close their tags before the closing parent tag:

```js
// ❌ this is invalid JSX nesting
<section>
  <div>
  </section>
</div>

// ✅ this is valid JSX nesting
<section>
  <div></div>
</section>
```

If the element is empty (no `children`), you can close it immediately with a forward slash and greater than sign (`/>`):

```js
<img />
```

Unlike HTML, any JSX element can be self-closing:

```js
// valid JSX but not valid HTML
<div />
```

Previously we learned that data is passed into React elements as props, the second argument of `createElement`.

Props are passed to JSX elements like HTML attributes. Like HTML attributes, prop values can be string literals. These prop types are defined with double quotes (`""`):

```js
<img src="some-image.jpg" height="300" width="300" />
```

The above element's props are passed as the second argument of `createElement`:

```js
createElement('img', {src: 'some-image.jpg', height: '300', width: '200'});
```

You can also pass JavaScript [expression statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Expression_statement) as prop values. You **must** pass these prop types with curly braces (`{}`):

```js
<img src={`images/${imageName}.jpg`} height={300} width={300}>
```

As mentioned previously, custom React components need to be capitalized. This tells React you're passing a custom component instead of an HTML element:

```js
<Title>My title</Title>
<title>My title</title>
```

These JSX elements are interpreted as follows:

```js
createElement(Title, {}, 'My title'); // no quotes around Title, expects a function called Title
createElement('title', {}, 'My title'); // quotes around title, no function needed since it's built in
```

There are a few other important things to know about JSX, but we will explore those as needed.

## Create a title with JSX

- `src/title.jsx`

Open `title.jsx`. We are currently returning `null`. Replace `null` with an `h1` element and make sure it handles `children` properly.

```js
<Title>Menu</Title>
```

should render:

```html
<h1>Menu</h1>
```

## Styling in JSX

There are several approaches to styling JSX elements. The most direct way is to add an inline `style` object prop to any HTML element:

```js
<p style={{color: 'red'}}>I am red text.</p>
```

Inline styles can be difficult to work with, especially when styling an entire application. The only real reason to use inline styling is if you need to pass create a dynamic style for an element (e.g. creating user resizable elements). In general, this appraoch is not recommended.

A more common approach is using CSS classes:

```css
.red {
  color: red;
}
```

In HTML, you would reference this CSS class with the `class` attribute:

```html
<p class="red">I am red text.</p>
```

However, `class` is a reserved keyword in JavaScript. The JSX equivalent of `class` is `className`:

```js
<p className="red">I am still red text.</p>
```

There are a couple of other ways to approach styling in React, but we will stick to CSS classes for this course.

For our restaurant website, we've added [Tailwind CSS](https://tailwindcss.com), a CSS framework that uses predefined CSS classes to build up styles quickly and effeciently.

## Style the page title

Our `Title` looks very plain right now. Let's style it to look more like a page title.

Add the following CSS classes to the `h1` in `Title`:

```
"text-4xl font-black uppercase tracking-wider"
```

> 💰 **Bonus** 
> 
> Add your own styles. Refer to [Tailwind's docs](https://tailwindcss.com/docs/installation) for all the available classes.

## Convert an HTML page to JSX

- `src/menu.html`
- `src/menu.jsx`
- `src/app.jsx`

Now that you know a little bit about the differences between HTML and JSX, let's apply that information to a larger task.

Open `src/menu.html`. This is the initial markup for what will become our website's Menu page, but we need to move it into our React app.

Open `src/menu.jsx`. This file contains the Menu page component where we will use the markup from `src/menu.html`.

Copy all of the markup from `src/menu.html` and paste it into the `Menu` component of `src/menu.jsx`, replacing the `null` placeholder.

Update the pasted markup to be valid JSX. Hint: refer to how to style JSX elements with CSS classes.

## Render the menu page

- `src/menu.jsx`
- `src/app.jsx`

Refer to `src/menu.jsx`. Notice the menu page markup includes an `h1` with a very familiar list of classes. It is, in fact, a complete copy of the `Title` component. 

Reduce code duplication by replacing the `h1` in `src/menu.jsx` with our `Title` component.

If you get stuck, refer to `src/menu.final.jsx`.

Finally, open `src/app.jsx`. We are currently rendering a single page title.

Replace the returned `Title` component with our new `Menu` page component. Since we don't need to pass any `children` to `Menu`, you can render it as a self-closing tag (e.g. `<SelfClosing />`).

We now have an initial Menu page. We'll now work on building up the functionality of this page. The next thing we'll do is optimize how we render menu items.