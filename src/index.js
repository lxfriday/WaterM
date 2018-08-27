import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '@/components/nav/NavBar';
import { sendMinimizeWindow, sendCloseWindow } from '@/utils/process/communication';
import './index.less';

const App = () => {
  const navBarProps = {
    canGoBack: false,
    handleGoBack: () => alert('goback'),
    handleMinimizeWindow: sendMinimizeWindow,
    handleCloseWindow: sendCloseWindow,
  };
  return (
    <div className="frame">
      <NavBar {...navBarProps} />
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
