# Exercise 12: Filter by Name

We've added category filters and test users love them, but they want even more filter functionality. Specifically, we've been asked to add the ability to search directly by menu item name.

To get us started, our UI team has added an `Input` component. Now we need to wire up more state to track what the user has typed.

- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)

## Getting and setting input state

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), convert `q` to component state and initialize it to `''`.
2. Pass `q` as the `value` prop into the `<Input />` instance.
3. Add a change handler to the search `<Input />` and set it equal to `handleSearchChange`.
4. Inside `handleSearchChange`, set the `q` state to the change event's `target.value` using the state's set function.

The input should now update when you type in it.

## Setting query filter state

1. Still in [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), convert `query` to component state and initialize it to `''`.
2. Add a submit handler to the `<form>` surrounding our search input and set it equal to `handleSearchSubmit`.
3. Inside `handleSearchSubmit`, first prevent the submit event's default, then set the category ID state to `''` and the query state to `q`.
4. Finally, in `handleCategoryChange`, we'll clear out query state by setting it to `''`.

Now when you type in the search input and press `ENTER`, the list should filter down to all items that match the search term. If a category has been previously set, it should be cleared out automatically.