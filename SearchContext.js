import React from 'react';

const fn = () => {};
const SearchContext = React.createContext({
  searchQuery: '',
  setSearchQuery: fn,
  isLoading: false,
});
export default SearchContext;
