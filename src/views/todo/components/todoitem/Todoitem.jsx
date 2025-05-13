import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";

function Todoitem({ todos, handleChangeCheckbox, onClick }) {
  return (
    <div>
      <Checkbox todoItem={todos} handleChangeCheckbox={handleChangeCheckbox} />
      <Button buttonValue="Löschen" onClick={onClick} id={todos.id} />
    </div>
  );
}

export default Todoitem;
