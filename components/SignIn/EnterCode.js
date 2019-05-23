import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import SignInContext from '../../SignInContext';
import ErrorContext from '../../ErrorContext';

import { apiPOST } from '../../api';
import AppContext from '../../AppContext';

const propTypes = {};
const defaultProps = {};
const EnterCode = () => {
  const { code, setCode, email } = useContext(SignInContext);
  const { setErrorPanel } = useContext(ErrorContext);
  const { setUser } = useContext(AppContext);

  const onCodeChanged = e => setCode(e.target.value);
  const onConfirmClicked = async () => {
    try {
      await apiPOST('/login/confirm')({ params: { key: code } });
      setUser({
        email,
      });
      Router.push('/');
    } catch (error) {
      setErrorPanel(error);
    }
  };
  return (
    <div className="cell medium-6">
      <label>
        Enter your code here
        <input type="text" value={code} onChange={onCodeChanged} />
      </label>
      <button onClick={onConfirmClicked} className="button">
        Confirm
      </button>
    </div>
  );
};
EnterCode.propTypes = propTypes;
EnterCode.defaultProps = defaultProps;
export default EnterCode;
