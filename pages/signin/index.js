import Router from 'next/router';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

import Layout from '../../components/Layout';
import EnterText from '../../components/SignIn/EnterText';
import EmailInput from '../../components/SignIn/EmailInput';
import GetStarted from '../../components/SignIn/GetStarted';
import SignInContext from '../../SignInContext';
import { apiPOST } from '../../api';
import { COOKIES } from '../../constants';

const propTypes = {};
const defaultProps = {};

const SignUp = ({}) => {
  const [email, setEmail] = useState('duc.mai@niteco.se');
  const [isLoading, setIsLoading] = useState(false);

  const redirectToConfirm = async () => {
    setIsLoading(true);
    try {
      const response = await apiPOST('/login/authenticate')({
        params: { email },
      });
      Cookies.set(COOKIES.EMAIL, email);

      Router.push('/signin/confirm');
    } catch (error) {
      console.log(error);
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
