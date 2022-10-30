export const TodoList = ({ children }) => {
  return (
    <section>
      <ul className="list-none m-0 pb-14">{children}</ul>
    </section>
  );
};
