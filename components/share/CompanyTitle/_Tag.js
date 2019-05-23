import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Tag = ({ content }) => (
  <button className="button hollow button--tag small flex-container align-middle">
    <i className="fi-price-tag small" />
    {content}
  </button>
);
Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;
export default Tag;
