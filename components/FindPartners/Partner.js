import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const Partner = ({ onClick }) => (
  <div onClick={onClick} className="media-object grid-x grid-padding-x">
    <div className="media-object-section cell small-4 medium-3 grid-x align-right">
      <div className="thumbnail">
        <img
          className="image--partner-item"
          src="https://placeimg.com/200/200/business"
        />
      </div>
    </div>
    <div className="media-object-section cell">
      <h5>DCompany A</h5>
      <p>I'm going to improvise. Listen</p>
    </div>
  </div>
);
Partner.propTypes = propTypes;
Partner.defaultProps = defaultProps;
export default Partner;
