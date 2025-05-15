import Todoitem from "../todoitem/Todoitem";
import "./Todobody.scss";

function Todobody({ todos, setTodos }) {
  function onToggleDone(todoItem) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoItem.id ? todoItem : todo;
    });
    setTodos(updatedTodos);
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

  return (
    <div className="todo-items">
      {todos.map((todo) => (
        <Todoitem
          key={todo.id}
          todo={todo}
          onToggleDone={onToggleDone}
          onClick={handleDeleteBtn}
        />
      ))}
    </div>
  );
}

export default Todobody;
