import React, { useState, useContext } from 'react';
import Router from 'next/router';

import Layout from '../components/Layout';
import Banner from '../components/Home/Banner';
import Explore from '../components/share/Explore';
import SearchInput from '../components/Home/SearchInput';
import PopularList from '../components/Home/PopularList';
import Footer from '../components/Home/Footer';
import AppContext from '../AppContext';

const onStartClicked = () => Router.push('/signin');

export default function Index() {
  const state = useContext(AppContext);

  return (
    <Layout hideSearchBar>
      <section className="callout callout--grey callout--home-search">
        <Banner />
        <SearchInput />
      </section>
      <PopularList />
      <Explore isAuthenticated={Boolean(state.user)} onStartClicked={onStartClicked} />
      <Footer />
    </Layout>
  );
}
