import "./Button.scss";

function Button({ buttonValue, onClick, id }) {
  const btnId = id ? id : "";
  return (
    <button className="button" onClick={onClick} data-id={btnId}>
      {buttonValue}
    </button>
  );
}

export default Button;
