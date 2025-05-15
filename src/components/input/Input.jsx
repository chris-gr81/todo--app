import "./Input.scss";

function Input({ onChange, inputValue }) {
  return (
    <input
      className="input-bar"
      type="text"
      onChange={onChange}
      value={inputValue}
    />
  );
}

export default Input;
