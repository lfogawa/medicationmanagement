import { InputFieldProps } from "./interface";

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
    <div>
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
    </div>
  );
}

export { InputField };