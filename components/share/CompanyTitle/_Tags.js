import React from 'react';
import PropTypes from 'prop-types';
import Tag from './_Tag';

const propTypes = {};
const defaultProps = {};
const Tags = ({ tags = []}) => (
  <section className="section--tags flex-container">
    {tags.map(tag => (
      <Tag content={tag} key={tag} />
    ))}
  </section>
);
Tags.propTypes = propTypes;
Tags.defaultProps = defaultProps;
export default Tags;
