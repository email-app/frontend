import React from 'react';
import { Link } from 'react-router-dom';
import {
  CloudUploadIcon,
  FilterIcon,
  FlagIcon,
  InboxIcon,
  TrashIcon,
  UsersIcon,
} from '@heroicons/react/outline';

import classNames from 'src/util/classNames';

const navigation = [
  { name: 'Inbox', href: '/emails', icon: InboxIcon, current: true },
  { name: 'Accounts', href: '/accounts', icon: UsersIcon, current: false },
  { name: 'Spam', href: '/spam', icon: FlagIcon, current: false },
  { name: 'Sent', href: '/sent', icon: CloudUploadIcon, current: false },
  { name: 'Filters', href: '/filters', icon: FilterIcon, current: false },
  { name: 'Trash', href: '/trash', icon: TrashIcon, current: false },
];

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 h-0 bg-gray-100 border-r border-gray-200">
      <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="w-auto h-8"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-900-text.svg"
            alt="Workflow"
          />
        </div>
        <nav className="flex-1 mt-5" aria-label="Sidebar">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-base lg:text-sm font-medium rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-gray-500'
                      : 'text-gray-400 group-hover:text-gray-500',
                    'mr-4 lg:mr-3 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex flex-shrink-0 p-4 border-t border-gray-200">
        <a href="#" className="group flex-shrink-0 block w-full">
          <div className="flex items-center">
            <div>
              <img
                className="h-9 w-9 inline-block rounded-full"
                src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p className="group-hover:text-gray-900 text-sm font-medium text-gray-700">
                Whitney Francis
              </p>
              <p className="group-hover:text-gray-700 text-xs font-medium text-gray-500">
                View profile
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Navbar;
