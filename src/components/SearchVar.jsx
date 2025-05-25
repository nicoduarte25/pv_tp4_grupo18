import { useState, useMemo } from "react";

const SearchVar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toString().includes(searchTerm)
    );
  }, [searchTerm, products]);

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Buscar por descripción o ID"
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.descripcion} - ID: {product.id}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchVar;
