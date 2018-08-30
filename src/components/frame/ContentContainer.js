import React, { Component } from 'react';
import style from './ContentContainer.less';

class ContentContainer extends Component {
  render() {
    return (
      <div className={style.rightContainer}>
        <div className={style.container}>content</div>
      </div>
    );
  }
}

export default ContentContainer;
