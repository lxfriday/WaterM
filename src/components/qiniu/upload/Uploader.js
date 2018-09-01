/**
 * 七牛上传组件
 * @time 2018/09/01
 * @author lxfriday
 */
import React, { Component } from 'react';
import { Upload, Icon } from 'antd';
import PropTypes from 'prop-types';

import qiniuUtil from '@/utils/upload/qiniuUtil';
import style from './Uploader.less';

class Uploader extends Component {
  render() {
    const {
      prefix,
      handleSuccess,
      handleError,
    } = this.props;
    const uploaderProps = {
      action: qiniuUtil.action,
      multiple: true,
      showUploadList: false,
      onChange({ file }) {
        const { status } = file;
        if (status === 'done') {
          // 上传成果
          handleSuccess(file);
        } else if (status === 'error') {
          // 上传失败
          handleError(file);
        }
      },
      data(file) {
        return {
          'x:name': file.name, // 自己定义的将要从服务器回显的内容
          key: qiniuUtil.key(file.name, prefix),
          token: qiniuUtil.generateToken(),
        };
      },
    };
    return (
      <div className={style.container}>
        <Upload.Dragger {...uploaderProps}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击或者拖拽上传</p>
          <p className="ant-upload-hint">支持多文件上传，珍惜当下，请勿上传违禁文档</p>
        </Upload.Dragger>
      </div>
    );
  }
}

Uploader.propTypes = {
  prefix: PropTypes.string.isRequired,
  handleSuccess: PropTypes.func.isRequired,
  handleError: PropTypes.func.isRequired,
};

export default Uploader;
