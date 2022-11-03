import { useContext } from "react";
import {
  CreateTodoButton,
  TodoCounter,
  TodoForm,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";
import { TodoContex } from "./contexts/TodoContext";
import { CreateTodo } from "./modal/  CreateTodo";

export const AppUI = () => {
  const {
    checkTodo,
    deleteTodo,
    error,
    loading,
    openCreateTodo,
    searchTodos,
    setOpenCreateTodo,
    totalTodos,
  } = useContext(TodoContex);

  return (
    <>
      <TodoCounter />
      <TodoSearch />
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
      {!!openCreateTodo && (
        <CreateTodo>
          <TodoForm />
        </CreateTodo>
      )}
      <CreateTodoButton />
    </>
  );
};
