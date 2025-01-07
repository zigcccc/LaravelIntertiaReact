import clsx from 'clsx';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

import { type TextInputProps } from './TextInput.types';

export const TextInput = forwardRef<Pick<HTMLInputElement, 'focus'>, TextInputProps>(function TextInputInner(
  { type = 'text', className = '', isFocused = false, ...props },
  ref
) {
  const localRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <input
      {...props}
      ref={localRef}
      className={clsx('rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500', className)}
      type={type}
    />
  );
});
