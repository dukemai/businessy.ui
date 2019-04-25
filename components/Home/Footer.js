import React from 'react';
import PropTypes from 'prop-types';

import softwares from '../../data/softwares.json';

const propTypes = {};
const defaultProps = {};
const topCategories = [
  'Marketing',
  'Sales and BD',
  'Developer',
  'DevOps and IT',
  'Product and Design',
  'Analytics and Data Science',
  'HR',
  'Finance and Accounting',
  'Productivity and Operations',
];
const Footer = ({}) => (
  <section className="callout">
    <p className="h5 text-center text--browse-popular">
      Browse popular software categories
    </p>
    <div className="grid-x grid-padding-x grid--footer">
      {softwares.map(software => (
        <div className="cell medium-4" key={software}>
          {topCategories.includes(software) ? (
            <span>{software}</span>
          ) : (
            <a href="#">{software}</a>
          )}
        </div>
      ))}
    </div>
  </section>
);
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;
