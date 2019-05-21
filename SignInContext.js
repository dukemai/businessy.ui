import React from 'react';

const fn = () => {};
const SignInContext = React.createContext({
  email: '',
  setEmail: fn,
  isLoading: false,
  setIsLoading: fn,
  code: '',
  setCode: fn,
});
export default SignInContext;
