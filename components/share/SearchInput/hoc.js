import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { debounce, getOr } from 'lodash/fp';

import SearchContext from '../../../SearchContext';
import { apiGET } from '../../../api';

const onEnter = e => {
  if (e.key === 'Enter') {
    Router.push('/search');
  }
};

const withAutoSuggest = Component => () => {
  const query =
    typeof window === 'undefined' ? '' : getOr('', 'q', Router.query);
  const [searchQuery, setSearchQuery] = useState(query);
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
    if (!query || searchQuery !== query) {
      getCategories();
    }
  }, [searchQuery]);
  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        isLoading,
        setIsloading,
        searchCategories,
        setSearchCategories,
      }}
    >
      <Component
        onGetStarted={onGetStarted}
        onQueryChange={onQueryChange}
        onEnter={onEnter}
      />
    </SearchContext.Provider>
  );
};

export default withAutoSuggest;
