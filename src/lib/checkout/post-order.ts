type OrderPayment = {
  fName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
  postalCode: string;
};

type OrderItem = {
  productId: string;
  quantity: number;
};

/**
 * Posts an order to the server.
 * @param payment The payment information for the order.
 * @param items The items to order.
 * @returns A promise that resolves with the order ID.
 */
export async function postOrder(payment: OrderPayment, items: OrderItem[]) {
  const res = await fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ payment, items }),
  });

  if (!res.ok) {
    throw new Error('Failed to place order');
  }

  return res.text();
}
