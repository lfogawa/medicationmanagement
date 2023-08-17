interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: (value: any) => void;
  placeholder: string;
}

function InputField({
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
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
      />
    </div>
  );
}

export { InputField };