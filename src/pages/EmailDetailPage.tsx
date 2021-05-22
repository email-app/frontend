import React from 'react';

import EmailListController from 'src/components/controllers/EmailListController';
import EmailViewController from 'src/components/controllers/EmailViewController';
import MainAsideLayout from 'src/layout/MainAsideLayout';

const EmailDetailPage: React.FC = () => (
  <MainAsideLayout>
    <MainAsideLayout.Main>
      <div className="max-w-3xl mx-auto">
        <EmailViewController />
      </div>
    </MainAsideLayout.Main>
    <MainAsideLayout.Aside>
      <EmailListController />
    </MainAsideLayout.Aside>
  </MainAsideLayout>
);
export default EmailDetailPage;
