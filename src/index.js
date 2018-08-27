import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';

const App = () => (
  <h1 className="container">
    Hello React
    <div className="box">
      hello
    </div>
  </h1>
);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
