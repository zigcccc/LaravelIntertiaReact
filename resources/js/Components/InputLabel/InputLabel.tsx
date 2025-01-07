import { type InputLabelProps } from './InputLabel.types';

export function InputLabel({ value, className = '', children, ...props }: InputLabelProps) {
  return (
    <label {...props} className={`block text-sm font-medium text-gray-700 ` + className}>
      {value ? value : children}
    </label>
  );
}
