import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "./components";

export const AppUI = ({
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
