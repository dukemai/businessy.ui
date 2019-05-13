import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';

const propTypes = {};
const defaultProps = {};
const list = [
  {
    label: 'Business',
    content:
      'Comprehensive data and information service tracking Nordic tech investments in Sweden, Denmark, Norway, Finland and Iceland.',
  },
  {
    label: 'Website',
    content: 'http://www.swedish.tech',
  },
  {
    label: 'Location',
    content: 'Stockholm, Sweden',
  },
  {
    label: 'Linkedin',
    content: 'www.linkedin.com/company/swedishtech',
  },
];
const InfoList = ({}) => (
  <div className="container">
    {list.map((info, key) => (
      <Info {...info} key={key} />
    ))}
  </div>
);
InfoList.propTypes = propTypes;
InfoList.defaultProps = defaultProps;
export default InfoList;
