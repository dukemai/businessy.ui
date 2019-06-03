import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Tags from './_Tags';
import CompanyContext from '../../../CompanyContext';

const propTypes = {};
const defaultProps = {};
const CompanyTitle = () => {
  const { company, domain } = useContext(CompanyContext);

  return (
    <div className="grid-x grid-padding-x">
      <div className="cell callout--grey">
        <div className="container h4 text--company-title">
          <img
            className="image--company-logo"
            src={`https://logo.clearbit.com/${domain}`}
          />
          {company.name}
          <Tags tags={company.industryCategories} />
        </div>
      </div>
    </div>
  );
};
CompanyTitle.propTypes = propTypes;
CompanyTitle.defaultProps = defaultProps;
export default CompanyTitle;
