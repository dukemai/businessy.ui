import Router from 'next/router';
import React, { useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import { getOr } from 'lodash/fp';

import Layout from '../../components/Layout';
import EnterText from '../../components/SignIn/EnterText';
import EmailInput from '../../components/SignIn/EmailInput';
import GetStarted from '../../components/SignIn/GetStarted';
import SignInContext from '../../SignInContext';
import ErrorContext from '../../ErrorContext';

import { apiPOST } from '../../api';
import { COOKIES } from '../../constants';

const propTypes = {};
const defaultProps = {};

const SignUp = ({}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setErrorPanel, hideErrorPanel } = useContext(ErrorContext);

  useEffect(() => {
    const key = getOr('', 'key', Router.query);
    if (key) {
      Cookies.set(COOKIES.CODE, key);
      Router.push('/signin/confirm');
    }
  });
  const redirectToConfirm = async () => {
    setIsLoading(true);
    hideErrorPanel();
    try {
      const { data } = await apiPOST('/login/authenticate')({
        params: { email },
      });

      Cookies.set(COOKIES.EMAIL, email);
      Router.push('/signin/confirm');
    } catch (error) {
      setErrorPanel(error);
    }

    setIsLoading(false);
  };
  return (
    <SignInContext.Provider value={{ email, setEmail, isLoading }}>
      <Layout>
        <EnterText />
        <EmailInput onEnter={redirectToConfirm} />
        <GetStarted onStartClicked={redirectToConfirm} />
      </Layout>
    </SignInContext.Provider>
  );
};
SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;
export default SignUp;
