import React from 'react';
import { MenuIcon } from '@heroicons/react/outline';

export interface MobileHeaderProps {
  onToggleMenu: () => void;
}
const MobileHeader: React.FC<MobileHeaderProps> = ({ onToggleMenu }) => (
  <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
    <div>
      <img
        className="w-auto h-8"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      />
    </div>
    <div>
      <button
        type="button"
        className="hover:text-gray-900 inline-flex items-center justify-center w-12 h-12 -mr-3 text-gray-500 rounded-md"
        onClick={() => onToggleMenu()}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="w-6 h-6" aria-hidden="true" />
      </button>
    </div>
  </div>
);
export default MobileHeader;
