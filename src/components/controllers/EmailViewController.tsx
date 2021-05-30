import React from 'react';
import { gql } from '@apollo/client';

import { useEmailViewQuery } from 'src/generated/graphql';
import EmailView from '../EmailView';

const EMAIL_VIEW_QUERY = gql`
  query EmailView($id: ID!) {
    email(id: $id) {
      id
      content
    }
  }
`;

export interface EmailViewControllerProps {
  id: string;
}
const EmailViewController: React.FC<EmailViewControllerProps> = ({ id }) => {
  const { data, loading, error } = useEmailViewQuery({ variables: { id } });

  if (data) return <EmailView raw={data.email.content} />;
  if (error) return <p>Error!</p>;
  if (loading) return <p>Loading...</p>;
  return null;
};
export default EmailViewController;
