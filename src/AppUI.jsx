import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";

export const AppUI = ({
  loading,
  error,
  totalTodos,
  checkTodos,
  searchValue,
  setSearchValue,
  searchTodos,
  checkTodo,
  deleteTodo,
}) => {
  return (
    <>
      <TodoCounter totalTodos={totalTodos} checkTodos={checkTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {error && <p>Ocurrio un error</p>}
        {loading && <p>Cargando...</p>}
        {!loading && totalTodos == 0 && <p>Agrega un TODO</p>}
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.complete}
            onCheckTodo={() => checkTodo(todo.text)}
            onDeleteTodo={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
