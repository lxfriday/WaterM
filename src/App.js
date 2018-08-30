import React from 'react';
import { hot } from 'react-hot-loader';

import TopNavBar from '@/components/frame/TopNavBar';
import LeftNavBar from '@/components/frame/LeftNavBar';
import ContentContainer from '@/components/frame/ContentContainer';
import { sendMinimizeWindow, sendCloseWindow } from '@/utils/process/communication';
import './App.less';

const App = () => {
  const topNavBarProps = {
    canGoBack: false,
    handleGoBack: () => {},
    handleMinimizeWindow: sendMinimizeWindow,
    handleCloseWindow: sendCloseWindow,
  };
  const leftNavBarProps = {
    handleNavigate(key) {
      console.log(key);
    },
  };
  const contentContainerProps = {};
  return (
    <div className="frame">
      <TopNavBar {...topNavBarProps} />
      <LeftNavBar {...leftNavBarProps} />
      <ContentContainer {...contentContainerProps} />
    </div>
  );
};

export default hot(module)(App);
