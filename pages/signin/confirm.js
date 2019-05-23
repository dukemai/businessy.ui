import React, { useState, useContext } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

import Layout from '../../components/Layout';
import EnterCode from '../../components/SignIn/EnterCode';
import AppContext from '../../AppContext';
import SignInContext from '../../SignInContext';
import { COOKIES } from '../../constants';

const Confirm = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [code, setCode] = useState(Cookies.get(COOKIES.CODE));
  const state = useContext(AppContext);

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
          <EnterCode />
        </section>
      </SignInContext.Provider>
    </Layout>
  );
};

export default Confirm;
