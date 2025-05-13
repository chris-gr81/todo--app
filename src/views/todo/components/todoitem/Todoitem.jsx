import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";

function Todoitem({ todo, onToggleDone, onClick }) {
  const { id, done, content } = todo;
  return (
    <div>
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
