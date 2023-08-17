interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  value: any;
  onChange: (value: any) => void;
  placeholder: string;
  onBlur?: (value: any) => void;
}

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
        onChange={(e) => { console.log('Input Change Event:', e); onChange(e.target.value) }}
        onBlur={(e) => { console.log('Input Blur Event:', e); onBlur && onBlur(e.target.value) }}
      />
    </div>
  );
}

export { InputField };