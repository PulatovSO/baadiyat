import { StyledInput } from "./input.styled";

function Input({ type, placeholder, onChange, name, border }) {
  return (
    <StyledInput onChange={onChange} border={border} name={name} className="input" type={type} placeholder={placeholder} />
  );
}

export default Input;
