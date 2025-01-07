import { Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import { type PropsWithChildren, useContext, useState } from 'react';

import { DropDownContext } from './Dropdown.context';
import { type DropdownLinkProps, type DropdownContentProps } from './Dropdown.types';

export const Dropdown = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };

  return (
    <DropDownContext.Provider value={{ open, setOpen, toggleOpen }}>
      <div className="relative">{children}</div>
    </DropDownContext.Provider>
  );
};

const Trigger = ({ children }: PropsWithChildren) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);

  return (
    <>
      <div onClick={toggleOpen}>{children}</div>

      {open && <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />}
    </>
  );
};

const Content = ({
  align = 'right',
  width = '48',
  contentClasses = 'py-1 bg-white',
  children,
}: DropdownContentProps) => {
  const { open, setOpen } = useContext(DropDownContext);

  let alignmentClasses = 'origin-top';

  if (align === 'left') {
    alignmentClasses = 'ltr:origin-top-left rtl:origin-top-right start-0';
  } else if (align === 'right') {
    alignmentClasses = 'ltr:origin-top-right rtl:origin-top-left end-0';
  }

  let widthClasses = '';

  if (width === '48') {
    widthClasses = 'w-48';
  }

  return (
    <>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        show={open}
      >
        <div
          className={clsx('absolute z-50 mt-2 rounded-md shadow-lg', alignmentClasses, widthClasses)}
          onClick={() => setOpen(false)}
        >
          <div className={clsx('rounded-md ring-1 ring-black ring-opacity-5', contentClasses)}>{children}</div>
        </div>
      </Transition>
    </>
  );
};

const DropdownLink = ({ className = '', children, ...props }: DropdownLinkProps) => {
  return (
    <Link
      {...props}
      className={clsx(
        'block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none',
        className
      )}
    >
      {children}
    </Link>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
