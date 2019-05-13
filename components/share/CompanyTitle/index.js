import React from 'react';
import PropTypes from 'prop-types';
import Tags from './_Tags';

const propTypes = {};
const defaultProps = {};
const CompanyTitle = ({}) => (
  <div className="grid-x grid-padding-x">
    <div className="cell callout--grey">
      <p className="container h4 text--company-title">
        <img
          className="image--company-logo"
          src="https://images.siftery.com/image/upload/w_34,h_34,dpr_2,c_limit/v1444065129/v1/p/companies/accountingsuite.png"
        />
        Nordic Tech List
        <Tags />
      </p>
    </div>
  </div>
);
CompanyTitle.propTypes = propTypes;
CompanyTitle.defaultProps = defaultProps;
export default CompanyTitle;
