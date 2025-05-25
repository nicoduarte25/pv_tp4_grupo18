import React from 'react';

function ProductItem({ product, onEdit, onDelete }) 
  return (
    <tr>
      <td>{producto.id}</td>
      <td>{producto.descripcion}</td>
      <td>${producto.precioUnitario.toFixed(2)}</td>
      <td>{producto.descuento}%</td>
      <td>${producto.precioConDescuento.toFixed(2)}</td>
      <td>{producto.stock}</td>
      <td>
        <button onClick={() => onEdit(producto)}>Editar</button>
        <button onClick={() => onDelete(producto.id)}>Eliminar</button>
      </td>
    </tr>
  );
}



export default ProductItem;
