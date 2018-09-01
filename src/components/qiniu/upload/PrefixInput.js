/**
 *  图片命名空间
 * @time 2018/09/01
 * @author lxfriday
 */
import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import style from './PrefixInput.less';

const PrefixInput = ({ value, handleInput }) => {
  const inputProps = {
    addonBefore: 'prefix',
    value,
    onChange({ target: { value: v } }) {
      handleInput(v);
    },
  };
  return (
    <div className={style.container}>
      <Input {...inputProps} size="large" />
    </div>
  );
};

PrefixInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default PrefixInput;
