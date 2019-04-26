import React from 'react';
import PropTypes from 'prop-types';

import softwares from '../../data/softwares.json';

const propTypes = {};
const defaultProps = {};
const column1 = ['Marketing', 'Sales and BD', 'Developer'];
const column2 = [
  'Productivity and Operations',
  'Product and Design',
  'Analytics and Data Science',
];
const column3 = ['HR', 'Finance and Accounting', 'DevOps and IT'];
const columns = [column1, column2, column3];
const topCategories = [...column1, ...column2, ...column3];

const categories = softwares.reduce(
  (acc, curr) => {
    if (topCategories.includes(curr)) {
      acc[curr] = [];
      acc.currentCat = curr;
    } else if (!acc.currentCat) {
      acc.default = [acc.currentCat];
    } else {
      acc[acc.currentCat].push(curr);
    }
    return acc;
  },
  { currentCat: '' }
);
const Footer = ({}) => (
  <section className="callout">
    <p className="h5 text-center text--browse-popular">
      Browse popular software categories
    </p>
    <div className="grid-x grid-padding-x grid--footer">
      {columns.map((column, key) => (
        <div key={key} className="cell medium-4">
          {column.map(catKey => (
            <section key={catKey}>
              <div className="cell--cat-title">{catKey}</div>
              {categories[catKey].map(software => (
                <div key={software}>
                  <a href="#">{software}</a>
                </div>
              ))}
            </section>
          ))}
        </div>
      ))}
    </div>
  </section>
);
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;
