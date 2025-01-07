import type { Link } from '@inertiajs/react';
import { type ComponentProps, type PropsWithChildren } from 'react';

export type DropdownContentProps = PropsWithChildren<{
  contentClasses?: string;
  width?: string;
  align?: 'left' | 'right' | 'center';
}>;

export type DropdownLinkProps = ComponentProps<typeof Link> &
  PropsWithChildren<{
    className?: string;
  }>;
