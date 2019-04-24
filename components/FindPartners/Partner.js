import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Partner = ({ onClick }) => (
  <div onClick={onClick} className="media-object grid-x">
    <div className="media-object-section cell small-4 medium-3">
      <div className="thumbnail">
        <img className="image--partner-item" src="https://placeimg.com/200/200/people" />
      </div>
    </div>
    <div className="media-object-section">
      <h5>DCompany A</h5>
      <p>
        I'm going to improvise. Listen
      </p>
    </div>
  </div>
);
Partner.propTypes = propTypes;
Partner.defaultProps = defaultProps;
export default Partner;
