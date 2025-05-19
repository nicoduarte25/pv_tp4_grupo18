import React from 'react';

const ProductList = ({ products }) => {
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
            <tr key={producto.id}>
              <td>{producto.id}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precioUnitario.toFixed(2)}</td>
              <td>{producto.descuento}%</td>
              <td>${producto.precioConDescuento.toFixed(2)}</td>
              <td>{producto.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
