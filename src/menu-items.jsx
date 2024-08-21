import { formatMoney } from './lib/format-money';

function MenuItems({ children }) {
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

export { MenuItem, MenuItems, MenuItemsNoResults };
