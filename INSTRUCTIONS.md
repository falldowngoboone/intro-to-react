# Exercise 8: Build a Menu Item List

Let's continue our menu page by exploring how to render multiple menu items dynamically.

- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [`src/menu-items.jsx`](./src/menu-items.jsx) (review changes)
- [`src/menu-data.js`](./src/menu-data.js) (review)

1. Review [`src/menu-data.js`](./src/menu-data.js) and [`src/menu-items.jsx`](./src/menu-items.jsx).
  
   [`src/menu-data.js`](./src/menu-data.js) exports a list of menu item objects in an array. This will be used to dynamically render the menu item list.

   We have added a `<MenuItems />` component in [`src/menu-items.jsx`](./src/menu-items.jsx) to serve as a container for styling.
2. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), import `items` from `./menu-data` and replace the hard-coded menu items with a block that maps `items` to `<MenuItem />`. You can use `item.productId` as a `key`.
3. Pass the item data into `<MenuItem />` as props.
