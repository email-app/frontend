import React from 'react';

import email from 'src/data/email.html.txt';
import EmailView from '../EmailView';

const EmailViewController: React.FC = () => <EmailView raw={email} />;
export default EmailViewController;
