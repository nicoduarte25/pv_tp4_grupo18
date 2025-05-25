import { useState, useEffect, useCallback } from 'react';
import '../css/ProductForm.css';

function ProductForm({ onAddProduct, products, productToEdit, clearEdit }) {
  const [productForm, setProductForm] = useState({
    id: '',
    descripcion: '',
    precioUnitario: '',
    descuento: '',
    stock: ''
  });

  // Mostrar cambios en consola
   useEffect(() => {
    if (productToEdit) {
      setProductForm({
        id: productToEdit.id,
        descripcion: productToEdit.descripcion,
        precioUnitario: productToEdit.precioUnitario,
        descuento: productToEdit.descuento,
        stock: productToEdit.stock
      });
    }
  }, [productToEdit]);

  useEffect(() => {
    console.log("Productos actualizados:", products);
  }, [products]);

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
    setProductForm({ id: '', descripcion: '', precioUnitario: '', descuento: '', stock: '' });
    clearEdit();
  }, [productForm, onAddProduct, clearEdit]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form
      className="product-form"
      onSubmit={(e) => {
       e.preventDefault();
       addProduct();
      }}
    >
      <input name="id" value={productForm.id} placeholder="ID" onChange={handleInputChange} disabled={!!productToEdit} />
      <input name="descripcion" value={productForm.descripcion} placeholder="Descripción" onChange={handleInputChange} />
      <input name="precioUnitario" type="number" value={productForm.precioUnitario} placeholder="Precio Unitario" onChange={handleInputChange} />
      <input name="descuento" type="number" value={productForm.descuento} placeholder="Descuento %" onChange={handleInputChange} />
      <input name="stock" type="number" value={productForm.stock} placeholder="Stock" onChange={handleInputChange} />
      <button type="submit">{productToEdit ? 'Modificar' : 'Agregar'} Producto</button>
      {productToEdit && <button type="button" onClick={clearEdit}>Cancelar</button>}
    </form>
  );
}

export default ProductForm;