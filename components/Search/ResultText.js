import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { getOr } from 'lodash/fp';

const propTypes = {};
const defaultProps = {};
const ResultText = ({ query }) => {
  return (
    <p className="text-center text--search-result h4 callout--grey callout cell">
      Search results for {query}
    </p>
  );
};
ResultText.propTypes = propTypes;
ResultText.defaultProps = defaultProps;
export default ResultText;
