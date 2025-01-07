import clsx from 'clsx';

import { type InputErrorProps } from './InputError.types';

export function InputError({ message, className, ...props }: InputErrorProps) {
  if (!message) {
    return null;
  }
  return (
    <p {...props} className={clsx('text-sm text-red-600', className)}>
      {message}
    </p>
  );
}
