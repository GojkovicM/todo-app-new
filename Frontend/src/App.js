import "./App.css";
import { router } from "./utilities/routing";
import { RouterProvider } from "react-router-dom";
import { ToDoHandler } from "./store/todo";

function App() {
  return (
    <ToDoHandler>
  <div className="App">
      <RouterProvider router={router}/>
  </div>
  </ToDoHandler>
  )
}

export default App;
