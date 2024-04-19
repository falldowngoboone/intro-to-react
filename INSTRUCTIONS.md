# Exercise 7: Build a Menu Item List

In the previous exercise, we created a React component to represent a single menu item. Now, let's take it a step further by exploring how to render multiple menu items dynamically.

## Before starting

Run `npm run dev`.

## Handle data as props

- `src/menu-data.js`
- `src/menu-items.jsx`

Before we can render an entire menu, we need to adjust our `MenuItem` component to use props for data.

First, let's identify all of the pieces of data we'll pass in as props. To do this, we need to think of what will change from menu item to menu item:

- The item **name**
- The **price**
- The **image URL**
- The **image alt text**

Open up `src/menu-data.js`. This file is the example menu data we will use for this exercise. Identify the names of the fields associated with the pieces of data used in `MenuItem`. 

The image source and alt text live in the `image` field (`image.url` and `image.alt`). Note that the `image.url` only refers to the name of the image itself. You will have to add the `/images/` part. You can do this with a [template literal string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals):

```js
`/images/${image.url}`
```

Also note that the menu item price is in cents, not dollars. This helps avoid issues JavaScript (and many other programming languages) experience with decimal math. I've added a utilty called `formatMoney` to properly format `price`:

```js
import {formatMoney} from '@/lib/format-money';

formatMoney(999); // => $9.99
```

In `src/menu-items.jsx`, add `name`, `price` and `image` as props to `MenuItem`.

Next, replace the hard coded data in the JSX returned from `MenuItem` with the props. Remember to use curly braces to pass non-string values to JSX.

If you get stuck, refer to `menu-items.final.jsx`.

## Pass data as props

- `src/menu.jsx`

Now that the `MenuItem` component handles dynamic props, we need to pass those props to `MenuItem` in `src/menu.jsx`. 

Uncomment the `items` import at the top of the page. `items` is an array of menu item data we will use to render the menu. Let's use the first menu item in this array to start. Under the imports, add a temporary variable called `menuItem` and assign `items[0]` to it:

```js
const menuItem = items[0];
```

Using `menuItem`, pass a `name`, `price` and `image` prop to the `MenuItem` component. Again, remember to use curly braces around non-string values.

## Map over menu items

- `src/menu.jsx`

Arrays in JavaScript have a method called `map` that iterate over each item, apply an operation, and return the results of this mapping in a brand new array:

```js
[0, 1, 2, 3, 4].map((num) => num + 1); // => [1, 2, 3, 4, 5]

[0, 1, 2, 3, 4].map((num) => num * 2); // => [0, 2, 4, 6, 8]

[{name: 'Jenna'}, {name: 'Sam'}, {name: 'Fred'}, {name: 'Sampath'}]
  .map((person) => person.name); // => ['Jenna', 'Sam', 'Fred', 'Sampath']
```

We use the `map` method to transform arrays of data into elements.

```js
const people = [{name: 'Jenna'}, {name: 'Sam'}, {name: 'Fred'}, {name: 'Sampath'}];

function Person({name}) {
  return <li>{name}</li>;
}

function People() {
  return (
    <ul>{
      people.map((person) => (
        <Person name={person.name}>;
      ))
    }</ul>
  )
}
```

We have to surround the `map` with curly braces because `map` is a JavaScript method, not JSX.

We will apply this principle to our menu.

First, delete the `menuItem` variable we created in the last exercise.

Next, locate the `<MenuItems>` element. Replace the child `<MenuItem>` and its surrounding `<div>` with a map of the `items` that returns that same `<MenuItem>` surrounded by a `<div>`.

Make sure to pass the item data down to the `<MenuItem>` (see the `People` example above).

## Add a key

- `src/menu.jsx`

I mentioned in a previous exercise that React has a difficult time with tracking JSX elements in an array. Elements in an array can be removed, added, and even reordered. Without any help, React has no choice but to re-render all elements in an array regardless of whether or not they actually need to be re-rendered.

We can help React out by passing a `key` prop to the root of each element in the array. A `key` is a special prop that helps React identify and track elements. There are two rules that are important to know about keys:

1. Keys must be **unique** within the array. You can have multiple arrays of elements on a page that use the same `key`, but you cannot use the same `key` within the _same_ array.
2. Keys must remain **stable** with relation to their elements. In other words, an element's `key` should not change on every render. A change in an element's `key` will automatically result in that element re-rendering.

For the purpose of this exercise, we've been given a unique identifier on each menu item, `productId`.

Pass `productId` as the `key` prop to the **root element** returned from `map`.

We now have a working example of rendering multiple items in a list.