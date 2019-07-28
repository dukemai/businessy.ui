import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { debounce } from 'lodash/fp';

import Suggestions from './_Suggestions';
import SearchContext from '../../SearchContext';
import { apiGET } from '../../api';

const propTypes = {};
const defaultProps = {};
const onEnter = e => {
  if (e.key === 'Enter') {
    Router.push('/search');
  }
};

const SearchInput = ({}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [searchCategories, setSearchCategories] = useState([]);

  const onQueryChange = ({ target }) => setSearchQuery(target.value);
  const onGetStarted = e => {
    Router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };
  useEffect(() => {
    // /search/software?query=something
    const doSearch = debounce(200, async () => {
      try {
        setIsloading(true);
        const { data } = await apiGET('/search/software')({
          params: { query: searchQuery },
        });
        setSearchCategories(data);
      } catch (error) {
      } finally {
        setIsloading(false);
      }
    });
    const getCategories = async () => {
      if (searchQuery.length >= 3) {
        doSearch();
      } else {
        setSearchCategories([]);
      }
    };
    getCategories();
  }, [searchQuery]);
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      <div className="grid-x align-center grid--search">
        <div className="medium-6 cell">
          <div className="input-group input-group--search">
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
            <div className="input-group-button">
              <button
                disabled={isLoading}
                onClick={onGetStarted}
                className="button"
              >
                {isLoading ? 'Loading...' : 'Get started'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
};
SearchInput.propTypes = propTypes;
SearchInput.defaultProps = defaultProps;
export default SearchInput;
