/**
 * 七牛最近上传的图片
 * @time 2018/08/30
 * @author lxfriday
 */
import React, { Component } from 'react';
import style from './QiniuRecently.less';

class QiniuRecently extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  render() {
    console.log('message ', this.state.message);
    return (
      <div className={style.container}>
        qiniu recently container
        <input type="text" model={this.state.message} />
      </div>
    );
  }
}

export default QiniuRecently;
