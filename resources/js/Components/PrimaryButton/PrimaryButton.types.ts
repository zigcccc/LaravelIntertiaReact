import { type ButtonHTMLAttributes, type PropsWithChildren } from 'react';

export type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren<{
    className?: string;
    disabled?: boolean;
  }>;
