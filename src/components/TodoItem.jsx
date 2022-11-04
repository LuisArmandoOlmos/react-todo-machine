export const TodoItem = ({ text, complete, onCheckTodo, onDeleteTodo }) => {

  return (
    <li className="bg-main-white flex items-center justify-center mt-6 relative shadow-2xl">
      <span
        className={`icon absolute left-3 ${complete && "text-main-green"}`}
        onClick={onCheckTodo}
      >
        √
      </span>
      <p
        className={`font-normal ml-6 my-6 text text-lg w-[(100%-120px)] ${
          complete && "line-through"
        }`}
      >
        {text}
      </p>
      <span
        className="icon absolute right-0 top-6 hover:text-red-700"
        onClick={onDeleteTodo}
      >
        X
      </span>
    </li>
  );
};
