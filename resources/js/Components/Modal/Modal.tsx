import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import clsx from 'clsx';

import { widthClasses } from './Modal.constants';
import { type ModalProps } from './Modal.types';

export function Modal({ children, show = false, maxWidth = '2xl', closeable = true, onClose }: ModalProps) {
  const close = () => {
    if (closeable) {
      onClose?.();
    }
  };

  const maxWidthClass = widthClasses[maxWidth];

  return (
    <Transition leave="duration-200" show={show}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex transform items-center overflow-y-auto px-4 py-6 transition-all sm:px-0"
        id="modal"
        onClose={close}
      >
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="absolute inset-0 bg-gray-500/75" />
        </TransitionChild>

        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <DialogPanel
            className={clsx(
              'mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full',
              maxWidthClass
            )}
          >
            {children}
          </DialogPanel>
        </TransitionChild>
      </Dialog>
    </Transition>
  );
}
