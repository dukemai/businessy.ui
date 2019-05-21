import React, { useState, useContext } from 'react';
import Router from 'next/router';

import Layout from '../../components/Layout';
import EnterCode from '../../components/SignIn/EnterCode';
import AppContext from '../../AppContext';
import SignInContext from '../../SignInContext';
import { apiPOST } from '../../api';

const Confirm = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState('abc');
  const state = useContext(AppContext);

  const onConfirmClicked = async () => {
    try {
      await apiPOST('/login/confirm')({ params: { key: code } });
      state.setUser({});
      Router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <SignInContext.Provider value={{ isLoading, code, setCode }}>
        <section className="text--confirm grid-x grid-padding-x align-center">
          <div className="cell">
            <p className="text-center">
              We have emailed you a unique activation link to your work email
              address.
            </p>
            <p className="text-center">
              Click on the activation link and then we will start working on
              finding the right CRM software for your business.
            </p>
          </div>
          <EnterCode onConfirmClicked={onConfirmClicked} />
        </section>
      </SignInContext.Provider>
    </Layout>
  );
};

export default Confirm;
