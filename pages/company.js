import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Title from '../components/share/CompanyTitle';
import CompanyList from '../components/share/CompanyList';
import InfoList from '../components/Company/InfoList';

const propTypes = {};
const defaultProps = {};
const Company = ({}) => (
  <Layout>
    <Title />
    <section className="grid-x grid-padding-x">
      <div className="cell">
        <CompanyList
          title="Business customers"
          question="Is your business a customer?"
          answer="yes, we use this"
        />
        <CompanyList
          title="Suppliers"
          question="Is your business a supplier?"
          answer="yes, we supply"
        />
        <InfoList />
      </div>
    </section>
  </Layout>
);
Company.propTypes = propTypes;
Company.defaultProps = defaultProps;
export default Company;
