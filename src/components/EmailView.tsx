import React from 'react';
import useSanitize from '../hooks/useSanitize';

const email = `
<div>
  <strong>Hello World!</strong>
  <img src="https://unsplash.com/photos/aEX4RIxNEY0/download?w=640" />
  <img src="https://unsplash.com/photos/aEX4RIxNEY0/download?w=640" onload="alert('Hello XSS!')" />

  <script>alert("Hello XSS!")</script>
</div>
`;

// TODO Support blocking & whitelisting external sources
const EmailView: React.FC = () => {
  const sanitized = useSanitize(email);

  return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
};
export default EmailView;
