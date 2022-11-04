export const TodoList = ({
  children,
  error,
  loading,
  searchTodos,
  totalTodos,
  onError,
  onLoading,
  onEmptyTodoList,
  render,
}) => {
  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && totalTodos === 0 && onEmptyTodoList()}
      {searchTodos.map(render)}

      <ul className="list-none m-0 pb-14">
        {children}
      </ul>
    </section>
  );
};
