export const TodoList = ({
  children,
  error,
  loading,
  searchTodos,
  searchValue,
  totalTodos,
  onError,
  onLoading,
  onEmptyTodoList,
  onTodoNotFound,
  render,

}) => {
  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && totalTodos === 0 && onEmptyTodoList()}
      {!loading && searchTodos.length === 0 && onTodoNotFound()}
      {searchTodos.map(render)}

      <ul className="list-none m-0 pb-14">
        {children}
      </ul>
    </section>
  );
};
