import { type PropsWithChildren } from 'react';

import { type widthClasses } from './Modal.constants';

export type ModalProps = PropsWithChildren<{
  show?: boolean;
  maxWidth?: keyof typeof widthClasses;
  closeable?: boolean;
  onClose?: () => void;
}>;
