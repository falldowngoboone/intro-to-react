# Exercise 17: Create a Custom Hook

We've learned that repetitive logic in React components can be expressed as custom hooks, which in turn make logic easy to reuse and maintain.

Let's create a custom hook for our fetch logic.

- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [Custom Hooks docs](https://react.dev/learn/reusing-logic-with-custom-hooks)

## Create the `useFetch` custom hook

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), create a function called `useFetch` somewhere outside of the `Menu` component.
2. Inside this function, create a `status` state and set function with `useState`. Initialize this to `Status.IDLE`.
3. Next, create a `data` state and setter. **DO NOT** initialize `useState` with a value. 
   
   Since we're generalizing this logic, `data` could be anything. We'll use [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) later on to determine initial data state.

4. Still inside the `useFetch` hook, recreate the `useEffect` that fetches the data. You can copy and paste one of the current uses in `Menu`, then update the data state and setter to `data` and `setData`.
   
   If you copied one of the existing `useEffect`s, you'll notice the URLs are hard-coded. We'll need to address this next.

5. Pass `url` as a parameter to `useFetch`, then replace the hard-coded URL in `fetch` with the new parameter. You will need to update the `useEffect` dependency array with `url` to ensure the fetch runs every time the URL changes (e.g. the search params change).
6. At the bottom of the `useFetch` function, return an object with `data` and `status`.

## Replace the current state in `Menu`

1. Inside `Menu`, delete all of the `useState` calls.
2. Create an instance of `useFetch` and pass the menu items API URL from the first `useEffect`.
3. Destructure the returned object and rename the `data` field to `items` and the `status` field to `itemsStatus`. This will help us avoid name collisions.
4. Set the default of `items` to `[]` with a default parameter.
5. Delete the `useEffect` that fetches the menu items.
6. Now repeat steps 2–5 for the `categories` state.

If everything went well, you should continue to see both menu items and categories when you refresh the menu page.