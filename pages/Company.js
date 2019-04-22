import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import Title from '../components/Company/Title';
import InfoList from '../components/Company/InfoList';

const propTypes = {};
const defaultProps = {};
const Company = ({}) => (
  <Layout>
    <Title />
    <InfoList />
  </Layout>
);
Company.propTypes = propTypes;
Company.defaultProps = defaultProps;
export default Company;
