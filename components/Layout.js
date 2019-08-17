import React, { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Header from './Header';
import SimpleFooter from './Footer';
import Alert from './share/Alert';

import './styles.styl';

const onSignUpClicked = () => Router.push('/signin');
const onLogoClicked = () => Router.push('/');
const Layout = props => {
  return (
    <>
      <Head>
        <title>Businessy app</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css"
          integrity="sha256-xpOKVlYXzQ3P03j397+jWFZLMBXLES3IiryeClgU5og= sha384-gP4DhqyoT9b1vaikoHi9XQ8If7UNLO73JFOOlQV1RATrA7D0O7TjJZifac6NwPps sha512-AKwIib1E+xDeXe0tCgbc9uSvPwVYl6Awj7xl0FoaPFostZHOuDQ1abnDNCYtxL/HWEnVOMrFyf91TDgLPi9pNg=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="/static/fonts/foundation-icons/foundation-icons.css"
          crossOrigin="anonymous"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Businessy application" />
      </Head>
      <section className="flex-container flex-dir-column container--main">
        <Header
          onSignUpClicked={onSignUpClicked}
          onLogoClicked={onLogoClicked}
          hideSearchBar={props.hideSearchBar}
        />
       
          <section className="align-center flex-child-grow container--grey">
            {props.children}
          </section>
          <Alert />
        <SimpleFooter />
      </section>
    </>
  );
};
export default Layout;
