# Exercise 19: Handle Search Params

- [`src/category-filters.exercise.jsx`](./src/category-filters.exercise.jsx)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)

## Add search params hook

1. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), import `useSearchParams` from `react-router-dom`.
2. In the body of the `Menu` component, replace the `URLSearchParams` instantiation with a call to [`useSearchParams`](https://reactrouter.com/en/main/hooks/use-search-params). This hook returns a tuple of the current search params and a set function:
   
   ```javascript
   const [searchParams, setSearchParams] = useSearchParams();
   ```

3. Inside the menu items `useFetch`, replace the `${window.location.search}` with `?${searchParams.toString()}`.

## Handle search submit

1. Just above the `if (hasErrors)`, add a new function called `handleSearchSubmit`.
2. In `handleSearchSubmit`, first prevent the default submit behavior, then get the value of the `q` field. You can easily serialize form data with the [`FormData` API](https://developer.mozilla.org/en-US/docs/Web/API/FormData).
   
   Create an instance of `FormData` with `event.target`, then you can use [`get()`](https://developer.mozilla.org/en-US/docs/Web/API/FormData/get) to retrieve the `q` field:

   ```javascript
   const q = new FormData(event.target).get('q');
   ```

3. If `q` has a value, set the search params to `{ q }`. Else, set search params to an empty object (`{}`).
4. Finally, add a submit handler to the `form` and set it equal to `handleSearchSubmit`.

Now the page should filter menu items by name without reloading the page. Test it out by searching for a menu item (e.g. "chee").

## Update category filters

1. In [`src/category-filters.exercise.jsx`](./src/category-filters.exercise.jsx), convert the `<a>` in `MenuItem` to `<Link>`. Remember to change `href` to `to`.
2. Back in [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), change that "All" category filter `href` back to `"."`. This should work correctly now that we're using the relative `Link` component.

Now your category filters should work without reloading the page as well.
