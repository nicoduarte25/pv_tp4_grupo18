import React from 'react';
import '../css/SearchBar.css';

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar por descripción o ID"
      />
    </div>
  );
};

export default SearchBar;