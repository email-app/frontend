import React from 'react';
import gql from 'graphql-tag';

import { useEmailListQuery } from 'src/generated/graphql';
import EmailList from '../EmailList';
import type { EmailListItemProps } from '../EmailListItem';

const EMAIL_LIST_QUERY = gql`
  query EmailList {
    emails {
      id
      subject
      receivedAt
      sentBy {
        id
        name
      }
    }
  }
`;

const EmailListController: React.FC = () => {
  const { data, loading, error } = useEmailListQuery();

  const emails = data?.emails.map((e) => ({
    id: e.id,
    subject: e.subject,
    sender: e.sentBy.name,
    href: `/emails/${e.id}`,
    read: true,
    date: '1d ago',
    datetime: e.receivedAt.toString(),
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  }));

  if (emails) return <EmailList emails={emails} />;
  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;
  return null;
};
export default EmailListController;
