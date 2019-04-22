import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Layout from '../components/Layout';
import ResultText from '../components/Search/ResultText';
import ResultItem from '../components/Search/ResultItem';
import EnterEmail from '../components/Search/EnterEmail';

import '../components/Search/styles.styl';

const results = [...new Array(10).keys()];

const onSearchItemClick = e => {
  Router.push('/company');
};

const propTypes = {};
const defaultProps = {};
const Search = ({}) => (
  <Layout>
    <ResultText />
    <section className="grid-x grid-padding-x">
      <div className="cell  ">
        <ResultItem onClick={onSearchItemClick} />
        <EnterEmail />
        {results.map(result => (
          <ResultItem onClick={onSearchItemClick} key={result} />
        ))}
      </div>
    </section>
  </Layout>
);
Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
export default Search;
