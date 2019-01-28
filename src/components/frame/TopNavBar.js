/**
 * 自定义顶部导航条
 * @time 2018/08/27
 * @author lxfriday
 */
import React from 'react';
import PropTypes from 'prop-types';

import logo from '@/assets/logo.png';
import arrowLeft from '@/assets/arrow-left.png';
import arrowRight from '@/assets/arrow-right.png';
import windowMinimize from '@/assets/window-minimize.png';
import windowClose from '@/assets/window-close.png';
import APP_CONFIG from '@/configs/appConfig';
import style from './TopNavBar.less';

const TopNavBar = ({
  canGoBack,
  handleGoBack,
  canGoForward,
  handleForward,
  handleMinimizeWindow,
  handleCloseWindow,
}) => (
  <div className={style.container}>
    <div className={style.leftLogo}>
      <img src={logo} alt="logo" />
      <span className={style.title}>
        {APP_CONFIG.appName}
      </span>
    </div>
    {/* <div className={style.buttonsWrapper}>
      <div className={style.navigateButtons}>
        <div className={style.navigateButton} onClick={canGoBack ? handleGoBack : undefined}>
          <img className={canGoBack ? '' : style.navigateImgDisabled} src={arrowLeft} alt="回退" />
        </div>
        <div className={style.navigateButton} onClick={canGoForward ? handleForward : undefined}>
          <img className={canGoForward ? ''
          : style.navigateImgDisabled} src={arrowRight} alt="前进" />
        </div>
      </div>
      <div className={style.space} />
      <div className={style.rightControlButtons}>
        <div className={style.controlButton} onClick={handleMinimizeWindow}>
          <img src={windowMinimize} alt="最小化" />
        </div>
        <div className={style.controlButton} onClick={handleCloseWindow}>
          <img src={windowClose} alt="关闭" />
        </div>
      </div>
    </div> */}
  </div>
);

TopNavBar.propTypes = {
  canGoBack: PropTypes.bool.isRequired,
  handleGoBack: PropTypes.func.isRequired,
  canGoForward: PropTypes.bool,
  handleForward: PropTypes.func,
  handleMinimizeWindow: PropTypes.func.isRequired,
  handleCloseWindow: PropTypes.func.isRequired,
};

TopNavBar.defaultProps = {
  canGoForward: false,
  handleForward: null,
};

export default TopNavBar;
