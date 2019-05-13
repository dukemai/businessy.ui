import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const PopularColumn = ({ items = [], title }) => (
  <div className="cell medium-4 align-center">
    <p className="h5 text-center text--popular-title">{title}</p>
    {items.map(item => (
      <div key={item} className="text-center">
        <a href="/company">{item}</a>
      </div>
    ))}
  </div>
);
PopularColumn.propTypes = propTypes;
PopularColumn.defaultProps = defaultProps;
export default PopularColumn;
