# Exercise 13: Filters as Search Params

Our filters are a hit, but test users want to be able to bookmark their product searches (these are some *really* advanced test users...). We'll do this by lifting filter state into the URL, and in the process, make our logic *much* simpler.

- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [`URLSearchParams` API](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
- [`Location` API](https://developer.mozilla.org/en-US/docs/Web/API/Location)

## Get search params

1. At the top of the `Menu` component in [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), create a variable `searchParams` and assign a new `URLSearchParams` instance.
2. Pass `window.location.search` to the search params constructor. This will initialize the search params with what is currently in the URL.
3. Delete the `categoryId` state at the top of the component and instead assign the variable `categoryId` to `searchParams.get('category')`.
4. Delete the `q` and `query` state and assign the variable `query` to `searchParams.get('q')`.

At this point, you probably have some errors in your code. We'll clean those up by removing the explicit UI state handling.

## Remove UI state handlers

1. In the search form, remove the submit handler.
2. Next, in the input, remove the click handler.
3. While still on the input, change `value` to `defaultValue` and assign it to `query`.
4. Remove the category filter click handlers as well.
5. Finally, delete the unused handler functions in the component body (`handleCategoryChange`, `handleSearchChange`, and `handleSearchSubmit`).

This filters should still respond properly, but now you'll notice the page completely reloads. This is perfectly fine for now.

You can further test the filters out by manually setting the search params. For example:

- http://localhost:3000?q=chee
- http://localhost:3000?category=1