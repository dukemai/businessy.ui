import Head from 'next/head'
import Header from './Header';

const Layout = props => (
  <>
    <Head>
      <title>Businessy app</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/foundation-sites@6.5.3/dist/css/foundation.min.css"
        integrity="sha256-xpOKVlYXzQ3P03j397+jWFZLMBXLES3IiryeClgU5og= sha384-gP4DhqyoT9b1vaikoHi9XQ8If7UNLO73JFOOlQV1RATrA7D0O7TjJZifac6NwPps sha512-AKwIib1E+xDeXe0tCgbc9uSvPwVYl6Awj7xl0FoaPFostZHOuDQ1abnDNCYtxL/HWEnVOMrFyf91TDgLPi9pNg=="
        crossorigin="anonymous"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Businessy application" />
    </Head>
    <section>
      <Header />
      {props.children}
    </section>
  </>
);

export default Layout;
