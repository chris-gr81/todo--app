import Todoitem from "../todoitem/Todoitem";

function Todobody({ todos, handleChangeCheckbox, onClick }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todoitem
          todos={todo}
          handleChangeCheckbox={handleChangeCheckbox}
          onClick={onClick}
        />
      ))}
    </div>
  );
}

export default Todobody;
