import React from 'react';
import PropTypes from 'prop-types';
import style from './ImagePreview.less';

const ImagePreview = ({ src }) => (
  <div className={style.container}>
    <img src={src} alt="图片预览" />
  </div>
);

ImagePreview.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ImagePreview;
