import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Info = ({ label }) => (
  <div>
    <span class="label">{label}</span>
  </div>
);
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;
export default Info;
