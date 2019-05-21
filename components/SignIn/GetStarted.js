import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import SignInContext from '../../SignInContext';

const propTypes = {};
const defaultProps = {};
const GetStarted = ({ onStartClicked }) => {
  const { isLoading } = useContext(SignInContext);

  return (
    <div className="text-center">
      <button disabled={isLoading} onClick={onStartClicked} className="button">
        Get Started
      </button>
    </div>
  );
};
GetStarted.propTypes = propTypes;
GetStarted.defaultProps = defaultProps;
export default GetStarted;
