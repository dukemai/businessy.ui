import React from 'react';
import PropTypes from 'prop-types';

import softwares from '../data/softwares.json';

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
const SimpleFooter = ({}) => (
  <section className="callout callout--footer">
    <div className="text-center">
      Get in touch <a href="howard@businessy.co ">howard@businessy.co </a>
    </div>
    <div className="text-center">Made with ❤️ in Stockholm</div>
    <ul className="social-icons align-center">
      <li>
        <a href="#">
          <i className="fi-social-facebook medium" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fi-social-twitter medium" />
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fi-social-linkedin medium" />
        </a>
      </li>
    </ul>
  </section>
);
SimpleFooter.propTypes = propTypes;
SimpleFooter.defaultProps = defaultProps;
export default SimpleFooter;
