import { Link } from 'react-router-dom';

import { EmptyCart, CartItems, CartItem } from '@/lib/cart';
import { formatMoney } from '@/lib/format-money';
import { pluralize } from '@/lib/pluralize';
import { SummaryItem, Summary } from '@/lib/shared-components/summary';
import {
  StickyCard,
  StickyCardHeader,
  StickyCardHeading,
  StickyCardContent,
  StickyCardFooter,
} from '@/lib/shared-components/sticky-card';
import { Button } from '@/lib/ui/button';
import { Title } from '@/lib/shared-components/title';
import { Grid, GridColLeft, GridColRight } from '@/lib/shared-components/grid';
import { useCart } from '@/lib/cart-context';

function Cart() {
  const {
    items,
    setCartQuantity,
    removeFromCart,
    subtotal,
    tax,
    total,
    itemCount,
    isPending,
  } = useCart();

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <Grid>
      <GridColLeft>
        <Title>My Cart</Title>
        <CartItems>
          {items.map(({ product, quantity }) => (
            <CartItem
              key={product.productId}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={quantity}
              onQuantityChange={(event) => {
                setCartQuantity(product.productId, +event.target.value);
              }}
              onRemove={() => removeFromCart(product.productId)}
            />
          ))}
        </CartItems>
      </GridColLeft>
      <GridColRight>
        <StickyCard>
          <StickyCardHeader>
            <StickyCardHeading>
              {itemCount} {pluralize(itemCount, 'Item', 'Items')}
            </StickyCardHeading>
          </StickyCardHeader>
          <StickyCardContent>
            <Summary isPending={isPending}>
              <SummaryItem label="Subtotal" detail={formatMoney(subtotal)} />
              <SummaryItem label="Tax" detail={formatMoney(tax)} />
              <SummaryItem
                label="Estimated Total"
                detail={formatMoney(total)}
                className="font-bold"
              />
            </Summary>
          </StickyCardContent>
          <StickyCardFooter>
            <Button asChild isPending={isPending}>
              <Link to="/checkout">Checkout {formatMoney(total)}</Link>
            </Button>
          </StickyCardFooter>
        </StickyCard>
      </GridColRight>
    </Grid>
  );
}

export { Cart };
