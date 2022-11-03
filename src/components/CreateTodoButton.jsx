import { useContext } from "react";
import { TodoContex } from "../contexts/TodoContext";

export const CreateTodoButton = () => {
  const {setOpenCreateTodo} = useContext(TodoContex)

  return (
    <button
      className="addButton"
      onClick={() => setOpenCreateTodo(prevState => !prevState)}
    >
      +
    </button>
  );
};
