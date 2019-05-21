import React from 'react';

const AppContext = React.createContext({
  user: null,
  setUser: () => {},
  signOut: () => {},
});
export default AppContext;