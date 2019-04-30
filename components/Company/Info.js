import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Info = ({ label, content }) => (
  <>
    <div className="cell medium-4">
      <p className="h6 text--profile-label">{label}</p>
    </div>
    <div className="cell medium-8">
      <p>{content}</p>
    </div>
  </>
);
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;
export default Info;
