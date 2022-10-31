export const CreateTodoButton = () => {
  const onClickCreateTodoButton = (msg) => alert(msg);

  return (
    <button
      className="addButton"
      onClick={() => onClickCreateTodoButton("Aquí se debería abrir un modal")}
    >
      +
    </button>
  );
};
