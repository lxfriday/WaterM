import React from 'react';
import { render } from 'react-dom';

import App from './App';

const root = document.getElementById('root');

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  const RedBox = require('redbox-react').default;
  try {
    render(
      <App />,
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
    <App />,
    root,
  );
}
