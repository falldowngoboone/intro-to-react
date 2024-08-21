import { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Menu } from './screens/menu';
import { Home } from './screens/home';
import { ErrorPage } from './screens/error-page';
import { GlobalLayout } from './lib/shared-components/global-layout';
import { ProductDetail } from './screens/product-detail';
import { Cart } from './screens/cart';
import { useFetch, Status } from './lib/use-fetch';

function App() {
  const [items, setItems] = useState([]);
  const fetchOptions = useMemo(
    () => ({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        items.map(({ product, quantity }) => ({
          productId: product.productId,
          quantity,
        })),
      ),
    }),
    [items],
  );
  const { data: summary = { subtotal: 0, tax: 0, total: 0 }, status } =
    useFetch(`/api/order/summary`, fetchOptions);
  const { subtotal, tax, total } = summary;
  const isPending = status === Status.PENDING;

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  const addToCart = (item) => {
    setItems((prevItems) => {
      const prevItem = prevItems.find(
        ({ product }) => product.productId === item.product.productId,
      );

      if (prevItem) {
        return prevItems.map((prevItem) =>
          prevItem.product.productId === item.product.productId
            ? {
                ...prevItem,
                quantity: prevItem.quantity + item.quantity,
              }
            : prevItem,
        );
      }

      return [...prevItems, item];
    });
  };

  const removeFromCart = (productId) => {
    setItems((prevItems) =>
      prevItems.filter(({ product }) => product.productId !== productId),
    );
  };

  const setCartQuantity = (productId, quantity) => {
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.product.productId === productId
          ? { ...prevItem, quantity }
          : prevItem,
      ),
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GlobalLayout itemCount={itemCount} />}>
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/menu/:id"
            element={<ProductDetail addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={items}
                subtotal={subtotal}
                tax={tax}
                total={total}
                setCartQuantity={setCartQuantity}
                removeFromCart={removeFromCart}
                itemCount={itemCount}
                isPending={isPending}
              />
            }
          />
          <Route
            path="*"
            element={<ErrorPage message="404: Page not found!" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
