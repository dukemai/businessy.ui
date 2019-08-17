import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { debounce } from 'lodash/fp';

import Suggestions from './_Suggestions';
import SearchContext from '../../../SearchContext';
import withAutoSuggest from './hoc';

const propTypes = {};
const defaultProps = {};

const SearchInput = ({ onQueryChange, onGetStarted, onEnter }) => {
  const {
    searchQuery,
    isLoading,
    setIsloading,
    searchCategories,
    setSearchCategories,
  } = useContext(SearchContext);

  return (
    <div className="grid-x align-center grid--search">
      <div className="medium-6 cell">
        <div className="input-group--search">
          <div className="suggestion-group suggestion-group--search">
            <input
              type="text"
              onChange={onQueryChange}
              onKeyPress={onEnter}
              placeholder="Search softwares"
              className="input-group-field"
              value={searchQuery}
            />
            {Boolean(searchCategories.length) && (
              <Suggestions categories={searchCategories} />
            )}
          </div>
          <button
            disabled={isLoading}
            onClick={onGetStarted}
            className="button button--search"
          >
            {isLoading ? 'Loading...' : 'Get started'}
          </button>
        </div>
      </div>
    </div>
  );
};
SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;
export default withAutoSuggest(SearchInput);
