import { useSearchParams } from 'react-router-dom';

import { Grid, GridAside, GridMain } from '@/lib/shared-components/grid';
import { Title } from '@/lib/shared-components/title';
import {
  MenuItems,
  MenuItem,
  MenuItemsNoResults,
  MenuError,
  CategoryFilters,
  CategoryFilter,
  SearchForm,
  StickySidebar,
} from '@/lib/menu';
import { useFetch, Status } from '@/lib/use-fetch';

function Menu() {
  const [searchParams] = useSearchParams();

  const { data: items = [], status: itemsStatus } = useFetch(
    `/api/menu?${searchParams.toString()}`,
  );
  const { data: categories = [], status: categoriesStatus } =
    useFetch(`/api/menu/categories`);
  const hasErrors =
    itemsStatus === Status.REJECTED || categoriesStatus === Status.REJECTED;

  if (hasErrors) {
    return <MenuError />;
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
