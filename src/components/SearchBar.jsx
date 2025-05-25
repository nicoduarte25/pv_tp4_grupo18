import React from 'react';
// No se importa SearchBar.css aquí, ya que el usuario lo quiere sin estilos.

function SearchBar({ searchTerm, onSearchChange, placeholder }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
        aria-label="Buscar producto"
      />
    </div>
  );
}

export default SearchBar;
