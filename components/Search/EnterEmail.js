import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const EnterEmail = ({}) => (
  <div className="grid-x align-center cell callout callout--grey">
    <div className="medium-6 cell cell--email">
      <input type="text" placeholder="Enter work email" />
    </div>
    <p className="cell text-center">To get the right results for your company</p>
  </div>
);
EnterEmail.propTypes = propTypes;
EnterEmail.defaultProps = defaultProps;
export default EnterEmail;
