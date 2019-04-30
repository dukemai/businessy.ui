import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const propTypes = {};
const defaultProps = {};
const Info = ({ label, content, isLongText }) => (
  <>
    <div className={classnames('cell', { 'medium-4': !isLongText })}>
      <p className="h6 text--profile-label">{label}</p>
    </div>
    <div className={classnames('cell', { 'medium-8': !isLongText })}>
      <p>{content}</p>
    </div>
  </>
);
Info.propTypes = propTypes;
Info.defaultProps = defaultProps;
export default Info;
