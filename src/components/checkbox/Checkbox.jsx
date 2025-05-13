function Checkbox({ id, done, content, onToggleDone }) {
  function handleChangeCheckboxEvent(e) {
    onToggleDone({ id, done: e.target.checked, content });
  }

  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={done}
        onChange={handleChangeCheckboxEvent}
      />
      <label htmlFor={String(id)}>{content}</label>
    </div>
  );
}

export default Checkbox;
