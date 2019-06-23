import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {};
const defaultProps = {};
const ConnectedCompany = ({ domain }) => (
  <Link href={`/company/${domain}`}>
    <a className="thumbnail thumbnail--search-company">
      <img src={`https://logo.clearbit.com/${domain}`} />
    </a>
  </Link>
);
ConnectedCompany.propTypes = propTypes;
ConnectedCompany.defaultProps = defaultProps;
export default ConnectedCompany;
