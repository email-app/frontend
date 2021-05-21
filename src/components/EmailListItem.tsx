import React from 'react';
import { Link } from 'react-router-dom';

interface EmailListItemProps {
  email: {
    subject: string;
    sender: string;
    href: string;
    date: string;
    datetime: string;
    preview: string;
  };
}
const EmailListItem: React.FC<EmailListItemProps> = ({ email }) => (
  <div className="hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600 relative px-6 py-5 bg-white">
    <div className="flex justify-between space-x-3">
      <div className="flex-1 min-w-0">
        <Link to={email.href} className="focus:outline-none block">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900 truncate">
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
