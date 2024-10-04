# Exercise 20: Fetch Product with Route Params

Our menu page is pretty much complete, but we still need detail pages for each menu item so users can learn a bit more about our food before ordering. We could hard-code a page for every item, but that's a maintenance nightmare. Instead, our team has gratefully built a product detail page template for us.

We need to use route parameters to fetch and populate the correct menu item data. Luck for us, this is pretty easy to do with React Router.

- [`src/app.exercise.jsx`](./src/app.exercise.jsx)
- [`src/menu-items.exercise.jsx`](./src/menu-items.exercise.jsx)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [`src/product-detail.exercise.jsx`](./src/product-detail.exercise.jsx)

## Add the product detail route

1. In [`src/app.exercise.jsx`](./src/app.exercise.jsx), import the `ProductDetail` page from `'./product-detail'`.
2. Add a new `Route` instance under the menu route.
3. Set the `path` to `"/menu/:id"` and the element to an instance of `ProductDetail`.

The `:id` part of the path is handled as a dynamic fragment, thanks to the `:`. Whatever comes after `/menu/...` can be accessed as the `id` param. We'll pass the menu item's `productId` and use that to build the product detail page.

## Convert menu items to links

1. In [`src/menu-items.exercise.jsx`](./src/menu-items.exercise.jsx), import `Link` from `react-router-dom`.
2. Replace the top level `div` in the `MenuItem` component.
3. While still in the `MenuItem` component, add `productId` to the props list and pass it as the new `Link`'s `to` prop.
4. In [`src/menu.exercise.jsx`](./src/menu.exercise.jsx), pass the menu item's `productId` to `MenuItem`.

By now you should be able to navigate to the product detail page. Make sure the ID is being properly set. You won't see any data load. We'll do that next.

## Fetch and render product detail data

1. In [`src/product-detail.exercise.jsx`](./src/product-detail.exercise.jsx), import [`useParams`](https://reactrouter.com/en/main/hooks/use-params) from `react-router-dom`. Use this hook to get the `id` route param inside the `ProductDetail` component.
2. Next, import `useFetch` and `Status` from `'@/lib/use-fetch`, then use `useFetch` to fetch menu item data from `/api/menu/${id}`. You can rename any returned field to minimize changes to the rest of the code.
3. Default the returned `data` to the current value of `product` and make `isPending` rely on the returned `status`.

You should now see a functioning product detail page. Visit multiple menu item pages to make sure everything is wired up correctly.

Congratulations on making it this far! You now have successfully created a menu and dynamic item detail page, an extremely common pattern found in many web apps.

We're almost done with our website. Let's take some time to clean up a couple things before moving on to the final stage of development.
