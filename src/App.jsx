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

export const App = () => {
  const {
    checkTodos,
    error,
    loading,
    openCreateTodo,
    searchTodos,
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
        totalTodos={totalTodos}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodoList={() => <EmptyTodoList />}
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
