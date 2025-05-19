import { useState, useEffect, useCallback } from 'react';

function ProductForm({ onAddProduct, products }) {
  const [productForm, setProductForm] = useState({
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  });

  // Mostrar cambios en consola
  useEffect(() => {
    console.log("Productos actualizados:", products);
  }, [products]);

  // Función para agregar producto
  const addProduct = useCallback(() => {
    const precioUnitarioNum = parseFloat(productForm.precioUnitario) || 0;
    const descuentoNum = parseFloat(productForm.descuento) || 0;

    const precioConDescuento = precioUnitarioNum * (1 - descuentoNum / 100);

    const newProduct = {
      ...productForm,
      precioUnitario: precioUnitarioNum,
      descuento: descuentoNum,
      precioConDescuento,
      stock: parseInt(productForm.stock, 10) || 0
    };

    onAddProduct(newProduct);

    setProductForm({
      id: '',
      descripcion: '',
      precioUnitario: '',
      descuento: '',
      stock: ''
    });
  }, [productForm, onAddProduct]);

  // Función para manejar cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addProduct();
      }}
    >
      <input
        name="id"
        value={productForm.id}
        placeholder="ID"
        onChange={handleInputChange}
      />

      <input
        name="descripcion"
        value={productForm.descripcion}
        placeholder="Descripción"
        onChange={handleInputChange}
      />

      <input
        name="precioUnitario"
        type="number"
        value={productForm.precioUnitario}
        placeholder="Precio Unitario"
        onChange={handleInputChange}
      />

      <input
        name="descuento"
        type="number"
        value={productForm.descuento}
        placeholder="Descuento %"
        onChange={handleInputChange}
      />

      <input
        name="stock"
        type="number"
        value={productForm.stock}
        placeholder="Stock"
        onChange={handleInputChange}
      />

      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default ProductForm;