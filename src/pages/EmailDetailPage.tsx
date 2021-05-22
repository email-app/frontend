import React from 'react';
import { useParams } from 'react-router';

import EmailListController from 'src/components/controllers/EmailListController';
import EmailViewController from 'src/components/controllers/EmailViewController';
import MainAsideLayout from 'src/layout/MainAsideLayout';

const EmailDetailPage: React.FC = () => {
  const { id } = useParams() as { id: string };

  return (
    <MainAsideLayout>
      <MainAsideLayout.Main>
        <div className="max-w-3xl mx-auto">
          <EmailViewController id={id} />
        </div>
      </MainAsideLayout.Main>
      <MainAsideLayout.Aside>
        <EmailListController />
      </MainAsideLayout.Aside>
    </MainAsideLayout>
  );
};
export default EmailDetailPage;
