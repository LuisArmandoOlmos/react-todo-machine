import { stringify } from "postcss";
import React, { useState } from "react";
import { AppUI } from "./AppUI";

/* const defaulTodos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de intro a reatc", complete: false },
  { text: "Llorar con la llorona", complete: true },
]; */

export const useLocalStorage = (itemName, initialValue) => {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifyNewItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifyNewItem);
    setItem(newItem);
  };

  return [item, saveItem];
};

export const App = () => {
  const [todoList, saveTodoList] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

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
    saveTodoList(newTodoList);
  };

  const deleteTodo = (text) => {
    const todoIndex = todoList.findIndex((todo) => todo.text === text);
    const newTodoList = [...todoList];
    newTodoList.splice(todoIndex, 1);
    saveTodoList(newTodoList);
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
