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
    label: 'Website',
    content: 'https://www.nordictechlist.com/',
  },
  {
    label: 'SaaS and industry',
    content: 'Information Technology',
  },
  {
    label: 'Location',
    content: 'Sweden',
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
  <div className="cell medium-8 grid-x grid-margin-x grid--info-list">
    {list.map((info, key) => (
      <Info {...info} key={key} isLongText={info.label === 'Description'} />
    ))}
  </div>
);
InfoList.propTypes = propTypes;
InfoList.defaultProps = defaultProps;
export default InfoList;
