import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Next = ({ onNextClicked }) => (
  <div className="text-center">
    <button className="button" onClick={onNextClicked}>
      Next
    </button>
  </div>
);
Next.propTypes = propTypes;
Next.defaultProps = defaultProps;
export default Next;
