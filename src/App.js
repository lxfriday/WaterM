import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// components
import TopNavBar from '@/components/frame/TopNavBar';
import LeftNavBar from '@/components/frame/LeftNavBar';
import ContentContainer from '@/components/frame/ContentContainer';
import QiniuUpload from '@/routes/qiniu/upload/QiniuUpload';
import QiniuRecently from '@/routes/qiniu/recently/QiniuRecently';
import QiniuList from '@/routes/qiniu/list/QiniuList';
import QiniuConfig from '@/routes/qiniu/config/QiniuConfig';
import Error404 from '@/routes/Error404';

import { sendMinimizeWindow, sendCloseWindow } from '@/utils/process/communication';
import './App.less';

const App = ({ history, location }) => {
  console.log({ location });
  const topNavBarProps = {
    canGoBack: false,
    handleGoBack: () => {},
    handleMinimizeWindow: sendMinimizeWindow,
    handleCloseWindow: sendCloseWindow,
  };
  const leftNavBarProps = {
    handleNavigate(key) {
      history.replace(key);
    },
  };
  const contentContainerProps = {};
  return (
    <div className="frame">
      <TopNavBar {...topNavBarProps} />
      <LeftNavBar {...leftNavBarProps} />
      <ContentContainer {...contentContainerProps}>
        <Switch>
          {/* index route */}
          <Redirect exact from="/" to="/qiniu/upload" />
          <Route path="/qiniu/upload" component={QiniuUpload} />
          <Route path="/qiniu/recently" component={QiniuRecently} />
          <Route path="/qiniu/list" component={QiniuList} />
          <Route path="/qiniu/config" component={QiniuConfig} />
          <Route path="*" component={Error404} />
        </Switch>
      </ContentContainer>
    </div>
  );
};

export default hot(module)(App);
