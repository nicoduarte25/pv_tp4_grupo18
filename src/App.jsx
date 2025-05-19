import { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm onAddProduct={handleAddProduct} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
