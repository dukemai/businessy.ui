import React from 'react';
import PropTypes from 'prop-types';
import Tag from './_Tag';

const propTypes = {};
const defaultProps = {};
const tags = [...new Array(4).keys()];
const Tags = ({}) => (
  <section className="section--tags">
    {tags.map(tag => (
      <Tag key={tag} />
    ))}
  </section>
);
Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;
export default Tags;
