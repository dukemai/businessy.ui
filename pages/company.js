import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import Layout from '../components/Layout';
import Title from '../components/share/CompanyTitle';
import CompanyList from '../components/share/CompanyList';
import InfoList from '../components/Company/InfoList';
import CompanyContext from '../CompanyContext';
import { apiGET } from '../api';

const propTypes = {};
const defaultProps = {};
const Company = ({ router }) => {
  const { domain } = router.query || {};
  const [company, setCompany] = useState({});
  useEffect(() => {
    const loadCompany = async () => {
      const { data } = await apiGET(`/company/${domain}`)();
      setCompany(data);
    };
    loadCompany();
  }, [domain]);

  return (
    <Layout>
      <CompanyContext.Provider value={{ domain, company }}>
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
            <InfoList domain={domain} />
          </div>
        </section>
      </CompanyContext.Provider>
    </Layout>
  );
};
Company.propTypes = propTypes;
Company.defaultProps = defaultProps;
export default withRouter(Company);
