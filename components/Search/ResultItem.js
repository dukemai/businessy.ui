import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const ResultItem = ({ onClick }) => (
  <div onClick={onClick} className="media-object grid-x cell">
    <div className="media-object-section cell small-4 align-right grid-x">
      <div className="thumbnail">
        <img
          className="image--result-item"
          src="https://placeimg.com/200/200/business"
        />
      </div>
    </div>
    <div className="media-object-section">
      <h5>Nordic Tech List</h5>
      <p>
        Comprehensive data and information service tracking Nordic tech
        investments in Sweden, Denmark, Norway, Finland and Iceland.
      </p>
    </div>
  </div>
);
ResultItem.propTypes = propTypes;
ResultItem.defaultProps = defaultProps;
export default ResultItem;
