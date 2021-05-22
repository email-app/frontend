import React from 'react';

import useSanitize from 'src/hooks/useSanitize';

export interface EmailViewProps {
  raw: string;
}
// TODO Support blocking & whitelisting external sources
const EmailView: React.FC<EmailViewProps> = ({ raw }) => {
  const sanitized = useSanitize(raw);

  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
export default EmailView;
