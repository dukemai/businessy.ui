import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';

const propTypes = {};
const defaultProps = {};
const list = [
  {
    label: 'Description',
    content:
      'Comprehensive data and information service tracking Nordic tech investments in Sweden, Denmark, Norway, Finland and Iceland.',
  },
  {
    label: 'Summary of customers and suppliers',
  },
  {
    label: 'Website',
    content: 'https://www.nordictechlist.com/',
  },
  {
    label: 'SaaS and industry',
    content: 'Information Technology',
  },
  {
    label: 'Location',
    content: 'Sweden'
  },
  {
    label: 'Revenue',
  },
  {
    label: 'Linkedin',
    content: 'company/nordic-tech-list',
  },
];
const InfoList = ({}) => (
  <section className="grid-x align-center">
    <div className="cell medium-8 grid-x grid-margin-x cell--bordered callout">
      {list.map((info, key) => (
        <Info {...info} key={key} />
      ))}
    </div>
  </section>
);
InfoList.propTypes = propTypes;
InfoList.defaultProps = defaultProps;
export default InfoList;
