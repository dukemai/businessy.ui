import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const propTypes = {};
const defaultProps = {};
const Suggestions = ({ categories }) => (
  <ul className="callout callout--suggestions cell--bordered">
    {categories.map(cat => (
      <li key={cat}>
        <Link href={`/search?q=${cat}`}>
          <a className="suggestion-link">{cat}</a>
        </Link>
      </li>
    ))}
  </ul>
);
Suggestions.propTypes = propTypes;
Suggestions.defaultProps = defaultProps;
export default Suggestions;
