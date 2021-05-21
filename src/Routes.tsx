import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmailDetailPage from './pages/EmailDetailPage';
import EmailListPage from './pages/EmailListPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/emails/:id">
      <EmailDetailPage />
    </Route>
    <Route path="/emails">
      <EmailListPage />
    </Route>

    <Route path="*">
      <p className="text-red-500">Not found</p>
    </Route>
  </Switch>
);
export default Routes;
