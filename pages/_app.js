import App, { Container } from 'next/app';
import React from 'react';

import AppContext from '../AppContext';

class MyApp extends App {
  state = {
    user: null,
  };
  setUser = user => this.setState({ user });

  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppContext.Provider
        value={{ ...this.state, setUser: this.setUser }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
}

export default MyApp;
