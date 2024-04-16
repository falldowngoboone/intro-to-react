function Title({ children, ...props }) {
  return (
    <h1 className="text-4xl font-black uppercase tracking-wider" {...props}>
      {children}
    </h1>
  );
}

export { Title };
