import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './mirage'; // Import for side-effect

ReactDOM.render(<App />, document.getElementById('app'));

if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
