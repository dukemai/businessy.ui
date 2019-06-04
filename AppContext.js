import React from 'react';

const AppContext = React.createContext({
  user: null,
  company: '',
  setUser: () => {},
  signOut: () => {},
  setCompany: () => {},
});
export default AppContext;