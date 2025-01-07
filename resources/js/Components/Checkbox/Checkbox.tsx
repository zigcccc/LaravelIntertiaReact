import clsx from 'clsx';

import { type CheckboxProps } from './Checkbox.types';

export function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <input
      {...props}
      className={clsx('rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500', className)}
      type="checkbox"
    />
  );
}
