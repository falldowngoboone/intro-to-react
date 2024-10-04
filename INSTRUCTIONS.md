# Exercise 21: Add a Layout Route

Before starting this next exercise, check out the `src` folder. We've moved all of the main screens into a `screens` directory, and moved the rest of the files into the `lib` folder. This helps cut down on some of the noise that comes from a flat filing structure.

Speaking on cutting noise, our page components are still a bit noisy. In fact, our menu, product detail, and error page all have very similar markup.

Typically in frameworks, you get some sort of templating system to stamp out similar pages or components with similar mark up. In React Router, we have [layout routes](https://reactrouter.com/en/main/route/route#layout-routes).

- [`src/app.exercise.jsx`](./src/app.exercise.jsx)
- [`src/lib/shared-components/global-layout.exercise.jsx`](./src/lib/shared-components/global-layout.exercise.jsx)
- [`src/screens/error-page.exercise.jsx`](./src/screens/error-page.exercise.jsx)
- [`src/screens/menu.exercise.jsx`](./src/screens/menu.exercise.jsx)
- [`src/screens/product-detail.exercise.jsx`](./src/screens/product-detail.exercise.jsx)

## Copy layout and add `Outlet`

1. Open [`src/screens/error-page.exercise.jsx`](./src/screens/error-page.exercise.jsx) and copy the returned JSX. Paste into [`src/lib/shared-components/global-layout.exercise.jsx`](./src/lib/shared-components/global-layout.exercise.jsx) as the return value of `GlobalLayout`.
2. While still in [`src/lib/shared-components/global-layout.exercise.jsx`](./src/lib/shared-components/global-layout.exercise.jsx), import [`Outlet`](https://reactrouter.com/en/main/components/outlet#outlet) from `react-router-dom` and replace everything between the closing `<header>` tag and the opening `<footer>` tag with it. This component acts like a fancy, router-connected `children` prop that allows you to render nested route elements.
3. Finish up the layout component by importing `Link` from `react-router-dom`.

## Add the layout route

1. Next, open [`src/app.exercise.jsx`](./src/app.exercise.jsx) and wrap the menu, product detail and error routes in a new `Route`. Import `GlobalLayout` from `'./lib/shared-components/global-layout'` and pass an instance of it to the new route. This route won't have a `path`.
2. Back in [`src/screens/error-page.exercise.jsx`](./src/screens/error-page.exercise.jsx), delete everything in the return of `ErrorPage` except the page's content (the top-level `<div>`, header and footer).
3. Repeat step 2 for [`src/screens/menu.exercise.jsx`](./src/screens/menu.exercise.jsx) and [`src/screens/product-detail.exercise.jsx`](./src/screens/product-detail.exercise.jsx)

If everything went well, you should not see any changes. But now we'll be able to easily and safely make global layout changes without jumping between a bunch of files. That'll come in handy in the last section of exercises...
