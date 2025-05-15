import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";
import "./Todoitem.scss";

function Todoitem({ todo, onToggleDone, onClick }) {
  const { id, done, content } = todo;
  return (
    <div className="todo-items__item">
      <Checkbox
        id={id}
        done={done}
        content={content}
        onToggleDone={onToggleDone}
      />
      <Button buttonValue="Löschen" onClick={onClick} id={id} />
    </div>
  );
}

export default Todoitem;
