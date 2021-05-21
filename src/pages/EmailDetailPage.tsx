import React from 'react';
import EmailList from 'src/components/EmailList';

import EmailView from 'src/components/EmailView';
import MainAsideLayout from 'src/layout/MainAsideLayout';

const EmailDetailPage: React.FC = () => (
  <MainAsideLayout>
    <MainAsideLayout.Main>
      <div className="max-w-3xl mx-auto">
        <EmailView />
      </div>
    </MainAsideLayout.Main>
    <MainAsideLayout.Aside>
      <EmailList />
    </MainAsideLayout.Aside>
  </MainAsideLayout>
);
export default EmailDetailPage;