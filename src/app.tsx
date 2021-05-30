import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Routes from './Routes';
import AppLayout from './layout/AppLayout';
import { createClient } from './graphql/client';
import { startServer } from './mirage';

startServer();

const client = createClient();

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
