import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import Layout from '../components/Layout';
import Title from '../components/share/CompanyTitle';
import CompanyList from '../components/share/CompanyList';
import InfoList from '../components/Company/InfoList';
import CompanyContext from '../CompanyContext';
import ErrorContext from '../ErrorContext';
import AppContext from '../AppContext';
import withAutoLoadCompany from '../components/share/withAutoLoadCompany';

import { apiGET, apiPUT } from '../api';

const propTypes = {};
const defaultProps = {};
const Company = ({ router, company, customers = [], suppliers = [] }) => {
  const { domain } = router.query || {};

  const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);
  const currentCompany = useContext(AppContext).company;

  const addAsCustomer = async () => {
    if (currentCompany) {
      try {
        hideErrorPanel();
        await apiPUT(`/connections/suppliers/${currentCompany}`)({
          data: [domain],
        });
        await loadCompany();
      } catch (error) {
        setErrorPanel(error);
      }
    }
  };

  const addAsSupplier = async () => {
    if (currentCompany) {
      try {
        hideErrorPanel();
        await apiPUT(`/connections/customers/${currentCompany}`)({
          data: [domain],
        });
        await loadCompany();
      } catch (error) {
        setErrorPanel(error);
      }
    }
  };

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
              companies={customers}
              onQuestionClicked={addAsCustomer}
              showButtons={
                currentCompany !== domain && !customers.includes(currentCompany)
              }
            />
            <CompanyList
              title="Suppliers"
              question="Is your business a supplier?"
              answer="yes, we supply"
              companies={suppliers}
              onQuestionClicked={addAsSupplier}
              showButtons={
                currentCompany !== domain && !suppliers.includes(currentCompany)
              }
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
export default withRouter(
  withAutoLoadCompany(Company, props => (props.router.query || {}).domain)
);
