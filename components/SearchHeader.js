import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import withAutoSuggest from './share/SearchInput/hoc';
import SearchContext from '../SearchContext';
import Suggestions from './share/SearchInput/_Suggestions';

const propTypes = {};
const defaultProps = {};
const SearchHeader = ({ onQueryChange, onGetStarted, onEnter }) => {
  const {
    searchQuery,
    isLoading,
    setIsloading,
    searchCategories,
    setSearchCategories,
  } = useContext(SearchContext);
  return (
    <div className="input-group input-group--search-header">
      <input
        className="input-group-field"
        type="search"
        value={searchQuery}
        onKeyPress={onEnter}
        placeholder="Search"
        onChange={onQueryChange}
      />
      {Boolean(searchCategories.length) && (
        <Suggestions categories={searchCategories} />
      )}
      <div className="input-group-button">
        <button
          disabled={isLoading}
          onClick={onGetStarted}
          className="button"
          type="button button--search"
        >
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
    </div>
  );
};
SearchHeader.propTypes = propTypes;
SearchHeader.defaultProps = defaultProps;
export default withAutoSuggest(SearchHeader);
