import { Skeleton } from '@/lib/ui/skeleton';

function FiltersSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="h-6 w-20" />
      <Skeleton className="h-6 w-24" />
      <Skeleton className="h-6 w-20" />
    </div>
  );
}

function CategoryFilters({ isPending, children }) {
  if (isPending) {
    return <FiltersSkeleton />;
  }

  return <ul className="flex flex-col">{children}</ul>;
}

function CategoryFilter({ href, children }) {
  return (
    <li>
      <a
        className="block font-bold transition hover:translate-x-1 hover:text-red-600"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

export { CategoryFilters, CategoryFilter };
