import React from 'react';

function Search({ search, searchInput, handleSearch }) {
  return (
    <div className="Search">
    <input
      type="text"
      ref={searchInput}
      value={search}
      onChange={handleSearch}
    />
  </div>
  )
}

export default Search;
