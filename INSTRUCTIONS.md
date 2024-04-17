# Exercise 6: Render a menu item

The rest of this course will involve building a restaurant website, so let's start by building a single menu item.

## Explore the files

We've added a few files to get our website started. Take some time to explore the `src` folder.

- The `lib/` directory will be where, in time, most of our code will live. For now, we'll keep utility files here.
- `menu.jsx` is where the menu screen lives. For the next few weeks, this is the section we'll work on.
- `menu-items.jsx` is the file we'll focus on for this exercise.

## Render static content

Open `menu-items.jsx`. 

In your terminal, run `npm run dev`.

Right now, the `MenuItem` component is returning `null`, which lets React know there's nothing to render.

Replace the `null` with a `<div>` and put the name of a food item inside. May I suggest "Cheeseburger"?

Since this is the item's name, let's add some styling to make it more noticeable. Using the [Tailwind CSS docs](https://tailwindcss.com/docs) as a reference, style the `<div>` however you'd like. I'm using `"text-lg font-bold"`.

## Add a price

Unless we plan on giving away our food for free, we need to show prices with our menu items. 

Add a new price `<div>` after the name `<div>` and add a price (e.g. $6.99).

At this point, depending on how you tried to add the `<div>`, you may be seeing some ugly red squigly lines. JSX can only return a single element, so we can't do something like this:

```js
// 🚫 Don't do this; it won't work and you'll make React sad.

function Nope() {
  return (
    <div>This doesn't</div>
    <div>work.</div>
  );
}
```

There are three ways to solve this problem.

### Using another element

First, you can wrap everything in another element, like another `<div>`:

```js
// 

function SingleElement() {
  return (
    <div>
      <div>This works,</div>
      <div>But what about that extra div?</div>
    </div>
  );
}
```

In the early days of JSX/React, this was what most people did, and it led to what critics of React dubbed _divitis_, or the adding of `<div>`s to a layout simply to appease JSX (yeah, that was a real thing).

The extra `<div>`s add to the page complexity unnecessarily. One or two extra `<div>`s isn't a big deal, but when you're working in a complex web app, they can quickly add up.

> ℹ️ **Good to know** 
>
> To be clear, wrapping elements in a `<div>` (or any other element) isn't a bad thing if you need that element as a way to group or style, but you should never allow the JSX limitations to dictate your final markup. [Markup should be driven by content](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html), not by tools.

### Using an array

Another approach to returning multiple elements is to wrap everything in an array:

```js
function Array() {
  return [
      <div>This works, too,</div>,
      <div>but there's a problem...</div>
  ];
}
```

JSX can return arrays, so this seems like it's a great solution. It was actually the preferred solution for a while. The one problem with arrays is, since arrays can change in virtually any way (you can add, remove, reorder, etc.), React needs some extra help to make sure it renders everything efficiently.

Without any help, React renders all elements in every pass, regardles of whether or not they actually changed. In effect, this approach removes all of React's optimizations.

> ℹ️ **Good to know** 
>
> There _is_ a way to make arrays work, and we'll get to that in the next exercise, but it's better to only use arrays for lists, not arbitrary elements.

### Enter the `Fragment`

Finally, Facebook realized they needed to solve the problem of returning multiple elements from a single render function, and in 2017, we got the `Fragment` element:

```js

import { Fragment } from 'react';

function UsingFragment() {
  return (
    <Fragment>
      <div>This works, too,</div>
      <div>but there's a problem...</div>
    </Fragment>
  );
}
```

This element creates a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) under the hood, which is a single web document containing an arbitrary number of child elements.

And, because `Fragment` is kinda annoying to import and type out, JSX transformers will automatically interpret an empty element as a fragment:

```js
// no import needed!

function UsingFragment() {
  return (
    <>
      <div>This works, too,</div>
      <div>but there's a problem...</div>
    </>
  );
}
```

Use a fragment to return the name and price. You may use either the explicit element or the empty element shortcut.

## The finishing touch

You eat with your eyes, so let's add an enticing image for our cheeseburger.

Above the name `<div>`, add an `<img>` element. Note that the `<img>` element is always self-closing:

```js
<img />
```

Give the `<img>` a `height` and `width` of `"300"`, and set the `src` to `"/images/cheeseburger.jpeg`.

Once you save, you should now see a burger photo along with its name and price.

> 💰 **Bonus** 
> 
> If you were using a screen reader right now, you would be able to tell there was an image in the menu item, but you wouldn't know what of. Be a good citizen of the Web and add some `alt` text to the `<img>` element that describes the cheeseburger. Make it sound delicious.
>
> Refer to https://webaim.org/techniques/alttext/ for guidance.

Congratulations on building your first menu item. But unless you only want to sell a single menu item, you need to add a full menu. We'll do that in the next exercise.
