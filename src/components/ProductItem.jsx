import React from 'react';

function ProductItem({ product }) {
  return (
    <div style={styles.item}>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
}

const styles = {
  item: {
    border: '1px solid #ccc',
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9'
  }
};

export default ProductItem;
