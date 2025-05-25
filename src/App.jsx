import { useState, useCallback } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchVar from './components/Searchvar';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleAddOrEditProduct = useCallback((newProduct) => {
    setProducts(prev => {
      const exists = prev.find(p => p.id === newProduct.id);
      if (exists) {
        return prev.map(p => (p.id === newProduct.id ? newProduct : p));
      } else {
        return [...prev, newProduct];
      }
    });
  }, []);

  const handleEditProduct = useCallback((product) => {
    setEditingProduct(product);
  }, []);

  const handleDeleteProduct = useCallback((id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  }, []);

  const clearEdit = useCallback(() => {
    setEditingProduct(null);
  }, []);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm
        onAddProduct={handleAddOrEditProduct}
        products={products}
        productToEdit={editingProduct}
        clearEdit={clearEdit}
      />
       <SearchVar products={products} />
      <ProductList
        products={products}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}

export default App;
