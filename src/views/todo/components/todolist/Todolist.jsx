import { useState } from "react";
import Todoheader from "../todoheader/Todoheader";
import Todobody from "../todobody/Todobody";

function Todolist({}) {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  function handleInputAdd() {
    const value = inputValue.trim();
    if (!value) return;

    const oldTodos = [...todos];
    oldTodos.push({
      id: Math.random(),
      content: value,
      done: false,
    });
    setTodos(oldTodos);
    setInputValue("");
  }

  function handleDeleteBtn(e) {
    const currentId = Number(e.target.dataset.id);
    const oldTodos = [...todos];
    console.log(oldTodos);
    const newTodos = oldTodos.filter((todo) => {
      return currentId !== todo.id;
    });
    setTodos(newTodos);
  }

  function handleChangeCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <Todoheader
        onClick={handleInputAdd}
        onChange={handleInputValue}
        inputValue={inputValue}
      />
      <Todobody
        todos={todos}
        handleChangeCheckbox={handleChangeCheckbox}
        onClick={handleDeleteBtn}
      />
    </div>
  );
}
export default Todolist;
