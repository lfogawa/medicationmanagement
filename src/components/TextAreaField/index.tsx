interface TextAreaFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  value: string;
  onChange: (value: any) => void;
  placeholder: string;
}

function TextAreaField({
  label,
  type,
  name,
  id,
  value,
  onChange,
  placeholder,
}: TextAreaFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
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

export { TextAreaField };