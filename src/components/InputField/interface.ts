export interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  id: string;
  value: any;
  onChange: (value: any) => void;
  placeholder: string;
  onBlur?: (value: any) => void;
}