import clsx from 'clsx';

import { type DangerButtonProps } from './DangerButton.types';

export function DangerButton({ className = '', disabled, children, ...props }: DangerButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700',
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
