export const CreateTodoButton = ({ setOpenCreateTodo }) => {
  return (
    <button
      className="addButton"
      onClick={() => setOpenCreateTodo((prevState) => !prevState)}
    >
      +
    </button>
  );
};
