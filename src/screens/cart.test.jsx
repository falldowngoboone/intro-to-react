import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { Cart } from './cart';
import { useCart } from '@/lib/cart-context';
import { formatMoney } from '@/lib/format-money';
import { pluralize } from '@/lib/pluralize';

vi.mock('@/lib/cart-context');
vi.mock('@/lib/format-money');
vi.mock('@/lib/pluralize');

describe('Cart', () => {
  it('renders empty cart message when there are no items', () => {
    useCart.mockReturnValue({
      items: [],
      removeFromCart: vi.fn(),
      setCartQuantity: vi.fn(),
      subtotal: 0,
      tax: 0,
      total: 0,
      itemCount: 0,
      isPending: false,
    });

    render(
      <Router>
        <Cart />
      </Router>,
    );

    expect(
      screen.getByText(/try adding something to your cart/i),
    ).toBeInTheDocument();
  });

  it('renders cart items and summary correctly', () => {
    useCart.mockReturnValue({
      items: [
        {
          product: {
            productId: '1',
            image: 'image1.jpg',
            name: 'Product 1',
            price: 100,
          },
          quantity: 2,
        },
      ],
      removeFromCart: vi.fn(),
      setCartQuantity: vi.fn(),
      subtotal: 200,
      tax: 20,
      total: 220,
      itemCount: 2,
      isPending: false,
    });

    formatMoney.mockImplementation((value) => `$${value}`);
    pluralize.mockImplementation((count, singular, plural) =>
      count === 1 ? singular : plural,
    );

    render(
      <Router>
        <Cart />
      </Router>,
    );

    expect(screen.getByText(/My Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText('$100')).toBeInTheDocument();
    expect(screen.getByText('2 Items')).toBeInTheDocument();
    expect(screen.getByText('$200')).toBeInTheDocument();
    expect(screen.getByText('$20')).toBeInTheDocument();
    expect(screen.getByText('$220')).toBeInTheDocument();
  });

  it('calls setCartQuantity when quantity changes', async () => {
    const user = userEvent.setup();
    const setCartQuantity = vi.fn();

    useCart.mockReturnValue({
      items: [
        {
          product: {
            productId: '1',
            image: 'image1.jpg',
            name: 'Product 1',
            price: 100,
          },
          quantity: 2,
        },
      ],
      removeFromCart: vi.fn(),
      setCartQuantity,
      subtotal: 200,
      tax: 20,
      total: 220,
      itemCount: 2,
      isPending: false,
    });

    render(
      <Router>
        <Cart />
      </Router>,
    );

    const quantityInput = screen.getByLabelText('Quantity of Product 1');
    await user.type(quantityInput, '3', {
      initialSelectionStart: 0,
      initialSelectionEnd: quantityInput.value.length,
    });
    expect(setCartQuantity).toHaveBeenCalledWith('1', 3);
  });

  it('calls removeFromCart when remove button is clicked', async () => {
    const user = userEvent.setup();
    const removeFromCart = vi.fn();

    useCart.mockReturnValue({
      items: [
        {
          product: {
            productId: '1',
            image: 'image1.jpg',
            name: 'Product 1',
            price: 100,
          },
          quantity: 2,
        },
      ],
      removeFromCart,
      setCartQuantity: vi.fn(),
      subtotal: 200,
      tax: 20,
      total: 220,
      itemCount: 2,
      isPending: false,
    });

    render(
      <Router>
        <Cart />
      </Router>,
    );

    await user.click(screen.getByText(/Remove/i));
    expect(removeFromCart).toHaveBeenCalledWith('1');
  });
});
