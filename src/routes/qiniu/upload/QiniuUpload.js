/**
 * 七牛上传图片
 * @time 2018/08/30
 * @author lxfriday
 */
import React, { Component } from 'react';
import Uploader from '@/components/qiniu/upload/Uploader';
import PrefixInput from '@/components/qiniu/upload/PrefixInput';
import UploadedList from '@/components/qiniu/upload/UploadedList';
import transformSize from '@/utils/transformSize';
import { notification } from 'antd';

import style from './QiniuUpload.less';

class QiniuUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prefix: 'WaterM/',
      list: [],
    };
  }

  render() {
    const that = this;
    const {
      list,
      prefix,
    } = this.state;
    const prefixInputProps = {
      value: prefix,
      handleInput(v) {
        that.setState({
          prefix: v,
        });
      },
    };
    const uploaderProps = {
      prefix,
      handleSuccess(file) {
        const { response } = file;
        that.setState({
          list: [{
            key: response.key,
            name: response.name,
            type: file.type,
            size: transformSize(file.size),
          }, ...list],
        });
      },
      handleError() {
        notification.error({
          message: '提示',
          description: '上传失败，请检查网络',
        });
      },
    };
    const uploadedListProps = {
      dataSource: list,
    };
    return (
      <div className={style.container}>
        <PrefixInput {...prefixInputProps} />
        <Uploader {...uploaderProps} />
        <UploadedList {...uploadedListProps} />
      </div>
    );
  }
}

export default QiniuUpload;
