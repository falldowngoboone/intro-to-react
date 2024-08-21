import { useEffect } from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

import {
  CheckoutForm,
  CheckoutFormSubmit,
  LineItems,
  LineItem,
  postOrder,
} from '@/lib/checkout';
import { pluralize } from '@/lib/pluralize';
import {
  Field,
  FieldLabel,
  FieldInput,
  FieldDescription,
} from '@/lib/shared-components/field';
import { SummaryItem, Summary } from '@/lib/shared-components/summary';
import {
  StickyCard,
  StickyCardHeader,
  StickyCardHeading,
  StickyCardContent,
  StickyCardFooter,
} from '@/lib/shared-components/sticky-card';
import { Separator } from '@/lib/ui/separator';
import { Title } from '@/lib/shared-components/title';
import { useCart } from '@/lib/cart-context';
import { formatMoney } from '@/lib/format-money';
import { Grid, GridColLeft, GridColRight } from '@/lib/shared-components/grid';
import { serializeFormData } from '@/lib/serialize-form-data';
import { useMutation } from '@/lib/use-mutation';

function Checkout() {
  const { items, subtotal, tax, total, itemCount, resetCart } = useCart();
  const navigate = useNavigate();
  const { mutate, isPending, isIdle } = useMutation({
    mutationFn: postOrder,
    onSuccess: () => {
      resetCart();
      navigate('/menu');
      toast.success('Order placed successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payment = serializeFormData(formData);

    mutate(payment, items);
  };

  // If the cart is empty, redirect to the cart page
  useEffect(() => {
    if (items.length === 0 && isIdle) {
      navigate('/cart', { replace: true });
    }
  }, [items, navigate, isIdle]);

  return (
    <Grid>
      <GridColLeft>
        <Title>Checkout</Title>
        <CheckoutForm onSubmit={handleSubmit}>
          <Field className="col-span-full">
            <FieldLabel htmlFor="fName">Name</FieldLabel>
            <FieldInput name="fName" id="fName" />
          </Field>
          <Field className="col-span-full">
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <FieldInput name="email" id="email" type="email" />
          </Field>
          <Field className="col-span-full">
            <FieldLabel htmlFor="cardNumber">Card Number</FieldLabel>
            <FieldInput name="cardNumber" id="cardNumber" maxLength="16" />
          </Field>
          <Field className="col-span-4">
            <FieldLabel htmlFor="expiry">Expiration Date</FieldLabel>
            <FieldInput name="expiry" id="expiry" maxLength="5" />
            <FieldDescription>(MM/YY)</FieldDescription>
          </Field>
          <Field className="col-span-4">
            <FieldLabel htmlFor="cvv">CVV</FieldLabel>
            <FieldInput name="cvv" id="cvv" maxLength="4" />
            <FieldDescription>(3 or 4 digits)</FieldDescription>
          </Field>
          <Field className="col-span-4">
            <FieldLabel htmlFor="postalCode">Postal Code</FieldLabel>
            <FieldInput name="postalCode" id="postalCode" />
          </Field>
        </CheckoutForm>
      </GridColLeft>
      <GridColRight>
        <StickyCard>
          <StickyCardHeader>
            <StickyCardHeading>
              {itemCount} {pluralize(itemCount, 'Item', 'Items')}
            </StickyCardHeading>
          </StickyCardHeader>
          <StickyCardContent>
            <LineItems>
              {items.map(({ product, quantity }) => (
                <LineItem
                  key={product.productId}
                  name={product.name}
                  price={product.price}
                  quantity={quantity}
                />
              ))}
            </LineItems>
            <Separator className="my-4" />
            <Summary>
              <SummaryItem label="Subtotal" detail={formatMoney(subtotal)} />
              <SummaryItem label="Tax" detail={formatMoney(tax)} />
              <SummaryItem
                label="Total"
                detail={formatMoney(total)}
                className="font-bold"
              />
            </Summary>
          </StickyCardContent>
          <StickyCardFooter>
            <CheckoutFormSubmit isPending={isPending}>
              Place Order {formatMoney(total)}
            </CheckoutFormSubmit>
          </StickyCardFooter>
        </StickyCard>
      </GridColRight>
    </Grid>
  );
}

export { Checkout };
