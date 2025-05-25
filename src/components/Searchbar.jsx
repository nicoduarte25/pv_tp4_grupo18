import { useState,useMemo } from "react";

const SearchBar = ({ products }) => {
  const [search, setSearch] = useState("");


   const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      product.id.toString().includes(search)
    );
  }, [search, products]);

  return (
    <div>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por descripción o ID" />
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.descripcion} - ID: {product.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
