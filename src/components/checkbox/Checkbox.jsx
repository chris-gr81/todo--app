function Checkbox({ todoItem, handleChangeCheckbox }) {
  function handleChangeCheckboxEvent(e) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = e.target.checked;
    handleChangeCheckbox(updatedTodoItem);
  }
  return (
    <div>
      <input
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.done}
        onChange={handleChangeCheckboxEvent}
      />
      <label htmlFor={todoItem.id}>{todoItem.content}</label>
    </div>
  );
}

export default Checkbox;
