import React from 'react';
import { hot } from 'react-hot-loader';

import TopNavBar from '@/components/nav/TopNavBar';
import LeftNavBar from '@/components/nav/LeftNavBar';
import { sendMinimizeWindow, sendCloseWindow } from '@/utils/process/communication';
import './App.less';

const App = () => {
  const topNavBarProps = {
    canGoBack: false,
    handleGoBack: () => console.log('goback'),
    handleMinimizeWindow: sendMinimizeWindow,
    handleCloseWindow: sendCloseWindow,
  };
  return (
    <div className="frame">
      <TopNavBar {...topNavBarProps} />
      <LeftNavBar />
    </div>
  );
};

export default hot(module)(App);
