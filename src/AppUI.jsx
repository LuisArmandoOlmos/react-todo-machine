import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";
import { TodoContex } from "./contexts/TodoContext";

export const AppUI = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoContex.Consumer>
        {({
          checkTodo,
          deleteTodo,
          error,
          loading,
          searchTodos,
          totalTodos,
        }) => (
          <TodoList>
            {error && <p>Ocurrio un error</p>}
            {loading && <p>Cargando...</p>}
            {!loading && totalTodos == 0 && <p>Agrega un TODO</p>}
            {searchTodos.map((todo) => (
              <TodoItem
                completed={todo.complete}
                key={todo.text}
                onCheckTodo={() => checkTodo(todo.text)}
                onDeleteTodo={() => deleteTodo(todo.text)}
                text={todo.text}
              />
            ))}
          </TodoList>
        )}
      </TodoContex.Consumer>
      <CreateTodoButton />
    </>
  );
};
