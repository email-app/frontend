import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/">
        <p>Home page</p>
      </Route>
      <Route path="*">
        <p className="text-red-500">Not found</p>
      </Route>
    </Switch>
  </Router>
);
export default App;
