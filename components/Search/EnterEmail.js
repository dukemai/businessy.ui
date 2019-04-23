import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const EnterEmail = ({}) => (
  <>
    <div className="medium-6 cell cell--email">
      <input type="text" placeholder="Enter work email" />
    </div>
    <div className="callout">To get the right results for your company</div>
  </>
);
EnterEmail.propTypes = propTypes;
EnterEmail.defaultProps = defaultProps;
export default EnterEmail;
