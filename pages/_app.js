import App, { Container } from 'next/app';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

import AppContext from '../AppContext';
import ErrorContext from '../ErrorContext';
import { COOKIES } from '../constants';

class MyApp extends App {
  state = {
    user: Cookies.get('user'),
    company: Cookies.get(COOKIES.COMPANY),
    showError: false,
    error: null,
    errorTitle: '',
  };
  setUser = user => {
    Cookies.set('user', user);
    this.setState({ user });
  };
  setCompany = company => {
    Cookies.set(COOKIES.COMPANY, company);
    this.setState({ company });
  };
  signOut = () => {
    Cookies.remove('user');
    Cookies.remove(COOKIES.COMPANY);

    this.setState({ user: null, company: '' });

  };

  render() {
    const { Component, pageProps } = this.props;
    const setErrorPanel = error => {
      this.setState({
        showError: true,
        error,
        errorTitle: 'REQUEST FAILED',
      });
    };
    const hideErrorPanel = () => {
      this.setState({
        showError: false,
        error: null,
        errorTitle: '',
      });
    };

    const { error, errorTitle, showError } = this.state;

    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setUser: this.setUser,
          signOut: this.signOut,
          setCompany: this.setCompany,
        }}
      >
        <ErrorContext.Provider
          value={{
            error,
            errorTitle,
            showError,
            setErrorPanel,
            hideErrorPanel,
          }}
        >
          <Component {...pageProps} />
        </ErrorContext.Provider>
      </AppContext.Provider>
    );
  }
}

export default MyApp;
