import Layout from '../components/Layout';

import Banner from '../components/Home/Banner';
import Explore from '../components/share/Explore';
import SearchInput from '../components/Home/SearchInput';
import PopularList from '../components/Home/PopularList';
import Footer from '../components/Home/Footer';

export default function Index() {
  return (
    <Layout hideSearchBar>
      <section className="callout callout--grey callout--home-search">
        <Banner />
        <SearchInput />
      </section>
      <PopularList />
      <Explore />
      <Footer />
    </Layout>
  );
}
