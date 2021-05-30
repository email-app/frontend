import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));

if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
