import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, onEditProduct, onDeleteProduct }) {
  return (
    <div>
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
          </tr>
        </thead>
        <tbody>
            {products.map(producto => (
              <ProductItem
                key={producto.id}
                producto={producto}
                onEdit={onEditProduct}
                onDelete={onDeleteProduct}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
