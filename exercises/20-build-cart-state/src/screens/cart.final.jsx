import { EmptyCart, CartItems, CartItem } from '@/lib/cart';
import { formatMoney } from '@/lib/format-money';
import { pluralize } from '@/lib/pluralize';
import { SummaryItem, Summary } from '@/lib/shared-components/summary';
import {
  StickyCard,
  StickyCardHeader,
  StickyCardHeading,
  StickyCardContent,
} from '@/lib/shared-components/sticky-card';
import { Title } from '@/lib/shared-components/title';
import { Grid, GridColLeft, GridColRight } from '@/lib/shared-components/grid';

function Cart({
  items,
  setCartQuantity,
  removeFromCart,
  subtotal,
  tax,
  total,
  itemCount,
  isPending,
}) {
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
        </StickyCard>
      </GridColRight>
    </Grid>
  );
}

export { Cart };
