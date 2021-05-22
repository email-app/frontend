import React from 'react';
import EmailList from 'src/components/EmailList';
import emails from 'src/data/emails';

const EmailListPage: React.FC = () => <EmailList emails={emails} />;
export default EmailListPage;
