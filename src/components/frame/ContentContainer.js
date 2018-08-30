import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './ContentContainer.less';

class ContentContainer extends Component {
  render() {
    return (
      <div className={style.rightContainer}>
        <div className={style.container}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};


export default ContentContainer;
