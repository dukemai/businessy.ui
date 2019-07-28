import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import SearchContext from '../../../SearchContext';

const propTypes = {};
const defaultProps = {};
const Suggestions = ({ categories }) => {
  const { setSearchCategories, setSearchQuery } = useContext(SearchContext);
  const onClicked = cat => e => {
    setSearchCategories([]);
    setSearchQuery(cat);
  };
  return (
    <ul className="callout callout--suggestions cell--bordered">
      {categories.map(cat => (
        <li key={cat}>
          <Link href={`/search?q=${cat}`}>
            <a onClick={onClicked(cat)} className="suggestion-link">
              {cat}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
Suggestions.propTypes = propTypes;
Suggestions.defaultProps = defaultProps;
export default Suggestions;
