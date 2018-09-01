import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const RedBox = require('redbox-react').default;
  try {
    render(
      <Router>
        <Route component={App} />
      </Router>,
      root,
    );
  } catch (e) {
    render(
      <RedBox error={e} />,
      root,
    );
  }
} else {
  render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    root,
  );
}
