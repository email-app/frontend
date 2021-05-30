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
      read
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
    ...e,
    href: `/emails/${e.id}`,
    preview:
      'Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.',
  }));

  if (emails) return <EmailList emails={emails} />;
  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;
  return null;
};
export default EmailListController;
