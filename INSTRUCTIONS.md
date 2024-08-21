# Exercise 15: Fetch Categories

Fetching categories is more or less the same as fetching menu items, just with a different API endpoint and piece of state.

- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), convert `categories` to component state, initialized to `[]`.
2. Add another `useEffect`, and fetch the categories from `/api/menu/categories` (you don't need to forward any search params with this one).
3. After recieving the response and processing it as JSON, set the `categories` state to the new data, using the categories state set function.

Now you should be able to see the entire list of categories in the sidebar. Click through them to make sure they are correctly wired up.