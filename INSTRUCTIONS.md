# Exercise 18: Add Client Side Routing

I don't know if you've noticed, but we've only worked on a single page so far. We'll change that now with some client side routing.

Our UI team has been hard at work cranking out a new, inviting home page and a helpful error page (just in case our users get lost). All that's left is to stitch everything together using React Router.

- [`src/app.exercise.jsx`](./src/app.exercise.jsx)
- [`src/home.exercise.jsx`](./src/home.exercise.jsx)
- [`src/menu.exercise.jsx`](./src/menu.exercise.jsx)
- [React Router v6 docs](https://reactrouter.com/)

## Create the app router

1. In [`src/app.exercise.jsx`](./src/app.exercise.jsx), import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`.
2. Inside the `App` component, replace the return value with an instance of `<BrowserRouter>`. This component keeps tabs on the browser's location and orchestrates navgation.
3. Inside the `<BrowserRouter>`, add an instance of `<Routes>`. This component decides which of its `Route` children to render by matching the current browser route to the child `Route` paths.
4. Inside the `<Routes>`, add three instances of `<Route>`.

## Add the routes

1. Next, at the top of [`src/app.exercise.jsx`](./src/app.exercise.jsx), near the import of `Menu`, import `Home` from `./home` and `ErrorPage` from `./error-page`.
2. On the first `<Route>`, add a `path` prop of `"/"` and an `element` prop of `<Home />`.
3. On the second, add a `path` of `"/menu"` and an `element` of `<Menu />`.
4. Finally, on the the third, which will be a catch-all route, add a `path` of `"*"` and an element of `<ErrorPage message="404: Page not found!" />`.

To test out the routes:

- Navigate directly to http://localhost:3000 and confirm you see the new home page.
- Navigate directly to http://localhost:3000/menu and confirm you see the menu page.
- Navigate to any other page (e.g. http://localhost:3000/nope) and confirm you see the error page.

## Add `Link`s

1. Open up [`src/home.exercise.jsx`](./src/home.exercise.jsx) and, at the top of the file, import `Link` from `react-router-dom`. `Link` is a decorated version of `<a>` that enables client side transitions from one page to another.
2. In the `Home` component, replace the `<a>` around the main `<img>` with a `<Link>`. You'll also need to change the `href` prop name to `to`.
3. Next, open up [`src/menu.exercise.jsx`](./src/menu.exercise.jsx). Insdie the `Menu` component, replace the two `<span>`s inside the `<nav>` with `<Link>`s. The image should link to `"/"`, and Menu should link to `"/menu"`.
4. While you're here, update the "All" category filter `href` to `/menu` since the URL for this page has changed.

You should now be able to transition between the home page and menu page without the browser reloading. Next we'll tackle the category filters.