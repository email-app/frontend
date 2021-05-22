import React from 'react';

import emails from 'src/data/emails';
import EmailList from '../EmailList';

const EmailListController: React.FC = () => <EmailList emails={emails} />;
export default EmailListController;
