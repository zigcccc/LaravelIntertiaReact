import { type Link } from '@inertiajs/react';
import { type ComponentProps, type PropsWithChildren } from 'react';

export type ResponsiveNavLinkProps = ComponentProps<typeof Link> &
  PropsWithChildren<{
    active?: boolean;
    className?: string;
  }>;
