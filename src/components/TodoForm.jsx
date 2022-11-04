import { useState } from "react";

export const TodoForm = ({ addTodo, setOpenCreateTodo }) => {
  const [todoText, setTodoText] = useState("");

  const onCancel = () => {
    setOpenCreateTodo((prevState) => !prevState);
  };

  const onChange = ({ target }) => {
    setTodoText(target.value);
  };

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(todoText);
    setOpenCreateTodo((prevState) => !prevState);
  };

  return (
    <form
      onSubmit={onAdd}
      className="w-11/12 max-w-xs bg-white py-8 px-10 flex justify-center items-center flex-col "
    >
      <label className="text-center font-normal text-xl text-main-dark mb-6">
        Create TODO
      </label>
      <textarea
        className="text-main-black rounded-sm border-2 border-solid border-main-black text-xl text-center p-3 h-24 w-[calc(100%-25px)]"
        value={todoText}
        onChange={onChange}
        placeholder="Create your first TODO"
      ></textarea>
      <div>
        <button
          onClick={onCancel}
          type="button"
          className="text-main-dark rounded-sm border-2 border-solid border-main-black m-2 p-1"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="text-main-dark bg-main-cian m-2 p-1 rounded-sm border-2 border-solid border-main-black"
        >
          Add
        </button>
      </div>
    </form>
  );
};
