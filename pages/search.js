import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { getOr } from 'lodash/fp';

import Layout from '../components/Layout';
import ResultText from '../components/Search/ResultText';
import ResultItem from '../components/Search/ResultItem';
import Explore from '../components/share/Explore';
import AppContext from '../AppContext';
import ErrorContext from '../ErrorContext';

import { apiGET } from '../api';

const onSearchItemClick = domain => e => {
  Router.push(`/company/${domain}`);
};

const propTypes = {};
const defaultProps = {};
const Search = ({}) => {
  const state = useContext(AppContext);
  const [companies, setCompanies] = useState([]);
  const [isDataInit, setIsDataInit] = useState(false);

  const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);

  const isAuthenticated = Boolean(state.user);
  const showExplore = typeof window !== 'undefined' && !isAuthenticated;
  const query =
    typeof window === 'undefined' ? '' : getOr('', 'q', Router.query);

  useEffect(() => {
    const getCompanies = async () => {
      hideErrorPanel();
      try {
        const { data } = await apiGET('/search/company')({
          params: { query },
        });
        setCompanies(data);
        setIsDataInit(true);
      } catch (error) {
        setIsDataInit(true);
        setErrorPanel(error);
      }
    };
    getCompanies();
  }, [query]);
  const firstItem = companies.length ? companies[0] : null;
  const remainingItems = companies.slice(1);
  return (
    <Layout>
      <section className="grid-x grid-padding-x">
        <ResultText query={query} />
        {firstItem && (
          <ResultItem
            {...firstItem}
            onClick={onSearchItemClick(firstItem.id)}
          />
        )}
        {!firstItem && isDataInit && (
          <p className="text-center cell">No results found!!!</p>
        )}

        {showExplore && <Explore className="cell" />}
        {remainingItems.map(result => (
          <ResultItem
            {...result}
            onClick={onSearchItemClick(result.id)}
            key={result.id}
          />
        ))}
      </section>
    </Layout>
  );
};
Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
export default Search;
