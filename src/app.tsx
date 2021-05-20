import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ChakraProvider, Heading } from '@chakra-ui/react';

const App: React.FC = () => (
  <ChakraProvider>
    <Router>
      <Switch>
        <Route path="/">
          <Heading>Hello Chakra UI!</Heading>
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  </ChakraProvider>
);
export default App;
