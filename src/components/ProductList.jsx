import React from 'react';
import ProductItem from './ProductItem';
import '../css/ProductList.css';

function ProductList({ products, onEditProduct, onDeleteProduct }) {
  return (
    <div className="product-list">
      <h2>Lista de Productos</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descripción</th>
            <th>Precio Unitario</th>
            <th>Descuento %</th>
            <th>Precio con Descuento</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductItem
              key={product.id}
              product={product}
              onEdit={onEditProduct}
              onDelete={onDeleteProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
