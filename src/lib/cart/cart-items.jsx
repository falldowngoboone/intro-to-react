import { X } from 'lucide-react';

import { Button } from '@/lib/ui/button';
import { Card } from '@/lib/ui/card';
import { Input } from '@/lib/ui/input';
import { formatMoney } from '@/lib/format-money';

function CartItems({ children, ...props }) {
  return (
    <ul className="flex flex-col gap-4" {...props}>
      {children}
    </ul>
  );
}

function CartItem({
  image,
  name,
  quantity,
  price,
  onQuantityChange,
  onRemove,
}) {
  return (
    <li>
      <Card className="relative flex gap-4 bg-secondary p-4 shadow-xl">
        <img
          className="h-28 w-28 object-cover"
          src={`/images/${image.url}`}
          alt={image.alt}
        />
        <div className="flex flex-1 flex-col gap-2 p-4">
          <h2 className="text-lg font-bold">{name}</h2>
          <div className="flex items-center gap-2">
            <Input
              aria-label={`Quantity of ${name}`}
              className="w-20"
              value={quantity}
              onChange={onQuantityChange}
              min={1}
              max={50}
              step={1}
              type="number"
            />
            {' ✕ '}
            <span>{formatMoney(price)}</span>
          </div>
        </div>
        <Button
          className="absolute right-0 top-0 p-4 text-primary/30 hover:text-primary/100"
          variant="ghost"
          onClick={onRemove}
        >
          <X />
          <span className="sr-only">Remove</span>
        </Button>
      </Card>
    </li>
  );
}

export { CartItems, CartItem };
