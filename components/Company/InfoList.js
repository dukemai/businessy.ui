import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';

const propTypes = {};
const defaultProps = {};
const list = [
  {
    label: 'Overview',
  },
  {
    label: 'Summary of customers and suppliers',
  },
  {
    label: 'Website',
  },
  {
    label: 'SaaS and industry',
  },
  {
    label: 'Location',
  },
  {
    label: 'Revenue',
  },
  {
    label: 'Linkedin',
  },
];
const InfoList = ({}) => (
  <section>
    {list.map((info, key) => (
      <Info {...info} key={key} />
    ))}
  </section>
);
InfoList.propTypes = propTypes;
InfoList.defaultProps = defaultProps;
export default InfoList;
