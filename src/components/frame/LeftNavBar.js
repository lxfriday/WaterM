import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import style from './LeftNavBar.less';

class LeftNavBar extends Component {
  state = {
  };

  handleClick = (e) => {
    const {
      handleNavigate,
    } = this.props;
    handleNavigate(e.key);
  };

  render() {
    return (
      <div className={style.container}>
        <Menu
          theme="dark"
          onClick={this.handleClick}
          style={{ width: 180 }}
          defaultOpenKeys={['sub1']}
          mode="inline"
          selectable={false}
        >
          <Menu.SubMenu
            key="qiniu"
            title={(
              <span>
                <Icon type="file" />
                <span>七牛</span>
              </span>
            )}
          >
            <Menu.Item key="/qiniu/upload">文件上传</Menu.Item>
            <Menu.Item key="/qiniu/recently">最近上传</Menu.Item>
            <Menu.Item key="/qiniu/list">文件列表</Menu.Item>
            <Menu.Item key="/qiniu/config">设置</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="/">index</Menu.Item>
        </Menu>
      </div>
    );
  }
}

LeftNavBar.propTypes = {
  handleNavigate: PropTypes.func.isRequired,
};


export default LeftNavBar;
