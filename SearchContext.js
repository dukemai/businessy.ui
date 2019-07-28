import React from 'react';

const fn = () => {};
const SearchContext = React.createContext({
  searchQuery: '',
  setSearchQuery: fn,
  isLoading: false,
  setIsloading: fn,
  searchCategories: [],
  setSearchCategories: fn,
});
export default SearchContext;
