export const TodoItem = ({ text, completed }) => {
  return (
    <li className="bg-main-white flex items-center justify-center mt-6 relative shadow-2xl">
      <span
        className={`icon absolute left-3 ${completed && "text-main-green"}`}
      >
        √
      </span>
      <p
        className={`font-normal ml-6 my-6 text text-lg w-[(100%-120px)] ${
          completed && "line-through"
        }`}
      >
        {text}
      </p>
      <span className="icon absolute right-0 top-6 hover:text-red-700">X</span>
    </li>
  );
};
