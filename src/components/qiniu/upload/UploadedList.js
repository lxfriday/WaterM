/**
 * 当前上传的图片列表
 * @time 2018/09/01
 * @author lxfriday
 */
import React, { Component } from 'react';
import {
  Table,
  notification,
  Tooltip,
} from 'antd';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';
import { shell } from 'electron';
import upload from '@/configs/upload';

import ImagePreview from '../common/ImagePreview';
import style from './UploadedList.less';

const columns = [{
  title: '文件名',
  dataIndex: 'name',
  key: 'name',
  render: (name, record) => (
    <Tooltip
      placement="right"
      overlayClassName={style.toolTipOverlay}
      title={<ImagePreview src={upload.domain + record.key} />}
    >
      <span className={style.lineTextWrapper}>
        {name}
      </span>
    </Tooltip>
  ),
}, {
  title: '文件类型',
  dataIndex: 'type',
  key: 'type',
  render: type => (
    <Tooltip title="点击复制文件路径">
      <div className={style.lineTextWrapper}>
        {type}
      </div>
    </Tooltip>
  ),
}, {
  title: '文件大小',
  dataIndex: 'size',
  key: 'size',
  render: size => (
    <Tooltip title="点击复制文件路径">
      <div className={style.lineTextWrapper}>
        {size}
      </div>
    </Tooltip>
  ),
}];

class UploadedList extends Component {
  handleClick = (record) => {
    const that = this;
    return {
      onClick: () => that.copyPath(record),
    };
  };

  // record => { key, name, type, size }
  copyPath = (record) => {
    const that = this;
    const path = upload.domain + record.key;
    copy(path);
    notification.success({
      description: (
        <div>
          文件地址复制成功
          <div
            style={{ cursor: 'pointer', color: '#1890ff' }}
            onClick={() => that.openSystemBrowser(path)}
          >
            {path}
          </div>
        </div>
      ),
      message: '提示',
    });
  };

  // 点击链接打开系统默认的浏览器显示
  openSystemBrowser = (path) => {
    shell.openExternal(`http:${path}`);
  };

  render() {
    const {
      dataSource,
    } = this.props;
    // [{ key, name, type, size }]
    return (
      <div className={style.container}>
        <Table
          bordered
          onRow={this.handleClick}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  }
}

UploadedList.propTypes = {
  dataSource: PropTypes.array,
};

UploadedList.defaultProps = {
  dataSource: [],
};

export default UploadedList;
