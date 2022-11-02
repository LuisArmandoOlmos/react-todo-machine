import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { TodoContex } from "./TodoContext";

export const TodoProvider = ({ children }) => {
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
    <TodoContex.Provider
      value={{
        checkTodo,
        checkTodos,
        deleteTodo,
        error,
        loading,
        searchTodos,
        searchValue,
        setSearchValue,
        totalTodos
      }}
    >
      {children}
    </TodoContex.Provider>
  );
};
