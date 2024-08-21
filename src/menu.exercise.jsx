import { Title } from './title';
import { MenuItem, MenuItems } from './menu-items';
import { items } from './menu-data';

function Menu() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] gap-x-8">
      <header className="sticky top-0 border-b-4 border-foreground bg-white">
        <div className="container py-4">
          <img
            className="h-12 w-12 object-contain p-1"
            src="/images/logo-burger.png"
            alt="Yummy! Foods Home"
            width="237"
            height="248"
          />
        </div>
      </header>
      <div className="container pb-16 pt-8 lg:gap-x-16 lg:gap-y-8">
        <main className="col-span-full flex flex-col gap-8">
          <Title>Menu</Title>
          <MenuItems>
            {
              // 👋 You need to handle an empty list here...
              items.map((menuItem) => (
                <MenuItem
                  key={menuItem.productId}
                  name={menuItem.name}
                  image={menuItem.image}
                  price={menuItem.price}
                />
              ))
            }
          </MenuItems>
        </main>
      </div>
      <footer className="bg-slate-800 text-slate-400">
        <div className="container py-4 text-right">
          Copyright © Yummy! Foods 2024
        </div>
      </footer>
    </div>
  );
}

export { Menu };
