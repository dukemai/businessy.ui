import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {};
const defaultProps = {};
const Company = ({ company }) => {
  return (
    <Link href={`/company/${company}`}>
      <a targe="_blank" className="thumbnail thumbnail--search-company">
        <img src={`https://logo.clearbit.com/${company}`} />
      </a>
    </Link>
  );
};
Company.propTypes = propTypes;
Company.defaultProps = defaultProps;
export default Company;
