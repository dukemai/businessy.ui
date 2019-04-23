import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Info = ({ label }) => (
  <div>
    <span className="label">{label}</span>
    <p>Info Content</p>
  </div>
);
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;
export default Info;
