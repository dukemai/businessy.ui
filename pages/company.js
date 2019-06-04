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

import { apiGET, apiPUT } from '../api';

const propTypes = {};
const defaultProps = {};
const Company = ({ router }) => {
  const { domain } = router.query || {};
  const [company, setCompany] = useState({});
  const [customers, setCustomers] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);
  const currentCompany = useContext(AppContext).company;
  const loadCompany = async () => {
    try {
      hideErrorPanel();
      const { data } = await apiGET(`/company/${domain}`)();
      setCompany(data);
      setCustomers(data.customers);
    } catch (error) {
      setErrorPanel(error);
    }
  };
  useEffect(() => {
    loadCompany();
  }, [domain]);

  const addAsSupplier = async () => {
    if (currentCompany) {
      try {
        hideErrorPanel();
        await apiPUT(`/connections/${domain}`)({
          body: { data: [currentCompany] },
        });
        await loadCompany();
      } catch (error) {
        setErrorPanel(error);
      }
    }
  };

  const addAsCustomer = async () => {
    if (currentCompany) {
      try {
        hideErrorPanel();
        await apiPUT(`/connections/${currentCompany}`)({
          body: { data: [domain] },
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
            />
            <CompanyList
              title="Suppliers"
              question="Is your business a supplier?"
              answer="yes, we supply"
              companies={suppliers}
              onQuestionClicked={addAsSupplier}
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
