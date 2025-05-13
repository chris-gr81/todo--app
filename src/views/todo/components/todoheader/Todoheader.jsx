import Button from "../../../../components/button/Button";
import Input from "../../../../components/input/Input";

function Todoheader({ onClick, onChange, inputValue }) {
  return (
    <div>
      <Input onChange={onChange} inputValue={inputValue} />
      <Button buttonValue="Add" onClick={onClick} />
    </div>
  );
}

export default Todoheader;
