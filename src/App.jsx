import React from "react";
import { CreateTodoButton, TodoCounter, TodoItem, TodoList, TodoSearch } from "./components";

const todos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de intro a reatc", complete: false },
  { text: "Llorar con la llorona", complete: true },
];

export const App = () => {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.complete}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
};
