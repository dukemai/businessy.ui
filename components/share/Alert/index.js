import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Alert = ({}) => (
  <div data-closable className="callout alert-callout-subtle alert">
    <strong>Yo!</strong> Alert Alert
    <button
      className="close-button"
      aria-label="Dismiss alert"
      type="button"
      data-close
    >
      <span aria-hidden="true">⊗</span>
    </button>
  </div>
);
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert;
