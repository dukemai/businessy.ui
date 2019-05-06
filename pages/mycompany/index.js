import Router from 'next/router';
import Layout from '../../components/Layout';

import Description from '../../components/MyCompany/Description';
import InfoList from '../../components/MyCompany/InfoList';
import Next from '../../components/MyCompany/Next';

const propTypes = {};
const defaultProps = {};

const onNext = () => Router.push('/profile/findpartners');

const Profile = ({}) => (
  <Layout>
    <Description />
    <InfoList />
    <Next onNextClicked={onNext} />
  </Layout>
);
Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;
export default Profile;
