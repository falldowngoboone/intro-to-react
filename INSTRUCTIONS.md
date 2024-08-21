# Exercise 7: Render a menu item

Right now our menu items are hard coded. This is not very scalable, nor maintainable. Let's fix this by first creating a `MenuItem` component.

- [`src/menu-items.exercise.jsx`](./src/menu-items.exercise.jsx)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), copy everything between `{/* 👋 beginning of menu item */}` and `{/* 👋 end of menu item */}`.
2. In [`src/menu-items.exercise.jsx`](./src/menu-items.exercise.jsx), paste that block inside `MenuItem` and return it.
3. Add the props `name`, `price` and `image` to `MenuItem`, then in the returned JSX:
   - Replace the item name with `name`
   - Replace the image url with ``` `/images/${image.url}` ```
   - Replace the image alt with `image.alt`
   - Import `formatMoney` from `./lib/format-money` and use it to format the price (`formatMoney(price)`).
4. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), import `MenuItem` from `./menu-items` and add an instance above the block you previously copied. Pass the data of the first menu item into `<MenuItem />`. 
   
   Keep in mind:

   - The `price` should be represented in cents (e.g. $1.00 is 100).
   - The `image` should look like `{alt: 'The alt of the image', url: 'base-image-url.jpg'}`.
   - The `name` can be passed unchanged.
5. Repeat step 5 for the remaining menu items, then delete the hard-coded instances when you're done.
