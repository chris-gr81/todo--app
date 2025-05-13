import { useState } from "react";
import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";

function Todoheader({ todos, setTodos }) {
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

  return (
    <div>
      <Input onChange={handleInputValue} inputValue={inputValue} />
      <Button buttonValue="Add" onClick={handleInputAdd} />
    </div>
  );
}

export default Todoheader;
