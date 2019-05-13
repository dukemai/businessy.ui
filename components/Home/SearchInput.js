import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

const propTypes = {};
const defaultProps = {};
const onEnter = e => {
  if (e.key === 'Enter') {
    Router.push('/search');
  }
};

const SearchInput = ({}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const onQueryChange = ({ target }) => setSearchQuery(target.value);
  const onGetStarted = e => {
    Router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };
  return (
    <div className="grid-x align-center grid--search">
      <div className="medium-6 cell">
        <div className="input-group">
          <input
            type="text"
            onChange={onQueryChange}
            onKeyPress={onEnter}
            placeholder="Search softwares"
            className="input-group-field"
          />
          <div className="input-group-button">
            <button onClick={onGetStarted} className="button">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;
export default SearchInput;
