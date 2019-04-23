import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const GetStarted = ({ onStartClicked }) => (
  <div className="text-center">
    <button onClick={onStartClicked} className="button">Get Started</button>
  </div>
);
GetStarted.propTypes = propTypes;
GetStarted.defaultProps = defaultProps;
export default GetStarted;
