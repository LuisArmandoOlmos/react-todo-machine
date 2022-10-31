export const TodoCounter = ({ totalTodos, checkTodos }) => {
  return (
    <h2 className="m-0 p-12 text-2xl text-center">
      Has completado {checkTodos} de {totalTodos} Todos
    </h2>
  );
};
