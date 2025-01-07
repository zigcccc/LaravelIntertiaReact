import { Link } from '@inertiajs/react';
import clsx from 'clsx';

import { type NavLinkProps } from './NavLink.types';

export function NavLink({ active = false, className = '', children, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none',
        className,
        active
          ? 'border-indigo-400 text-gray-900 focus:border-indigo-700'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700'
      )}
    >
      {children}
    </Link>
  );
}
