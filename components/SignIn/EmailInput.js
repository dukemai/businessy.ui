import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SignInContext from '../../SignInContext';
import TextInput from '../share/TextInput';

const propTypes = {};
const defaultProps = {};

const EmailInput = ({ onEnter }) => {
  const { email, setEmail, isLoading } = useContext(SignInContext);
  const onKeyPress = async e => {
    if (e.key === 'Enter') {
      onEnter();
    }
  };
  const onEmailUpdated = e => setEmail(e.target.value);
  return (
    <div className="grid-x align-center">
      <div className="medium-6 cell align-center">
        <label>
          <TextInput
            type="text"
            onKeyPress={onKeyPress}
            placeholder="Work email address"
            value={email}
            onChange={onEmailUpdated}
            disabled={isLoading}
          />
        </label>
      </div>
    </div>
  );
};
EmailInput.propTypes = propTypes;
EmailInput.defaultProps = defaultProps;
export default EmailInput;
