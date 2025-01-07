import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

export type SecondaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    className?: string;
    disabled?: boolean;
  }>;
