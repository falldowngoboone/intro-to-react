import { formatMoney } from './lib/format-money';

function MenuItem({ name, price, image }) {
  return (
    <div>
      <img
        height="300"
        width="300"
        src={`/images/${image.url}`}
        alt={image.alt}
      />
      <div className="text-lg font-bold">{name}</div>
      <div>{formatMoney(price)}</div>
    </div>
  );
}

export { MenuItem };
