# Exercise 16: Build a Better Fetch

We have successfully fetched our category and menu data from the backend, but our data fetching strategy could use some improvements.

- [`src/category-filters.jsx`](./src/category-filters.jsx)
- [`src/menu-items.jsx`](./src/menu-items.jsx)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)

## Prevent fetching race conditions

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), inside the `useEffect` that fetches menu items, add a new variable at the top, called `ignore`. Initialize it to `false` and make sure it can be reassigned.
2. At the end of the `useEffect` callback, return a function that flips `ignore` to `true`.
3. Wrap the `setItems` call in an `if` block. Only set the `items` state to `data` if `ignore` is `false`.
4. Do the same for the other `useEffect`.

## Show pending status

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), convert `itemsStatus` and `categoriesStatus` to component state and initialize them both to `Status.IDLE`. We'll use this state to track the state of both the item and category fetches.
2. At the top of the `useEffect` callback that fetches the menu items, set the `itemsStatus` to `Status.PENDING`.
3. At the top of the `useEffect` callback that fetches the categories, set the `categoriesStatus` to `Status.PENDING`.
4. Next, find the `<MenuItems>` instance in the body of the returned JSX. Add an `isPending` prop. Set this to `true` if `itemsStatus` is equal to `Status.PENDING`.
5. Finally, add the same `isPending` prop to `<CategoryFilters>`, setting it to `true` if `categoriesStatus` is equal to `Status.PENDING`.

Refresh your browser. You should now see a brief "skeleton" view while the data is loading.

You can see how the `isPending` prop is used in both the `MenuItems` and `CategoryFilters` component, located in [`src/menu-items.jsx`](./src/menu-items.jsx) and [`src/category-filters.jsx`](./src/category-filters.jsx) respectively.

## Handle fetching errors

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), inside the `Menu` component, create a variable called `hasErrors`. Set it equal to `true` if either `itemsStatus` or `categoriesStatus` is `Status.REJECTED`.
2. Import `MenuError` from `./menu-items`. Above the current `Menu` return statement, return `<MenuError />` if `hasErrors` is `true.

You can test the error handling by following these steps:

1. Open [`api/server.js`](./api/server.js).
2. Locate `api.post('/order', ...)`.
3. Comment out the current code and uncomment the response under `// simulate a failed order`.
4. Reload the app in your browser.

You should now see the error view instead of the menu.

Properly handling data fetching is messy business. We'll tidy this component up in the next step with a custom hook.