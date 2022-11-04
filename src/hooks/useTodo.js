import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useTodo = () => {
  const {
    error,
    item: todoList,
    loading,
    saveItem: saveTodoList,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = useState("");
  const [openCreateTodo, setOpenCreateTodo] = useState(false);

  const totalTodos = todoList.length;
  const checkTodos = todoList.filter((todo) => !!todo.complete).length;

  let searchTodos = [];

  if (searchValue === "") {
    searchTodos = todoList;
  } else {
    searchTodos = todoList.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchValueText = searchValue.toLowerCase();
      return todoText.includes(searchValueText);
    });
  }

  const addTodo = (text) => {
    const newTodo = {
      complete: false,
      text: text,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    saveTodoList(newTodoList);
  };

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

  return {
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
  };
};
