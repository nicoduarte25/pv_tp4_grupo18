import { useState, useCallback, useMemo } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import './css/App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [search, setSearch] = useState('');

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

  const filteredProducts = useMemo(() => {
    return products.filter(product =>
      product.descripcion.toLowerCase().includes(search.toLowerCase()) ||
      product.id.toString().includes(search)
    );
  }, [search, products]);

  return (
    <div className="app-container">
      <h1>Gestión de Productos</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <ProductForm
        onAddProduct={handleAddOrEditProduct}
        products={products}
        productToEdit={editingProduct}
        clearEdit={clearEdit}
      />
      <ProductList
        products={filteredProducts}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />
    </div>
  );
}

export default App;