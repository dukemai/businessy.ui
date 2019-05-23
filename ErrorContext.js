import React from 'react';

const fn = () => {};
const ErrorContext = React.createContext({
  showError: false,
  errorTitle: '',
  error: null,
  setErrorPanel: fn,
  hideErrorPanel: fn,
});
export default ErrorContext;
