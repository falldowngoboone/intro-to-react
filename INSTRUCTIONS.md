# Exercise 14: Fetch Menu Items

Development of our restaurant website has been going well so far, but we still have one glaring gap: we've been working with local data. Luckily for us, our backend team has recently completed the restaurant menu API.

Let's celebrate by consuming this API in our `Menu` component 🎉.

- [`api/server.js`](./api/server.js)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)

1. First, examine [`api/server.js`](./api/server.js).

    This file is where the API is defined. The API is a simple Express server with a handful of endpoints. You can refer to this file for API information going forward.

2. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), convert `items` to component state with `useState`. Initialize it to `[]`.
3. Under the `items` state, add a `useEffect`. Don't forget to pass the dependency array to the `useEffect`, or else you'll have an infinite rendering loop on your hands by the end of this exercise.
4. Within the `useEffect`, use [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch) to send a `GET` request to `/api/menu` to retrieve the menu items. You will need to forward any search params along with the API endpoint:

    ```javascript
    const apiUrl = `/api/menu${window.location.search}`;
    ```

5. Process the response as JSON, then set the `items` state with the returned data using the `items` set function.

At this point, you should be able to see the entire menu. We can't test the category filters out just yet, but you can try a search to make sure the search params are being passed properly.

If you had trouble with this exercise, don't worry. You'll get more practice in the next one, when we fetch the categories.