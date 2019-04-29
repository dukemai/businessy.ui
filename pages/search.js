import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Layout from '../components/Layout';
import ResultText from '../components/Search/ResultText';
import ResultItem from '../components/Search/ResultItem';
import Explore from '../components/share/Explore';

const results = [...new Array(10).keys()];

const onSearchItemClick = e => {
  Router.push('/company');
};

const propTypes = {};
const defaultProps = {};
const Search = ({}) => (
  <Layout>
    <section className="grid-x grid-padding-x">
      <ResultText />

      <ResultItem onClick={onSearchItemClick} />
      <Explore className="cell" />
      {results.map(result => (
        <ResultItem onClick={onSearchItemClick} key={result} />
      ))}
    </section>
  </Layout>
);
Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
export default Search;
