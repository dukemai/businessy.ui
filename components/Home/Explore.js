import React from 'react';
import PropTypes from 'prop-types';
const propTypes = {};
const defaultProps = {};
const tags = ['CRM', 'HR', 'Email'];
const Explore = ({}) => (
  <>
    <p className="text--explore">Explore Businessy</p>
    <div className="grid-x grid-margin-x">
      {tags.map(tag => (
        <a className="cell button hollow small small-3" href="#" key={tag}>
          {tag}
        </a>
      ))}
    </div>
  </>
);
Explore.propTypes = propTypes;
Explore.defaultProps = defaultProps;
export default Explore;
