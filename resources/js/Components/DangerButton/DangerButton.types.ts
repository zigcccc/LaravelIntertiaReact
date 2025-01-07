import { type ButtonHTMLAttributes } from 'react';

export type DangerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  disabled?: boolean;
};
