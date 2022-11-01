import React, { useEffect, useState } from "react";
import { AppUI } from "./AppUI";

/* const defaulTodos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de intro a reatc", complete: false },
  { text: "Llorar con la llorona", complete: true },
]; */

export const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {}
    }, 1000);
  }, []);

  const saveItem = (newItem) => {
    try {
      const stringifyNewItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyNewItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    item,
    loading,
    saveItem,
  };
};

export const App = () => {
  const {
    error,
    item: todoList,
    loading,
    saveItem: saveTodoList,
  } = useLocalStorage("TODOS_V1", []);
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
      checkTodo={checkTodo}
      checkTodos={checkTodos}
      deleteTodo={deleteTodo}
      error={error}
      loading={loading}
      searchTodos={searchTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      totalTodos={totalTodos}
    />
  );
};
