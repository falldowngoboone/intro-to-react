import { useSearchParams } from 'react-router-dom';

import { Grid, GridAside, GridMain } from '@/lib/shared-components/grid';
import { Title } from '@/lib/shared-components/title';
import {
  MenuItems,
  MenuItem,
  MenuItemsNoResults,
  CategoryFilters,
  CategoryFilter,
  SearchForm,
  StickySidebar,
} from '@/lib/menu';
import { useFetch, Status } from '@/lib/use-fetch';

function Menu() {
  const [searchParams] = useSearchParams();

  const { data: items, status: itemsStatus } = useFetch(
    `${window.location.origin}/api/menu?${searchParams.toString()}`,
    { initialData: [] },
  );
  const { data: categories, status: categoriesStatus } = useFetch(
    `${window.location.origin}/api/menu/categories`,
    { initialData: [] },
  );

  if (itemsStatus === Status.REJECTED || categoriesStatus === Status.REJECTED) {
    return (
      <div className="col-span-full py-8 text-center">
        <p className="text-red-600">
          An error occurred. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <Grid>
      <GridAside>
        <StickySidebar>
          <SearchForm />
          <CategoryFilters isPending={categoriesStatus === Status.PENDING}>
            <CategoryFilter key="all" href=".">
              All
            </CategoryFilter>
            {categories.map((category) => (
              <CategoryFilter
                key={category.categoryId}
                href={`?category=${category.categoryId}`}
              >
                {category.name}
              </CategoryFilter>
            ))}
          </CategoryFilters>
        </StickySidebar>
      </GridAside>
      <GridMain>
        <Title>Menu</Title>
        <MenuItems isPending={itemsStatus === Status.PENDING}>
          {items.length === 0 ? (
            <MenuItemsNoResults />
          ) : (
            items.map((menuItem) => (
              <MenuItem
                key={menuItem.productId}
                productId={menuItem.productId}
                name={menuItem.name}
                image={menuItem.image}
                price={menuItem.price}
              />
            ))
          )}
        </MenuItems>
      </GridMain>
    </Grid>
  );
}

export { Menu };
