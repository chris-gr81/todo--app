import { useState } from "react";
import Todoheader from "../todoheader/Todoheader";
import Todobody from "../todobody/Todobody";
import "./Todolist.scss";

function Todolist({}) {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo__list">
      <Todoheader todos={todos} setTodos={setTodos} />
      <Todobody todos={todos} setTodos={setTodos} />
    </div>
  );
}
export default Todolist;
