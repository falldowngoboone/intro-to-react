import { Title } from './title';
import { MenuItem, MenuItems, MenuItemsNoResults } from './menu-items';
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
        <aside className="col-span-2 flex flex-col gap-4 pt-8">
          <div className="sticky top-32 flex flex-col gap-4">
            {/* 👋 Here's where we'll put the category filters */}
          </div>
        </aside>
        <main className="col-span-10 flex flex-col gap-8">
          <Title>Menu</Title>
          <MenuItems>
            {items.length === 0 ? (
              <MenuItemsNoResults />
            ) : (
              items.map((menuItem) => (
                <MenuItem
                  key={menuItem.productId}
                  name={menuItem.name}
                  image={menuItem.image}
                  price={menuItem.price}
                />
              ))
            )}
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
