import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

interface SlideoverProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const Slideover: React.FC<SlideoverProps> = ({ children, open, setOpen }) => (
  <Transition.Root show={open} as={Fragment}>
    <Dialog
      as="div"
      static
      className="lg:hidden fixed inset-0 z-40 flex"
      open={open}
      onClose={setOpen}
    >
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </Transition.Child>
      <Transition.Child
        as={Fragment}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="focus:outline-none relative flex flex-col flex-1 w-full max-w-xs bg-white">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="absolute top-0 right-0 pt-2 -mr-12">
              <button
                type="button"
                className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white flex items-center justify-center w-10 h-10 ml-1 rounded-full"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <XIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </Transition.Child>
          {children}
        </div>
      </Transition.Child>
      <div className="w-14 flex-shrink-0" aria-hidden="true">
        {/* Force sidebar to shrink to fit close icon */}
      </div>
    </Dialog>
  </Transition.Root>
);
export default Slideover;
