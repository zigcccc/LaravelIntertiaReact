import { type LabelHTMLAttributes, type PropsWithChildren } from 'react';

export type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> &
  PropsWithChildren<{
    value?: string;
    className?: string;
  }>;
