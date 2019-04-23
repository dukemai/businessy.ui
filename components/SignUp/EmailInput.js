import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const EmailInput = ({ onEnter }) => {
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onEnter();
    }
  };
  return (
    <div className="medium-6 cell">
      <label>
        <input
          type="text"
          onKeyPress={onKeyPress}
          placeholder="Work email address"
        />
      </label>
    </div>
  );
};
EmailInput.propTypes = propTypes;
EmailInput.defaultProps = defaultProps;
export default EmailInput;
