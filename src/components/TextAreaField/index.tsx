import { TextAreaFieldDivStyled } from "./styled";

interface TextAreaFieldProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (value: any) => void;
  placeholder: string;
}

function TextAreaField({
  label,
  name,
  id,
  value,
  onChange,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <TextAreaFieldDivStyled>
      <label htmlFor={id}>{label}</label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </TextAreaFieldDivStyled>
  );
}

export { TextAreaField };