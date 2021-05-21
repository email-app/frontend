import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'src/util/classNames';

interface EmailListItemProps {
  email: {
    subject: string;
    sender: string;
    href: string;
    read: boolean;
    date: string;
    datetime: string;
    preview: string;
  };

  active?: boolean;
}
const EmailListItem: React.FC<EmailListItemProps> = ({
  email,
  active = false,
}) => (
  <div
    className={classNames(
      'hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 relative px-6 py-5 bg-white',
      active && 'border-l-2 border-blue-600 ',
      email.read && !active && 'bg-gray-100'
    )}
  >
    <div className="flex justify-between space-x-3">
      <div className="flex-1 min-w-0">
        <Link to={email.href} className="focus:outline-none block">
          <span className="absolute inset-0" aria-hidden="true" />
          <p
            className={classNames(
              'text-sm font-medium truncate',
              !active && 'text-gray-900',
              active && 'text-blue-700'
            )}
          >
            {email.sender}
          </p>
          <p className="text-sm text-gray-500 truncate">{email.subject}</p>
        </Link>
      </div>
      <time
        dateTime={email.datetime}
        className="whitespace-nowrap flex-shrink-0 text-sm text-gray-500"
      >
        {email.date}
      </time>
    </div>
    <div className="mt-1">
      <p className="line-clamp-2 text-sm text-gray-600">{email.preview}</p>
    </div>
  </div>
);
export default EmailListItem;
