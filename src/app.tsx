import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './Routes';
import AppLayout from './layout/AppLayout';
import client from './graphql/client';

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Router>
      <AppLayout>
        <Routes />
      </AppLayout>
    </Router>
  </ApolloProvider>
);
export default App;
