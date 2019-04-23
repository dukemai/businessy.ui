import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Next = ({ onNextClicked }) => (
  <button className="button" onClick={onNextClicked}>Next</button>
);
Next.propTypes = propTypes;
Next.defaultProps = defaultProps;
export default Next;
