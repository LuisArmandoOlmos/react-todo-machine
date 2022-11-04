import {
  CreateTodoButton,
  TodoCounter,
  TodoForm,
  TodoHeader,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";
import { CreateTodo } from "./modal/  CreateTodo";
import { useTodo } from "./hooks/useTodo";
import { TodoError } from "./components/TodoError";
import { TodoLoading } from "./components/TodoLoading";
import { EmptyTodoList } from "./components/EmptyTodoList";
import { TodoNotFound } from "./components/TodoNotFound";

export const App = () => {
  const {
    checkTodos,
    error,
    loading,
    openCreateTodo,
    searchTodos,
    searchValue,
    totalTodos,
    addTodo,
    checkTodo,
    deleteTodo,
    setOpenCreateTodo,
    setSearchValue,
  } = useTodo();

  return (
    <>
      <TodoHeader>
        <TodoCounter checkTodos={checkTodos} totalTodos={totalTodos} />
        <TodoSearch setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchTodos={searchTodos}
        searchValue={searchValue}
        totalTodos={totalTodos}
        onEmptyTodoList={() => <EmptyTodoList />}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onTodoNotFound={() => <TodoNotFound searchValue={searchValue} />}
        render={(todo) => (
          <TodoItem
            complete={todo.complete}
            key={todo.text}
            text={todo.text}
            onCheckTodo={() => checkTodo(todo.text)}
            onDeleteTodo={() => deleteTodo(todo.text)}
          />
        )}
      ></TodoList>
      {!!openCreateTodo && (
        <CreateTodo>
          <TodoForm addTodo={addTodo} setOpenCreateTodo={setOpenCreateTodo} />
        </CreateTodo>
      )}
      <CreateTodoButton setOpenCreateTodo={setOpenCreateTodo} />
    </>
  );
};
