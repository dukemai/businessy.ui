import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {};
const defaultProps = {};
const ConnectedCompany = ({}) => (
  <Link href="/company">
    <a className="thumbnail thumbnail--search-company">
      <img src="https://images.siftery.com/image/upload/w_34,h_34,dpr_2,c_limit/v1445112632/v1/p/companies/accounting-principals.png" />
    </a>
  </Link>
);
ConnectedCompany.propTypes = propTypes;
ConnectedCompany.defaultProps = defaultProps;
export default ConnectedCompany;
