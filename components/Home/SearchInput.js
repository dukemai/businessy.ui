import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

const propTypes = {};
const defaultProps = {};
const onEnter = e => {
  if (e.key === 'Enter') {
    Router.push('/search');
  }
};
const SearchInput = ({}) => (
  <div className="medium-6 cell">
    <label>
      <input type="text" onKeyPress={onEnter} placeholder="Search softwares" />
    </label>
  </div>
);
SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;
export default SearchInput;
