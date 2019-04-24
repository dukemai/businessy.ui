import Router from 'next/router';
import Layout from '../../components/Layout';

import IntroText from '../../components/FindPartners/IntroText';
import Partner from '../../components/FindPartners/Partner';

import Next from '../../components/FindPartners/Next';

const propTypes = {};
const defaultProps = {};

const partners = [...new Array(10).keys()];
const onPartnerClicked = () => {};
const onNext = () => { Router.push('/profile/addinfo') };

const FindPartners = ({}) => (
  <Layout>
    <IntroText />
    {partners.map(partner => (
      <Partner onClick={onPartnerClicked} key={partner} />
    ))}
    <Next onNextClicked={onNext} />
  </Layout>
);
FindPartners.propTypes = propTypes;
FindPartners.defaultProps = defaultProps;
export default FindPartners;
