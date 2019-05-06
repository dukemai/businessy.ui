import React, { useState, useContext } from 'react';
import Router from 'next/router';

import Layout from '../../components/Layout';
import EnterCode from '../../components/SignIn/EnterCode';
import AppContext from '../../AppContext';

const Confirm = ({}) => {
  const state = useContext(AppContext);
  const onConfirmClicked = () => {
    state.setUser({});
    Router.push('/');
  };

  return (
    <Layout>
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
    </Layout>
  );
};

export default Confirm;
