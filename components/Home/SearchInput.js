import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { debounce } from 'lodash/fp';

import Suggestions from './_Suggestions';
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
  const [searchCategories, setSearchCategories] = useState([]);

  const onQueryChange = ({ target }) => setSearchQuery(target.value);
  const onGetStarted = e => {
    Router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
  };
  useEffect(() => {
    // /search/software?query=something
    const doSearch = debounce(200, async () => {
      const { data } = await apiGET('/search/software')({
        params: { query: searchQuery },
      });
      setSearchCategories(data);
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
