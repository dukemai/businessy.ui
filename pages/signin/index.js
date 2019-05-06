import Router from 'next/router';

import Layout from '../../components/Layout';
import EnterText from '../../components/SignIn/EnterText';
import EmailInput from '../../components/SignIn/EmailInput';
import GetStarted from '../../components/SignIn/GetStarted';

const propTypes = {};
const defaultProps = {};

const redirectToConfirm = () => {
  Router.push('/signin/confirm');
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
