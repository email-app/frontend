import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EmailView from './components/EmailView';

import AppLayout from './layout/AppLayout';

const App: React.FC = () => (
  <Router>
    <AppLayout>
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
    </AppLayout>
  </Router>
);
export default App;
