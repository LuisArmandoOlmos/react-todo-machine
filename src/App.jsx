import React, { useState } from "react";
import { AppUI } from "./AppUI";

const defaulTodos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de intro a reatc", complete: false },
  { text: "Llorar con la llorona", complete: true },
];

export const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [todoList, settodoList] = useState(defaulTodos);

  const totalTodos = todoList.length;
  const checkTodos = todoList.filter((todo) => !!todo.complete).length;

  let searchTodos = [];

  if (searchValue == "") {
    searchTodos = todoList;
  } else {
    searchTodos = todoList.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return todoText.includes(searchValueText);
    });
  }

  const checkTodo = (text) => {
    const todoIndex = todoList.findIndex((todo) => todo.text === text);
    const newTodoList = [...todoList];
    newTodoList[todoIndex].complete = true;
    settodoList(newTodoList);
  };

  const deleteTodo = (text) => {
    const todoIndex = todoList.findIndex((todo) => todo.text === text);
    const newTodoList = [...todoList];
    newTodoList.splice(todoIndex, 1);
    settodoList(newTodoList);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      checkTodos={checkTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      checkTodo={checkTodo}
      deleteTodo={deleteTodo}
    />
  );
};
