import React from 'react';
import { hot } from 'react-hot-loader';

import NavBar from '@/components/nav/NavBar';
import { sendMinimizeWindow, sendCloseWindow } from '@/utils/process/communication';
import './App.less';

const App = () => {
  const navBarProps = {
    canGoBack: false,
    handleGoBack: () => console.log('goback'),
    handleMinimizeWindow: sendMinimizeWindow,
    handleCloseWindow: sendCloseWindow,
  };
  return (
    <div className="frame">
      <NavBar {...navBarProps} />
    </div>
  );
};

export default hot(module)(App);
