import { formatMoney } from '@/lib/format-money';

function MenuItems({ children }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

function MenuItem({ image, name, price }) {
  return (
    <>
      <img
        height="300"
        width="300"
        src={`/images/${image.url}`}
        alt={image.alt}
      />
      <div className="text-lg font-bold">{name}</div>
      <div>{formatMoney(price)}</div>
    </>
  );
}

export { MenuItem, MenuItems };
