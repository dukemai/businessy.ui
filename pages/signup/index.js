import Router from 'next/router';

import Layout from '../../components/Layout';
import EnterText from '../../components/SignUp/EnterText';
import EmailInput from '../../components/SignUp/EmailInput';
import GetStarted from '../../components/SignUp/GetStarted';

const propTypes = {};
const defaultProps = {};

const redirectToConfirm = () => {
  Router.push('/signup/confirm');
};

const SignUp = ({}) => (
  <Layout>
    <EnterText />
    <EmailInput onEnter={redirectToConfirm} />
    <GetStarted onStartClicked={redirectToConfirm} />
  </Layout>
);
SignUp.propTypes = propTypes;
SignUp.defaultProps = defaultProps;
export default SignUp;
