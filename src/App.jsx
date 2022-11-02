import { AppUI } from "./AppUI";
import { TodoProvider } from "./contexts/TodoProvider";

export const App = () => {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
};
