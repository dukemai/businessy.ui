import React, { useState, useContext, useEffect } from 'react';

import { apiGET, apiPUT } from '../../api';
import ErrorContext from '../../ErrorContext';

export default function withAutoLoadCompany(
  WrappedComponent,
  getCompany = () => {}
) {
  return props => {
    const domain = getCompany(props);
    const [company, setCompany] = useState({});
    const [customers, setCustomers] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);
    const loadCompany = async () => {
      try {
        hideErrorPanel();
        const { data } = await apiGET(`/company/${domain}`)();
        setCompany(data);
        setCustomers(data.customers);
        setSuppliers(data.suppliers);
      } catch (error) {
        setErrorPanel(error);
      }
    };
    useEffect(() => {
      loadCompany();
    }, [domain]);
    return (
      <WrappedComponent {...props} {...{ company, customers, suppliers }} />
    );
  };
}
