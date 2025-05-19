import { useState } from 'react';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);

  // Función para agregar un producto
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm onAddProduct={handleAddProduct} products={products} />
    </div>
  );
}

export default App;