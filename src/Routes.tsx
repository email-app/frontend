import React from 'react';
import { Route, Switch } from 'react-router-dom';

import EmailView from './components/EmailView';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact>
      <div className="max-w-3xl mx-auto">
        <EmailView />
      </div>
    </Route>
    <Route path="*">
      <p className="text-red-500">Not found</p>
    </Route>
  </Switch>
);
export default Routes;
