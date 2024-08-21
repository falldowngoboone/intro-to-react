# Exercise 24: Use Context

We previously lifted our cart state and logic all the way to the top of our app. Now, we'll pull everything into a separate layer with the help of the Context API.

- [`src/app.exercise.jsx`](./src/app.exercise.jsx)
- [`src/lib/cart-context/cart-context.exercise.js`](./src/lib/cart-context/cart-context.exercise.js)
- [`src/lib/cart-context/cart-provider.exercise.jsx`](./src/lib/cart-context/cart-provider.exercise.jsx)
- [`src/lib/cart-context/use-cart.exercise.js`](./src/lib/cart-context/use-cart.exercise.js)
- [`src/lib/shared-components/global-layout.exercise.jsx`](./src/lib/shared-components/global-layout.exercise.jsx)
- [`src/screens/cart.exercise.jsx`](./src/screens/cart.exercise.jsx)
- [`src/screens/product-detail.exercise.jsx`](./src/screens/product-detail.exercise.jsx)
- [`createContext`](https://react.dev/reference/react/createContext)
- [`useContext`](https://react.dev/reference/react/useContext)
- [`useMemo`](https://react.dev/reference/react/useMemo)

## Create the cart context

1. In [`src/lib/cart-context/cart-context.exercise.js`](./src/lib/cart-context/cart-context.exercise.js), assign `CartContext` to a new instance of React context.
2. In [`src/lib/cart-context/use-cart.exercise.js`](./src/lib/cart-context/use-cart.exercise.js), import `CartContext` and, inside `useCart`, get and return the value of `CartContext`.
3. In [`src/lib/cart-context/cart-provider.exercise.jsx`](./src/lib/cart-context/cart-provider.exercise.jsx), have `CartProvider` take and return a `children` prop.
4. Import `CartContext` and use it to wrap `children` in the `CartContext`'s provider.
5. Open [`src/app.exercise.jsx`](./src/app.exercise.jsx), select all of the cart logic and state, copy it, and paste it into `CartProvider` before the `return` statement. Don't forget to copy over the dependencies as well.
6. Still in [`src/lib/cart-context/cart-provider.exercise.jsx`](./src/lib/cart-context/cart-provider.exercise.jsx), create a variable called `cart` and assign an object to it with `items`, `subtotal`, `tax`, `total`, `itemCount`, `isPending`, `addToCart`, `removeFromCart`, and `setCartQuantity`. Because we're going to use this object as a context value, we need to memoize it with `useMemo`.
7. Pass `cart` as the `value` of the cart context provider.

Now we're ready to use the cart state directly in other components.

## Use the cart context

1. In [`src/lib/shared-components/global-layout.exercise.jsx`](./src/lib/shared-components/global-layout.exercise.jsx), use the `useCart` hook to get the `itemCount`.
2. In [`src/screens/product-detail.exercise.jsx`](./src/screens/product-detail.exercise.jsx), use the `useCart` hook to get `addToCart`.
3. In [`src/screens/cart.exercise.jsx`](./src/screens/cart.exercise.jsx), use the `useCart` hook to get items, `setCartQuantity`, `removeFromCart`, `subtotal`, `tax`, `total`, `itemCount`, and `isPending`.
4. Finally, back in [`src/app.exercise.jsx`](./src/app.exercise.jsx), remove all of the cart state and logic.

Our cart state and logic now lives in its own layer, separate from the view logic. Now we can easily maintain and reuse this logic without stepping on any changes to app screens.
