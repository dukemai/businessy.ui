import App, { Container } from 'next/app';
import React from 'react';
import Cookies from 'js-cookie';

import AppContext from '../AppContext';

class MyApp extends App {
  state = {
    user: Cookies.get('user'),
  };
  setUser = user => {
    Cookies.set('user', user);
    this.setState({ user });
  };
  signOut = () => {
    Cookies.remove('user');
    this.setState({ user: null });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider value={{ ...this.state, setUser: this.setUser, signOut: this.signOut }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
}

export default MyApp;
