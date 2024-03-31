import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Title } from '@/components/ui/title';
import { useCart } from '@/lib/use-cart';
import { formatMoney } from '@/lib/format-money';

async function fetchProduct(id) {
  const response = await fetch(`/api/menu/${id}`);

  return response.json();
}

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data: product } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProduct(id),
  });
  const { addToCart } = useCart();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    addToCart({ product, quantity });
    navigate('/menu');
  }

  const handleQuantityChange = (event) => {
    setQuantity(+event.target.value);
  };

  if (!product) {
    return 'Loading...';
  }

  return (
    <>
      <Breadcrumb className="col-span-10 col-start-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to=".." relative="path">
                Menu
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="font-bold">
              {product.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="col-span-6 col-start-2">
        <div className="flex flex-col gap-4">
          <img src={`/images/${product.image?.url}`} alt={product.image?.alt} />
        </div>
      </div>
      <div className="col-span-4 col-start-8">
        <Card asChild className="sticky top-32 shadow-xl">
          <form onSubmit={handleSubmit}>
            <CardHeader className="gap-8">
              <Title>{product.name}</Title>
              <p>{product.description}</p>
            </CardHeader>
            <CardContent>
              <Label htmlFor="quantity-field">Quantity</Label>
              <Input
                name="quantity"
                onChange={handleQuantityChange}
                id="quantity-field"
                type="number"
                step={1}
                min={1}
                value={quantity}
              />
            </CardContent>
            <CardFooter>
              <Button
                className="bg-red-600 py-4 text-base font-bold hover:bg-red-700"
                type="submit"
              >
                Add to Cart {formatMoney(quantity * product.price)}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </>
  );
}

export { ProductDetail };