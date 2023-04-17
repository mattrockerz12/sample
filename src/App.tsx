import React from "react";
import "./App.css";
import { GlobalContext } from "./context/GlobalState";

function App() {
  const context = React.useContext(GlobalContext);

  React.useEffect(() => {
    context?.getTodos();
  }, [context]);

  return (
    <>
      <ul>
        {context?.todos.map((todo) => (
          <li key={todo.title}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
