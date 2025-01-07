import { type HTMLInputTypeAttribute, type InputHTMLAttributes } from 'react';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: HTMLInputTypeAttribute;
  className?: string;
  isFocused?: boolean;
};
