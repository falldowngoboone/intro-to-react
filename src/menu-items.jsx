import { formatMoney } from './lib/format-money';
import { Skeleton } from '@/lib/ui/skeleton';

function MenuItemSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="aspect-square w-full rounded" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-6 w-20" />
      </div>
    </div>
  );
}

function MenuItems({ isPending, children }) {
  if (isPending) {
    return (
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <MenuItemSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

function MenuItemsNoResults() {
  return (
    <div className="grid-cols-12">
      <p>No menu items found.</p>
    </div>
  );
}

function MenuError() {
  return (
    <div className="container py-8 text-center">
      <p className="text-red-600">An error occurred. Please try again later.</p>
    </div>
  );
}

function MenuItem({ name, price, image }) {
  return (
    <div className="flex flex-col gap-2">
      <img
        height="300"
        width="300"
        src={`/images/${image.url}`}
        alt={image.alt}
      />
      <div className="text-lg font-bold leading-5">{name}</div>
      <div>{formatMoney(price)}</div>
    </div>
  );
}

export { MenuItem, MenuItems, MenuItemsNoResults, MenuError };
