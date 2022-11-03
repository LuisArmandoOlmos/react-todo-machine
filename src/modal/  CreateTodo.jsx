import ReactDOM from "react-dom";

export const CreateTodo = ({ children }) => {
  return ReactDOM.createPortal(
    <div
      className="
        -bottom-2
        -left-2
        -right-2
        -top-2
        bg-main-darkGreen
        fixed
        flex
        items-center
        justify-center
        text-main-white
      "
    >
      {children}
    </div>,
    document.getElementById("createTodo")
  );
};
