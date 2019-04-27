import Router from 'next/router';
import Layout from '../../components/Layout';

import IntroText from '../../components/AddInfo/IntroText';
import PasteUrls from '../../components/AddInfo/PasteUrls';
import Upload from '../../components/AddInfo/Upload';

const propTypes = {};
const defaultProps = {};

const partners = [...new Array(10).keys()];
const onPartnerClicked = () => {};

const AddInfo = ({}) => (
  <Layout>
    <IntroText />
    <section className="grid-x align-center">
      <div className="cell medium-6">
        <PasteUrls />
        <Upload />
      </div>
    </section>
  </Layout>
);
AddInfo.propTypes = propTypes;
AddInfo.defaultProps = defaultProps;
export default AddInfo;
