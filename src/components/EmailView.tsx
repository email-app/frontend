import React from 'react';

import useSanitize from 'src/hooks/useSanitize';
import email from 'src/data/email.html.txt';

// TODO Support blocking & whitelisting external sources
const EmailView: React.FC = () => {
  const sanitized = useSanitize(email);

  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
export default EmailView;
