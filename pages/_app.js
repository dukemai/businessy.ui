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
    Cookies.remove(COOKIES.CODE);
    this.setState({ user: null, company: '' });

  };
  
  render() {
    Cookies.set('BUSINESSY_SESSION', 'eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6ImM5MmQzODJmLTVjNzItNGFiZC04NjA5LTY2MDMzNTA4ZDIwNCIsImNvbXBhbnlJZCI6ImVyaWNzc29uLmNvbSIsInZlcmlmaWVkIjoidHJ1ZSJ9LCJuYmYiOjE1NTg5OTA3ODIsImlhdCI6MTU1ODk5MDc4Mn0.iyCrQxlfu075FkxnxxHVFUmezueZ2FQsIb')
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
