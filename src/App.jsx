import { useState, useCallback, useMemo } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import SearchBar from './components/searchBar';


function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); 

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

  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return products;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return products.filter(product =>

      (product.id && product.id.toString().toLowerCase().includes(lowerCaseSearchTerm)) ||
      (product.descripcion && product.descripcion.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [products, searchTerm]);

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm
        onAddProduct={handleAddOrEditProduct}
        products={products}
        productToEdit={editingProduct}
        clearEdit={clearEdit}
      />

      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        placeholder="Buscar productos por ID o descripcion"
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
