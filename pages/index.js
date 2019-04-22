import Layout from '../components/Layout'

import Banner from '../components/Home/Banner';
import Explore from '../components/Home/Explore';
import SearchInput from '../components/Home/SearchInput';

import '../components/Home/styles.styl';

export default function Index() {
  return (
    <Layout>
      <Banner />
      <SearchInput />
      <Explore />
    </Layout>
  )
}