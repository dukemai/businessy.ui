import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const SearchHeader = ({ onSearchClicked }) => (
  <div className="input-group">
    <input className="input-group-field" type="search" placeholder="Search" />
    <div className="input-group-button">
      <button onClick={onSearchClicked} className="button" type="button">
        Search
      </button>
    </div>
  </div>
);
SearchHeader.propTypes = propTypes;
SearchHeader.defaultProps = defaultProps;
export default SearchHeader;