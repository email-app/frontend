import React from 'react';
import { useLocation } from 'react-router';

import EmailListItem, { EmailListItemProps } from './EmailListItem';

type Email = EmailListItemProps['email'];

export interface EmailListProps {
  emails: (Email & { id: string | number })[];
}
const EmailList: React.FC<EmailListProps> = ({ emails }) => {
  const { pathname } = useLocation();

  return (
    <nav aria-label="Email list" className="flex-1 min-h-0 overflow-y-auto">
      <ul className="border-b border-gray-200 divide-y divide-gray-200">
        {emails.map((email) => (
          <li key={email.id}>
            <EmailListItem email={email} active={email.href === pathname} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default EmailList;
