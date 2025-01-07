import { createContext } from 'react';

export const DropDownContext = createContext<{
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  toggleOpen: () => void;
}>({
  open: false,
  setOpen: () => {},
  toggleOpen: () => {},
});
