import { useState, useMemo, useCallback } from 'react';

import { useFetch, Status } from '@/lib/use-fetch';

import { CartContext } from './cart-context';

function CartProvider({ children }) {
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

  const addToCart = useCallback((item) => {
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
  }, []);

  const removeFromCart = useCallback((productId) => {
    setItems((prevItems) =>
      prevItems.filter(({ product }) => product.productId !== productId),
    );
  }, []);

  const setCartQuantity = useCallback((productId, quantity) => {
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.product.productId === productId
          ? { ...prevItem, quantity }
          : prevItem,
      ),
    );
  }, []);

  const resetCart = useCallback(() => setItems([]), []);

  const cart = useMemo(
    () => ({
      items,
      subtotal,
      tax,
      total,
      itemCount,
      isPending,
      addToCart,
      removeFromCart,
      setCartQuantity,
      resetCart,
    }),
    [
      items,
      subtotal,
      tax,
      total,
      itemCount,
      isPending,
      addToCart,
      removeFromCart,
      setCartQuantity,
      resetCart,
    ],
  );

  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}

export { CartProvider };
