import React from 'react';
import '../css/ProductItem.css';

function ProductItem({ product, onEdit, onDelete }) {
  return (
    <tr className="product-item">
      <td>{product.id}</td>
      <td>{product.descripcion}</td>
      <td>${product.precioUnitario.toFixed(2)}</td>
      <td>{product.descuento}%</td>
      <td>${product.precioConDescuento.toFixed(2)}</td>
      <td>{product.stock}</td>
      <td>
        <button onClick={() => onEdit(product)}>Editar</button>
        <button onClick={() => onDelete(product.id)}>Eliminar</button>
      </td>
    </tr>
  );
}



export default ProductItem;
