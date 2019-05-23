import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ErrorContext from '../../../ErrorContext';

const propTypes = {};
const defaultProps = {};
const Alert = () => {
  const { showError, errorTitle, error, hideErrorPanel } = useContext(ErrorContext);
  const onCloseClicked = () => hideErrorPanel();
  return showError ? (
    <div data-closable className="callout alert-callout-subtle alert">
      <strong>{errorTitle}</strong> {(error || '').toString()}
      <button
        className="close-button"
        aria-label="Dismiss alert"
        type="button"
        onClick={onCloseClicked}
      >
        <span aria-hidden="true">⊗</span>
      </button>
    </div>
  ) : null;
};
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert;
