import "./Checkbox.scss";

function Checkbox({ id, done, content, onToggleDone }) {
  function handleChangeCheckboxEvent(e) {
    onToggleDone({ id, done: e.target.checked, content });
  }

  return (
    <div className="checkbox">
      <input
        id={id}
        type="checkbox"
        checked={done}
        onChange={handleChangeCheckboxEvent}
      />
      <label htmlFor={String(id)} className={done ? "done" : ""}>
        {content}
      </label>
    </div>
  );
}

export default Checkbox;
