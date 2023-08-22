import { InputFieldProps } from "./interface";
import { InputFieldDivStyled } from "./styled";

function InputField({
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
  onBlur
}: InputFieldProps) {
  return (
    <InputFieldDivStyled>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={(e) => onBlur && onBlur(e.target.value)}
      />
    </InputFieldDivStyled>
  );
}

export { InputField };