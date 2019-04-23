import React from 'react';
import PropTypes from 'prop-types';

import Info from './Info';

const propTypes = {};
const defaultProps = {};
const list = [
  {
    label: 'Business',
  },
  {
    label: 'Website',
  },
  {
    label: 'Location',
  },
  {
    label: 'Industries',
  },
  {
    label: 'Description',
  },
  {
    label: 'Linkedin',
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
