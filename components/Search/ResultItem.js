import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const ResultItem = ({ onClick }) => (
  <div onClick={onClick} className="media-object grid-x">
    <div className="media-object-section cell small-4">
      <div className="thumbnail">
        <img className="image--result-item" src="https://placeimg.com/200/200/people" />
      </div>
    </div>
    <div className="media-object-section">
      <h5>Dreams feel real while we're in them.</h5>
      <p>
        I'm going to improvise. Listen, there's something you should know about
      </p>
    </div>
  </div>
);
ResultItem.propTypes = propTypes;
ResultItem.defaultProps = defaultProps;
export default ResultItem;
