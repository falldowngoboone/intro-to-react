function CategoryFilters({ children }) {
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
