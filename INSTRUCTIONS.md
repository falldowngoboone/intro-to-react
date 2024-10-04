# Exercise 23: Add Global Cart State

While we've been busy optimizing our layout code and fixing bugs, our team has completed the cart page. There's a problem, though: There are several places throughout the app that need access to cart state and logic.

We'll address this problem by first moving all of the cart logic and state somewhere that's accessible to all dependent components. For now, that means moving everything all the way up to the `App` component.

- [`src/lib/shared-components/global-layout.jsx`](./src/lib/shared-components/global-layout.jsx)
- [`src/screens/product-detail.jsx`](./src/screens/product-detail.jsx)
- [`src/screens/cart.exercise.jsx`](./src/screens/cart.exercise.jsx)
- [`src/app.exercise.jsx`](./src/app.exercise.jsx)

## Add cart route

1. First, open [`src/app.exercise.jsx`](./src/app.exercise.jsx).
2. Import `Cart` from `./screens/cart`.
3. Add a route for `Cart` with a path of `/cart`. Make sure the route uses the `GlobalLayout`.

## Move cart state

1. Open [`src/screens/cart.exercise.jsx`](./src/screens/cart.exercise.jsx) and look through the logic.
   
   There are several pieces of state the cart relies on: `items`, `subtotal`, `tax`, `total`, `itemCount`, and `isPending`. Additionally, there are three actions, two of which are currently used.

2. Add all of the state and actions that are _used_ to the `Cart` component's props.
3. Select everything above the `if (items.length === 0)` statement and cut it from the component.
4. Back in [`src/app.exercise.jsx`](./src/app.exercise.jsx), paste everything above the returned routes.
5. Pass the necessary state and actions to `<GlobalLayout>`, `<ProductDetail>` and `<Cart>`.

You should now be able to add an item to your cart from an item's detail page. Additionally, you should see a cart count on top of the cart icon in the top, righthand corner of the screen.

Click the cart icon to see the cart, as well as a payment summary.

This is the simplest form of sharing state, but we'll attempt to clean this up next, with the help of the Context API.
