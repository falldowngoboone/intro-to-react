# Exercise 11: Filter by Category

We've created a dynamic list of categories based on our menu data. Now we will add the filtering functionality.

- [`menu.exercise.jsx`](./src/menu.exercise.jsx)

1. At the top of the `Menu` component in [`menu.exercise.jsx`](./src/menu.exercise.jsx), convert `categoryId` to local state with `useState`. Initialize it to `''`.
2. Add an `onClick` handler to the "All" category filter and set it equal to `handleCategoryChange`.
3. Do the same for the mapped category filters.
4. In the `handleCategoryChange` handler, add a second argument, `nextCategory`, and default it to `''`. Pass `nextCategory` to the category ID state setter from `useState`.
5. Modify the category filter click handlers to pass both the handler event, as well as the `category.categoryId`. For the "All" filter, you may either pass `''`, or no category ID at all.

Run your dev server and click on the filters. You should see at least one item for each filter.

In this exercise, you learned how to use click handlers and `useState` to set component state. In the next exercise, we'll go one step further by controlling input state.