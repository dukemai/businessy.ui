import App, { Container } from 'next/app';
import React, { useState } from 'react';
import Cookies from 'js-cookie';

import AppContext from '../AppContext';
import ErrorContext from '../ErrorContext';

class MyApp extends App {
  state = {
    user: Cookies.get('user'),
    showError: false,
    error: null,
    errorTitle: '',
  };
  setUser = user => {
    Cookies.set('user', user);
    this.setState({ user });
  };
  signOut = () => {
    Cookies.remove('user');
    this.setState({ user: null });
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
        value={{ ...this.state, setUser: this.setUser, signOut: this.signOut }}
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
