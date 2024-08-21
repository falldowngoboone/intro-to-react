import { useState } from 'react';

import { Input } from '@/lib/ui/input';

import { Title } from './title';
import { MenuItem, MenuItems, MenuItemsNoResults } from './menu-items';
import { items, categories } from './menu-data';
import { CategoryFilter, CategoryFilters } from './category-filters';

function Menu() {
  let filteredItems = items;
  const [categoryId, setCategoryId] = useState('');
  const [q, setQ] = useState('');
  const [query, setQuery] = useState('');

  if (categoryId) {
    filteredItems = items.filter((item) =>
      item.categories.includes(categoryId),
    );
  }

  if (query) {
    filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
  }

  function handleCategoryChange(event, nextCategory) {
    event.preventDefault();
    setQuery('');
    setCategoryId(nextCategory);
  }

  function handleSearchChange(event) {
    setQ(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    setCategoryId('');
    setQuery(q);
  }

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
      <div className="container grid auto-rows-min grid-cols-12 gap-x-8 gap-y-4 pb-16 pt-8 lg:gap-x-16 lg:gap-y-8">
        <aside className="col-span-2 flex flex-col gap-4 pt-8">
          <div className="sticky top-32 flex flex-col gap-4">
            <form onSubmit={handleSearchSubmit}>
              <Input
                name="q"
                type="search"
                placeholder="search"
                onChange={handleSearchChange}
                value={q}
              />
            </form>
            <CategoryFilters>
              <CategoryFilter key="all" href="." onClick={handleCategoryChange}>
                All
              </CategoryFilter>
              {categories.map((category) => (
                <CategoryFilter
                  onClick={(event) =>
                    handleCategoryChange(event, category.categoryId)
                  }
                  key={category.categoryId}
                  href={`?category=${category.categoryId}`}
                >
                  {category.name}
                </CategoryFilter>
              ))}
            </CategoryFilters>
          </div>
        </aside>
        <main className="col-span-10 flex flex-col gap-8">
          <Title>Menu</Title>
          <MenuItems>
            {filteredItems.length === 0 ? (
              <MenuItemsNoResults />
            ) : (
              filteredItems.map((menuItem) => (
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
