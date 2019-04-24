import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Layout from '../components/Layout';
import Form from '../components/SignIn/Form';
import Intro from '../components/SignIn/Intro';
import AppContext from '../AppContext';

const results = [...new Array(10).keys()];

const onSearchItemClick = e => {
  Router.push('/company');
};

const propTypes = {};
const defaultProps = {};
const SignIn = ({}) => {
  const state = useContext(AppContext);
  const setUser = useCallback(() => state.setUser({}));
  return (
    <Layout>
      <Intro />
      <Form
        onGoogleLoginClicked={setUser}
        onLinkedInLoginClicked={setUser}
      />
    </Layout>
  );
};
SignIn.propTypes = propTypes;
SignIn.defaultProps = defaultProps;
export default SignIn;
