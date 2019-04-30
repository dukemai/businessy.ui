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
