function CategoryFilters({ children }) {
  return <ul className="flex flex-col">{children}</ul>;
}

// ⚠️ Take care when passing `onClick` to the `a` element. More often than not,
// if you don't need to navigate to a different page, you should use a `button`.
function CategoryFilter({ href, children, onClick }) {
  return (
    <li>
      <a
        onClick={onClick}
        className="block font-bold transition hover:translate-x-1 hover:text-red-600"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

export { CategoryFilters, CategoryFilter };
