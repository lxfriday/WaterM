/**
 * 自定义顶部导航条
 * @time 2018/08/27
 * @author lxfriday
 */
import React, { Component } from 'react';
import logo from '@/assets/logo.png';
import './NavBar.less';


export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
        <div className="leftIcon">
          <img src={logo} alt="" />
        </div>
        <div className="navigateButtons">
          navigateButtons
        </div>
        <div className="rightControlButtons">
          rightControlButtons
        </div>
      </div>
    );
  }
}
