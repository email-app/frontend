import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';
import AppLayout from './layout/AppLayout';

const App: React.FC = () => (
  <Router>
    <AppLayout>
      <Routes />
    </AppLayout>
  </Router>
);
export default App;
