import { formatMoney } from '@/lib';

function MenuItem({ image, name, price }) {
  return (
    <>
      <div className="overflow-hidden rounded">
        <img
          className="transition-transform ease-out"
          height="300"
          width="300"
          src={`/images/${image.url}`}
          alt={image.alt}
        />
      </div>
      <div>
        <div className="text-lg font-bold">{name}</div>
        <div>{formatMoney(price)}</div>
      </div>
    </>
  );
}

export { MenuItem };
