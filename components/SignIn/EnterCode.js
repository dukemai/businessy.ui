import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SignInContext from '../../SignInContext';

const propTypes = {};
const defaultProps = {};
const EnterCode = ({ onConfirmClicked }) =>{
  const { code, setCode } = useContext(SignInContext);
  const onCodeChanged = (e) => setCode(e.target.value);
  return (
  <div className="cell medium-6">
    <label>
      Enter your code here
      <input type="text" value={code} onChange={onCodeChanged} />
    </label>
    <button onClick={onConfirmClicked} className="button">Confirm</button>
  </div>
);}
EnterCode.propTypes = propTypes;
EnterCode.defaultProps = defaultProps;
export default EnterCode;
