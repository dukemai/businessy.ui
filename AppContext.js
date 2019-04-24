import React from 'react';

const AppContext = React.createContext({
  user: null,
  setUser: () => {},
});
export default AppContext;