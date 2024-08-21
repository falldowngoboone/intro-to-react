# Exercise 10: Build a Categories List

With our menu list complete, we would now like to add some category filters to make it easier for customers to find what they're hungry for. Before we can add this functionality, though, we need to list out all the categories.

- [`src/category-filters.exercise.jsx`](./src/category-filters.exercise.jsx)
- [`src/category-filters.html`](./src/category-filters.html)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [`src/menu-data.js`](./src/menu-data.js)

1. In [`src/category-filters.exercise.jsx`](./src/category-filters.exercise.jsx), complete the `CategoryFilters` and `CategoryFilter` components. Use the markup [`src/category-filters.html`](./src/category-filters.html) as a guide. Remember to forward `children` as part of the returned markup.
2. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), import `categories` from `./menu-data`, and both filter components from `.category-filters`. Locate the comment beginning with 👋 and replace it with a list that maps the `categories` array from [`src/menu-data.js`](./src/menu-data.js) to the category filter components.
3. Don't forget to add the "All" filter manually, before the mapped list.

You should now see a list of all the categories. We will add the filter functionality in the next exercise.