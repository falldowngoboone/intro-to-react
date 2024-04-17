// 👇 Psst, you'll need this to format the menu item price...
// import { formatMoney } from '@/lib';

function MenuItems({ children }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  );
}

function MenuItem() {
  return (
    <>
      <img
        height="300"
        width="300"
        src="/images/cheeseburger.jpeg"
        alt="Cheeseburger"
      />
      <div className="text-lg font-bold">Cheeseburger</div>
      <div>$6.99</div>
    </>
  );
}

export { MenuItem, MenuItems };
