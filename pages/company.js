import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Title from '../components/Company/Title';
import InfoList from '../components/Company/InfoList';
import Tags from '../components/Company/Tags';
import CompanyList from '../components/Company/CompanyList';

const propTypes = {};
const defaultProps = {};
const Company = ({}) => (
  <Layout>
    <Title />
    <section className="grid-x grid-padding-x">
      <div className="cell">
        <Tags />
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
