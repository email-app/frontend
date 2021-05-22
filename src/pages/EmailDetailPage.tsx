import React from 'react';

import EmailListController from 'src/components/controllers/EmailListController';
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
      <EmailListController />
    </MainAsideLayout.Aside>
  </MainAsideLayout>
);
export default EmailDetailPage;
