import React from 'react';

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.descripcion}</td>
      <td>${product.precioUnitario.toFixed(2)}</td>
      <td>{product.descuento}%</td>
      <td>${(product.precioUnitario * (1 - product.descuento / 100)).toFixed(2)}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => onEdit(producto)}>Editar</button>
        <button onClick={() => onDelete(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
}



export default ProductItem;
