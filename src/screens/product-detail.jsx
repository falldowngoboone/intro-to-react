import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useCart } from '@/lib/cart-context';
import {
  Breadcrumb,
  BreadcrumbCurrent,
  BreadcrumbSeparator,
  Breadcrumbs,
  getProductQuery,
} from '@/lib/product';
import {
  Grid,
  GridColFull,
  GridColLeft,
  GridColRight,
} from '@/lib/shared-components/grid';
import {
  StickyCard,
  StickyCardFooter,
  StickyCardHeader,
  StickyCardContent,
} from '@/lib/shared-components/sticky-card';
import { Field, FieldInput, FieldLabel } from '@/lib/shared-components/field';
import { formatMoney } from '@/lib/format-money';
import { Title } from '@/lib/shared-components/title';
import { Button } from '@/lib/ui/button';
import { Skeleton } from '@/lib/ui/skeleton';

function loader(queryClient) {
  return async ({ params }) => {
    try {
      const product = await queryClient.ensureQueryData(
        getProductQuery(params.id, queryClient),
      );

      return product;
    } catch (error) {
      throw new Response(error.message, { status: 500 });
    }
  };
}

function ProductDetail() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { data: product } = useQuery(getProductQuery(id, queryClient));
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (event) => {
    event.preventDefault();
    addToCart({ product, quantity });
    navigate('/menu');
  };

  const handleQuantityChange = (event) => {
    setQuantity(+event.target.value);
  };

  return (
    <Grid>
      <GridColFull>
        <Breadcrumbs>
          <Breadcrumb href="/menu">Menu</Breadcrumb>
          <BreadcrumbSeparator />
          <BreadcrumbCurrent>{product?.name}</BreadcrumbCurrent>
        </Breadcrumbs>
      </GridColFull>
      <GridColLeft>
        {!product ? (
          <Skeleton className="aspect-square w-full" />
        ) : (
          <img src={`/images/${product.image.url}`} alt={product.image.alt} />
        )}
      </GridColLeft>
      <GridColRight>
        <StickyCard isPending={!product}>
          <StickyCardHeader>
            <Title>{product.name}</Title>
            <p>{product.description}</p>
          </StickyCardHeader>
          <StickyCardContent>
            <form id="add-to-cart" onSubmit={handleAddToCart}>
              <Field>
                <FieldLabel htmlFor="quantity">Quantity</FieldLabel>
                <FieldInput
                  name="quantity"
                  id="quantity"
                  type="number"
                  step="1"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </Field>
            </form>
          </StickyCardContent>
          <StickyCardFooter>
            <Button
              className="bg-red-600 py-4 text-base font-bold hover:bg-red-700"
              type="submit"
              form="add-to-cart"
            >
              Add to Cart {formatMoney(quantity * product.price)}
            </Button>
          </StickyCardFooter>
        </StickyCard>
      </GridColRight>
    </Grid>
  );
}
ProductDetail.loader = loader;

export { ProductDetail };
