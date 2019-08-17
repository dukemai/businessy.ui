import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const PopularColumn = ({ items = [], title }) => (
  <div className="cell medium-4 align-center">
    <p className="h5 text--popular-title">{title}</p>
    {items.map(item => (
      <div key={item} className="text">
        <a href="/company">{item}</a>
      </div>
    ))}
  </div>
);
PopularColumn.propTypes = propTypes;
PopularColumn.defaultProps = defaultProps;
export default PopularColumn;
