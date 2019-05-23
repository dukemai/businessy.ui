import React from 'react';

const fn = () => {};
const CompanyContext = React.createContext({
  domain: '',
  company: {},
  setErrorPanel: fn,
  hideErrorPanel: fn,
});
export default CompanyContext;
