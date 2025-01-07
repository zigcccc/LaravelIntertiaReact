import clsx from 'clsx';

import { type PrimaryButtonProps } from './PrimaryButton.types';

export function PrimaryButton({ className, disabled, children, ...props }: PrimaryButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900',
        className,
        {
          'opacity-25': disabled,
        }
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
