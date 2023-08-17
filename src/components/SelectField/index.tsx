interface SelectFieldProps {
  label: string;
  name: string;
  id: string;
  value: string;
  onChange: (value: any) => void;
  options: string[];
}

function SelectField({
  label,
  name,
  id,
  value,
  onChange,
  options
}: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select name={name} id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export { SelectField };