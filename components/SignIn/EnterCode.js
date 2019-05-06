import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const EnterCode = ({ onConfirmClicked }) => (
  <div className="cell medium-6">
    <label>
      Enter your code here
      <input type="text" />
    </label>
    <button onClick={onConfirmClicked} className="button">Confirm</button>
  </div>
);
EnterCode.propTypes = propTypes;
EnterCode.defaultProps = defaultProps;
export default EnterCode;
